import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const stored=new Map(),storage={getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)};
const ctx={window:{},localStorage:storage,Date,URL};
for(const file of ['data','retention-data','landscape-data','ml-neighborhood-data','frontiers-data','personal-core','frontier-layout'])vm.runInNewContext(readFileSync(new URL(`../dist/${file}.js`,import.meta.url),'utf8'),ctx);
const C=ctx.window.NAND_PERSONAL,original=ctx.window.NAND_REAL_DATA,D=C.extend(original);
assert(D.papers.filter(p=>p.scope==='method_neighbor').every(p=>!p.topics.includes('device-nand')));
assert.equal(C.normalizeDOI('https://doi.org/10.1109/TED.2026.3669116'),'10.1109/ted.2026.3669116');
assert.equal(C.normalizeDOI('doi:10.1234/example.'),'10.1234/example');
for(const bad of ['javascript:alert(1)','10.1/no','10.1234/<script>'])assert.throws(()=>C.normalizeDOI(bad));
const classification=C.classify({title:'Physics-Informed Transfer Learning of FinFETs With Limited Data'});
assert(classification.topics.includes('transfer'));assert(classification.topics.includes('physics-ml'));assert(classification.topics.includes('device-finfet'));assert(!classification.topics.includes('device-nand'));
const referencesOnly=C.classify({title:'Analysis of a bipolar transistor',body:'Experimental measurement.\nReferences\nA generative diffusion DDPM transfer learning model.'});
assert(!referencesOnly.topics.includes('generative'));assert(!referencesOnly.topics.includes('transfer'));
const raw={title:'A FinFET model',doi:'10.1234/test',authors:['Test Author'],venue:'Other venue',year:2025,topics:['transfer','surrogate','device-finfet'],abstract:'A test abstract.',verification:{level:'pdf'},publisherVerified:true,body:'SECRET FULL TEXT',sourceUrl:'javascript:alert(1)'};
const clean=C.sanitize(raw,D);assert(!('body'in clean));assert(!('sourceUrl'in clean));assert(!('publisherVerified'in clean));
C.write({records:[clean],focusId:clean.id},storage);
const loaded=C.merge(original,storage),p=loaded.papers.find(p=>p.id===clean.id);
assert(p.personal);assert.equal(p.publisherVerified,false);assert.equal(p.verification.level,'metadata');assert.equal(p.scope,'method_neighbor');assert.equal(loaded.papers.length,33);assert(loaded.venues.includes('Other venue'));
assert.equal(original.papers.length,32);assert.equal(original.concepts.length,37);
const suggestions=loaded.relations.filter(r=>r.source===p.id||r.target===p.id);assert(suggestions.length>0);assert(suggestions.every(r=>r.type==='hypothesis'&&r.evidence.length===0));
assert(!JSON.stringify(C.load(D,storage)).includes('SECRET FULL TEXT'));
const doiDupe=C.sanitize({...raw,doi:original.papers[0].doi},D);C.write({records:[doiDupe]},storage);assert.equal(C.merge(original,storage).papers.length,32);
const ids=new Set(D.concepts.map(c=>c.id)),papers=new Map(D.papers.map(p=>[p.id,p])),concepts=new Map(D.concepts.map(c=>[c.id,c])),F=ctx.window.NAND_FRONTIER;
assert.equal(papers.get('P26').highlight,false);assert(papers.get('P26').owned);assert(original.papers.find(p=>p.id==='P26').highlight!==false);
for(const q of ctx.window.NAND_FRONTIERS){
  assert(q.paperIds.length>=2);q.topics.forEach(t=>assert(ids.has(t),`${q.id}: ${t}`));
  for(const e of q.positions){assert(q.paperIds.includes(e.paperId));assert(e.locator&&e.claim&&new URL(e.url).protocol==='https:');}
  assert(q.gap&&q.proposedTest&&q.caution&&q.pairs.length);
  q.pairs.forEach((pair,i)=>{
    assert(pair.source!==pair.target);for(const id of [pair.source,pair.target]){assert(papers.has(id)&&!papers.get(id).personal);assert(q.positions.some(e=>e.paperId===id));}
    const map=F.build(q,i,papers,concepts,D.relations),visible=new Set(map.nodes.map(n=>n.id));
    assert.equal(map.nodes.filter(n=>n.isPaper).length,2);assert.equal(map.nodes.filter(n=>n.isQuestion).length,1);assert(map.edges.every(e=>visible.has(e.source)&&visible.has(e.target)));
    const filtered=F.build(q,i,papers,concepts,D.relations,p=>p.id!==pair.target);assert.equal(filtered.nodes.length,1);assert.equal(filtered.edges.length,0);
  });
}
const allNodes=D.papers.map(p=>({id:p.id,isPaper:true})),gaps=F.pairEdges(ctx.window.NAND_FRONTIERS,allNodes);
assert.equal(gaps.length,17);assert.equal(new Set(gaps.map(e=>e.id)).size,17);
assert.equal(F.pairEdges(ctx.window.NAND_FRONTIERS,[{id:'P26',isPaper:true}]).length,0);
assert.equal(F.scopeEdges([...D.relations,...gaps],null).length,0);
assert(F.scopeEdges([...D.relations,...gaps],'P20').every(e=>e.source==='P20'||e.target==='P20'));
assert.equal(F.scopeEdges(gaps,null,'all').length,17);
stored.set(C.KEY,'bad json');assert(C.load(D,storage).warning);assert.equal(C.load(D,storage).records.length,0);
console.log('Personal map checks passed: DOI normalization, cross-device classification, reference exclusion, metadata-only trust, safe persistence, duplicate prevention, suggestions, and source-grounded questions.');
