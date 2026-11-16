import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const stored=new Map(),storage={getItem:k=>stored.get(k)||null,setItem:(k,v)=>stored.set(k,v)},ctx={window:{},Date,URL,localStorage:storage};
for(const f of ['data','retention-data','landscape-data','ml-neighborhood-data','frontiers-data','review-core','personal-core','public-library-data'])vm.runInNewContext(fs.readFileSync(new URL(`../dist/${f}.js`,import.meta.url),'utf8'),ctx);
const C=ctx.window.NAND_PERSONAL,B=ctx.window.NAND_REAL_DATA,P=ctx.window.NAND_PUBLIC_LIBRARY;
const publishedKeys=new Set(['id','title','authors','year','venue','bibliography','doi','topics','checkedAt']);
assert.equal(P.records.length,156);for(const p of P.records)assert(Object.keys(p).every(k=>publishedKeys.has(k)));
assert(!/(?:[A-Z]:\\|file:\/\/|sourcePath|"(?:notes|abstract|body|fullText|pdfPath|pagesRead)"\s*:)/i.test(JSON.stringify(P)));
const verify=D=>{
 assert.equal(D.papers.length,188);assert.equal(new Set(D.papers.map(p=>p.id)).size,188);
 const dois=D.papers.map(p=>p.doi?.toLowerCase()).filter(Boolean);assert.equal(new Set(dois).size,dois.length);
 assert.equal(D.papers.filter(p=>p.personal).length,0);assert.equal(D.papers.filter(p=>p.verification.level==='metadata').length,143);
 assert.equal(D.papers.filter(p=>p.owned).map(p=>p.id).join(','),'P26');assert.equal(D.papers.find(p=>p.id==='P26').highlight,false);
 assert.equal(D.relations.length,89);assert.equal(new Set(D.relations.map(r=>[r.source,r.target,r.type].join('|'))).size,89);
 assert.equal(D.questions.length,23);assert.equal(new Set(D.questions.map(q=>q.id)).size,23);
 assert.equal(D.reviews.papers.length,13);assert.equal(D.publicReview.relations.length,34);
 assert.equal(D.publicReview.relations.filter(r=>r.type==='cites').length,17);
 assert.equal(D.publicReview.papers.filter(p=>p.documentType==='conference_extended_abstract').length,1);
 assert(D.papers.filter(p=>p.reviewed).every(p=>p.publicReview&&p.verification.label.startsWith('공개 ')));
 const ids=new Set(D.papers.map(p=>p.id)),topics=new Set(D.concepts.map(c=>c.id));
 for(const p of D.papers)for(const t of p.topics)assert(topics.has(t));
 for(const r of D.relations){assert(ids.has(r.source)&&ids.has(r.target));assert(r.evidence.length);}
};
verify(C.merge(B,storage));assert.equal(storage.getItem(C.KEY),null,'Visiting the public map must not write local storage');
// Simulate the already-imported library, including an older DOI and private notes.
const records=P.records.map(p=>({...p,notes:'PRIVATE USER NOTE'}));
records.find(p=>p.doi).doi='10.1234/old-metadata';
C.write({version:1,records,review:P.review,focusId:records[0].id},storage);
const backup=storage.getItem(C.KEY);verify(C.merge(B,storage));assert.equal(storage.getItem(C.KEY),backup);
assert.equal(C.load(C.publicBase(B),storage).records.length,156);assert(C.load(C.publicBase(B),storage).records.every(p=>p.notes==='PRIVATE USER NOTE'));
// New personal additions still work alongside the public collection.
const r=C.sanitize({title:'A newly added device model',topics:['surrogate','device-nand']},C.publicBase(B));
C.write({version:1,records:[r],focusId:null},storage);const withPersonal=C.merge(B,storage);assert.equal(withPersonal.papers.length,189);assert.equal(withPersonal.papers.filter(p=>p.personal).length,1);assert.equal(withPersonal.questions.length,23);
assert.equal(B.papers.length,32);assert.equal(B.relations.length,55);
console.log('Public library checks passed: fresh-browser 188 papers, ID/DOI deduplication, public evidence and questions, private-note exclusion/preservation, authorship, and new personal additions.');
