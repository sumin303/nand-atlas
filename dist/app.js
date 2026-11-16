(() => {
  'use strict';
  const isDemo = new URLSearchParams(location.search).get('dataset') === 'demo';
  const D = isDemo ? window.NAND_DATA : window.NAND_REAL_DATA;
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const concepts = new Map(D.concepts.map(n => [n.id,n]));
  const papers = new Map(D.papers.map(p => [p.id,p]));
  const storageKey = isDemo ? 'nand-atlas-v1-bookmarks' : 'nand-atlas-research-v1-bookmarks';
  let saved;
  try { saved = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]').filter(id => papers.has(id))); } catch { saved = new Set(); }
  const state = {view:'map', mode:'concept', topic:isDemo?'ctn':'nand', paper:null, panelTab:'papers', focus:false, cluster:null, overviewTransform:null, clusterPositions:new Map(),
    venues:new Set(D.venues), relations:new Set(Object.keys(D.relationTypes)), compare:new Set(), saved,
    expanded:new Set(['storage']), query:'', evidence:'all', savedOnly:false, sort:'newest', transform:{x:0,y:0,k:1}, positions:{concept:new Map(),papers:new Map()}};
  const graph = $('#graph'), world = $('#graph-world'), stage = $('#graph-stage');
  const descendants = id => { const found=new Set([id]); let changed=true; while(changed){changed=false; D.concepts.forEach(n=>{if(found.has(n.parent)&&!found.has(n.id)){found.add(n.id);changed=true;}});} return found; };
  const visiblePaper = p => state.venues.has(p.venue) && (isDemo || state.evidence==='all' || (state.evidence==='publisher' ? p.publisherVerified===true : state.evidence==='original' ? p.verification.level!=='abstract' : p.verification.level===state.evidence));
  const topicPapers = (id=state.topic) => { const ids=descendants(id); return D.papers.filter(p=>p.topics.some(t=>ids.has(t))&&visiblePaper(p)); };
  const activeRelations = () => D.relations.filter(r=>state.relations.has(r.type)&&visiblePaper(papers.get(r.source))&&visiblePaper(papers.get(r.target)));
  const relatedRelations = id => {const ids=new Set(topicPapers(id).map(p=>p.id));return activeRelations().filter(r=>ids.has(r.source)&&ids.has(r.target));};
  const ancestry = id => {const path=[];let n=concepts.get(id);while(n){path.unshift(n);n=concepts.get(n.parent);}return path;};
  const color = n => D.groups[n.group].color;
  const paperColor = p => color(concepts.get(p.topics[0]));

  const verificationLabel = p => isDemo ? '가상 예시' : p.verification.label;
  const relationStatus = r => isDemo ? '가상 예시' : ({citation_verified:'참고문헌 확인',author_comparison:'저자 본문 비교',analyst_comparison:'분석자 비교'}[r.status] || r.status);
  const badge = p => `<span class="verification-badge ${isDemo?'mock':p.verification.level}">${esc(verificationLabel(p))}</span>`;
  const sourceLinks = p => isDemo ? '' : `<div class="source-links">${p.doi?`<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener noreferrer">DOI ↗</a>`:''}<a href="${esc(p.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.sourceLabel||(p.verification.level==='abstract'?'확인한 초록':p.id==='P21'||p.id==='P22'?'원문 위치 · 접근 제한':'확인한 원문'))} ↗</a>${p.metadataUrl&&p.metadataUrl!==p.sourceUrl?`<a href="${esc(p.metadataUrl)}" target="_blank" rel="noopener noreferrer">서지 정보 ↗</a>`:''}</div>`;
  const evidenceItems = list => list.map(e=>{const p=papers.get(e.paperId);return `<div class="evidence-item"><a href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">${esc(e.paperId)} · ${esc(e.locator)} ↗</a><p>${esc(e.note)}</p><small>${esc(p.venue)} ${p.year} · ${esc(p.verification.label)}${p.id==='P21'||p.id==='P22'?' · 검색 색인 확인 / 직접 PDF 접근 제한':''}</small></div>`;}).join('');
  function initializeDatasetUI(){
    $('#dataset-select').value=isDemo?'demo':'research';
    $('.main-nav [data-view="library"] span').textContent=D.papers.length;
    $('.version').textContent=isDemo?'LAB / DEMO':'RESEARCH / 03';
    $('.sidebar-footer div').innerHTML=isDemo?'가상 데이터로 탐색하기<small>실제 논문과 분리된 UI 예시</small>':`NAND 문헌 지도<small>${D.checkedAt} 확인 · ${D.papers.length}편 선별</small>`;
    $('#evidence-filter-wrap').hidden=isDemo;
    $('#my-research-btn').hidden=isDemo;
    $('#library-view').setAttribute('aria-label',isDemo?'가상 논문 라이브러리':'실제 논문 라이브러리');
    $('#library-view > .muted').textContent=isDemo?'18편의 가상 논문으로 탐색 구조를 시험합니다. 실제 서지 정보가 아닙니다.':D.description;
    $('#sort-papers option[value="newest"]').textContent=isDemo?'예시 연도 최신순':'발행 연도 최신순';
    $('#sort-papers option[value="oldest"]').textContent=isDemo?'예시 연도 오래된순':'발행 연도 오래된순';
    const levels=['pdf','text','abstract'].map(level=>D.papers.filter(p=>p.verification?.level===level).length),cites=D.relations.filter(r=>r.type==='cites').length;
    $('#research-brief').innerHTML=isDemo?'<strong>가상 예시 데이터</strong><p>제목·연도·게재처·인용·상충은 실제 연구 정보가 아닙니다.</p>':`<strong>${D.papers.length} PAPERS / 6 AXES</strong><p>PDF·그림 ${levels[0]} · 원문 텍스트 ${levels[1]} · 초록 ${levels[2]}<br>직접 인용 ${cites} · 비교·확장 ${D.relations.length-cites} · 검증된 상충 ${D.relations.filter(r=>r.type==='challenges').length}</p><button data-my-research="true">★ 내 연구 위치 ↗</button>`;
  }
  function positionPreview(p){return `<div class="owned-preview"><span class="eyebrow">★ MY FIRST PAPER</span><strong>${esc(p.position.primary)}</strong><p>${esc(p.position.device)}</p><button data-position="${p.id}" class="text-btn">차별점 · 후속 연구와 원문 근거 ↗</button></div>`;}
  function openMyResearch(){state.venues=new Set(D.venues);state.evidence='all';$('#evidence-filter').value='all';renderFilters();enterCluster('models');selectPaper('P26');}
  function openPosition(){
    const p=papers.get('P26'),v=p.position;
    const links=ids=>`<div class="review-links">${ids.map(id=>`<button class="chip" data-paper="${id}" data-close-modal="true">${id} · ${esc(papers.get(id).authors[0].split(' ').at(-1))} ${papers.get(id).year} ↗</button>`).join('')}</div>`;
    openModal(`<div class="modal-eyebrow">MY RESEARCH / IEEE XPLORE ORIGINALS</div><h2>${esc(v.headline)}</h2><p>${esc(v.primary)}</p><div class="owned-preview"><strong>${esc(v.device)}</strong><p>${esc(v.interpretation)}</p></div><p class="review-dates">${esc(v.dates)}</p><h3 class="position-heading">주변 연구와 무엇이 다른가?</h3><div class="table-scroll"><table class="compare-table neighborhood-table"><thead><tr><th>비교 축 · 원문</th><th>주변 문헌이 이미 다룬 것</th><th>P26의 위치 · 해석 범위</th></tr></thead><tbody>${v.comparisons.map(c=>`<tr><th>${esc(c.title)}${links(c.ids)}<small>${esc(c.locators)}</small></th><td>${esc(c.known)}</td><td>${esc(c.difference)}</td></tr>`).join('')}</tbody></table></div><h3 class="position-heading">원문으로 뒷받침되는 차별점과 한계</h3><div class="guide-grid">${v.contributions.map(c=>`<article class="insight-card"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p>${links(c.ids)}</article>`).join('')}</div><h3 class="position-heading">후속 연구로 검증할 질문</h3><p>아래는 원문의 평가 범위를 비교해 도출한 제안입니다. 아직 실험으로 확인된 효과나 전 분야의 연구 공백은 아닙니다.</p><div class="guide-grid">${v.followups.map(c=>`<article class="insight-card"><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><small>${esc(c.locator)}</small>${links(c.ids)}</article>`).join('')}</div><div class="coverage-note"><strong>확인 범위와 관계 해석</strong><p>${esc(v.coverage)}</p><p>${esc(v.relationNote)}</p></div><section class="evidence-block"><h3>P26 원문 근거</h3>${evidenceItems(p.evidence)}</section>`);
  }
  function renderOverview(){
    const roots=D.concepts.filter(n=>n.parent==='nand');
    $('#inspector').innerHTML=`<div class="inspector-top"><span class="eyebrow">LANDSCAPE / 6 RESEARCH AXES</span></div><h2>전체 맵, 나의 위치.</h2><p class="description">문제·소자·방법의 축을 함께 봅니다. 한 논문은 여러 가지에 속하며, 개념 점을 누르면 그 안의 논문들이 펼쳐집니다.</p>${positionPreview(papers.get('P26'))}<div class="coverage-list">${roots.map(n=>{const ps=topicPapers(n.id),original=ps.filter(p=>p.verification.level!=='abstract').length;return `<button class="coverage-row" data-topic="${n.id}" style="--topic-color:${color(n)}"><i></i><span><strong>${esc(n.ko)}</strong><small>본문 ${original} · 초록 ${ps.length-original} · 중복 태그 포함</small></span><b>${ps.length}</b><span>↗</span></button>`;}).join('')}</div><div class="coverage-note"><strong>문헌 수집의 현재 범위</strong><p>색이 옅은 빈 점은 아직 수록 문헌이 없는 주제입니다. 연구가 없다는 뜻은 아닙니다. 생성형 AI·전이학습 주변에 IEEE 원문 9편을 추가했습니다. VLSI의 직접 관련 문헌, 반복 능동 표본 선택, disturb의 원문은 더 조사할 영역입니다.</p><p>이 표의 편수는 현재 필터의 수록 문헌 분포이며 분야 전체의 연구량·인기 순위가 아닙니다. 초청 리뷰 1편도 별도로 표시합니다.</p></div><button class="explore-network" data-insight="overview">문헌의 흐름과 읽기 경로 <span>↗</span></button>`;
  }

  let toastTimer;
  function toast(message) {$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600);}
  function setHash(){const q=new URLSearchParams({topic:state.topic});if(state.paper)q.set('paper',state.paper);q.set('view',state.cluster?'cluster':state.mode==='papers'?'papers':'overview');history.replaceState(null,'',`#${q}`);}
  function readHash(){const q=new URLSearchParams(location.hash.slice(1));state.paper=papers.has(q.get('paper'))?q.get('paper'):null;state.topic=concepts.has(q.get('topic'))?q.get('topic'):state.paper?papers.get(state.paper).topics[0]:(isDemo?'ctn':'nand');state.mode=q.get('view')==='papers'?'papers':'concept';state.cluster=(q.has('topic')||state.paper||!isDemo)&&state.mode==='concept'&&q.get('view')!=='overview'&&state.topic!=='nand'?state.topic:null;}
  function selectedScroll(){if(innerWidth<=1000)$('#inspector').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});}
  function selectTopic(id){if(!concepts.has(id))return;if(id==='nand'){state.topic=id;exitCluster();return;}enterCluster(id);}
  function selectPaper(id,scroll=false){if(!papers.has(id))return;state.paper=id;if(!state.cluster)state.topic=papers.get(id).topics[0];setHash();renderTree();renderInspector();$('#inspector').scrollTop=0;if(state.view==='map'){drawGraph();if(state.focus&&!state.cluster)fitGraph();}if(scroll)selectedScroll();}
  function revealMap(){state.view='map';$('#map-view').hidden=false;$('#library-view').hidden=true;$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view==='map'));}
  function enterCluster(id){
    cancelCamera();const wasVisible=state.view==='map',previousNode=currentData?.nodes.find(n=>n.id===id),base=concepts.get(id);
    if(!state.cluster&&state.mode==='concept'&&wasVisible)state.overviewTransform={...state.transform};
    state.cluster=id;state.topic=id;state.paper=null;state.mode='concept';state.panelTab='papers';state.focus=false;
    ancestry(id).forEach(n=>state.expanded.add(n.id));revealMap();setHash();renderTree();renderInspector();$('#inspector').scrollTop=0;
    $('#focus-toggle').checked=false;$$('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode==='concept'));
    drawGraph();const target=fitTransform();
    if(!wasVisible||!previousNode){state.transform={...target,k:target.k*.65,x:stage.clientWidth/2-base.x*target.k*.65,y:stage.clientHeight/2-base.y*target.k*.65};applyTransform();}
    animateCamera(target);world.classList.remove('cluster-opening');void world.getBoundingClientRect();world.classList.add('cluster-opening');
    $('#graph-tooltip').hidden=true;if(innerWidth<=1000)$('#map-view').scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'start'});
  }
  function exitCluster(){cancelCamera();const old=state.overviewTransform;if(!isDemo)state.topic='nand';state.cluster=null;state.paper=null;state.mode='concept';state.focus=false;revealMap();$('#focus-toggle').checked=false;$$('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode==='concept'));setHash();renderTree();renderInspector();drawGraph();const target=fitTransform();animateCamera(target);$('#inspector').scrollTop=0;state.overviewTransform=null;world.classList.remove('cluster-opening');$('#graph-tooltip').hidden=true;}
  function setView(view){state.view=view;$('#map-view').hidden=view!=='map';$('#library-view').hidden=view!=='library';$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));if(view==='library')renderLibrary();else requestAnimationFrame(()=>{drawGraph();fitGraph();});}
  function setMode(mode,focus=state.focus){cancelCamera();state.cluster=null;state.overviewTransform=null;state.mode=mode;state.focus=focus;$('#focus-toggle').checked=focus;$$('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));setHash();setView('map');}
  function renderTree(){
    const own=new Set(isDemo?[]:papers.get('P26').topics);
    const row=(n,depth=0)=>{const children=D.concepts.filter(c=>c.parent===n.id),open=state.expanded.has(n.id);return `<div class="tree-row ${depth?'child':''} ${n.id===state.topic&&!state.paper?'active':''}" style="padding-left:${depth*12}px">${children.length?`<button class="tree-toggle" data-expand="${n.id}" aria-label="${esc(n.ko)} 하위 주제 ${open?'접기':'펼치기'}" aria-expanded="${open}">${open?'⌄':'›'}</button>`:'<span class="tree-spacer"></span>'}<button class="topic-button" data-topic="${n.id}" ${n.id===state.topic?'aria-current="true"':''}><i class="topic-dot" style="background:${color(n)}"></i>${esc(depth?n.label:n.ko)}${own.has(n.id)?'<span class="own-topic" title="내 연구가 속한 주제">★</span>':''}</button><span class="tree-count">${topicPapers(n.id).length.toString().padStart(2,'0')}</span></div>${children.length?`<div class="tree-children ${open?'':'collapsed'}">${children.map(c=>row(c,depth+1)).join('')}</div>`:''}`;};
    $('#topic-tree').innerHTML=`<div class="tree-row ${state.topic==='nand'?'active':''}"><button class="topic-button" data-topic="nand"><i class="topic-dot" style="background:${color(concepts.get('nand'))}"></i>전체 연구 맵</button><span class="tree-count">${topicPapers('nand').length}</span></div>`+D.concepts.filter(n=>n.parent==='nand').map(n=>`<div class="tree-group">${row(n)}</div>`).join('');
  }
  function renderFilters(){
    $('#relation-filters').innerHTML=Object.entries(D.relationTypes).map(([key,r])=>`<label class="relation-filter"><input type="checkbox" data-relation="${key}" ${state.relations.has(key)?'checked':''}><i class="relation-swatch ${['alternative','conditions','challenges','tradeoff'].includes(key)?'dashed':''}" style="border-color:${r.color}"></i>${r.label}<span class="edge-count">${D.relations.filter(e=>e.type===key).length} ${r.symbol}</span></label>`).join('');
    $('#venue-filters').innerHTML=D.venues.map(v=>`<label><input type="checkbox" data-venue="${v}" ${state.venues.has(v)?'checked':''}>${v}</label>`).join('');
  }
  function paperCard(p){return `<article class="paper-card ${state.paper===p.id?'selected':''}" data-paper-card="${p.id}"><div class="paper-card-top"><span class="venue-tag">${p.venue}</span><span>${p.year}${isDemo?' 예시':''}</span><span class="paper-id">${p.id}</span>${badge(p)}${p.owned?'<span class="owned-badge">★ 내 연구</span>':''}${p.scope==='method_neighbor'?'<span class="review-badge">NAND 외 · 방법론</span>':''}${p.researchType==='invited_review'?'<span class="review-badge">리뷰</span>':''}</div><button class="paper-title" data-paper="${p.id}">${esc(p.title)}</button>${isDemo?'':`<p class="paper-byline">${esc(p.authors[0])} et al. · ${esc(p.shortTitle)}</p>`}<p>${esc(p.summary)}</p><div class="tag-row"><span class="chip">${esc(p.approach)}</span>${p.topics.slice(0,2).map(id=>`<button class="chip" data-topic="${id}">${esc(concepts.get(id).label)}</button>`).join('')}</div><div class="paper-card-footer"><label class="compare-check"><input type="checkbox" data-compare="${p.id}" ${state.compare.has(p.id)?'checked':''}>접근법 비교</label><button class="bookmark ${state.saved.has(p.id)?'saved':''}" data-save="${p.id}" aria-label="${esc(p.title)} ${state.saved.has(p.id)?'저장 해제':'저장'}" aria-pressed="${state.saved.has(p.id)}">${state.saved.has(p.id)?'◆':'◇'}</button></div></article>`;}
  function renderInspector(){
    const el=$('#inspector');
    if(state.paper){renderPaperInspector(papers.get(state.paper));return;}
    if(!isDemo&&state.topic==='nand'){renderOverview();return;}
    const n=concepts.get(state.topic), ps=topicPapers(), rs=relatedRelations(state.topic);
    el.innerHTML=`<div class="inspector-top"><span class="eyebrow">CONCEPT EXPLORER</span><span class="node-type">${n.parent?'개념 노드':'시작 노드'}</span></div><div class="topic-path">${ancestry(n.id).slice(0,-1).map(t=>`<button data-topic="${t.id}" class="text-btn">${esc(t.label)}</button>`).join(' <span> / </span> ')||'RESEARCH LANDSCAPE'}</div><h2>${esc(n.label)}</h2><p class="subtitle">${esc(n.ko)}</p><p class="description">${esc(n.description)}</p><div class="topic-meta"><span><strong>${ps.length}</strong> 논문</span><span><strong>${rs.length}</strong> 관계</span><span><strong>${descendants(n.id).size-1}</strong> 하위 개념</span></div><div class="question-box"><div class="eyebrow">THE SHARED QUESTION</div><p>${esc(n.question)}</p></div><div class="panel-tabs"><button data-panel-tab="papers" class="${state.panelTab==='papers'?'active':''}">관련 논문 <small>${ps.length}</small></button><button data-panel-tab="relations" class="${state.panelTab==='relations'?'active':''}">논문 간 관계 <small>${rs.length}</small></button></div><div class="demo-note">${isDemo?'모든 논문·게재처·연도·관계는 가상 예시입니다.':'인용은 참고문헌에서 확인했습니다. 비교·조건 차이는 분석자의 연결이며, 각 논문의 확인 범위를 함께 보세요.'}</div>${state.panelTab==='papers'?`<div class="paper-list">${ps.length?ps.map(paperCard).join(''):'<p class="library-empty">현재 필터에 맞는 수록 논문이 없습니다. 다른 주제는 아직 수집 중입니다.</p>'}</div>`:rs.length?rs.map(relationCard).join(''):'<p class="library-empty">현재 조건에서 표시할 관계가 없습니다.</p>'}<button class="explore-network" data-network="${n.id}">이 주제의 논문 관계망 열기 <span>↗</span></button><p class="inspector-bottom">분기점은 연구 질문을 나타냅니다.<br>논문은 여러 개념에 연결될 수 있습니다.</p>`;
  }
  function relationCard(r){const rt=D.relationTypes[r.type],a=papers.get(r.source),b=papers.get(r.target);return `<article class="connection-item"><div class="relation-label" style="color:${rt.color}"><i class="relation-swatch ${rt.directed?'':'dashed'}" style="border-color:${rt.color}"></i>${rt.label}<span class="sample-tag">· ${esc(relationStatus(r))}</span></div><div class="connection-direction"><button data-paper="${r.source}">${r.source} ${isDemo?'':esc(a.authors[0].split(' ').at(-1))+' '+a.year}</button> ${rt.symbol} <button data-paper="${r.target}">${r.target} ${isDemo?'':esc(b.authors[0].split(' ').at(-1))+' '+b.year}</button></div><p>${esc(r.note)}</p><button data-edge="${r.id}" class="text-btn" style="margin-top:9px">${isDemo?'관계 상세':'근거 위치와 확인 범위'} ↗</button></article>`;}
  function renderPaperInspector(p){
    const rs=activeRelations().filter(r=>r.source===p.id||r.target===p.id);
    $('#inspector').innerHTML=`<button class="back-btn" data-topic="${state.topic}">← ${esc(concepts.get(state.topic).label)}</button><div class="inspector-top"><span class="eyebrow">PAPER EXPLORER / ${p.id}</span>${badge(p)}</div><div class="paper-card-top"><span class="venue-tag">${p.venue}</span><span>${p.year}${isDemo?' · 예시':''}</span><button class="bookmark ${state.saved.has(p.id)?'saved':''}" data-save="${p.id}" aria-label="논문 ${state.saved.has(p.id)?'저장 해제':'저장'}" aria-pressed="${state.saved.has(p.id)}" style="margin-left:auto">${state.saved.has(p.id)?'◆':'◇'}</button></div><h2 style="font-size:19px;line-height:1.55">${esc(p.title)}</h2>${isDemo?'':`<div class="bibliography">${esc(p.bibliography)}<details><summary>${esc(p.authors[0])} et al. · 저자 ${p.authors.length}명</summary><p>${esc(p.authors.join(', '))}</p></details>${p.doi?`<div>DOI: ${esc(p.doi)}</div>`:'<div>DOI 미확인 · 서지 링크 참조</div>'}</div>${sourceLinks(p)}`}${p.owned?positionPreview(p):''}${p.scope==='method_neighbor'?`<div class="scope-note">NAND 외 방법론 이웃 · ${esc(p.deviceScope)}<br>동일 소자·동일 조건의 성능 비교가 아닙니다.</div>`:''}<div class="tag-row">${p.topics.map(id=>`<button class="chip" data-topic="${id}">${esc(concepts.get(id).label)}</button>`).join('')}</div><div class="question-box"><div class="eyebrow">RESEARCH QUESTION</div><p>${esc(p.problem)}</p></div>${[['접근 방법',p.method],[isDemo?'예시의 역할':'보고된 결과',p.finding],['비교할 조건',p.conditions],['해석의 범위',p.limitation]].map(([k,v])=>`<section class="detail-section"><h3>${k}</h3><p>${esc(v)}</p></section>`).join('')}${isDemo?'<div class="evidence-note">가상 예시입니다. 실제 DOI·저자·검증된 결과가 없습니다.</div>':`<section class="evidence-block"><h3>원문 근거 · ${esc(p.checkedAt)} 확인</h3><p class="verification-detail">${esc(p.verification.detail)}</p>${evidenceItems(p.evidence)}</section>`}<div class="paper-card-footer"><label class="compare-check"><input type="checkbox" data-compare="${p.id}" ${state.compare.has(p.id)?'checked':''}>이 논문을 비교에 추가</label><span class="sample-tag">최대 3편</span></div><div class="panel-tabs"><button class="active">연결된 연구 <small>${rs.length}</small></button></div>${rs.length?rs.map(relationCard).join(''):'<p class="demo-note">현재 필터에서 표시할 관계가 없습니다.</p>'}<button class="explore-network" data-paper-network="${p.id}">이 논문의 관계망 열기 <span>↗</span></button>`;
  }
  function renderLibrary(){
    const q=state.query.toLowerCase();let ps=D.papers.filter(p=>visiblePaper(p)&&(!state.savedOnly||state.saved.has(p.id))&&(!q||`${p.title} ${p.id} ${p.doi||''} ${(p.authors||[]).join(' ')} ${p.shortTitle||''} ${p.venue} ${p.approach} ${p.topics.map(t=>concepts.get(t).label+' '+concepts.get(t).ko).join(' ')}`.toLowerCase().includes(q)));
    ps.sort((a,b)=>state.sort==='title'?a.title.localeCompare(b.title,'ko'):state.sort==='oldest'?a.year-b.year:b.year-a.year);
    $('#library-count').textContent=`${ps.length} / ${D.papers.length} 논문`;
    $('#library-grid').innerHTML=ps.length?ps.map(paperCard).join(''):'<p class="library-empty">조건에 맞는 논문이 없습니다. 검색어 또는 저장·출판물 필터를 확인하세요.</p>';
  }
  function search(){
    const q=state.query.trim().toLowerCase(),el=$('#search-results');el.hidden=!q;
    if(q){const ns=D.concepts.filter(n=>`${n.label} ${n.ko} ${n.id}`.toLowerCase().includes(q));const ps=D.papers.filter(p=>visiblePaper(p)&&`${p.title} ${p.id} ${p.doi||''} ${(p.authors||[]).join(' ')} ${p.shortTitle||''} ${p.approach} ${p.venue}`.toLowerCase().includes(q));el.innerHTML=ns.slice(0,6).map(n=>`<button data-search-topic="${n.id}">${esc(n.label)}<small>개념 · ${esc(n.ko)}</small></button>`).join('')+ps.slice(0,8).map(p=>`<button data-search-paper="${p.id}">${esc(p.title)}<small>${p.id} · ${esc(verificationLabel(p))}</small></button>`).join('')||'<p>검색 결과가 없습니다.</p>';}
    if(state.view==='library')renderLibrary();
  }
  function refreshFilters(){cancelCamera();renderTree();renderInspector();renderLibrary();search();drawGraph();if(state.focus||state.cluster)fitGraph();}
  const paperPositions={P01:[235,160],P02:[410,90],P03:[125,300],P04:[520,220],P05:[270,405],P06:[100,95],P07:[760,130],P08:[910,260],P09:[515,430],P10:[700,375],P11:[840,505],P12:[135,525],P13:[850,50],P14:[420,580],P15:[620,65],P16:[710,650],P17:[560,680],P18:[375,280]};
  D.papers.forEach((p,i)=>{if(!paperPositions[p.id]){const a=i*2*Math.PI/D.papers.length;paperPositions[p.id]=[490+300*Math.cos(a),340+220*Math.sin(a)];}});
  function graphData(){
    if(state.cluster){const topic={...concepts.get(state.cluster),...(state.positions.concept.get(state.cluster)||{})};return window.NAND_CLUSTER.build(topic,topicPapers(state.cluster),activeRelations(),concepts,state.clusterPositions.get(state.cluster));}
    if(state.mode==='concept'){
      let ns=D.concepts;
      if(state.focus){const ids=descendants(state.topic);ancestry(state.topic).forEach(n=>ids.add(n.id));D.conceptLinks.forEach(e=>{if(e.source===state.topic)ids.add(e.target);if(e.target===state.topic)ids.add(e.source);});ns=ns.filter(n=>ids.has(n.id));}
      const ids=new Set(ns.map(n=>n.id));
      const own=!isDemo&&!state.focus&&visiblePaper(papers.get('P26'))?papers.get('P26'):null;
      return {nodes:[...ns.map(n=>({...n,isPaper:false,...(state.positions.concept.get(n.id)||{})})),...(own?[{id:own.id,label:'★ 내 첫 논문',group:'models',isPaper:true,x:640,y:300,...(state.positions.papers.get(own.id)||{})}]:[])],edges:[...(own?['models','ctn','3d','scaling'].map(target=>({source:own.id,target,type:'placement',note:'논문의 내용에 근거한 분류 · 인용선 아님'})):[]),...ns.filter(n=>n.parent&&ids.has(n.parent)).map(n=>({source:n.parent,target:n.id,type:'hierarchy'})),...D.conceptLinks.filter(e=>ids.has(e.source)&&ids.has(e.target)).map((e,i)=>({...e,type:'concept',id:`concept-${i}`}))]};
    }
    let ps=D.papers.filter(visiblePaper);
    if(state.focus){if(state.paper){const ids=new Set([state.paper]);activeRelations().forEach(r=>{if(r.source===state.paper)ids.add(r.target);if(r.target===state.paper)ids.add(r.source);});ps=ps.filter(p=>ids.has(p.id));}else{const ids=new Set(topicPapers().map(p=>p.id));ps=ps.filter(p=>ids.has(p.id));}}
    if(!isDemo&&ps.length>10){const layout=window.NAND_CLUSTER.build(concepts.get('nand'),ps,activeRelations(),concepts,state.positions.papers);return {...layout,nodes:layout.nodes.filter(n=>!n.hub),edges:layout.edges.filter(e=>e.type!=='membership')};}
    const ids=new Set(ps.map(p=>p.id));return {nodes:ps.map(p=>({id:p.id,label:p.graphLabel||p.shortTitle||p.approach,group:concepts.get(p.topics[0]).group,isPaper:true,x:paperPositions[p.id][0],y:paperPositions[p.id][1],...(state.positions.papers.get(p.id)||{})})),edges:activeRelations().filter(r=>ids.has(r.source)&&ids.has(r.target))};
  }
  let currentData,fitScale=1,resizeTimer,cameraFrame=0;
  const reducedMotion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
  function cancelCamera(){cancelAnimationFrame(cameraFrame);cameraFrame=0;}
  function animateCamera(target){
    cancelCamera();if(reducedMotion()){state.transform=target;applyTransform();return;}
    const start={...state.transform},started=performance.now();
    const step=now=>{const t=Math.min(1,(now-started)/650),ease=1-Math.pow(1-t,3);state.transform={x:start.x+(target.x-start.x)*ease,y:start.y+(target.y-start.y)*ease,k:start.k+(target.k-start.k)*ease};applyTransform();if(t<1)cameraFrame=requestAnimationFrame(step);else cameraFrame=0;};cameraFrame=requestAnimationFrame(step);
  }
  function drawGraph(){
    currentData=graphData();const {nodes,edges}=currentData;const byId=new Map(nodes.map(n=>[n.id,n]));
    const selected=state.cluster?(state.paper||state.cluster):state.mode==='concept'?state.topic:state.paper;
    const neighbors=new Set([selected]);edges.forEach(e=>{if(e.source===selected)neighbors.add(e.target);if(e.target===selected)neighbors.add(e.source);});
    const pairCount=new Map();
    const edgeHTML=edges.map(e=>{
      const a=byId.get(e.source),b=byId.get(e.target),rt=D.relationTypes[e.type],pair=[e.source,e.target].sort().join('-'),offset=pairCount.get(pair)||0;pairCount.set(pair,offset+1);
      const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1,bend=e.type==='hierarchy'?20:e.type==='concept'?50:offset?40:12,mx=(a.x+b.x)/2-dy/len*bend,my=(a.y+b.y)/2+dx/len*bend;
      const edgeColor=e.type==='placement'?'#e9c881':rt?rt.color:e.type==='hierarchy'?color(b):'#718b7b',dim=(state.mode==='papers'||state.cluster)&&state.paper&&e.source!==selected&&e.target!==selected;
      return `<path class="graph-edge ${dim?'dim':''} ${e.type==='membership'?'membership-edge':''}" d="M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}" stroke="${edgeColor}" opacity="${e.type==='hierarchy'?.48:e.type==='membership'?.13:e.type==='concept'?.24:.75}" ${['placement','membership','concept','alternative','conditions','challenges','tradeoff'].includes(e.type)?'stroke-dasharray="4 5"':''} ${rt?.directed?`marker-end="url(#arrow-${e.type})"`:''} ${e.id?`data-graph-edge="${e.id}"`:''}><title>${esc(e.note||`${a.label} → ${b.label}`)}</title></path>`;
    }).join('');
    const hub=state.cluster?nodes.find(n=>n.hub):null;
    const nodeHTML=nodes.map((n,i)=>{
      const root=n.id==='nand',major=n.parent==='nand',r=n.hub?28:root?21:major?11:n.isPaper?10:6,selectedNode=n.id===selected,c=papers.get(n.id)?.owned?'#e9c881':n.clusterColor||color(n),p=n.isPaper?papers.get(n.id):null;
      const dim=(state.mode==='papers'||state.cluster)&&state.paper&&!neighbors.has(n.id)&&!n.hub;
      return `<g class="graph-node ${papers.get(n.id)?.owned?'owned-node':''} ${!n.isPaper&&!topicPapers(n.id).length?'uncollected':''} ${n.isPaper&&papers.get(n.id).verification?.level==='abstract'?'abstract':''} ${n.hub?'cluster-hub':''} ${root?'root':''} ${major?'major':''} ${selectedNode?'selected':''} ${dim?'dim':''}" transform="translate(${n.x},${n.y})" data-node="${n.id}" data-radius="${r}" tabindex="0" role="button" aria-label="${esc(n.hub?`${n.label} 군집 중심. 전체 맵으로 돌아가기`:n.isPaper?`${p.id} 논문: ${p.title}`:`${n.label}, ${n.ko}, 관련 논문 ${topicPapers(n.id).length}편. 클릭하여 군집 펼치기`)}" aria-pressed="${selectedNode}"><g class="node-content" style="--from-x:${hub?hub.x-n.x:0}px;--from-y:${hub?hub.y-n.y:0}px;--reveal-delay:${i*23}ms"><circle r="${r+13}" fill="transparent"/><circle class="selection-halo" r="${r+9}" fill="${c}" fill-opacity=".05" stroke="${c}" stroke-opacity=".22"/><circle class="selection-halo" r="${r+4}" fill="none" stroke="${c}" stroke-opacity=".45"/><circle class="node-core" r="${r}" fill="${selectedNode?c:root?'#accbb6':major?'#283b30':'#26362d'}" stroke="${c}"/>${n.hub?`<text text-anchor="middle" y="5" class="hub-count" fill="${selectedNode?'#24362b':c}">${nodes.length-1}</text>`:root?'<path d="M-7 7V-7L7 7V-7" fill="none" stroke="#1d3828" stroke-width="2"/>':major?`<circle r="3" fill="${c}"/>`:n.isPaper?`<text text-anchor="middle" y="3" style="font-size:7px;fill:${selectedNode?'#1a3924':c};font-weight:600">${n.id.slice(1)}</text>`:''}<text class="node-label" text-anchor="middle" y="${r+23}">${esc(n.label)}</text>${n.hub?'<text class="node-sub" text-anchor="middle">선택한 연구 주제</text>':root?'<text class="node-sub" text-anchor="middle">RESEARCH LANDSCAPE</text>':n.isPaper?`<text class="node-sub" text-anchor="middle">${p.venue} ${p.year}${isDemo?' · 예시':''}</text>`:major?`<text class="node-sub" text-anchor="middle">${esc(n.ko)}</text>`:''}</g></g>`;
    }).join('');
    const areaHTML=(currentData.areas||[]).map(a=>`<g class="cluster-area" data-family="${a.id}" aria-hidden="true"><ellipse cx="${a.x}" cy="${a.y}" rx="${a.rx}" ry="${a.ry}" fill="${a.color}" fill-opacity=".035" stroke="${a.color}" stroke-opacity=".22" stroke-dasharray="3 6"/><text class="cluster-area-label" x="${a.x}" y="${a.y-a.ry+23}" text-anchor="middle" fill="${a.color}">${esc(a.label)} · ${a.count}</text></g>`).join('');
    world.classList.remove('cluster-opening');world.innerHTML=areaHTML+edgeHTML+nodeHTML;
    world.querySelectorAll('[data-graph-edge]').forEach(path=>{const hit=path.cloneNode(true);hit.setAttribute('class','edge-hit');hit.setAttribute('stroke','transparent');hit.setAttribute('opacity','1');hit.removeAttribute('stroke-dasharray');hit.removeAttribute('marker-end');hit.setAttribute('tabindex','0');hit.setAttribute('role','button');hit.setAttribute('aria-label','관계 상세: '+path.textContent);hit.style.cursor='pointer';hit.style.pointerEvents='stroke';world.insertBefore(hit,world.querySelector('.graph-node'));});
    applyTransform();$('#graph-empty').hidden=state.cluster?nodes.length>1:nodes.length>0;
    $('#cluster-back').hidden=!state.cluster;$('#cluster-caption').hidden=!state.cluster;$('.graph-toolbar .toggle-label').hidden=!!state.cluster;
    stage.classList.toggle('cluster-stage',!!state.cluster);
    if(state.cluster){
      $('#graph-count').innerHTML=`<strong>${nodes.length-1}</strong> 논문<span class="sep">/</span><strong>${currentData.areas.length}</strong> 군집<span class="sep">/</span><strong>${edges.filter(e=>e.type!=='membership').length}</strong> 관계`;
      $('.map-title-row h1').innerHTML=`${esc(concepts.get(state.cluster).label)}<span> 안의 연구 지형.</span>`;
      $('.map-title-row p').textContent='가까운 점은 비슷한 접근법입니다. 논문 점을 눌러 연구를 살펴보세요.';
    }else{
      $('#graph-count').innerHTML=state.mode==='concept'?`<strong>${nodes.filter(n=>!n.isPaper).length}</strong> 개념<span class="sep">/</span><strong>${D.papers.filter(visiblePaper).length}</strong> 논문<span class="sep">/</span><strong>${edges.length}</strong> 연결`:`<strong>${nodes.length}</strong> 논문<span class="sep">/</span><strong>${edges.length}</strong> 관계`;
      $('.map-title-row h1').innerHTML=state.mode==='papers'?'논문 사이, 근거로 이어진 연결<span>.</span>':'연결에서 발견하는 다음 질문<span>.</span>';
      $('.map-title-row p').textContent=state.mode==='papers'?'점을 선택하면 연결된 연구가 강조됩니다. 확대하면 짧은 제목이 나타납니다.':'개념 점을 누르면 확대되면서 관련 논문들이 군집으로 펼쳐집니다.';
    }
    $('.map-footer>span:first-child').innerHTML=`<i></i> ${state.cluster?'영역 = 접근법 군집 · 작은 점 = 논문':state.mode==='concept'?'개념 점 클릭 → 논문 군집 펼치기':'화살표 = 인용하는 논문 → 인용된 논문'}`;
    $('.map-footer>span:nth-child(2)').textContent=state.cluster?'거리는 편집 배치 · 선 클릭 → 근거':state.mode==='concept'?isDemo?'계층은 실선, 개념 간 연결은 점선':'금색 = 내 연구의 분류 · 빈 점 = 미수집':'선의 색 = 관계 유형 · 클릭하여 근거 보기';
  }
  function fitTransform(){if(!currentData?.nodes.length)return {...state.transform};const box=stage.getBoundingClientRect(),ns=currentData.nodes;const {minX,maxX,minY,maxY}=currentData.bounds||{minX:Math.min(...ns.map(n=>n.x))-95,maxX:Math.max(...ns.map(n=>n.x))+95,minY:Math.min(...ns.map(n=>n.y))-42,maxY:Math.max(...ns.map(n=>n.y))+85};fitScale=Math.max(.15,Math.min(2,(box.width-24)/(maxX-minX),(box.height-55)/(maxY-minY)));return {k:fitScale,x:(box.width-(maxX+minX)*fitScale)/2,y:(box.height-30-(maxY+minY)*fitScale)/2};}
  function fitGraph(){cancelCamera();state.transform=fitTransform();applyTransform();}
  function applyTransform(){
    const {x,y,k}=state.transform;world.setAttribute('transform',`translate(${x} ${y}) scale(${k})`);$('#zoom-level').textContent=`${Math.round(k/fitScale*100)}%`;
    world.querySelectorAll('.edge-hit').forEach(p=>p.setAttribute('stroke-width',10/k));world.querySelectorAll('.cluster-area-label').forEach(p=>p.style.fontSize=`${Math.max(12,10/k)}px`);
    world.querySelectorAll('.graph-node').forEach(g=>{const hub=g.classList.contains('cluster-hub'),root=g.classList.contains('root')||hub,major=g.classList.contains('major'),paper=g.dataset.node.startsWith('P'),r=Number(g.dataset.radius),label=g.querySelector('.node-label'),sub=g.querySelector('.node-sub'),compact=paper&&(state.mode==='papers'||state.cluster)&&k<.52;if(paper){g.querySelector('.node-core').setAttribute('r',Math.max(r,4.5/k));g.querySelector('.node-content>circle').setAttribute('r',Math.max(r+13,12/k));}label.textContent=compact?(papers.get(g.dataset.node).owned?'★ P26':g.dataset.node):currentData.nodes.find(n=>n.id===g.dataset.node).label;label.style.fontSize=`${Math.max(root?18:major?13:12,(stage.clientWidth<750?(root?14:major?10:9.5):(root?16:major?11:9.5))/k)}px`;label.setAttribute('y',r+Math.max(23,16/k));label.style.strokeWidth=`${Math.max(5,3/k)}px`;if(sub){sub.style.display=compact||k<.65&&!paper&&!hub?'none':'';sub.style.fontSize=`${Math.max(8,8/k)}px`;sub.setAttribute('y',r+Math.max(39,30/k));}});
  }
  function zoom(factor,px=stage.clientWidth/2,py=stage.clientHeight/2){cancelCamera();const t=state.transform,nk=Math.max(fitScale*.4,Math.min(fitScale*5,t.k*factor));state.transform={x:px-(px-t.x)*nk/t.k,y:py-(py-t.y)*nk/t.k,k:nk};applyTransform();}
  function showTooltip(target,event){const id=target.dataset.node,p=papers.get(id),n=concepts.get(id),tooltip=$('#graph-tooltip');tooltip.innerHTML=p?`${esc(p.title)}<small>${p.id} · ${verificationLabel(p)} · 클릭하여 근거 보기</small>`:`${esc(n.ko)}<small>${topicPapers(id).length}편의 논문 · 클릭하여 탐색</small>`;tooltip.hidden=false;const box=stage.getBoundingClientRect();tooltip.style.left=`${Math.max(8,Math.min(event.clientX-box.left+14,box.width-tooltip.offsetWidth-10))}px`;tooltip.style.top=`${Math.max(8,Math.min(event.clientY-box.top+15,box.height-tooltip.offsetHeight-50))}px`;}
  let drag=null,suppressClick=false;
  function activateNode(id){if(papers.get(id)?.owned&&!state.cluster&&state.mode==='concept')openMyResearch();else if(papers.has(id))selectPaper(id,true);else if(state.cluster===id)exitCluster();else selectTopic(id);}
  function nodePositionStore(id){if(state.cluster&&papers.has(id)){if(!state.clusterPositions.has(state.cluster))state.clusterPositions.set(state.cluster,new Map());return state.clusterPositions.get(state.cluster);}return state.positions[papers.has(id)?'papers':'concept'];}
  graph.addEventListener('pointerdown',e=>{if(e.button!==0)return;cancelCamera();const node=e.target.closest('[data-node]');drag={id:node?.dataset.node,edge:e.target.closest('[data-graph-edge]')?.dataset.graphEdge,x:e.clientX,y:e.clientY,tx:state.transform.x,ty:state.transform.y,moved:false};if(node){const n=currentData.nodes.find(n=>n.id===drag.id);drag.nx=n.x;drag.ny=n.y;}graph.setPointerCapture(e.pointerId);});
  graph.addEventListener('pointermove',e=>{if(!drag){const node=e.target.closest('[data-node]');if(node)showTooltip(node,e);else $('#graph-tooltip').hidden=true;return;}const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)>4)drag.moved=true;if(!drag.moved)return;$('#graph-tooltip').hidden=true;if(drag.id){nodePositionStore(drag.id).set(drag.id,{x:drag.nx+dx/state.transform.k,y:drag.ny+dy/state.transform.k});drawGraph();}else{state.transform.x=drag.tx+dx;state.transform.y=drag.ty+dy;applyTransform();}});
  graph.addEventListener('pointerup',e=>{if(!drag)return;const moved=drag.moved,id=drag.id,edge=drag.edge;drag=null;suppressClick=true;setTimeout(()=>{suppressClick=false;},0);if(graph.hasPointerCapture(e.pointerId))graph.releasePointerCapture(e.pointerId);if(id&&!moved)activateNode(id);else if(edge&&!moved)openEdge(edge);});
  graph.addEventListener('pointercancel',()=>{drag=null;});
  graph.addEventListener('pointerleave',()=>{$('#graph-tooltip').hidden=true;});
  graph.addEventListener('wheel',e=>{e.preventDefault();const b=stage.getBoundingClientRect();zoom(Math.exp(-e.deltaY*.0015),e.clientX-b.left,e.clientY-b.top);},{passive:false});
  graph.addEventListener('keydown',e=>{const n=e.target.closest('[data-node]'),edge=e.target.closest('[data-graph-edge]');if(edge&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openEdge(edge.dataset.graphEdge);}else if(n&&(e.key==='Enter'||e.key===' ')){e.preventDefault();activateNode(n.dataset.node);const next=world.querySelector(`[data-node="${n.dataset.node}"]`);next?.focus();}else if(e.key==='+'||e.key==='='){e.preventDefault();zoom(1.2);}else if(e.key==='-'){e.preventDefault();zoom(1/1.2);}else if(e.key==='0'){e.preventDefault();fitGraph();}});
  graph.addEventListener('click',e=>{const edge=e.target.closest('[data-graph-edge]');if(edge&&!suppressClick)openEdge(edge.dataset.graphEdge);});
  new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(state.view==='map'&&!cameraFrame)fitGraph();},80);}).observe(stage);
  function renderCompare(){const ids=[...state.compare];$('#compare-tray').hidden=!ids.length;$('#compare-count').textContent=ids.length;$('#compare-titles').innerHTML=ids.map(id=>`<span>${id}</span>`).join('');$('#compare-open').disabled=ids.length<2;$$('[data-compare]').forEach(input=>input.checked=state.compare.has(input.dataset.compare));}
  function toggleCompare(id,checked){if(checked&&state.compare.size>=3){toast('한 번에 최대 3편까지 비교할 수 있습니다.');renderCompare();return;}checked?state.compare.add(id):state.compare.delete(id);renderCompare();}
  function openModal(html){$('#modal-content').innerHTML=html;if(!$('#modal').open)$('#modal').showModal();$('#modal-close').focus({preventScroll:true});$('#modal').scrollTop=0;}
  function openCompare(){const ps=[...state.compare].map(id=>papers.get(id)),rs=D.relations.filter(r=>state.relations.has(r.type)&&state.compare.has(r.source)&&state.compare.has(r.target));openModal(`<div class="modal-eyebrow">SIDE BY SIDE / APPROACH COMPARISON</div><h2>같은 질문, 서로 다른 접근.</h2><p>${isDemo?'가상 연구 시나리오입니다.':'서로 다른 구조·온도·시간 구간의 결과는 수치만으로 우열을 매길 수 없습니다.'}</p><div class="table-scroll"><table class="compare-table"><thead><tr><th>비교 축</th>${ps.map(p=>`<th><span class="venue-tag">${p.id} · ${p.venue} ${p.year}</span><br>${esc(p.title)}<br>${badge(p)}</th>`).join('')}</tr></thead><tbody>${[['문제','problem'],['접근 방법','method'],[isDemo?'예시의 역할':'보고된 결과','finding'],['측정·비교 조건','conditions'],['해석의 범위','limitation']].map(([label,key])=>`<tr><th scope="row">${label}</th>${ps.map(p=>`<td>${esc(p[key])}</td>`).join('')}</tr>`).join('')}${isDemo?'':`<tr><th scope="row">출처와 확인 범위</th>${ps.map(p=>`<td>${esc(p.verification.detail)}${sourceLinks(p)}${evidenceItems(p.evidence)}</td>`).join('')}</tr>`}</tbody></table></div><section class="compare-relations"><h3>선택한 논문 사이의 관계</h3>${rs.length?rs.map(r=>`<p style="border-color:${D.relationTypes[r.type].color}"><strong>${r.source} ${D.relationTypes[r.type].symbol} ${r.target} · ${D.relationTypes[r.type].label}</strong><br>${esc(r.note)}<br><button data-edge="${r.id}">근거 보기 ↗</button></p>`).join(''):'<p>현재 관계 필터에서 등록된 연결이 없습니다. 연결 부재는 인용 부재를 증명하지 않습니다.</p>'}</section>`);}

  function openGuide(){
    const paths=[['구조의 분기','BiCS 2007 → TCAT 2009. TCAT의 본문 비교를 통해 공정·erase 방식의 설계 대안을 봅니다.','P39'],['Retention과 신뢰성','초기 손실의 원인, 재료·구조 설계, cycling·열 이력으로 질문을 확장합니다.','P20'],['Program 모델의 축약','수송·에너지 완화 TCAD에서 semianalytical ISPP로 모델의 설명력과 비용을 비교합니다.','P31'],['변동성과 조건 의존성','채널 두께·grain size의 평균 성능과 분포 폭을 분리합니다. RTN 공간 위치 추출과도 구별합니다.','P29'],['ML와 내 연구','목표 데이터의 DDPM 생성, 세대 간 전이, 물리 특징 전달을 비교합니다. 내 연구의 차별점·후속 실험은 원문 근거와 함께 읽습니다.','P26'],['집적도와 미수집 영역','Goda 2020은 역사적 scaling 축의 리뷰입니다. 최근 산업 전체의 현황을 대표하지 않으며 최신 문헌 보완이 필요합니다.','P40']];
    openModal(`<div class="modal-eyebrow">READ THE MAP / FOLLOW THE EVIDENCE</div><h2>${isDemo?'가상 데이터 탐색':'여섯 축에서, 내 연구까지.'}</h2><p>${esc(D.description)}</p>${isDemo?'':`<div class="guide-grid">${paths.map(([h,t,id])=>`<article class="insight-card"><h3>${h}</h3><p>${t}</p><button class="text-btn" data-paper="${id}" data-close-modal="true">논문과 근거 보기 ↗</button></article>`).join('')}</div>`}<div class="modal-note"><strong>지도와 근거를 읽는 방법</strong><br>점 클릭 → 논문 군집 → 논문/선 클릭 → 원문 위치. 군집 거리는 접근법별 편집 배치이며 KNN·임베딩 유사도 점수가 아닙니다. 금색 점은 사용자가 제공한 연구입니다. 인용은 동의를 뜻하지 않으며 비교·조건 차이는 직접 반박과 다릅니다. 검증된 상충은 현재 0건입니다.<br><br>PDF·그림 / 원문 텍스트 / 초록을 구별합니다. 기존 텍스트 확인에는 공개 미러와 검색 색인이 포함됩니다. 이번에 추가한 9편은 IEEE Xplore 원문을 직접 읽었으며 확인 범위 필터로 모아볼 수 있습니다. NAND 외 논문은 방법론 이웃으로 표시합니다. VLSI·IEDM은 학회/심포지엄, TED·EDL은 저널/레터입니다. 문헌을 선별한 지도이지 전체 연구의 빈도·최신 트렌드 통계는 아닙니다.</div>`);
  }

  function openEdge(id){
    if(id.startsWith('concept-')){const r=currentData.edges.find(e=>e.id===id);if(!r)return;openModal(`<div class="modal-eyebrow">CROSS-CONCEPT CONNECTION</div><h2>${esc(concepts.get(r.source).label)} ↔ ${esc(concepts.get(r.target).label)}</h2><p>${esc(r.note)}</p><div class="modal-note">개념을 교차 탐색하기 위한 편집상 연결입니다. 논문 인용이나 인과관계를 뜻하지 않습니다.</div>`);return;}
    const r=D.relations.find(r=>r.id===id);if(!r)return;const rt=D.relationTypes[r.type];
    openModal(`<div class="modal-eyebrow">RELATION EXPLORER / ${r.id}</div><h2 style="color:${rt.color}">${rt.label} ${rt.symbol}</h2><p>${esc(rt.description)}</p><div class="guide-grid">${[r.source,r.target].map(id=>{const p=papers.get(id);return `<article><h3>${p.id} · ${p.venue} ${p.year}</h3><p>${esc(p.title)}</p>${badge(p)}</article>`;}).join('')}</div><p>${esc(r.note)}</p><div class="modal-note evidence-status">관계의 근거 수준: ${esc(relationStatus(r))}${isDemo?'<br>실제 논문 관계가 아닙니다.':`<br>확인일: ${esc(r.checkedAt)} · ${r.type==='cites'?'출발 논문의 참고문헌에 수록되어 있음을 확인했습니다. 인용 대상의 본문 확보 상태와는 별개입니다.':'원문에서 확인한 내용과 그 내용을 연결한 해석을 구분합니다.'}`}</div>${isDemo?'':`<section class="evidence-block"><h3>확인한 원문 위치</h3>${evidenceItems(r.evidence)}<p class="verification-detail">쪽 번호는 인쇄 쪽수이며 Early Access·AAM·프로그램 PDF는 따로 표기한 기준을 따릅니다. 그림 이미지를 보지 못한 자료는 ‘그림 설명’으로만 표기했습니다.</p></section>`}`);
  }

  document.addEventListener('click',e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.dataset.view)setView(b.dataset.view);
    if(b.dataset.mode)setMode(b.dataset.mode);
    if(b.dataset.topic)selectTopic(b.dataset.topic,true);
    if(b.dataset.paper)selectPaper(b.dataset.paper,true);
    if(b.dataset.expand){state.expanded.has(b.dataset.expand)?state.expanded.delete(b.dataset.expand):state.expanded.add(b.dataset.expand);renderTree();}
    if(b.dataset.panelTab){state.panelTab=b.dataset.panelTab;renderInspector();}
    if(b.dataset.network){enterCluster(b.dataset.network);}
    if(b.dataset.paperNetwork){state.paper=b.dataset.paperNetwork;setMode('papers',true);if(innerWidth<=1000)$('#map-view').scrollIntoView({behavior:'smooth'});}
    if(b.dataset.save){const id=b.dataset.save;if(state.saved.has(id))state.saved.delete(id);else state.saved.add(id);try{localStorage.setItem(storageKey,JSON.stringify([...state.saved]));toast(state.saved.has(id)?'이 브라우저에 논문을 저장했습니다.':'저장을 해제했습니다.');}catch{toast('현재 브라우저에서 영구 저장을 사용할 수 없어 이번 탐색에만 저장합니다.');}renderInspector();if(state.view==='library')renderLibrary();}
    if(b.dataset.edge)openEdge(b.dataset.edge);
    if(b.dataset.insight)openGuide();
    if(b.dataset.myResearch)openMyResearch();
    if(b.dataset.position)openPosition();
    if(b.dataset.closeModal)$('#modal').close();
    if(b.dataset.searchTopic||b.dataset.searchPaper){const topic=b.dataset.searchTopic,paper=b.dataset.searchPaper;$('#search-results').hidden=true;$('#search').value='';state.query='';if(topic)selectTopic(topic);else{selectPaper(paper);setMode('papers',true);selectedScroll();}}
  });
  document.addEventListener('change',e=>{const t=e.target;if(t.dataset.relation){t.checked?state.relations.add(t.dataset.relation):state.relations.delete(t.dataset.relation);refreshFilters();}if(t.dataset.venue){t.checked?state.venues.add(t.dataset.venue):state.venues.delete(t.dataset.venue);refreshFilters();}if(t.dataset.compare)toggleCompare(t.dataset.compare,t.checked);});
  $('#focus-toggle').addEventListener('change',e=>{state.focus=e.target.checked;drawGraph();fitGraph();});
  $('#reset-filters').addEventListener('click',()=>{state.venues=new Set(D.venues);state.evidence='all';$('#evidence-filter').value='all';state.relations=new Set(Object.keys(D.relationTypes));renderFilters();refreshFilters();toast('출판물과 관계 필터를 초기화했습니다.');});
  $('#search').addEventListener('input',e=>{state.query=e.target.value;search();});
  $('#search').addEventListener('keydown',e=>{if(e.key==='Escape'){$('#search-results').hidden=true;e.target.blur();}if(e.key==='Enter')$('#search-results button')?.click();});
  $('#sort-papers').addEventListener('change',e=>{state.sort=e.target.value;renderLibrary();});
  $('#saved-only').addEventListener('change',e=>{state.savedOnly=e.target.checked;renderLibrary();});
  $('#zoom-in').addEventListener('click',()=>zoom(1.25));$('#zoom-out').addEventListener('click',()=>zoom(.8));$('#fit').addEventListener('click',fitGraph);
  $('#cluster-back').addEventListener('click',exitCluster);
  $('#compare-clear').addEventListener('click',()=>{state.compare.clear();renderCompare();});$('#compare-open').addEventListener('click',openCompare);
  $('#my-research-btn').addEventListener('click',openMyResearch);
  $('#about-btn').addEventListener('click',openGuide);$('#guide-btn').addEventListener('click',openGuide);$('#modal-close').addEventListener('click',()=>$('#modal').close());
  $('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const b=e.target.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)e.target.close();}});
  $('#export-btn').addEventListener('click',()=>{const payload={...D,exportedAt:new Date().toISOString(),bookmarks:[...state.saved]};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=isDemo?'nand-atlas-prototype.json':'nand-atlas-research-evidence.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('출처·근거를 포함한 전체 데이터와 저장 목록을 내보냈습니다.');});
  $('#mobile-export').addEventListener('click',()=>$('#export-btn').click());
  $('#mobile-filters').addEventListener('click',()=>{const open=$('.sidebar').classList.toggle('filters-open');$('#mobile-filters').setAttribute('aria-expanded',open);$('#mobile-filters').textContent=open?'필터 접기 −':'필터 펼치기 +';});
  $('.brand').addEventListener('click',e=>{e.preventDefault();state.focus=false;selectTopic('nand');setMode('concept',false);});
  document.addEventListener('keydown',e=>{if(!['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)&&!$('#modal').open){if(e.key==='/'){e.preventDefault();$('#search').focus();}else if(e.key==='Escape'&&state.cluster){e.preventDefault();exitCluster();}}});
  window.addEventListener('hashchange',()=>{cancelCamera();readHash();renderTree();renderInspector();drawGraph();fitGraph();});
  $('#dataset-select').addEventListener('change',e=>{const url=new URL(location.href);if(e.target.value==='demo')url.searchParams.set('dataset','demo');else url.searchParams.delete('dataset');url.hash=e.target.value==='demo'?'topic=retention&view=cluster':'topic=nand&view=overview';location.href=url.href;});
  $('#evidence-filter').addEventListener('change',e=>{state.evidence=e.target.value;refreshFilters();});
  initializeDatasetUI();readHash();ancestry(state.topic).forEach(n=>state.expanded.add(n.id));renderTree();renderFilters();renderInspector();$$('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===state.mode));drawGraph();requestAnimationFrame(fitGraph);renderCompare();
})();
