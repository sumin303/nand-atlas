import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx={window:{}};
for(const f of ['data','retention-data','landscape-data','ml-neighborhood-data','personal-core','hierarchy-layout'])vm.runInNewContext(readFileSync(new URL(`../dist/${f}.js`,import.meta.url),'utf8'),ctx);
const D=ctx.window.NAND_PERSONAL.extend(ctx.window.NAND_REAL_DATA),H=ctx.window.NAND_HIERARCHY;
for(const width of [360,700,1100])for(const topic of D.concepts){
  const layout=H.build(topic,D.concepts,D.papers,width),children=D.concepts.filter(c=>c.parent===topic.id),nodes=layout.nodes;
  assert.equal(nodes.length,children.length+(topic.id==='nand'?0:1));assert.equal(layout.edges.length,0);
  assert(nodes.every(n=>n.isCollection||n.parent===topic.id));assert(nodes.every(n=>!n.isPaper));
  for(const n of nodes){assert(n.lines.length<=2,`${n.id}: label too long`);assert(Number.isFinite(n.x)&&Number.isFinite(n.y));assert(n.x-106>=layout.bounds.minX&&n.x+106<=layout.bounds.maxX);assert(n.y-25>=layout.bounds.minY&&n.y+90<=layout.bounds.maxY);}
  for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++)assert(Math.abs(nodes[i].x-nodes[j].x)>=212||Math.abs(nodes[i].y-nodes[j].y)>=115,'Overlapping navigation targets');
}
const root=H.build(D.concepts.find(c=>c.id==='nand'),D.concepts,D.papers);
assert.equal(root.nodes.length,7);assert(!root.nodes.some(n=>n.id==='P26'||n.id==='generative'));
const models=H.build(D.concepts.find(c=>c.id==='models'),D.concepts,D.papers);
assert(models.nodes.some(n=>n.id==='small-data'));assert(!models.nodes.some(n=>n.id==='generative'));
const small=H.build(D.concepts.find(c=>c.id==='small-data'),D.concepts,D.papers);
assert(small.nodes.some(n=>n.id==='generative'));assert(small.nodes.some(n=>n.id==='transfer'));
const empty=H.build(D.concepts.find(c=>c.id==='devices'),D.concepts,[]);
assert(empty.nodes.every(n=>n.paperCount===0));assert.equal(D.papers.length,32);
console.log('Hierarchy checks passed: one level per view, 7 initial topics, reachable branches, non-overlapping targets at 3 widths, filtered counts.');
