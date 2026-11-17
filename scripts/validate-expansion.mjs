import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const stored=new Map(),storage={getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)},ctx={window:{},Date,URL,localStorage:storage};
for(const f of ['data','retention-data','landscape-data','ml-neighborhood-data','frontiers-data','review-core','personal-core','public-library-data','expansion-data'])vm.runInNewContext(fs.readFileSync(new URL(`../dist/${f}.js`,import.meta.url),'utf8'),ctx);
const C=ctx.window.NAND_PERSONAL,B=ctx.window.NAND_REAL_DATA,P=ctx.window.NAND_PUBLIC_LIBRARY,E=ctx.window.NAND_PUBLIC_EXPANSIONS[0];
assert.equal(P.records.length,156);assert.equal(E.records.length,12);
assert.equal(E.records.filter(p=>p.topics.includes('device-nand')).length,6);
assert.equal(new Set(E.records.map(p=>p.venue)).size,12);
const publishedKeys=new Set(['id','title','authors','year','venue','bibliography','doi','topics','checkedAt']);
assert(E.records.every(p=>Object.keys(p).every(k=>publishedKeys.has(k))));
assert(!/(?:[A-Z]:\\|file:\/\/|sourcePath|"(?:notes|abstract|body|fullText|pdfPath)"\s*:)/i.test(JSON.stringify(E)));
assert(!JSON.stringify(E).includes('NEW-'));
assert.equal(E.review.papers.length,12);assert.equal(E.review.relations.length,27);assert.equal(E.review.questions.length,9);
assert.equal(E.review.relations.filter(r=>r.type==='cites').length,16);
assert.equal(E.review.papers.filter(p=>p.verificationLevel==='text').length,1);
assert.equal(E.review.papers.filter(p=>p.verificationLevel==='pdf').length,11);
const verify=D=>{
 assert.equal(D.papers.length,200);assert.equal(new Set(D.papers.map(p=>p.id)).size,200);
 const dois=D.papers.map(p=>p.doi?.toLowerCase()).filter(Boolean);assert.equal(new Set(dois).size,dois.length);
 assert.equal(D.papers.filter(p=>p.owned).map(p=>p.id).join(','),'P26');assert.equal(D.papers.find(p=>p.id==='P26').highlight,false);
 assert.equal(D.papers.filter(p=>p.personal).length,0);assert.equal(D.papers.filter(p=>p.verification.level==='metadata').length,143);
 assert.equal(D.relations.length,116);assert.equal(D.questions.length,32);assert.equal(D.questions.reduce((n,q)=>n+q.pairs.length,0),41);
 assert.equal(new Set(D.relations.map(r=>[r.source,r.target,r.type].join('|'))).size,116);
 assert.equal(new Set(D.questions.map(q=>q.id)).size,32);
 assert.equal(D.publicReview.papers.length,25);assert.equal(D.publicBatches.length,1);assert.equal(D.publicBatches[0].paperIds.length,12);
 const ids=new Set(D.papers.map(p=>p.id)),topics=new Set(D.concepts.map(c=>c.id));
 for(const p of E.records){const actual=D.papers.find(x=>x.id===p.id);assert(actual.publicReview&&actual.publishedReference&&!actual.owned);for(const t of p.topics)assert(topics.has(t));if(!p.doi)assert(actual.sourceUrl.startsWith('https://'));}
 for(const r of E.review.relations){assert(ids.has(r.source)&&ids.has(r.target));if(r.type==='cites')assert(r.evidence.some(e=>e.paperId===r.source&&/ref|참고문헌|\[\d+\]/i.test(e.locator)));else assert([r.source,r.target].every(id=>r.evidence.some(e=>e.paperId===id)));}
 for(const q of E.review.questions)for(const pair of q.pairs){assert(pair.test);for(const id of [pair.source,pair.target])assert(ids.has(id)&&q.positions.some(p=>p.paperId===id&&p.claim&&p.locator&&p.url));}
 const textPaper=D.papers.find(p=>p.doi==='10.1038/s41467-024-49686-z');assert.equal(textPaper.verification.level,'text');assert(textPaper.evidence.some(e=>e.url.includes('PMC11291485')));
};
verify(C.merge(B,storage));assert.equal(storage.getItem(C.KEY),null);
// Old and newly imported copies must not duplicate public records or erase private notes.
const records=[...P.records,...E.records].map(p=>({...p,notes:'PRIVATE KEEP'}));
C.write({version:1,records,focusId:records[0].id,review:ctx.window.NAND_REVIEW.combine(P.review,E.review)},storage);
const backup=storage.getItem(C.KEY);verify(C.merge(B,storage));assert.equal(storage.getItem(C.KEY),backup);
assert(C.load(C.publicBase(B),storage).records.every(p=>p.notes==='PRIVATE KEEP'));
const fresh=C.sanitize({title:'Private follow-up reference',topics:['transfer','device-nand']},C.publicBase(B));
C.write({version:1,records:[fresh],focusId:null},storage);const personalized=C.merge(B,storage);assert.equal(personalized.papers.length,201);assert.equal(personalized.papers.filter(p=>p.personal).length,1);
assert.equal(B.papers.length,32);assert.equal(B.relations.length,55);
console.log('Expansion checks passed: 200 public papers, 6+6 additions, 27 grounded edges, 9 questions, source-level distinction, privacy, authorship, and old-library deduplication.');
