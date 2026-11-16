/* Editorial approach families, not measured embedding/KNN distances. */
(() => {
  const families = [
    {id:'design', label:'재료 · 구조 설계', color:'#9fcfb5', approaches:['재료 설계','절연막 설계','소자 구조','형상 설계','공정·구조']},
    {id:'analysis', label:'원인 분석 · 모델', color:'#a7bfe0', approaches:['물리 모델','조건 확장','특성 분석','통계 모델','비교 방법론']},
    {id:'control', label:'동작 제어 · 보완', color:'#c3abd9', approaches:['고정 펄스 제어','피드백 제어','모델 기반 제어','펄스 설계','바이어스 제어','센싱 제어','예산 최적화']},
    {id:'circuit', label:'회로 · 시스템', color:'#d8b488', approaches:['회로 통합']},
    {id:'generative', label:'생성 모델 · 합성 데이터', color:'#d4bd83', approaches:[]},
    {id:'transfer', label:'세대 · 영역 간 전이', color:'#a8c4e5', approaches:[]},
    {id:'physics-ml', label:'물리 정보를 활용한 학습', color:'#b7c797', approaches:[]},
    {id:'optimization', label:'학습 기반 설계 · 동작 최적화', color:'#c0a9d7', approaches:[]},
    {id:'learning', label:'학습 기반 예측 · 최적화', color:'#91c9d1', approaches:[]}
  ];
  const titles={P01:'포획층 조성 조절',P02:'터널 절연막 설계',P03:'초기 retention 모델',P04:'국소 포획층 구조',P05:'사이클 이력 분석',P06:'FG 셀 결합 완화',P07:'수직 채널 불균일성',P08:'적층 연결부 설계',P09:'고정 스텝 ISPP',P10:'Verify 피드백 제어',P11:'모델 기반 펄스 예측',P12:'소거 펄스 분할',P13:'읽기 교란 억제',P14:'읽기 기준 갱신',P15:'RTN 분포 예측',P16:'Verify 회로 공유',P17:'상태별 펄스 예산',P18:'저장 방식 비교 조건'};
  window.NAND_CLUSTER = {
    build(topic, paperList, relations, conceptLookup, positions=new Map()) {
      const belongs=(p,f)=>p.family?p.family===f.id:f.approaches.includes(p.approach);
      const grouped=families.map(f=>({...f,papers:paperList.filter(p=>belongs(p,f))})).filter(f=>f.papers.length);
      const unknown=paperList.filter(p=>!families.some(f=>belongs(p,f)));
      if(unknown.length)grouped.push({id:'other',label:'기타 접근',color:'#c1cbbd',papers:unknown});
      grouped.forEach(g=>{g.cols=Math.min(g.papers.length<=4?2:3,g.papers.length);g.rows=Math.ceil(g.papers.length/g.cols);g.rx=Math.max(105,g.cols*80+20);g.ry=g.rows*50+60;});
      const centers=[];
      if(grouped.length===1)centers.push([0,-grouped[0].ry-95]);
      else {
        const columns=grouped.length>=5?3:2;
        const rows=[];for(let i=0;i<grouped.length;i+=columns)rows.push(grouped.slice(i,i+columns));
        const heights=rows.map(row=>2*Math.max(...row.map(g=>g.ry)));
        let top=-(heights.reduce((a,b)=>a+b,0)+(rows.length-1)*180)/2;
        rows.forEach((row,ri)=>{const width=row.reduce((sum,g)=>sum+g.rx*2,0)+(row.length-1)*175;let left=-width/2;row.forEach(g=>{centers.push([left+g.rx,top+heights[ri]/2]);left+=g.rx*2+175;});top+=heights[ri]+180;});
      }
      const nodes=[{...topic,isPaper:false,hub:true,parent:null}],areas=[];
      grouped.forEach((g,i)=>{
        const [ox,oy]=centers[i]||[Math.cos(i*2.4)*300,Math.sin(i*2.4)*230],cx=topic.x+ox,cy=topic.y+oy;
        const {cols,rows,rx,ry}=g;
        areas.push({id:g.id,label:g.label,color:g.color,x:cx,y:cy,rx,ry,count:g.papers.length});
        g.papers.forEach((p,j)=>{
          const row=Math.floor(j/cols),rowCount=Math.min(cols,g.papers.length-row*cols);
          nodes.push({id:p.id,label:p.graphLabel||p.shortTitle||titles[p.id]||p.approach,group:conceptLookup.get(p.topics[0]).group,clusterColor:p.owned&&p.highlight!==false?'#e9c881':g.color,family:g.id,isPaper:true,x:cx+(j%cols-(rowCount-1)/2)*160,y:cy+(row-(rows-1)/2)*100-8,...(positions.get(p.id)||{})});
        });
      });
      const ids=new Set(paperList.map(p=>p.id));
      const edges=[...paperList.map(p=>({source:topic.id,target:p.id,type:'membership'})),...relations.filter(r=>ids.has(r.source)&&ids.has(r.target))];
      const bounds=areas.length?{minX:Math.min(topic.x-70,...areas.map(a=>a.x-a.rx))-20,maxX:Math.max(topic.x+70,...areas.map(a=>a.x+a.rx))+20,minY:Math.min(topic.y-60,...areas.map(a=>a.y-a.ry))-20,maxY:Math.max(topic.y+70,...areas.map(a=>a.y+a.ry))+20}:{minX:topic.x-200,maxX:topic.x+200,minY:topic.y-150,maxY:topic.y+150};
      nodes.forEach(n=>{bounds.minX=Math.min(bounds.minX,n.x-85);bounds.maxX=Math.max(bounds.maxX,n.x+85);bounds.minY=Math.min(bounds.minY,n.y-35);bounds.maxY=Math.max(bounds.maxY,n.y+70);});
      return {nodes,edges,areas,bounds};
    }
  };
})();
