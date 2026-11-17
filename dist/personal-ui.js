(() => {
  'use strict';
  const A=window.ATLAS_APP,C=window.NAND_PERSONAL;if(!A||A.isDemo)return;
  const $=s=>document.querySelector(s),esc=A.esc;
  let draft=null,epoch=0,abort=null,removed=null,removedReview=null;
  const base=()=>C.publicBase(window.NAND_REAL_DATA),records=()=>C.load(base());
  const status=(message,error=false)=>{const el=$('#import-status');if(el){el.textContent=message;el.classList.toggle('error',error);}};
  function openImport(record=null){
    epoch++;abort?.abort();draft=record?{...record}:{};
    A.openModal(`<div class="modal-eyebrow">PERSONAL LIBRARY / ADD A PAPER</div><h2>${record?'개인 논문 편집':'논문을 내 지도에 놓기'}</h2><p>DOI로 서지를 가져오거나 PDF를 선택하세요. 분류와 연결 후보를 검토한 뒤 개인 맵에 저장합니다.</p>
      <div class="privacy-strip">이 브라우저에만 저장 · PDF·전문은 전송·저장하지 않음 · 공개 맵과 분리</div>
      <div class="import-sources"><label>DOI 또는 DOI 링크<input id="import-doi" autocomplete="off" spellcheck="false" placeholder="10.1109/… 또는 https://doi.org/…" value="${esc(record?.doi||'')}"></label><button id="doi-fetch" class="primary-btn">서지정보 가져오기 ↗</button><label class="file-button">PDF 파일 선택<input id="paper-pdf" type="file" accept="application/pdf,.pdf"></label></div>
      <div id="pdf-report"></div><div id="import-status" role="status" aria-live="polite">DOI 조회 시 DOI만 Crossref에 전달합니다. 스캔 PDF는 텍스트를 직접 입력해 주세요.</div>
      <form id="paper-form"><div class="import-fields"><label class="wide">논문 제목 *<input id="paper-title" required maxlength="700" value="${esc(record?.title||'')}"></label><label>저자 · 세미콜론으로 구분<input id="paper-authors" value="${esc(record?.authors?.join('; ')||'')}"></label><label>게재처<input id="paper-venue" maxlength="140" value="${esc(record?.venue||'')}"></label><label>발행 연도<input id="paper-year" type="number" min="1800" max="${new Date().getFullYear()+1}" value="${esc(record?.year||'')}"></label><label class="owned-check"><input id="paper-owned" type="checkbox" ${record?.owned?'checked':''}>내가 저자인 연구로 표시</label><label class="wide">초록 또는 연구 설명<textarea id="paper-abstract" rows="4" maxlength="3500" placeholder="초록이 제공되지 않으면 직접 입력할 수 있습니다.">${esc(record?.abstract||'')}</textarea></label><label class="wide">읽기 질문 · 메모<textarea id="paper-notes" rows="2" maxlength="1000" placeholder="이 논문에서 확인하고 싶은 질문">${esc(record?.notes||'')}</textarea></label></div>
      <div class="classify-heading"><h3>소자 × 공통 방법론</h3><button type="button" id="classify-paper" class="subtle-btn">내용으로 분류 추천 ↻</button></div><p class="small-note">키워드 기반 배치 후보입니다. 제목·초록과 PDF 추출 범위를 확인하고 직접 수정하세요.</p><div id="paper-topics"></div><div id="classification-reasons"></div><div id="import-neighbors"></div>
      <div class="import-footer"><span>저장 후에도 분류를 수정할 수 있습니다.</span><button type="submit" class="primary-btn">개인 맵에 추가하고 위치 보기 ↗</button></div></form>`);
    renderTopics(record?.topics||[]);
    $('#doi-fetch').onclick=lookup;$('#paper-pdf').onchange=readPDF;$('#classify-paper').onclick=classify;
    $('#paper-form').onsubmit=save;$('#paper-topics').onchange=previewNeighbors;
    if(record)previewNeighbors();$('#import-doi').focus();
  }
  function renderTopics(selected){
    const D=base(),groups=[['공통 방법론',D.concepts.filter(n=>C.methodIds.has(n.id))],['소자 분야',D.concepts.filter(n=>n.parent==='devices')],['동작·신뢰성·구조',D.concepts.filter(n=>['retention','endurance','disturb','program','ispp','erase','3d','ctn','fg','tunnel','trap','channel','rtn'].includes(n.id))]];
    $('#paper-topics').innerHTML=groups.map(([title,list])=>`<fieldset class="topic-options"><legend>${title}</legend>${list.map(n=>`<label><input type="checkbox" value="${n.id}" ${selected.includes(n.id)?'checked':''}>${esc(n.label)}</label>`).join('')}</fieldset>`).join('');
  }
  const selected=()=>[...document.querySelectorAll('#paper-topics input:checked')].map(el=>el.value);
  function fields(){return {...draft,title:$('#paper-title').value,authors:$('#paper-authors').value.split(';').map(s=>s.trim()).filter(Boolean),venue:$('#paper-venue').value,year:$('#paper-year').value,doi:$('#import-doi').value.trim(),abstract:$('#paper-abstract').value,notes:$('#paper-notes').value,owned:$('#paper-owned').checked,topics:selected()};}
  function classify(){
    const result=C.classify({title:$('#paper-title').value,abstract:$('#paper-abstract').value,body:draft.body||''});
    renderTopics(result.topics);draft.classificationBasis=result.reasons.length?result.reasons.map(r=>`${r.label}: ${r.hits.map(h=>`${h.source} ‘${h.word}’`).join(', ')}`).join('; '):'자동 분류 근거가 부족합니다. 사용자가 소자·방법론을 선택해야 합니다.';
    $('#classification-reasons').innerHTML=`<details><summary>분류 추천의 근거 ${result.reasons.length}개</summary><p>${esc(draft.classificationBasis)}</p><p>본문에서는 처음 12,000자 이내를 사용하며 참고문헌을 제외합니다. 인용된 선행 연구의 방법이 섞일 수 있어 최종 분류는 확인이 필요합니다.</p></details>`;
    previewNeighbors();
  }
  function previewNeighbors(){
    const ns=C.neighbors({id:draft.id||'',topics:selected()},A.data);
    $('#import-neighbors').innerHTML=`<h3>가까운 방법론의 논문 ${ns.length}편</h3><p class="small-note">공통 태그로 찾은 비교 후보입니다. 실제 인용·대립 관계를 뜻하지 않습니다.</p>${ns.map(n=>`<div class="neighbor-preview"><b>${esc(n.paper.id)} · ${esc(n.paper.venue)} ${n.paper.year}</b><span>${esc(n.paper.title)}</span><small>${n.shared.map(t=>esc(A.concepts.get(t)?.label||t)).join(' · ')}${n.device.length?' · 같은 소자 분야':' · 소자 간 방법론 연결'}</small></div>`).join('')||'<p>현재 선택한 방법론과 겹치는 수록 논문이 없습니다. 연결을 만들기 위해 관련 없는 태그를 선택할 필요는 없습니다.</p>'}`;
  }
  async function lookup(){
    let doi;try{doi=C.normalizeDOI($('#import-doi').value);}catch(e){status(e.message,true);return;}
    const ticket=++epoch;abort?.abort();abort=new AbortController();const timer=setTimeout(()=>abort.abort(),18000);
    $('#doi-fetch').disabled=true;status('Crossref에서 서지정보를 가져오고 있습니다…');
    try{
      const response=await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`,{signal:abort.signal,credentials:'omit',referrerPolicy:'no-referrer',headers:{Accept:'application/json'}});
      if(!response.ok)throw Error(response.status===404?'Crossref에 등록된 DOI를 찾지 못했습니다. DOI를 확인하거나 서지를 직접 입력해 주세요.':response.status===429?'서지 서비스의 요청 한도에 도달했습니다. 잠시 후 다시 시도하거나 직접 입력해 주세요.':`서지 서비스 응답 오류 (${response.status}). 직접 입력도 가능합니다.`);
      const payload=await response.json();if(ticket!==epoch||!$('#paper-form'))return;
      if(payload.status!=='ok'||!payload.message?.DOI)throw Error('서지 응답 형식을 확인할 수 없습니다. 직접 입력해 주세요.');
      const meta=C.crossref(payload.message);if(meta.doi!==doi)throw Error('응답 DOI가 입력 DOI와 달라 자동 적용하지 않았습니다.');
      draft={...draft,...meta};$('#import-doi').value=meta.doi;$('#paper-title').value=meta.title;$('#paper-authors').value=meta.authors.join('; ');$('#paper-venue').value=meta.venue;$('#paper-year').value=meta.year;
      if(meta.abstract)$('#paper-abstract').value=meta.abstract;classify();
      const existing=A.data.papers.find(p=>p.doi?.toLowerCase()===doi);
      status(existing?`이미 맵에 있는 ${existing.id}입니다. 저장하면 중복 추가 없이 기존 논문의 위치를 엽니다.`:meta.abstract?'서지·초록을 가져왔습니다. 분류를 검토한 뒤 추가하세요.':'서지정보를 가져왔습니다. 제공된 초록이 없어 제목만으로 분류했습니다. 설명을 보완하면 더 정확합니다.');
    }catch(e){if(ticket===epoch)status(e.name==='AbortError'?'서지 조회 시간이 초과됐습니다. 다시 시도하거나 직접 입력해 주세요.':e.message||'네트워크 오류입니다. 직접 입력도 가능합니다.',true);}
    finally{clearTimeout(timer);if(ticket===epoch&&$('#doi-fetch'))$('#doi-fetch').disabled=false;}
  }
  async function readPDF(event){
    const file=event.target.files?.[0];if(!file)return;
    const ticket=++epoch;abort?.abort();if(file.size>25*1024*1024){status('25 MB 이하의 PDF를 선택해 주세요.',true);return;}
    if(!/\.pdf$/i.test(file.name)){status('PDF 파일을 선택해 주세요.',true);return;}
    status('PDF를 이 브라우저에서 읽고 있습니다…');$('#doi-fetch').disabled=true;
    let doc,loadingTask;
    try{
      const bytes=new Uint8Array(await file.arrayBuffer());if(new TextDecoder().decode(bytes.slice(0,1024)).indexOf('%PDF-')<0)throw Error('유효한 PDF 파일이 아닙니다.');
      const pdfjs=await import('./vendor/pdfjs/pdf.mjs');pdfjs.GlobalWorkerOptions.workerSrc=new URL('./vendor/pdfjs/pdf.worker.mjs',location.href).href;
      loadingTask=pdfjs.getDocument({data:bytes,isEvalSupported:false,disableFontFace:true,useSystemFonts:false,useWorkerFetch:false});
      doc=await loadingTask.promise;
      const texts=[],readCount=Math.min(doc.numPages,40);let metadata;
      try{metadata=await doc.getMetadata();}catch{}
      for(let pageNo=1;pageNo<=readCount;pageNo++){
        if(ticket!==epoch)return;
        const page=await doc.getPage(pageNo),content=await page.getTextContent();texts.push(content.items.map(item=>item.str+(item.hasEOL?'\n':' ')).join(''));page.cleanup();
        status(`PDF 텍스트 추출 ${pageNo}/${readCount}쪽…`);
      }
      if(ticket!==epoch||!$('#paper-form'))return;
      const full=texts.join('\n\n'),main=full.split(/(?:\n\s*|\s{2,})(?:references|bibliography)\s*\n/i)[0];
      const first=texts[0]||'',candidates=C.extractDOIs(first),abstract=(main.match(/\babstract\s*[:—–-]?\s*([\s\S]{60,3500}?)(?:index terms|keywords|\n\s*(?:I\.?\s+)?introduction)/i)||[])[1]||'';
      const suggested=metadata?.info?.Title?.replace(/<[^>]*>/g,'').trim();
      draft={...draft,pdfRead:true,pagesRead:readCount,totalPages:doc.numPages,body:main.slice(0,160000),metadataProvider:'PDF에서 추출'};
      if(suggested&&!/^untitled|^microsoft|^word/i.test(suggested))$('#paper-title').value=suggested.slice(0,700);
      else if(!$('#paper-title').value)$('#paper-title').value=file.name.replace(/\.pdf$/i,'').replace(/_/g,' ').slice(0,700);
      if(abstract)$('#paper-abstract').value=abstract.replace(/\s+/g,' ').trim();
      if(candidates.length===1)$('#import-doi').value=candidates[0];
      $('#pdf-report').innerHTML=`<div class="pdf-report"><strong>PDF ${readCount}/${doc.numPages}쪽 · ${full.length.toLocaleString()}자 추출</strong><p>${full.trim().length<120?'텍스트가 거의 없습니다. 스캔 PDF는 OCR이 필요하며 제목·초록을 직접 입력할 수 있습니다.':readCount<doc.numPages?'처음 40쪽만 읽었습니다. 아래 분류는 추출한 범위에 한정됩니다.':'원문 주장의 검증 전 단계입니다. 파일과 전문은 저장하지 않습니다.'}</p>${candidates.length?`<label>첫 페이지에서 찾은 DOI 후보<select id="pdf-doi-candidate"><option value="">직접 선택</option>${candidates.map(d=>`<option value="${esc(d)}" ${candidates.length===1?'selected':''}>${esc(d)}</option>`).join('')}</select></label><p>해당 논문 자신의 DOI인지 확인한 뒤 ‘서지정보 가져오기’를 누르세요.</p>`:'<p>첫 페이지에서 DOI를 찾지 못했습니다. DOI 없이도 수동으로 추가할 수 있습니다.</p>'}</div>`;
      if($('#pdf-doi-candidate'))$('#pdf-doi-candidate').onchange=e=>{$('#import-doi').value=e.target.value;};
      classify();status('PDF 텍스트를 읽었습니다. 제목·DOI·분류를 확인해 주세요. PDF 내용은 외부에 보내지 않았습니다.');
    }catch(e){if(ticket===epoch)status(e.name==='PasswordException'?'암호로 잠긴 PDF입니다. 잠금 해제한 파일을 선택하거나 서지를 직접 입력해 주세요.':`PDF를 읽지 못했습니다: ${e.message||'텍스트 추출 오류'}. DOI 또는 직접 입력을 이용할 수 있습니다.`,true);}
    finally{if(ticket===epoch&&$('#doi-fetch'))$('#doi-fetch').disabled=false;loadingTask?.destroy().catch(()=>{});}
  }
  function save(event){
    event.preventDefault();try{
      const r=C.sanitize(fields(),base()),store=records(),existing=A.data.papers.find(p=>p.doi&&r.doi&&p.doi.toLowerCase()===r.doi&&!p.personal);
      if(existing&&draft.id!==r.id){closeImport();A.focusPaper(existing.id);return;}
      if(store.records.length>=C.MAX&&!store.records.some(p=>p.id===r.id))throw Error(`개인 맵은 최대 ${C.MAX}편까지 저장할 수 있습니다. 내보낸 뒤 정리해 주세요.`);
      if(draft.id&&draft.id!==r.id)store.records=store.records.filter(p=>p.id!==draft.id);
      const i=store.records.findIndex(p=>p.id===r.id);if(i<0)store.records.push(r);else store.records[i]=r;
      store.focusId=r.id;C.write(store);closeImport();A.reloadPersonal(r.id);
    }catch(e){status(e.name==='QuotaExceededError'?'브라우저 저장 공간이 부족합니다. 개인 맵을 내보낸 뒤 항목을 정리해 주세요.':e.message,true);}
  }
  function closeImport(){epoch++;abort?.abort();draft=null;$('#modal').close();}
  function download(data,name){const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function manage(){
    const store=records();
    A.openModal(`<div class="modal-eyebrow">MY MAP / THIS BROWSER</div><h2>내 라이브러리 ${store.records.length}편</h2><p>이 브라우저에 저장한 참고문헌·분류·메모입니다. 업로드한 논문은 작성 논문과 구분하며, 직접 저자라고 표시한 논문만 내 연구로 분류합니다. 공개 맵에 반영하려면 JSON을 내보내 이 대화에서 원문 근거를 함께 검토할 수 있습니다. 공개 맵에 수록된 문헌은 다른 브라우저에서도 바로 보입니다. 이 목록은 개인 보관본이며, 삭제해도 공개 문헌은 유지됩니다. 개인 메모는 자동 동기화되지 않습니다.</p><div class="personal-toolbar"><button class="primary-btn" data-personal-add>+ 논문 추가</button><button class="subtle-btn" data-personal-export>개인 맵 JSON 내보내기 ↓</button><label class="file-button">JSON 가져오기<input type="file" id="personal-json" accept=".json,application/json"></label></div><div id="personal-status" role="status">${esc(store.warning||'PDF와 전문은 백업에 포함되지 않습니다.')}</div>${removed?'<button class="subtle-btn" id="restore-personal">방금 삭제한 논문 복원</button>':''}<div class="personal-records">${store.records.map(p=>`<article><div><b>${p.owned?'★ 내 연구':'◇ 참고문헌'}${A.papers.get(p.id)?.publishedReference?' · 공개 수록':''} · ${esc(p.venue)} ${p.year||''}</b><h3>${esc(p.title)}</h3><small>${esc(p.doi||'DOI 없이 수동 등록')}</small></div><div class="personal-row-actions"><button data-personal-focus="${p.id}">맵 위치 ↗</button><button data-personal-edit="${p.id}">편집</button><button data-personal-remove="${p.id}">삭제</button></div></article>`).join('')||'<p class="library-empty">추가한 논문이 없습니다. DOI 또는 PDF로 시작하세요.</p>'}</div>`);
    $('#personal-json').onchange=importJSON;
    if($('#restore-personal'))$('#restore-personal').onclick=()=>{const s=records();s.records.push(removed);s.review=window.NAND_REVIEW.combine(s.review,removedReview);C.write(s);removed=null;removedReview=null;A.reloadPersonal();manage();};
  }
  async function importJSON(event){
    const file=event.target.files?.[0];if(!file)return;
    try{
      if(file.size>8*1024*1024)throw Error('8 MB 이하의 개인 맵 JSON을 선택해 주세요.');
      const incoming=JSON.parse(await file.text());if(incoming.version!==1||!Array.isArray(incoming.records))throw Error('개인 맵 내보내기로 만든 JSON이 아닙니다.');
      if(incoming.records.length>C.MAX)throw Error(`최대 ${C.MAX}편까지 가져올 수 있습니다.`);
      const D=base(),clean=incoming.records.map(p=>C.sanitize(p,D)),store=records(),updateIds=new Set([...(incoming.review?.papers||[]).map(p=>p.id),...(Array.isArray(incoming.updates)?incoming.updates:[])]);let count=0,updated=0;
      for(const p of clean){const i=store.records.findIndex(r=>r.id===p.id);if(i>=0){if(updateIds.has(p.id)){store.records[i]={...p,owned:store.records[i].owned,notes:store.records[i].notes||p.notes};updated++;}continue;}if(D.papers.some(r=>r.id===p.id||p.doi&&r.doi?.toLowerCase()===p.doi))continue;store.records.push(p);count++;}
      if(store.records.length>C.MAX)throw Error(`합계 ${C.MAX}편을 초과합니다. 저장된 항목을 정리해 주세요.`);
      if(incoming.review)store.review=window.NAND_REVIEW.sanitize(window.NAND_REVIEW.combine(store.review,incoming.review),D,store.records);
      C.write(store);A.reloadPersonal();manage();$('#personal-status').textContent=`${count}편 추가 · ${updated}편 갱신. 원문 검토 ${store.review?.papers.length||0}편 · 근거 연결 ${store.review?.relations.length||0}개 · 검토 질문 ${store.review?.questions.length||0}개. 기존 저자 표시와 개인 메모는 유지합니다.`;
    }catch(e){$('#personal-status').textContent=e.name==='QuotaExceededError'?'브라우저 저장 공간이 부족하여 가져오지 않았습니다. 기존 개인 맵은 유지됩니다. JSON을 보관하고 더 작은 묶음으로 가져오세요.':`가져오지 않았습니다: ${e.message}`;}
  }
  function expandedLibrary(){
    const b=A.data.publicBatches?.at(-1);if(!b)return;
    const ps=b.paperIds.map(id=>A.papers.get(id)).filter(Boolean),qs=A.data.questions.filter(q=>b.questionIds.includes(q.id));
    A.openModal(`<div class="modal-eyebrow">NEW LITERATURE / DEVICE & METHOD</div><h2>${esc(b.title)}</h2><p>${esc(b.date)} · ${ps.length}편 · ${new Set(ps.map(p=>p.venue)).size}개 게재처 · 근거 연결 ${b.relationIds.length}개 · 비교 질문 ${qs.length}개</p><div class="privacy-strip">직접 작성한 논문과 구분되는 참고문헌입니다. 원문 확인 범위와 비교 조건을 각 논문에 표시했습니다. 다른 소자·데이터의 성능 수치를 NAND의 성능으로 해석하지 않습니다.</div>${[['NAND 소자·배열',p=>p.topics.includes('device-nand')],['공통 방법론·다른 소자',p=>!p.topics.includes('device-nand')]].map(([label,test])=>`<h3 class="position-heading">${label}</h3>${ps.filter(test).map(p=>`<article class="neighbor-preview"><button data-personal-focus="${p.id}"><b>${esc(p.venue)} ${p.year} · ${esc(p.title)} ↗</b></button><p>${esc(p.summary)}</p><small>${esc(p.verification.detail)}</small></article>`).join('')}`).join('')}<h3 class="position-heading">기존 문헌과 이어지는 질문</h3>${qs.map(q=>`<button class="question-list-button" data-frontier="${esc(q.id)}"><span>?</span>${esc(q.title)} ↗</button>`).join('')}<p class="small-note">점선과 물음표는 추가 검증할 관계입니다. 인용 부재나 분야 전체의 미해결 문제를 증명한 표시는 아닙니다.</p>`);
  }
  function reviewedLibrary(){
    const r=A.data.reviews||window.NAND_REVIEW.empty(),ps=r.papers.map(x=>A.papers.get(x.id)).filter(Boolean),label=id=>{const p=A.papers.get(id);return `${p?.authors[0]||id} · ${p?.title.slice(0,72)||id}`;};
    A.openModal(`<div class="modal-eyebrow">ORIGINALS / EVIDENCE REVIEW</div><h2>원문으로 확인한 연구 연결</h2><p>${ps.length}편 검토 (학회요약 ${ps.filter(p=>p.documentType==='conference_extended_abstract').length}편 포함) · 직접 인용 ${r.relations.filter(x=>x.type==='cites').length}개 · 접근·조건 비교 ${r.relations.filter(x=>x.type!=='cites').length}개 · 후속 질문 ${r.questions.length}개</p><div class="privacy-strip">공개 검토 ${A.data.publicReview?.papers.length||0}편과 이 브라우저의 추가 검토를 모았습니다. 공개 검토는 모든 브라우저에서 볼 수 있습니다. PDF·전문·개인 메모는 공개하지 않습니다. 비교선은 성능 우열이나 검증된 모순을 뜻하지 않습니다.</div><h3>함께 검증할 질문</h3>${r.questions.map(q=>`<button class="question-list-button" data-frontier="${esc(q.id)}"><span>?</span>${esc(q.title)} ↗</button>`).join('')}<h3 class="position-heading">확인한 인용과 접근 차이</h3>${r.relations.map(x=>`<button class="question-list-button" data-edge="${esc(x.id)}"><small>${x.type==='cites'?'참고문헌 확인 →':'양쪽 원문 비교 ↔'}</small><br>${esc(label(x.source))}<br>${x.type==='cites'?'→':'↔'} ${esc(label(x.target))}<br><small>${esc(x.note)}</small></button>`).join('')}<h3 class="position-heading">검토한 논문</h3>${ps.map(p=>`<article class="neighbor-preview"><button data-paper="${p.id}" data-close-modal="true"><b>${esc(p.venue)} ${p.year||''} · ${esc(p.title)} ↗</b></button><p>${esc(p.summary)}</p><small>${esc(p.verification.detail)}</small></article>`).join('')||'<p>아직 개인 원문 검토 기록이 없습니다.</p>'}`);
  }
  function showPosition(p){
    const ns=C.neighbors(p,A.data),qs=(A.data.questions||[]).filter(q=>q.topics.some(t=>p.topics.includes(t)));
    A.openModal(`<div class="modal-eyebrow">PERSONAL PAPER / POSITION CANDIDATE</div><h2>${esc(p.title)}</h2><p>${esc(p.deviceScope)} · ${esc(p.approach)}</p><div class="privacy-strip">개인 맵 · ${esc(p.verification.label)} · ${p.reviewed?'원문 근거 확인 · 분야 전체의 독창성 판정은 아님':'주장·독창성 검토 전'}</div><h3>배치한 이유</h3><p>${esc(p.classificationBasis)}</p><div class="tag-row">${p.topics.map(t=>`<span class="chip">${esc(A.concepts.get(t)?.label||t)}</span>`).join('')}</div><h3 class="position-heading">비교할 방법론 이웃</h3>${ns.map(n=>`<article class="neighbor-preview"><button data-paper="${n.paper.id}" data-close-modal="true">${esc(n.paper.id)} · ${esc(n.paper.title)} ↗</button><small>공통: ${n.shared.map(t=>esc(A.concepts.get(t)?.label||t)).join(' · ')}</small><p>${esc(n.paper.limitation)}</p></article>`).join('')||'<p>현재 수록 문헌에서 공통 방법론 이웃을 찾지 못했습니다.</p>'}<h3 class="position-heading">이 논문과 함께 검토할 질문</h3><p>이 질문들을 해결했다는 뜻이나 독창성 판정이 아닙니다. 원문의 평가 범위를 확인해 연결하세요.</p>${qs.map(q=>`<button class="question-list-button" data-frontier="${q.id}"><span>?</span>${esc(q.title)} ↗</button>`).join('')||'<p>현재 분류와 연결된 검토 질문이 없습니다.</p>'}<button class="subtle-btn" data-personal-edit="${p.id}">분류·메모 수정</button>`);
  }
  function showFrontier(id,index=0){
    const q=A.data.questions?.find(q=>q.id===id);if(!q)return;const pair=q.pairs[index]||q.pairs[0];
    A.openModal(`<div class="modal-eyebrow">EXISTING PAPERS / EVIDENCE & OPEN QUESTION</div><h2>? ${esc(q.title)}</h2><p>${esc(q.question)}</p><div class="privacy-strip">${esc(q.relationLabel||'근거 기반 비교 · 검증할 질문')} · 확인 ${esc(q.checkedAt)}</div><nav class="pair-tabs" aria-label="비교할 논문 쌍">${q.pairs.map((p,i)=>`<button class="${p===pair?'active':''}" data-frontier="${q.id}" data-frontier-pair="${i}">${p.source} ↔ ${p.target}</button>`).join('')}</nav><div class="frontier-positions">${q.positions.filter(p=>[pair.source,pair.target].includes(p.paperId)).map(p=>{const paper=A.papers.get(p.paperId);return `<article><button data-paper="${p.paperId}" data-close-modal="true"><b>${esc(p.paperId)} · ${esc(paper?.venue)} ${paper?.year}</b><h3>${esc(paper?.title)}</h3></button><p>${esc(p.claim)}</p>${p.conditions?`<p class="small-note">조건: ${esc(p.conditions)}</p>`:''}<a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.locator)} · 근거 출처 ↗</a>${p.publisherUrl?`<p><a href="${esc(p.publisherUrl)}" target="_blank" rel="noopener noreferrer">출판사 원문 ↗</a></p>`:''}${p.verificationScope?`<p class="small-note">확인 범위: ${esc(p.verificationScope)}</p>`:''}</article>`;}).join('')}</div><div class="open-question"><h3>? ${esc(pair.label||'아직 함께 검증할 점')}</h3><p>${esc(pair.reason||q.gap)}</p><h3>어떻게 확인할까?</h3><p>${esc(pair.test||q.proposedTest)}</p></div><p class="small-note">${esc(q.caution)} ${esc(q.scopeNote||'현재 수록 문헌에서 도출한 질문이며 분야 전체의 연구 공백을 증명하지 않습니다.')}</p><button class="primary-btn" data-frontier-map="${q.id}" data-frontier-pair="${q.pairs.indexOf(pair)}">${pair.source} ↔ ? ↔ ${pair.target} 확대 보기</button>`);
  }
  function frontiers(){
    const categories=[...new Set(A.data.questions.map(q=>q.category))];
    A.openModal(`<div class="modal-eyebrow">EXISTING CORPUS / PAIRWISE QUESTIONS</div><h2>수록 논문 사이, 아직 남은 질문.</h2><p>공개 문헌 ${A.data.papers.filter(p=>!p.personal).length}편과 개인 문헌 ${A.data.papers.filter(p=>p.personal).length}편에서 ${A.data.questions.length}개 쟁점, ${A.data.questions.reduce((n,q)=>n+q.pairs.length,0)}개 논문 쌍을 비교합니다. 각 카드를 열고 두 논문만 확대해 보세요.</p>${categories.map(category=>`<h3 class="position-heading">${esc(category)}</h3><div class="frontier-grid">${A.data.questions.filter(q=>q.category===category).map(q=>`<button class="frontier-card" data-frontier="${q.id}"><span class="frontier-symbol">?</span><small>${esc(q.relationLabel)}</small><h3>${esc(q.title)}</h3><p>${esc(q.question)}</p><span>${q.pairs.map(p=>`${p.source} ↔ ${p.target}`).join(' / ')} ↗</span></button>`).join('')}</div>`).join('')}<div class="modal-note">점선 ? = 조건 차이를 판별하거나 방법을 연결할 추가 검증. 이미 인용하는 논문 사이에도 남은 질문이 있습니다. 분야 전체의 중요도 순위·미인용 판정·검증된 반박을 뜻하지 않습니다. 본문 근거가 부족한 P22–P23, P39–P41 비교 후보는 이번 목록에서 보류했습니다.</div>`);
  }
  document.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.hasAttribute('data-personal-add'))openImport();
    if(b.hasAttribute('data-personal-manage'))manage();
    if(b.hasAttribute('data-reviewed-list'))reviewedLibrary();
    if(b.hasAttribute('data-expansion-list'))expandedLibrary();
    if(b.hasAttribute('data-personal-export'))download(records(),'nand-atlas-personal-map.json');
    if(b.dataset.personalEdit){const r=records().records.find(r=>r.id===b.dataset.personalEdit);if(r)openImport(r);}
    if(b.dataset.personalFocus){$('#modal').close();A.focusPaper(b.dataset.personalFocus);}
    if(b.dataset.personalRemove){const s=records();removed=s.records.find(p=>p.id===b.dataset.personalRemove);removedReview=s.review;s.records=s.records.filter(p=>p.id!==b.dataset.personalRemove);if(s.focusId===b.dataset.personalRemove)s.focusId=null;try{C.write(s);A.reloadPersonal();manage();}catch(e){A.toast('저장소를 수정할 수 없습니다.');}}
    if(b.dataset.personalPosition){const p=A.papers.get(b.dataset.personalPosition);if(p)showPosition(p);}
    if(b.hasAttribute('data-frontiers'))frontiers();
    if(b.dataset.frontier)showFrontier(b.dataset.frontier,Number(b.dataset.frontierPair)||0);
    if(b.dataset.frontierMap){const q=A.data.questions.find(q=>q.id===b.dataset.frontierMap);$('#modal').close();A.focusFrontier(q,Number(b.dataset.frontierPair)||0);}
  });
  $('#modal').addEventListener('close',()=>{epoch++;abort?.abort();draft=null;});
  window.NAND_PERSONAL_UI={openImport,manage,showPosition,showFrontier,frontiers,reviewedLibrary,expandedLibrary};
})();
