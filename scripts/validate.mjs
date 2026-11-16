import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const sandbox={window:{}};vm.runInNewContext(readFileSync(new URL('../dist/data.js',import.meta.url),'utf8'),sandbox);
const d=sandbox.window.NAND_DATA,concepts=new Map(d.concepts.map(n=>[n.id,n])),papers=new Map(d.papers.map(p=>[p.id,p]));
assert.equal(d.status,'mock');assert.equal(concepts.size,d.concepts.length);assert.equal(papers.size,d.papers.length);
for(const n of d.concepts){assert(d.groups[n.group],`Invalid group: ${n.id}`);assert(Number.isFinite(n.x)&&Number.isFinite(n.y));let cur=n;const seen=new Set();while(cur){assert(!seen.has(cur.id),`Concept cycle: ${n.id}`);seen.add(cur.id);if(cur.parent)assert(concepts.has(cur.parent));cur=concepts.get(cur.parent);}}
for(const p of d.papers){assert(d.venues.includes(p.venue));assert(p.topics.length);for(const t of p.topics)assert(concepts.has(t),`Invalid topic: ${p.id}/${t}`);for(const key of ['title','problem','method','finding','conditions','limitation'])assert(p[key]);}
const relations=new Set();for(const r of d.relations){assert(!relations.has(r.id));relations.add(r.id);assert(papers.has(r.source)&&papers.has(r.target));assert(r.source!==r.target);assert(d.relationTypes[r.type]);assert.equal(r.status,'mock');assert.equal(r.evidence,null);if(d.relationTypes[r.type].directed)assert(papers.get(r.source).year>=papers.get(r.target).year,`Anachronistic reference: ${r.id}`);}
for(const e of d.conceptLinks)assert(concepts.has(e.source)&&concepts.has(e.target));
const html=readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');for(const file of ['style.css','cluster.css','data.js','cluster-layout.js','app.js','favicon.svg'])assert(html.includes(`./${file}`));
vm.runInNewContext(readFileSync(new URL('../dist/cluster-layout.js',import.meta.url),'utf8'),sandbox);
const build=sandbox.window.NAND_CLUSTER.build;
for(const topic of d.concepts){
  const ids=new Set([topic.id]);let old=-1;while(old!==ids.size){old=ids.size;d.concepts.filter(n=>ids.has(n.parent)).forEach(n=>ids.add(n.id));}
  const pool=d.papers.filter(p=>p.topics.some(t=>ids.has(t))),layout=build(topic,pool,d.relations,concepts),visible=new Set(layout.nodes.map(n=>n.id));
  assert.equal(visible.size,pool.length+1);assert.equal(layout.areas.reduce((sum,a)=>sum+a.count,0),pool.length);
  for(const p of pool)assert(visible.has(p.id));for(const e of layout.edges)assert(visible.has(e.source)&&visible.has(e.target));
  for(const n of layout.nodes)assert(Number.isFinite(n.x)&&Number.isFinite(n.y));
  assert(layout.bounds.maxX>layout.bounds.minX&&layout.bounds.maxY>layout.bounds.minY);
}
const retentionPapers=d.papers.filter(p=>p.topics.includes('retention'));
const retention=build(concepts.get('retention'),retentionPapers,d.relations,concepts);
assert.equal(retention.nodes.length,6);assert.equal(retention.areas.length,3);
const empty=build(concepts.get('retention'),[],d.relations,concepts);assert.equal(empty.nodes.length,1);assert.equal(empty.edges.length,0);
console.log('Cluster checks passed: paper coverage, topic isolation, valid edges, 3 Retention families and empty-filter handling.');
console.log(`Validated ${d.concepts.length} concepts, ${d.papers.length} mock papers, ${d.relations.length} mock relations; references, hierarchy, chronology and asset paths are consistent.`);
// The research corpus must remain distinct from the fictional prototype.
vm.runInNewContext(readFileSync(new URL('../dist/retention-data.js',import.meta.url),'utf8'),sandbox);
vm.runInNewContext(readFileSync(new URL('../dist/landscape-data.js',import.meta.url),'utf8'),sandbox);
vm.runInNewContext(readFileSync(new URL('../dist/ml-neighborhood-data.js',import.meta.url),'utf8'),sandbox);
const real=sandbox.window.NAND_REAL_DATA, rp=new Map(real.papers.map(p=>[p.id,p]));
const rc=new Map(real.concepts.map(n=>[n.id,n]));
assert.equal(real.status,'research');assert.equal(rp.size,real.papers.length);
for(const n of real.concepts){assert(real.groups[n.group]);if(n.parent)assert(rc.has(n.parent));assert(Number.isFinite(n.x)&&Number.isFinite(n.y));}
const dois=new Set();
for(const p of real.papers){
  assert(!papers.has(p.id),'Research and demo IDs must not collide');
  if(p.doi){assert(!dois.has(p.doi));dois.add(p.doi);assert(/^10\.\d{4,9}\/.+/.test(p.doi));}else assert(p.metadataUrl,'Missing DOI must have a verified bibliographic URL');
  assert(p.authors.length&&p.bibliography&&p.checkedAt&&p.sourceUrl.startsWith('https://'));
  assert(['pdf','text','abstract'].includes(p.verification.level));assert(p.verification.detail);
  p.topics.forEach(t=>assert(rc.has(t),`${p.id}: unknown topic ${t}`));
  assert(p.evidence.length);for(const e of p.evidence){assert.equal(e.paperId,p.id);assert(e.locator&&e.note&&e.url);}
}
assert.equal(new Set(real.papers.map(p=>p.venue)).size,4);
assert.equal(real.papers.filter(p=>p.owned).length,1);
assert.equal(rp.get('P26').owned,true);assert(rp.get('P26').position);
assert(!rp.get('P26').topics.includes('retention'),'The uploaded electrical-FoM paper is not a retention study');
const edgeIds=new Set();
for(const e of real.relations){
  assert(!edgeIds.has(e.id));edgeIds.add(e.id);assert(rp.has(e.source)&&rp.has(e.target));assert.notEqual(e.source,e.target);
  assert(real.relationTypes[e.type]);assert(e.checkedAt&&e.evidence.length);
  if(real.relationTypes[e.type].directed)assert(rp.get(e.source).year>=rp.get(e.target).year);
  for(const ref of e.evidence){assert(rp.has(ref.paperId));assert(ref.locator&&ref.note);assert(ref.url.startsWith('https://'));}
  if(e.type==='cites'){
    assert.equal(e.status,'citation_verified');
    assert(e.evidence.some(ref=>ref.paperId===e.source&&/References \[/.test(ref.locator)));
    assert.notEqual(rp.get(e.source).verification.level,'abstract','Cannot verify a reference list from an abstract');
  }else{
    assert(['author_comparison','analyst_comparison'].includes(e.status));
    assert(e.evidence.some(ref=>ref.paperId===e.source)&&e.evidence.some(ref=>ref.paperId===e.target));
  }
}
assert.equal(real.relations.filter(e=>e.type==='challenges').length,0);
for(const target of ['P27','P28','P29','P41'])assert(real.relations.some(e=>e.source==='P26'&&e.target===target&&e.type==='cites'));
for(const subset of [real.papers,real.papers.filter(p=>p.verification.level==='pdf'),[],...real.venues.map(v=>real.papers.filter(p=>p.venue===v))]){
  const layout=build(rc.get('models'),subset,real.relations,rc);
  const ids=new Set(layout.nodes.map(n=>n.id));assert.equal(ids.size,subset.length+1);
  assert.equal(layout.areas.reduce((n,a)=>n+a.count,0),subset.length);
  for(const e of layout.edges)assert(ids.has(e.source)&&ids.has(e.target));
  for(let i=0;i<layout.areas.length;i++)for(let j=i+1;j<layout.areas.length;j++){
    const a=layout.areas[i],b=layout.areas[j];assert(Math.abs(a.x-b.x)>=a.rx+b.rx||Math.abs(a.y-b.y)>=a.ry+b.ry,'Approach areas overlap');
  }
}
for(const file of ['evidence.css','retention-data.js','landscape-data.js','landscape.css'])assert(html.includes(`./${file}`));
console.log(`Research checks passed: ${real.papers.length} papers across 4 venues, ${real.relations.length} evidence-linked relations, verification tiers, DOI uniqueness, citation direction, and filtered clusters.`);

for(const id of ['P42','P43','P44','P45','P46','P47','P50','P51','P52']){
 const p=rp.get(id);assert(p.publisherVerified);assert.notEqual(p.verification.level,'abstract');assert(p.sourceUrl.startsWith('https://ieeexplore.ieee.org/'));
 if(p.scope==='method_neighbor')assert(!p.topics.some(t=>['nand','ctn','3d','retention','ispp'].includes(t)));
}
assert(html.includes('./ml-neighborhood-data.js'));
assert(rp.get('P50').topics.includes('uncertainty'));
for(const section of ['comparisons','contributions','followups'])for(const row of rp.get('P26').position[section])for(const id of row.ids)assert(rp.has(id));
assert.equal(rp.get('P26').onlineDate,rp.get('P50').onlineDate);
assert(rp.get('P44').onlineDate>rp.get('P26').onlineDate);
console.log('IEEE neighborhood checks passed: original access, device scope, comparison links, publication dates and populated uncertainty branch.');
