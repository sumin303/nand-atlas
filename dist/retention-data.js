/* Curated retention seed corpus. Original PDFs are linked, never redistributed. */
(() => {
  const checkedAt = '2026-11-16';
  const pdf = 'PDF·그림 확인', text = '원문 텍스트 확인', abstract = '초록 확인 · 본문 미확보';
  const sources = {
    P19:'https://yumilab.ei.st.gunma-u.ac.jp/analog/IEDM2010Prog.pdf#page=19',
    P20:'https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/t08-011.pdf',
    P21:'https://picture.iczhiku.com/resource/ieee/ShkwTHFuATQaPCMv.pdf',
    P22:'https://picture.iczhiku.com/resource/ieee/WHisThfHsPsTlXVv.pdf',
    P23:'https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/181.pdf',
    P24:'https://www.scribd.com/document/769485586/2020-TED-Kim',
    P25:'https://www.researchgate.net/publication/382674531_Evidence_of_Widely_Distributed_Time_Constants_in_the_Vertical_Charge_Loss_of_3-D_Charge-Trap_NAND_Flash_Memories'
  };
  const ev = (paperId, locator, note) => ({paperId, locator, note, url:sources[paperId]});
  const papers = [
    {
      id:'P19',title:"Study of fast initial charge loss and it's impact on the programmed states Vt distribution of charge-trapping NAND Flash",
      shortTitle:'초기 손실·Refill',graphLabel:'Refill',authors:['Chih-Ping Chen','Hang-Ting Lue','Chih-Chang Hsieh','Kuo-Pin Chang','Kuang-Yeu Hsieh','Chih-Yuan Lu'],
      venue:'IEDM',year:2010,bibliography:'IEDM 2010 · 5.6.1–5.6.4 (pp. 118–121)',doi:'10.1109/IEDM.2010.5703304',
      topics:['retention','ctn','program'],approach:'펄스 설계',family:'control',
      summary:'1초 이내 초기 손실과 Vt 분포 문제를 제시하고 refill을 제안한 선행 연구. 현재 학회 프로그램 초록을 확인했습니다.',
      problem:'프로그램 직후 전하 손실이 상태 위치와 분포 폭에 미치는 영향.',
      method:'초록에 제시된 refill 동작과 BE-SONOS test chip 평가.',
      finding:'초록은 refill에 의한 Vt 분포 개선을 보고합니다. 정량 개선율은 등록하지 않았습니다.',
      conditions:'초기 손실 <1 s · charge-trapping NAND / BE-SONOS. 온도·사이클·펄스 상세는 미확인.',
      limitation:'논문 본문과 그림을 확보하지 못했습니다. 후속 논문의 참고문헌에서 이 논문의 인용 사실은 별도로 확인했습니다.',
      verification:{level:'abstract',label:abstract,detail:'IEDM 공식 프로그램의 대학 미러, PDF 19쪽 session 5.6. 논문 전체 4쪽을 읽은 상태가 아닙니다.'},
      evidence:[ev('P19','공식 프로그램 PDF p.19 · session 5.6','제목·저자·초기 손실 및 refill 초록 확인.')]
    },
    {
      id:'P20',title:'Comprehensive evaluation of early retention (fast charge loss within a few seconds) characteristics in tube-type 3-D NAND Flash Memory',
      shortTitle:'측방 이동·잔류 정공',graphLabel:'측방 이동',authors:['Bongsik Choi','Sang Hyun Jang','Jinsu Yoon','Juhee Lee','Minsu Jeon','Yongwoo Lee','Jungmin Han','Jieun Lee','Dong Myong Kim','Dae Hwan Kim','Chan Lim','Sungkye Park','Sung-Jin Choi'],
      venue:'VLSI',year:2016,bibliography:'Symposium on VLSI Technology 2016 · 8.1 · pp. 78–79',doi:'10.1109/VLSIT.2016.7573385',
      topics:['retention','ctn','3d','erase'],approach:'특성 분석',family:'analysis',
      summary:'빠른 pulse I–V와 TCAD로 공유 포획층의 측방 손실과 잔류 정공의 영향을 분석합니다.',
      problem:'초기 retention 손실의 지배 원인과 데이터 패턴 의존성.',
      method:'Solid / checkerboard 패턴에서 PV·EV를 바꾸고 pulse I–V와 TCAD를 비교.',
      finding:'공유 CTL의 lateral loss를 강조하며 checkerboard에서 더 큰 손실을 보고합니다. PV·EV의 균형을 제안합니다.',
      conditions:'2y WL tube-type 3D NAND · read delay <100 μs · PV1/2/3 · EV1/2/3. DC 평가 90°C; pulse 평가 온도는 별도 명시 확인 불가.',
      limitation:'p.78의 PV 방향 설명에 문장 내 불일치가 있습니다. 방향 해석은 Fig.8/10/13과 후속 설명을 함께 확인해야 합니다. 다른 논문과 PV 번호를 절대 전압처럼 비교할 수 없습니다.',
      verification:{level:'pdf',label:pdf,detail:'국민대 연구실 공개 PDF 2쪽의 본문·참고문헌 및 p.79 그림을 확인했습니다.'},
      evidence:[ev('P20','p.78 · Measurement Result and Discussion; p.79 · Figs.7–16','패턴, PV·EV 의존성 및 residual-hole 해석.'),ev('P20','p.78 · References [2]','Chen IEDM2010 인용 확인.')]
    },
    {
      id:'P21',title:'Modeling of Charge Loss Mechanisms during the Short Term Retention Operation in 3-D NAND Flash Memories',
      shortTitle:'3기구 손실 모델',graphLabel:'3기구 모델',authors:['Changbeom Woo','Myeongwon Lee','Shinkeun Kim','Jaeyeol Park','Gil-Bok Choi','Moon-Sik Seo','Keum Hwan Noh','Myounggon Kang','Hyungcheol Shin'],
      venue:'VLSI',year:2019,bibliography:'Symposium on VLSI Technology 2019 · T16-3 · pp. T214–T215',doi:'10.23919/VLSIT.2019.8776579',
      metadataUrl:'https://snudrl.snu.ac.kr/conference/2019-vlsi-modeling-of-charge-loss-mechanisms-during-the-short-term-retention-operation-in-3-d-nand/',
      topics:['retention','ctn','3d','tunnel'],approach:'물리 모델',family:'analysis',
      summary:'BE 터널 산화막 detrapping, 포획층 내부의 수직 재분포, 측방 이동을 세 성분으로 분리합니다.',
      problem:'짧은 시간의 Vt 변화를 하나의 손실 기구로 설명할 수 있는가?',
      method:'10 μs program–read delay 측정과 stretched-exponential 성분 모델.',
      finding:'PV3/5/7의 온도·패턴 의존성을 세 성분의 합으로 설명합니다. VR은 포획층 내부 재분포이며 채널로 빠져나가는 vertical loss와 구분됩니다.',
      conditions:'25–115°C · PV3/5/7 · solid / checkerboard · 3D charge-trap NAND.',
      limitation:'PDF 직접 요청은 403이었습니다. 검색 색인에 보존된 T214 본문·참고문헌을 확인했으며 그림·표 원본과 누락 문장은 검증하지 않았습니다. PV1로의 일반화는 후속 연구에서 수정됩니다.',
      verification:{level:'text',label:text,detail:'검색 색인의 원문 T214 텍스트. 직접 PDF와 그림 미확보; 저자 연구실에서 서지 교차 확인.'},
      evidence:[ev('P21','p.T214 · Abstract, Introduction, Measurement Result and Discussion','세 기구 및 측정 범위. Fig.3–5는 본문의 설명만 확인.'),ev('P21','p.T214 · References [3], [4]','Chen IEDM2010 및 Choi VLSI2016 인용 확인.')]
    },
    {
      id:'P22',title:'A Novel Confined Nitride-Trapping Layer Device for 3D NAND Flash with Robust Retention Performances',
      shortTitle:'포획층 분리',authors:['Chung-Hao Fu','Hang-Ting Lue','Tzu-Hsuan Hsu','Wei-Chen Chen','Guan-Ru Lee','Chia-Jung Chiu','Keh-Chung Wang','Chih-Yuan Lu'],
      venue:'VLSI',year:2019,bibliography:'Symposium on VLSI Technology 2019 · T16-2 · pp. T212–T213',doi:'10.23919/VLSIT.2019.8776572',
      topics:['retention','ctn','3d','trap','endurance'],approach:'소자 구조',family:'design',
      summary:'SiN 포획층을 셀별로 분리해 측방 이동 경로를 제거하는 구조적 접근입니다.',
      problem:'공유 SiN의 lateral migration에 의한 보존 열화.',
      method:'Sidewall recess와 self-aligned SiN pull-back으로 confined trapping layer 구현.',
      finding:'1K P/E 후 125°C에서 1주 bake 시 약 600 mV 손실을 보고합니다. 비분리 대조 소자보다 개선된 결과입니다.',
      conditions:'8 OP-layer SGVC test vehicle · 초기 window 7 V · post-1K cycle · 125°C / 1 week.',
      limitation:'60°C에서 100년 이상은 1 V 평균 손실 기준의 Arrhenius 외삽이며 실측 수명이 아닙니다. 양산 고적층 TLC/QLC 결과로 일반화할 수 없습니다. 그래프 이미지 미확보.',
      verification:{level:'text',label:text,detail:'검색 색인의 원문 T212 본문·참고문헌. 직접 PDF는 403; Fig.9/10의 본문 설명만 확인.'},
      evidence:[ev('P22','p.T212 · §II–III, Fig.9/10 설명','구조·측정 조건·실측과 수명 외삽을 구분.')]
    },
    {
      id:'P23',title:'Effect of Nitrogen Content in Tunneling Dielectric on Cell Properties of 3-D NAND Flash Cells',
      shortTitle:'터널막 질소·TAT',graphLabel:'터널막 질소',authors:['Nagyong Choi','Ho-Jung Kang','Jong-Ho Bae','Byung-Gook Park','Jong-Ho Lee'],
      venue:'EDL',year:2019,bibliography:'IEEE Electron Device Letters 40(5) · pp. 702–705',doi:'10.1109/LED.2019.2905299',
      topics:['retention','ctn','3d','tunnel','endurance','erase'],approach:'절연막 설계',family:'design',
      summary:'터널 절연막의 질소 함량을 바꾸어 erase 개선과 retention·내구성 비용을 비교합니다.',
      problem:'밴드 엔지니어링으로 erase를 개선할 때의 신뢰성 비용.',
      method:'치수·공정이 같고 터널막 질소 조건이 다른 두 소자의 trap, P/E, retention 측정.',
      finding:'High-N₂는 erase에 유리하지만 25°C retention은 더 나쁩니다. 75°C에서는 두 시료의 손실이 유사하며 저자는 TAT와 thermal emission의 비중으로 해석합니다.',
      conditions:'Retention: 25/75°C · 2,000 s. Trap 비교: 1K cycle; P/E 특성 비교: 3K cycle. Fig.6 retention의 cycle 상태는 명시 확인 불가.',
      limitation:'두 시료의 비교입니다. 온도가 달라지면 차이도 달라집니다. 3K cycling P/E 결과를 Fig.6 retention의 조건으로 혼용하지 않습니다.',
      verification:{level:'pdf',label:pdf,detail:'대학 연구실 공개 PDF 4쪽 본문·참고문헌 및 p.704 Fig.5/6을 확인했습니다.'},
      evidence:[ev('P23','pp.703–704 · §III-B/C, Figs.4–6; §IV','erase / retention trade-off 및 온도별 차이. 논문 내부 시료 비교이며 논문 간 상충이 아닙니다.')]
    },
    {
      id:'P24',title:'Separation of Lateral Migration Components by Hole During the Short-Term Retention Operation in 3-D NAND Flash Memories',
      shortTitle:'PV1·정공 분리',graphLabel:'정공 성분',authors:['Shinkeun Kim','Haesoo Kim','Changbeom Woo','Gil-Bok Choi','Moon-Sik Seo','Hyunyoung Shim','Keum Hwan Noh','Hyungcheol Shin'],
      venue:'TED',year:2020,bibliography:'IEEE Transactions on Electron Devices 67(6) · pp. 2645–2647',doi:'10.1109/TED.2020.2989734',
      metadataUrl:'https://snu.elsevierpure.com/en/publications/separation-of-lateral-migration-components-by-hole-during-the-sho/',
      topics:['retention','ctn','3d'],approach:'조건 확장',family:'analysis',
      summary:'기존 모델을 PV1로 넓히며 측방 이동을 전자 성분과 잔류 정공 성분으로 분리합니다.',
      problem:'PV3/5/7 모델의 제약이 낮은 PV1에서는 맞지 않는 이유.',
      method:'LME·LMH를 분리한 네 성분 모델과 PV1의 온도·패턴별 측정 비교.',
      finding:'PV1에서는 solid / checkerboard 차이가 작고 residual-hole 성분이 중요하다고 해석합니다.',
      conditions:'25–115°C · ≤100 s · PV1 · S/P(P-P-P), C/P(E-P-E).',
      limitation:'정공의 직접 영상 증거가 아니라 측정과 모델의 일치에 근거한 해석입니다. τLMH < τLME는 모델링 가정. 미러 원문 텍스트만 확인했습니다.',
      verification:{level:'text',label:text,detail:'Scribd 공개 원문 텍스트 3쪽과 대학 서지 확인. 비공식 미러이며 그래프 이미지는 직접 판독하지 않았습니다.'},
      evidence:[ev('P24','pp.2645–2646 · §I–III, Fig.1–4 설명','기존 모델의 PV1 적용 불일치와 LME/LMH 분리.'),ev('P24','p.2647 · Fig.5/6 설명, References [3]–[5]','온도·패턴 비교와 선행 연구 인용 확인.')]
    },
    {
      id:'P25',title:'Evidence of Widely Distributed Time Constants in the Vertical Charge Loss of 3-D Charge-Trap NAND Flash Memories',
      shortTitle:'수직 손실·온도 이력',graphLabel:'온도 이력',authors:['David G. Refaldi','Gerardo Malavena','Luca Chiavarone','Alessandro S. Spinelli','Christian Monzio Compagnoni'],
      venue:'EDL',year:2024,bibliography:'IEEE Electron Device Letters 45(10) · pp. 1811–1814',doi:'10.1109/LED.2024.3435345',
      metadataUrl:'https://re.public.polimi.it/handle/11311/1274422',
      topics:['retention','ctn','3d','program'],approach:'특성 분석',family:'analysis',
      summary:'Program 온도와 retention 온도를 분리해 수직 손실의 시간상수 분포를 조사합니다.',
      problem:'같은 온도에서 쓰고 읽을 때 보이는 작은 apparent activation energy의 의미.',
      method:'300 K / 15 K 및 300→15→300 K 온도 이력 실험; 균일 program으로 측방 이동 최소화.',
      finding:'Program과 retention을 같은 온도에서 수행한 경우와 program 후 냉각한 경우가 다릅니다. 이를 시간상수 분포와 점유 상태로 설명합니다.',
      conditions:'10 WL 3D CT-NAND test element · 다수 BL 병렬 평가 · uniform pattern · 15/300 K.',
      limitation:'Apparent Ea≈0를 온도 비의존 메커니즘으로 단정하면 안 됩니다. 원문 텍스트와 그림 캡션을 확인했으며 그래프 원본은 미확보.',
      verification:{level:'text',label:text,detail:'ResearchGate 공개 원문 4쪽 텍스트, Polimi 기관 서지 교차 확인. 기관 PDF 직접 요청은 403.'},
      evidence:[ev('P25','pp.1812–1813 · §II–III, Fig.2–6 설명','온도 이력을 바꾼 실험과 수직 손실 해석.'),ev('P25','p.1814 · References [7]','Choi VLSI2016 인용 확인.')]
    }
  ].map(p=>({...p,sourceUrl:sources[p.id],checkedAt}));
  const relations = [
    {id:'E01',source:'P20',target:'P19',type:'cites',status:'citation_verified',note:'Choi 2016이 Chen 2010을 인용합니다. 인용 대상 본문은 미확보 상태입니다.',evidence:[ev('P20','p.78 · References [2]','C.-P. Chen, IEDM 2010, p.118.') ]},
    {id:'E02',source:'P21',target:'P19',type:'cites',status:'citation_verified',note:'Woo 2019의 선행 연구 목록에 Chen 2010이 있습니다.',evidence:[ev('P21','p.T214 · References [3]','C.-P. Chen, IEDM 2010, pp.118–121.')]},
    {id:'E03',source:'P21',target:'P20',type:'cites',status:'citation_verified',note:'Woo 2019가 Choi 2016을 인용하며 단기 손실을 성분별로 모델링합니다.',evidence:[ev('P21','p.T214 · References [4]','B. Choi, VLSI 2016, pp.78–79.')]},
    {id:'E04',source:'P24',target:'P19',type:'cites',status:'citation_verified',note:'Kim 2020이 Chen 2010을 선행 초기 손실 연구로 인용합니다.',evidence:[ev('P24','p.2647 · References [3]','Chen et al., IEDM 2010.')]},
    {id:'E05',source:'P24',target:'P21',type:'cites',status:'citation_verified',note:'Kim 2020이 Woo 2019의 세 기구 모델을 직접 인용합니다.',evidence:[ev('P24','p.2647 · References [4]','Woo et al., VLSI 2019.')]},
    {id:'E06',source:'P24',target:'P20',type:'cites',status:'citation_verified',note:'Kim 2020이 Choi 2016의 초기 retention 연구를 인용합니다.',evidence:[ev('P24','p.2647 · References [5]','Choi et al., VLSI 2016.')]},
    {id:'E07',source:'P25',target:'P20',type:'cites',status:'citation_verified',note:'Refaldi 2024가 Choi 2016을 비균일 전하 저장에 관한 선행 연구로 인용합니다.',evidence:[ev('P25','p.1811 · Introduction; p.1814 · References [7]','본문 인용과 DOI 10.1109/VLSIT.2016.7573385 확인.')]},
    {id:'E08',source:'P24',target:'P21',type:'extends',status:'author_comparison',note:'PV3/5/7용 기존 제약을 PV1에 적용하면 맞지 않아 LMH를 추가합니다. 기존 데이터 전체의 반박이 아닌 적용 범위의 확장입니다.',evidence:[ev('P24','pp.2645–2646 · §I–III','기존 모델과 PV1 측정의 불일치 및 새 성분 제안.'),ev('P21','p.T214 · Abstract','기존 평가 범위는 PV3/5/7.')]},
    {id:'E09',source:'P22',target:'P20',type:'alternative',status:'analyst_comparison',note:'같은 측방 손실 문제에 대해 Choi는 패턴·동작 조건을 분석하고, Fu는 포획층을 분리하는 구조를 제안합니다. 직접 인용이나 성능 우열을 뜻하지 않습니다.',evidence:[ev('P22','p.T212 · §I–III','Confined SiN 구조.'),ev('P20','pp.78–79 · Conclusion, Figs.13–16','공유 CTL의 패턴·PV/EV 의존성.')]},
    {id:'E10',source:'P23',target:'P22',type:'alternative',status:'analyst_comparison',note:'보존 개선을 설계 변수로 살펴보는 두 접근: 터널막 결함·질소 함량과 포획층의 물리적 분리. 손실 경로와 시험 조건이 달라 개선량을 직접 비교할 수 없습니다.',evidence:[ev('P23','pp.703–704 · §III-C, Fig.6','터널막 질소·온도별 비교.'),ev('P22','p.T212 · §III','측방 경로 분리 후 bake retention.')]},
    {id:'E11',source:'P24',target:'P20',type:'conditions',status:'analyst_comparison',note:'Choi의 checkerboard 열화와 Kim의 PV1 패턴 차이 감소는 조건을 맞춘 반증이 아닙니다. PV 설정·셀 구조·잔류 정공을 구분해 읽어야 합니다.',evidence:[ev('P20','p.79 · Fig.13; p.78 · Conclusion','패턴 의존성.'),ev('P24','p.2647 · Fig.5/6 설명, Conclusion','PV1의 작은 패턴 차이.')]},
    {id:'E12',source:'P25',target:'P21',type:'conditions',status:'analyst_comparison',note:'Woo의 VR(포획층 내부 재분포)과 Refaldi의 vertical loss(게이트 스택→채널)는 서로 다른 현상입니다. 온도 구간과 program 이력도 달라 Ea 또는 손실 크기의 모순으로 읽지 않습니다.',evidence:[ev('P21','p.T214 · Fig.5(b) 설명','Charge-trap layer 내부 VR 정의.'),ev('P25','p.1811 · Introduction; pp.1812–1813 · §II–III','Vertical loss 정의와 온도 이력 실험.')]}
  ].map(r=>({...r,checkedAt}));
  window.NAND_REAL_DATA = {
    ...window.NAND_DATA,schemaVersion:'0.3.0',status:'research',checkedAt,
    description:'Retention 선별 문헌 7편. PDF·그림 2편, 원문 텍스트 4편, 초록만 1편. 직접 인용과 분석자의 비교를 구분합니다. 체계적 문헌고찰이나 전체 출판물 목록은 아닙니다.',
    concepts:window.NAND_DATA.concepts.map(c=>c.id==='retention'?{...c,description:'초기 손실의 원인 분석, 포획층·터널막 설계, 동작 보완을 연결합니다. 논문과 관계에서 확인 범위 및 근거 위치를 확인하세요.'}:c),
    relationTypes:{
      cites:{label:'직접 인용',symbol:'→',color:'#a0aba9',directed:true,description:'인용하는 논문 → 인용된 논문. 출발 논문의 참고문헌에서 확인한 관계입니다. 인용은 결과에 대한 동의를 뜻하지 않습니다.'},
      extends:{label:'모델 확장',symbol:'→',color:'#7bbfac',directed:true,description:'후속 논문이 기존 모델의 적용 범위나 구성 요소를 확장합니다. 본문에 명시된 비교와 분석자 해석을 구분합니다.'},
      alternative:{label:'접근 비교',symbol:'↔',color:'#a7bfe0',directed:false,description:'원문을 바탕으로 분석자가 연결한 접근법 비교. 직접 인용 또는 성능 우열을 주장하지 않습니다.'},
      conditions:{label:'조건·해석 차이',symbol:'↔',color:'#d8b488',directed:false,description:'다르게 보이는 결과를 읽을 때 확인할 측정 조건과 용어의 차이. 검증된 모순과 구분합니다.'},
      challenges:{label:'검증된 상충',symbol:'↔',color:'#cf9291',directed:false,description:'비교 가능한 조건에서 직접 상충하는 결과 또는 명시적인 반증. 이번 선별 자료에서는 등록할 근거를 확인하지 못했습니다.'}
    },papers,relations
  };
})();
