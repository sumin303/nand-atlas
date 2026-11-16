/* Curated paper pairs, kept separate from verified citations. */
(() => {
  function pairEdges(questions, nodes) {
    const ids=new Set(nodes.filter(n=>n.isPaper).map(n=>n.id));
    return questions.flatMap(q=>(q.pairs||[]).flatMap((p,i)=>ids.has(p.source)&&ids.has(p.target)?[{...p,id:`gap:${q.id}:${i}`,type:'question',questionId:q.id,pairIndex:i,note:p.reason||q.gap}]:[]));
  }
  function scopeEdges(edges, selected, scope='selected') {
    return edges.filter(e=>scope==='all'||['hierarchy','concept','placement'].includes(e.type)||selected&&(e.source===selected||e.target===selected));
  }
  function build(q,index,papers,concepts,relations,visible=()=>true,positions=new Map()) {
    const pair=q.pairs[index]||q.pairs[0],ids=[pair.source,pair.target];
    const nodes=ids.flatMap((id,i)=>{const p=papers.get(id);return p&&visible(p)?[{id,isPaper:true,label:`${p.authors[0].split(' ').at(-1)} ${p.year||''} · ${p.id==='P26'?'DDPM + 전이학습':p.graphLabel||p.shortTitle||p.title.slice(0,30)}`,group:concepts.get(p.topics[0]).group,x:i?760:160,y:180,...positions.get(id)}]:[];});
    const both=nodes.length===2;
    if(both)nodes.push({id:q.id,isQuestion:true,isPaper:false,label:q.shortLabel||'비교할 질문',questionTitle:q.title,group:'models',x:460,y:290,...positions.get(q.id)});
    const edges=both?ids.map(id=>({source:id,target:q.id,type:'question',id:`gap:${q.id}:${index}`,note:pair.reason||q.gap})):[];
    if(both)edges.push(...relations.filter(e=>ids.includes(e.source)&&ids.includes(e.target)));
    return {nodes,edges,areas:[],bounds:{minX:0,maxX:920,minY:70,maxY:390},pair};
  }
  window.NAND_FRONTIER={pairEdges,scopeEdges,build};
})();
