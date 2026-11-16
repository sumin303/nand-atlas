/* One level at a time. Distances are editorial spacing, not similarity scores. */
(() => {
  const children=(id,concepts)=>concepts.filter(c=>c.parent===id);
  function descendants(id,concepts){const ids=new Set([id]);let size=-1;while(size!==ids.size){size=ids.size;concepts.forEach(c=>{if(ids.has(c.parent))ids.add(c.id);});}return ids;}
  function labels(text){
    const lines=[];let line='',width=0;
    for(const ch of text){const w=/[\x00-\x7f]/.test(ch)?.53:1;if(width+w>11&&line){lines.push(line.trim());line='';width=0;}line+=ch;width+=w;}
    if(line.trim())lines.push(line.trim());return lines;
  }
  function build(topic,concepts,papers,width=700){
    const count=id=>{const ids=descendants(id,concepts);return papers.filter(p=>p.topics.some(t=>ids.has(t))).length;};
    const entries=children(topic.id,concepts).map(c=>({...c,isBranch:true,isPaper:false,label:c.ko||c.label,childCount:children(c.id,concepts).length,paperCount:count(c.id)}));
    if(topic.id!=='nand')entries.push({id:`papers:${topic.id}`,topicId:topic.id,group:topic.group,isBranch:true,isCollection:true,isPaper:false,label:'이 주제의 모든 논문',paperCount:count(topic.id),childCount:0});
    const cols=Math.min(entries.length,width>=620?3:2)||1,rows=Math.ceil(entries.length/cols),cellW=240,cellH=132;
    const nodes=entries.map((n,i)=>{const row=Math.floor(i/cols),rowCount=Math.min(cols,entries.length-row*cols);return {...n,lines:labels(n.label),x:(i%cols-(rowCount-1)/2)*cellW,y:row*cellH+35};});
    return {nodes,edges:[],areas:[],hierarchy:true,bounds:{minX:-cols*cellW/2,maxX:cols*cellW/2,minY:0,maxY:Math.max(1,rows)*cellH+12}};
  }
  window.NAND_HIERARCHY={children,descendants,labels,build};
})();
