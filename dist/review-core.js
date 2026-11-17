/* Explicit, browser-local reading notes. Never infer citations from tags. */
(() => {
  'use strict';
  const str=(v,n=3000)=>String(v??'').replace(/\u0000/g,'').trim().slice(0,n);
  const empty=()=>({version:1,papers:[],relations:[],questions:[]});
  function sanitize(input,D,records){
    if(!input)return empty();
    if(input.version!==1)throw Error('지원하지 않는 원문 검토 형식입니다.');
    const all=new Set([...D.papers,...records].map(p=>p.id)),personal=new Set(records.map(p=>p.id)),topics=new Set(D.concepts.map(c=>c.id));
    const id=v=>{v=str(v,100);if(!/^[\w-]+$/.test(v))throw Error('검토 항목 ID가 올바르지 않습니다.');return v;};
    const paperId=v=>{v=id(v);if(!all.has(v))throw Error(`검토 대상 ${v} 문헌이 없습니다.`);return v;};
    const url=v=>{const u=new URL(str(v,2000));if(u.protocol!=='https:')throw Error('근거 링크는 HTTPS여야 합니다.');return u.href;};
    const date=v=>/^\d{4}-\d{2}-\d{2}$/.test(v)?v:new Date().toISOString().slice(0,10);
    const evidence=list=>{
      if(!Array.isArray(list)||!list.length||list.length>40)throw Error('원문 근거가 필요합니다.');
      return list.map(e=>{const locator=str(e.locator,700),note=str(e.note,3000);if(!locator||!note)throw Error('근거 위치와 해석이 필요합니다.');return {paperId:paperId(e.paperId),url:url(e.url),locator,note};});
    };
    const unique=list=>{const ids=new Set();for(const x of list){if(ids.has(x.id))throw Error('중복 검토 ID입니다.');ids.add(x.id);}return list;};
    if((input.papers?.length||0)>1000||(input.relations?.length||0)>6000||(input.questions?.length||0)>1000)throw Error('검토 묶음의 항목 수가 너무 많습니다.');
    const papers=(input.papers||[]).map(p=>{
      const pid=paperId(p.id);if(!personal.has(pid))throw Error('개인 문헌의 원문 검토만 가져올 수 있습니다.');
      const out={id:pid,checkedAt:date(p.checkedAt),shortTitle:str(p.shortTitle,70),documentType:p.documentType==='conference_extended_abstract'?'conference_extended_abstract':'paper',verificationLevel:p.verificationLevel==='text'?'text':'pdf',verificationDetail:str(p.verificationDetail,4000),evidence:evidence(p.evidence)};
      for(const k of ['summary','problem','method','finding','conditions','limitation']){out[k]=str(p[k],6000);if(!out[k])throw Error(`${pid}의 ${k} 검토 내용이 필요합니다.`);}
      if(!out.verificationDetail)throw Error('원문 확인 범위가 필요합니다.');return out;
    });
    const relations=(input.relations||[]).map(r=>{
      const source=paperId(r.source),target=paperId(r.target),type=r.type;
      if(source===target||(!personal.has(source)&&!personal.has(target)))throw Error('개인 문헌과 연결된 서로 다른 두 논문이 필요합니다.');
      if(!['cites','alternative','conditions','extends'].includes(type))throw Error('이 형식에서는 인용·접근 비교·조건 차이·확장만 지원합니다.');
      const ev=evidence(r.evidence),note=str(r.note,6000);if(!note)throw Error('관계 설명이 필요합니다.');
      if(type==='cites'&&!ev.some(e=>e.paperId===source&&/ref|참고문헌|\[\d+\]/i.test(e.locator)))throw Error('직접 인용은 출발 논문의 참고문헌 위치가 필요합니다.');
      if(type!=='cites'&&![source,target].every(pid=>ev.some(e=>e.paperId===pid)))throw Error('비교 관계는 양쪽 논문의 근거가 필요합니다.');
      return {id:id(r.id),source,target,type,note,evidence:ev,status:type==='cites'?'citation_verified':'analyst_comparison',checkedAt:date(r.checkedAt),personalReview:true};
    });
    const questions=(input.questions||[]).map(q=>{
      const paperIds=[...new Set((q.paperIds||[]).map(paperId))];if(!paperIds.some(pid=>personal.has(pid)))throw Error('개인 문헌이 포함된 검토 질문이 필요합니다.');
      const positions=(q.positions||[]).map(p=>({paperId:paperId(p.paperId),claim:str(p.claim,6000),conditions:str(p.conditions,3000),url:url(p.url),locator:str(p.locator,700),verificationScope:str(p.verificationScope,3000)}));
      const pairs=(q.pairs||[]).map(p=>({source:paperId(p.source),target:paperId(p.target),label:str(p.label,300),reason:str(p.reason,6000),test:str(p.test,6000)}));
      if(!pairs.length||pairs.some(p=>p.source===p.target||![p.source,p.target].every(pid=>paperIds.includes(pid)&&positions.some(x=>x.paperId===pid&&x.claim&&x.locator))||!p.reason||!p.test))throw Error('질문마다 두 논문의 주장·근거 위치·검증 실험이 필요합니다.');
      const out={id:id(q.id),paperIds,positions,pairs,topics:(q.topics||[]).filter(t=>topics.has(t)),checkedAt:date(q.checkedAt),personalReview:true};
      for(const k of ['title','question','gap','proposedTest','caution','category','relationLabel'])out[k]=str(q[k],6000);
      if(!out.title||!out.question||!out.caution||!out.topics.length)throw Error('질문 제목·범위·주제 정보가 필요합니다.');
      out.shortLabel=str(q.shortLabel||'검증할 질문',40);return out;
    });
    return {version:1,papers:unique(papers),relations:unique(relations),questions:unique(questions)};
  }
  function combine(oldReview,incoming){const a=oldReview||empty(),b=incoming||empty();if(a.version!==1||b.version!==1)throw Error('지원하지 않는 원문 검토 형식입니다.');const merge=k=>[...new Map([...(a[k]||[]),...(b[k]||[])].map(x=>[x.id,x])).values()];return {version:1,papers:merge('papers'),relations:merge('relations'),questions:merge('questions')};}
  function prune(review,ids){const r=review||empty();return {version:1,papers:r.papers.filter(p=>ids.has(p.id)),relations:r.relations.filter(x=>ids.has(x.source)&&ids.has(x.target)),questions:r.questions.filter(q=>q.paperIds.every(id=>ids.has(id)))};}
  function apply(D,review,options={}){
    for(const r of review.papers){const p=D.papers.find(p=>p.id===r.id);if(!p||p.publicReview&&!options.public)continue;const brief=r.documentType==='conference_extended_abstract';Object.assign(p,{...r,reviewed:true,publicReview:options.public===true,verification:{level:brief?'abstract':r.verificationLevel==='text'?'text':'pdf',label:(options.public?'공개 ':'개인 ')+(brief?'학회요약 검토':'원문 검토'),detail:r.verificationDetail},publisherVerified:false});}
    D.relations.push(...review.relations.filter(r=>!D.relations.some(x=>x.source===r.source&&x.target===r.target&&x.type===r.type)));
    for(const p of D.papers.filter(p=>p.reviewed)){if(p.shortTitle)p.graphLabel=p.shortTitle;if(!p.doi){p.sourceUrl=p.evidence.find(e=>e.paperId===p.id)?.url||'';p.sourceLabel='확인한 논문 페이지';}}
    D.questions=[...(D.questions||window.NAND_FRONTIERS||[]),...review.questions.filter(q=>!(D.questions||window.NAND_FRONTIERS||[]).some(x=>x.id===q.id))];
  }
  window.NAND_REVIEW={empty,sanitize,combine,prune,apply};
})();
