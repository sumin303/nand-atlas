/* Browser-local bibliography. Suggestions are not verified citations or contradictions. */
(() => {
  'use strict';
  const KEY='nand-atlas-personal-v1', MAX=3000;
  const devices=[
    ['device-nand','NAND','NAND Flash',/\bnand\b/i],
    ['device-finfet','FinFET / GAA','FinFET · GAA · nanosheet',/finfet|gate.all.around|\bgaa\b|nanosheet|nanowire/i],
    ['device-mos','MOSFET / CMOS','MOSFET · CMOS · inverter',/mosfet|\bcmos\b|inverter|\bbsim\b/i],
    ['device-power','Power devices','LDMOS · GaN · SiC',/ldmos|\bgan\b(?=.{0,35}(?:hemt|transistor|power))|gallium nitride|silicon carbide|\bsic\b|\bigbt\b/i],
    ['device-bjt','BJT','BJT · bipolar',/\bbjt\b|bipolar|emitter/i],
    ['device-emerging','Emerging memory','RRAM · FeFET · PCM · MRAM',/rram|reram|memrist|ferroelectric|fefet|\bpcm\b|phase.change|mram/i],
    ['device-dram','DRAM','DRAM',/\bdram\b/i],
    ['device-other','Other / review','기타 소자 · 분류 검토',null]
  ];
  const rules=[
    ['generative','생성형 AI',/generative|(?:conditional|denoising|probabilistic|latent|score.based) diffusion|diffusion (?:probabilistic|generative)|\bddpm\b|\bwgan\b|adversarial network|variational autoencoder|\bvae\b|합성 데이터|생성형/gi],
    ['transfer','전이학습',/transfer learning|domain adapt|fine.tun|pre.train|전이학습|미세조정/gi],
    ['small-data','소량 데이터',/limited data|small.data|sparse.data|data.scare|data.scarc|few.shot|소량 데이터|데이터 부족/gi],
    ['surrogate','학습 기반 모델링',/machine learning|neural network|surrogate|deep learning|\bmlp\b|신경망|머신러닝/gi],
    ['physics-ml','물리 기반 학습',/physics.informed|physics.assisted|physics.guided|physics.based neural|physics.constrain|\bpinn\b|물리 기반 학습/gi],
    ['physics','물리·소자 모델링',/\btcad\b|compact model|device model|physical model|physics.based|semianalytical|소자 모델|물리 모델/gi],
    ['optimization','설계·동작 최적화',/optimi[sz]|inverse design|bayesian opt|최적화/gi],
    ['active-learning','능동 학습',/active learning|sequential sampling|adaptive sampling|능동 학습/gi],
    ['uncertainty','불확실성',/uncertainty|confidence interval|calibration error|불확실성/gi],
    ['variability','변동·분포·tail',/variability|statistical|variation|distribution|\btail\b|분포|변동성/gi],
    ['retention','Retention',/\bretention\b|전하 보존/gi],
    ['endurance','Endurance',/\bendurance\b|cycling|내구성/gi],
    ['disturb','Disturb',/\bdisturb\b|교란/gi],
    ['ispp','ISPP',/\bispp\b|incremental.step.pulse/gi],
    ['program','Programming',/programming|program pulse|프로그램 동작/gi],
    ['erase','Erase',/\berase\b|소거/gi],
    ['3d','3D NAND',/3[\s-]?d.{0,12}nand|vertical.{0,12}nand|\bv[\s-]?nand\b/gi],
    ['ctn','Charge-trap NAND',/charge.trap.{0,20}nand|\bctn\b/gi],
    ['fg','Floating gate',/floating.gate/gi]
  ];
  const methodIds=new Set(rules.slice(0,10).map(r=>r[0]));
  const text=(x,n=600)=>String(x??'').replace(/\u0000/g,'').slice(0,n).trim();
  function normalizeDOI(value){
    let v=text(value,1500);try{v=decodeURIComponent(v);}catch{}
    v=v.replace(/^(?:doi\s*:\s*|https?:\/\/(?:dx\.)?doi\.org\/)/i,'').trim().replace(/[.,;]+$/,'');
    if(!/^10\.\d{4,9}\/\S+$/i.test(v)||/[<>"\u0000-\u001f]/.test(v))throw new Error('10.xxxx/… 형식의 DOI 또는 doi.org 링크를 입력해 주세요.');
    return v.toLowerCase();
  }
  const doiURL=doi=>`https://doi.org/${encodeURI(doi).replace(/#/g,'%23').replace(/\?/g,'%3F')}`;
  function extractDOIs(value){
    const found=text(value,160000).match(/10\.\d{4,9}\/[\w.()/:;+-]+/gi)||[];
    return [...new Set(found.map(v=>{try{return normalizeDOI(v);}catch{return '';}}).filter(Boolean))].slice(0,30);
  }
  function classify({title='',abstract='',body=''}={}){
    const sections=[['제목',title,4],['초록',abstract,2],['본문',String(body).split(/(?:\n|\s{2,})(?:references|bibliography)\b/i)[0].slice(0,12000),1]];
    const reasons=rules.map(([id,label,regex])=>{
      const hits=sections.flatMap(([source,t,weight])=>[...new Set(String(t).match(regex)||[])].slice(0,3).map(word=>({word,source,weight})));
      return {id,label,score:hits.reduce((s,h)=>s+h.weight,0),hits};
    }).filter(r=>r.score>=2).sort((a,b)=>b.score-a.score);
    const deviceHits=devices.filter(d=>d[3]?.test(`${title} ${abstract} ${sections[2][1]}`)).map(d=>d[0]);
    if(!deviceHits.length)deviceHits.push('device-other');
    return {topics:[...reasons.map(r=>r.id),...deviceHits],reasons,deviceIds:deviceHits,methodIds:reasons.filter(r=>methodIds.has(r.id)).map(r=>r.id)};
  }
  function cleanMarkup(value){return text(value,12000).replace(/<[^>]*>/g,' ').replace(/&(?:amp|lt|gt|quot|apos);/g,m=>({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'"}[m])).replace(/\s+/g,' ').trim();}
  function crossref(record){
    const venue=cleanMarkup(record['container-title']?.[0]||record.publisher||'게재처 미확인');
    const venueShort=/electron device letters/i.test(venue)?'EDL':/transactions on electron devices/i.test(venue)?'TED':/electron devices meeting|\biedm\b/i.test(venue)?'IEDM':/vlsi/i.test(venue)?'VLSI':venue;
    return {title:cleanMarkup(record.title?.[0]||''),authors:(record.author||[]).map(a=>text([a.given,a.family].filter(Boolean).join(' ')||a.name)).filter(Boolean),doi:normalizeDOI(record.DOI),venue:venueShort,year:(record.published||record['published-online']||record.issued)?.['date-parts']?.[0]?.[0]||'',abstract:cleanMarkup(record.abstract||''),bibliography:[venue,record.volume,record.issue?`(${record.issue})`:'',record.page?`pp. ${record.page}`:''].filter(Boolean).join(' · '),metadataProvider:'Crossref',references:(record.reference||[]).filter(r=>r.DOI).map(r=>{try{return normalizeDOI(r.DOI);}catch{return '';}}).filter(Boolean)};
  }
  const hash=value=>{let h=2166136261;for(const ch of value)h=Math.imul(h^ch.charCodeAt(0),16777619);return (h>>>0).toString(16).padStart(8,'0');};
  const empty=()=>({version:1,records:[],focusId:null});
  function sanitize(input,D){
    const valid=new Set(D.concepts.map(c=>c.id)),title=text(input.title,700);if(!title)throw new Error('논문 제목이 필요합니다.');
    let doi='';if(input.doi)doi=normalizeDOI(input.doi);
    const topics=[...new Set((Array.isArray(input.topics)?input.topics:[]).filter(t=>valid.has(t)&&t!=='nand'))];if(!topics.length)throw new Error('분류를 하나 이상 선택해 주세요.');
    const year=Number(input.year);if(input.year&&(!Number.isInteger(year)||year<1800||year>new Date().getFullYear()+1))throw new Error('발행 연도를 확인해 주세요.');
    const id='U'+hash(doi||title.toLowerCase());
    const authors=(Array.isArray(input.authors)?input.authors:[]).map(a=>text(a,120)).filter(Boolean).slice(0,50);
    return {id,title,doi,authors:authors.length?authors:['저자 미확인'],year:year||0,venue:text(input.venue,140)||'기타',bibliography:text(input.bibliography,600),abstract:text(input.abstract,3500),topics,owned:input.owned===true,metadataProvider:['Crossref','직접 입력','PDF에서 추출'].includes(input.metadataProvider)?input.metadataProvider:'직접 입력',pdfRead:input.pdfRead===true,pagesRead:Math.max(0,Math.min(40,Number(input.pagesRead)||0)),totalPages:Math.max(0,Math.min(5000,Number(input.totalPages)||0)),notes:text(input.notes,1000),checkedAt:text(input.checkedAt,10)||new Date().toISOString().slice(0,10),classificationBasis:text(input.classificationBasis,1800)||'사용자가 분류를 검토했습니다.',references:(Array.isArray(input.references)?input.references:[]).slice(0,500).flatMap(d=>{try{return [normalizeDOI(d)];}catch{return [];}})};
  }
  function extend(D){
    D=JSON.parse(JSON.stringify(D));
    const first=D.papers.find(p=>p.id==='P26');if(first){first.highlight=false;first.graphLabel=first.graphLabel?.replace(/^★\s*/, '');}
    const root=D.concepts.find(c=>c.id==='nand');root.label='Device Research';root.ko='반도체 소자 연구';root.description='NAND를 출발점으로 소자와 공통 방법론을 교차 탐색합니다.';
    D.groups.devices={label:'소자 분야',color:'#d2b3d7'};
    D.concepts.push({id:'devices',parent:'nand',group:'devices',label:'Device families',ko:'소자 분야',x:-90,y:320,description:'서로 다른 소자를 공통 방법론으로 연결합니다.',question:'같은 방법론을 다른 소자에 적용하면 어떤 조건을 다시 검증해야 할까?'});
    devices.forEach(([id,label,ko],i)=>D.concepts.push({id,parent:'devices',group:'devices',label,ko,x:-350-(i%2)*170,y:40+Math.floor(i/2)*180,description:`${ko} 관련 수록 문헌. 분류는 중복될 수 있습니다.`,question:'소자 특성에 따른 평가 조건과 방법론의 적용 범위는 무엇인가?'}));
    D.papers.forEach(p=>{let inferred=classify({title:p.title,abstract:(p.deviceScope||'').replace(/NAND 외[^·]*/gi,'')}).deviceIds;if(p.scope==='method_neighbor')inferred=inferred.filter(id=>id!=='device-nand');else if(!inferred.includes('device-nand'))inferred=['device-nand'];if(!inferred.length)inferred=['device-other'];p.topics=[...new Set([...p.topics,...inferred])];});
    D.relationTypes.hypothesis={label:'연결 후보 · ?',symbol:'? ↔',color:'#d0b4e4',directed:false,description:'공통 방법론으로 추천한 연결 후보입니다. 직접 인용·대립 또는 연구 공백을 검증한 관계가 아닙니다.'};
    D.relationTypes.question={label:'미해결 질문 · ?',symbol:'?',color:'#d8bd7d',directed:false,description:'선별 문헌의 비교에서 도출한 검증할 질문입니다.'};
    return D;
  }
  function load(D,storage=localStorage){
    let data;try{data=JSON.parse(storage.getItem(KEY)||'null')||empty();if(data.version!==1||!Array.isArray(data.records))throw Error();}catch{return {...empty(),warning:'개인 맵을 읽을 수 없습니다. 저장 파일을 확인해 주세요.'};}
    const records=[],seen=new Set();let dropped=0;
    for(const raw of data.records.slice(0,MAX)){try{const p=sanitize(raw,D);if(!seen.has(p.id)){records.push(p);seen.add(p.id);}}catch{dropped++;}}
    return {version:1,records,focusId:seen.has(data.focusId)?data.focusId:null,warning:dropped?`${dropped}개 개인 항목의 형식을 확인할 수 없어 제외했습니다.`:''};
  }
  function write(data,storage=localStorage){storage.setItem(KEY,JSON.stringify({version:1,records:data.records,focusId:data.focusId}));}
  function asPaper(r,D){
    const family=r.topics.includes('generative')?'generative':r.topics.includes('physics-ml')?'physics-ml':r.topics.includes('transfer')?'transfer':r.topics.includes('optimization')?'optimization':r.topics.includes('surrogate')?'learning':'analysis';
    const deviceScope=devices.filter(d=>r.topics.includes(d[0])).map(d=>d[2]).join(' · ');
    return {...r,personal:true,shortTitle:r.title.slice(0,55),graphLabel:r.title.slice(0,38),family,approach:family==='analysis'?'분류 검토 · 개인 문헌':D.concepts.find(c=>c.id===r.topics.find(t=>methodIds.has(t)))?.label||'방법론 분류',scope:r.topics.includes('device-nand')?'nand':'method_neighbor',deviceScope,summary:r.abstract||'서지정보를 추가했습니다. 초록이나 연구 메모를 보완하면 배치를 검토할 수 있습니다.',problem:r.notes||'연구 질문은 아직 원문에서 검토하지 않았습니다.',method:r.classificationBasis,finding:'자동으로 결과·성능 우열을 판단하지 않습니다. 원문을 검토한 뒤 비교 내용을 보완하세요.',conditions:'소자, 데이터 수, 학습·시험 분리, 출력, 평가 지표를 확인해야 합니다.',limitation:'분류는 제목·초록·추출된 텍스트의 키워드와 사용자의 선택을 바탕으로 합니다. 인용·반박·독창성은 자동 검증하지 않았습니다.',verification:{level:'metadata',label:r.pdfRead?'PDF 텍스트 추출 · 미검토':`${r.metadataProvider} 서지 · 미검토`,detail:r.pdfRead?`로컬에서 ${r.pagesRead}/${r.totalPages}쪽의 텍스트를 추출했습니다. 그림·표 해석이나 원문 주장 검증을 수행한 상태는 아닙니다. PDF와 전문은 저장하거나 전송하지 않습니다.`:'서지정보와 분류를 저장했습니다. 본문 근거 확인과 구별됩니다.'},publisherVerified:false,sourceUrl:r.doi?doiURL(r.doi):'',sourceLabel:'출판사 논문 페이지',metadataUrl:r.doi&&r.metadataProvider==='Crossref'?`https://api.crossref.org/works/${encodeURIComponent(r.doi)}`:'',evidence:[]};
  }
  function neighbors(p,D){
    const methods=p.topics.filter(t=>methodIds.has(t));
    return D.papers.filter(q=>q.id!==p.id).map(q=>{const shared=methods.filter(t=>q.topics.includes(t)),device=p.topics.filter(t=>t.startsWith('device-')&&t!=='device-other'&&q.topics.includes(t));return {paper:q,shared,device,score:shared.length*3+device.length};}).filter(n=>n.shared.length).sort((a,b)=>b.score-a.score||b.paper.year-a.paper.year).slice(0,5);
  }
  function merge(base,storage){
    const D=extend(base),personal=load(D,storage);D.personal=personal;
    for(const r of personal.records){if(r.doi&&D.papers.some(p=>p.doi?.toLowerCase()===r.doi))continue;D.papers.push(asPaper(r,D));}
    D.venues=[...new Set(D.papers.map(p=>p.venue))];
    const publicCorpus={...D,papers:D.papers.filter(p=>!p.personal)};
    for(const p of D.papers.filter(p=>p.personal))for(const n of neighbors(p,publicCorpus).slice(0,3)){
      if(D.relations.some(r=>[r.source,r.target].includes(p.id)&&[r.source,r.target].includes(n.paper.id)))continue;
      D.relations.push({id:`candidate-${p.id}-${n.paper.id}`,source:p.id,target:n.paper.id,type:'hypothesis',status:'auto_candidate',checkedAt:p.checkedAt,shared:n.shared,note:`공통 방법론: ${n.shared.map(t=>D.concepts.find(c=>c.id===t)?.label).join(' · ')}. 소자·데이터·출력을 맞춘 비교를 검토할 후보입니다. 인용이나 반박은 미확인입니다.`,evidence:[]});
    }
    D.questions=window.NAND_FRONTIERS||[];return D;
  }
  window.NAND_PERSONAL={KEY,MAX,devices,rules,methodIds,normalizeDOI,doiURL,extractDOIs,classify,crossref,extend,load,write,sanitize,merge,neighbors,asPaper,cleanMarkup};
})();
