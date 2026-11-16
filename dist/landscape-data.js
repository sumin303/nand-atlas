/* Verified landscape additions. Uploaded source PDF is not redistributed. */
(() => {
const additions = {
  "papers": [
    {
      "id": "P26",
      "owned": true,
      "title": "Accurate ML-Based Prediction of Next-Generation NAND With Limited Data Using Generative AI and Transfer Learning",
      "shortTitle": "내 연구 · DDPM + 전이학습",
      "graphLabel": "★ GenAI + TL",
      "authors": [
        "Soomin Kim",
        "Kyeongrae Cho",
        "Seungjoon Eom",
        "Donghyun Kim",
        "Sinyeong Kang",
        "Seongsoo Jeong",
        "Rock-Hyun Baek"
      ],
      "venue": "TED",
      "year": 2026,
      "bibliography": "IEEE Transactions on Electron Devices 73(5) · pp. 2703–2709 · May 2026",
      "doi": "10.1109/TED.2026.3669116",
      "sourceUrl": "https://ieeexplore.ieee.org/document/11428269/",
      "sourceLabel": "출판사 페이지 · PDF는 제공본 확인",
      "topics": [
        "generative",
        "transfer",
        "small-data",
        "surrogate",
        "ctn",
        "3d",
        "scaling"
      ],
      "family": "learning",
      "approach": "생성형 AI + 전이학습",
      "summary": "15 nm 3D CTN NAND의 소량 TCAD 데이터에서 DDPM 합성 데이터를 만들고, 사전학습·미세조정으로 전기적 특성을 예측합니다.",
      "problem": "기존 세대의 대량 데이터에 의존하지 않고, 개발 중인 차세대 NAND의 제한된 데이터로 정확한 특성 예측 모델을 만들 수 있는가?",
      "method": "500개 TCAD 데이터를 300/100/100 학습·검증·시험으로 분리. 학습 데이터만으로 DDPM을 훈련하고 구조 변수·FoM의 결합 분포를 생성합니다. 합성 데이터로 MLP를 사전학습한 뒤 원 TCAD 데이터로 미세조정합니다.",
      "finding": "Table II의 N=5 비교에서 TL은 TRTR 대비 네 FoM의 MSE를 줄였습니다. Vt 초기값은 혼합학습 TSRTR이 더 낮은 오차를 보였습니다. 층 고정의 효과는 FoM에 따라 달랐고, 합성 데이터 수 증가와 성능 향상은 단조 관계가 아니었습니다.",
      "conditions": "실측 48-layer U형 25 nm 소자로 보정한 TCAD에 기반한 15 nm 목표 구조: Mo gate, HfO2 liner, barrierless gate, BE-TOX. 출력은 Vt, 초기 Vt, SS, Ion. Fig.4에서는 합성 표본 100개를 추가 TCAD로 검사합니다.",
      "limitation": "목표 15 nm 구조의 검증은 TCAD 범위입니다. Retention·endurance·disturb 또는 새로운 공정/재료에 대한 OOD 정확도를 직접 검증한 결과는 아닙니다. Fig.9의 생성 공간 확장은 외삽 정확도의 증명이 아닙니다.",
      "verification": {
        "level": "pdf",
        "label": "제공 PDF·그림 확인",
        "detail": "사용자가 제공한 출판본 7쪽의 본문·표·참고문헌을 확인하고 pp.2704, 2707–2708의 그림·표를 시각 확인했습니다. PDF 파일은 사이트에 재배포하지 않습니다."
      },
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2703–2705 · §I–II; Figs.1–3, Table I",
          "note": "연구 문제, 목표 15 nm 구조와 DDPM→MLP 사전학습→미세조정; 500개 원 데이터의 60/20/20 분할과 누출 방지.",
          "url": "https://doi.org/10.1109/TED.2026.3669116"
        },
        {
          "paperId": "P26",
          "locator": "pp.2706–2707 · Fig.4, Tables II–III, Fig.7",
          "note": "합성 데이터의 FoM별 충실도 차이와 학습법·층 고정 비교. Table II에서 초기 Vt는 TSRTR 0.002, TL 0.003입니다.",
          "url": "https://doi.org/10.1109/TED.2026.3669116"
        },
        {
          "paperId": "P26",
          "locator": "pp.2708–2709 · Figs.8–9, Table IV, §IV",
          "note": "합성 데이터 수별 성능, α-shape/kNN 기반 공간·밀도 분석, 제한된 원 데이터 공간에 대한 논문의 해석 범위.",
          "url": "https://doi.org/10.1109/TED.2026.3669116"
        },
        {
          "paperId": "P26",
          "locator": "p.2709 · References [3], [12], [17], [20]",
          "note": "Hybrid bonding, retention NN, 세대 간 전이학습, 채널/입자 크기 연구의 직접 인용.",
          "url": "https://doi.org/10.1109/TED.2026.3669116"
        }
      ],
      "checkedAt": "2026-11-16",
      "position": {
        "headline": "소량 데이터로 차세대 소자를 예측하는 방법 연구",
        "path": [
          "models",
          "small-data",
          "generative",
          "transfer"
        ],
        "primary": "모델링·ML → 소량 데이터 → 생성형 데이터 + 전이학습",
        "device": "3D CTN NAND · 15 nm 목표 구조 · 전기적 FoM 예측",
        "interpretation": "방법론이 중심이고, 구조·스케일링이 적용 대상입니다. Program 상태 Vt를 출력으로 사용하지만 ISPP 펄스 제어 연구는 아닙니다. Retention은 인용한 NN 연구를 통해 연결됩니다.",
        "mapGaps": [
          {
            "title": "ML 축을 새로 보완",
            "text": "기존 Retention 중심 지도에는 생성 모델·전이학습·소량 데이터라는 분류가 빠져 있었습니다. 이번 논문과 직접 선행 연구를 넣어 보완했습니다."
          },
          {
            "title": "아직 얇은 주변 문헌",
            "text": "불확실성 정량화, active learning, 물리 제약 ML, 실측 기반 domain adaptation은 이 지도에서 미수집입니다. 논문이 없는 분야 또는 검증된 독창성으로 해석하지 않습니다."
          },
          {
            "title": "학회·시기별 편중",
            "text": "이번 확장은 원문을 확보한 TED 모델링 문헌 비중이 높습니다. 최근 IEDM·VLSI 제품/공정 문헌과 EDL 방법론을 추가해야 전체 흐름을 더 균형 있게 볼 수 있습니다."
          }
        ],
        "nextQuestions": [
          {
            "title": "새 세대 실측으로 어디까지 유지되는가?",
            "text": "15 nm TCAD 검증에서 실측 검증으로 확장하거나, 재료·공정 조건 단위로 분리한 평가를 설계할 수 있습니다.",
            "locator": "p.2704 §II-A; p.2709 §IV"
          },
          {
            "title": "어떤 표본을 더 계산해야 하는가?",
            "text": "예측 불확실성과 active learning을 결합해 다음 TCAD 표본을 고르는 방향입니다. 이 논문에서 평가한 결과는 아닙니다.",
            "locator": "pp.2708–2709 Fig.9 및 결론에서 파생한 후속 질문"
          },
          {
            "title": "신뢰성 예측으로 연결 가능한가?",
            "text": "시간·온도·cycling 조건과 retention 같은 출력을 넣었을 때도 합성 데이터와 전이학습이 유효한지 확인할 수 있습니다.",
            "locator": "p.2705 출력 FoM 범위; p.2709 References [12]"
          },
          {
            "title": "전체 계산 예산에서 이득은 얼마인가?",
            "text": "합성 데이터 확인용 추가 TCAD와 DDPM 계산을 포함하고, 같은 비용의 직접 TCAD 증분과 비교할 수 있습니다.",
            "locator": "p.2705 §III-A; p.2708 Fig.8 / Table IV"
          }
        ]
      }
    },
    {
      "id": "P27",
      "title": "Fast and Accurate Prediction of Electrical Characteristics of Next-Generation Node 3-D NAND Flash Memory Using Transfer Learning",
      "shortTitle": "세대 간 전이학습",
      "graphLabel": "25 → 19 nm TL",
      "authors": [
        "Hyundong Jang",
        "Soomin Kim",
        "Kyeongrae Cho",
        "Kihoon Nam",
        "Donghyun Kim",
        "Hyeok Yun",
        "Seungjoon Eom",
        "Rock-Hyun Baek"
      ],
      "venue": "TED",
      "year": 2025,
      "bibliography": "IEEE Transactions on Electron Devices 72(5) · pp.2354–2359",
      "doi": "10.1109/TED.2025.3556104",
      "sourceUrl": "https://www.scribd.com/document/856088282/Fast-and-Accurate-Prediction-of-Electrical-Characteristics-of-Next-Generation-Node-3-D-NAND-Flash-Memory-Using-Transfer-Learning-1",
      "topics": [
        "transfer",
        "small-data",
        "surrogate",
        "ctn",
        "3d",
        "scaling"
      ],
      "family": "learning",
      "approach": "세대 간 전이학습",
      "summary": "25 nm 셀의 대량 데이터로 사전학습한 MLP를 19 nm 셀의 적은 데이터에 전이합니다.",
      "problem": "새 노드의 부족한 데이터를 기존 노드에서 학습한 정보로 보완할 수 있는가?",
      "method": "측정 보정 TCAD: 25 nm 2000개와 19 nm 500개. 4-hidden-layer MLP의 앞 3개 층을 고정하고 마지막 층을 미세조정.",
      "finding": "시험 데이터의 FoM 평균·표준편차 예측 오차가 3% 미만이라고 보고합니다. 개별 모든 표본의 오차가 3% 미만이라는 의미는 아닙니다.",
      "conditions": "두 노드 모두 W gate/Al2O3 liner, 크기 축소만 평가. 학습·검증·시험 60/20/20. 출력 Vt·ΔVt·SS·Ion.",
      "limitation": "재료·구조 변경은 검증하지 않았다고 결론에서 명시합니다. P26과 노드·출력·데이터 구성이 달라 오차 수치를 직접 순위화하지 않습니다.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "공개 미러의 Early Access 원문 6쪽과 참고문헌 확인. 그림은 캡션·본문만 확인했으며 아래 위치는 Early Access 쪽수입니다."
      },
      "evidence": [
        {
          "paperId": "P27",
          "locator": "Early Access pp.2–3 · §II, Fig.4 설명; pp.4–6 · §III–IV",
          "note": "두 노드 데이터, 미세조정 조건과 결과; 결론은 재료·구조 변경을 향후 과제로 남깁니다.",
          "url": "https://www.scribd.com/document/856088282/Fast-and-Accurate-Prediction-of-Electrical-Characteristics-of-Next-Generation-Node-3-D-NAND-Flash-Memory-Using-Transfer-Learning-1"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P28",
      "title": "Optimization of Process Parameters on Short-Term Retention for Charge-Trapping 3-D NAND Flash Memories Using Novel Neural Networks Approach",
      "shortTitle": "NN 기반 retention 최적화",
      "graphLabel": "Retention NN",
      "authors": [
        "Hyundong Jang",
        "Kihoon Nam",
        "Hyeok Yun",
        "Kyeongrae Cho",
        "Seungjoon Eom",
        "Min Sang Park",
        "Rock-Hyun Baek"
      ],
      "venue": "TED",
      "year": 2023,
      "bibliography": "IEEE Transactions on Electron Devices 70(8) · pp.4157–4162",
      "doi": "10.1109/TED.2023.3288840",
      "sourceUrl": "https://www.researchgate.net/publication/372096817_Optimization_of_Process_Parameters_on_Short-Term_Retention_for_Charge-Trapping_3-D_nand_Flash_Memories_Using_Novel_Neural_Networks_Approach",
      "topics": [
        "surrogate",
        "retention",
        "ctn",
        "3d",
        "tunnel"
      ],
      "family": "learning",
      "approach": "NN 기반 구조 최적화",
      "summary": "MLP와 LSTM으로 시간에 따른 retention을 예측하고 구조 변수를 최적화하는 연구입니다.",
      "problem": "시간 의존 Vt loss를 예측하면서 시간 불변 구조 변수를 최적화할 수 있는가?",
      "method": "저자 초록: MLP+LSTM과 수정한 gradient descent로 여러 최적화 후보를 탐색.",
      "finding": "저자 초록은 더 두꺼운 TOX·긴 spacer로 Vt loss를 줄이는 결과를 보고합니다. 여기서는 본문 평가 조건 미확보로 정량 성능 비교를 하지 않습니다.",
      "conditions": "Short-term retention·TCAD 보정 기준. 시간·온도·데이터 분할의 상세 조건은 본문 미확보.",
      "limitation": "P26과 직접 인용 관계는 확인됐지만 예측 대상이 다릅니다. 두 연구가 retention 개선량으로 경쟁하는 관계는 아닙니다.",
      "verification": {
        "level": "abstract",
        "label": "초록 확인 · 본문 미확보",
        "detail": "저자 프로필에서 연결된 ResearchGate 원 저자 초록과 ORCID/Crossref 서지 확인. 본문·그림은 미확보. P26·P27의 참고문헌에서 이 논문 인용을 별도로 확인했습니다."
      },
      "evidence": [
        {
          "paperId": "P28",
          "locator": "저자 연결 ResearchGate 레코드 · Abstract",
          "note": "MLP/LSTM 결합, 구조 변수 최적화와 retention 예측의 범위.",
          "url": "https://www.researchgate.net/publication/372096817_Optimization_of_Process_Parameters_on_Short-Term_Retention_for_Charge-Trapping_3-D_nand_Flash_Memories_Using_Novel_Neural_Networks_Approach"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P29",
      "title": "Channel Thickness and Grain Size Engineering for Improvement of Variability and Performance in 3-D NAND Flash Memory",
      "shortTitle": "채널·입자 크기와 변동성",
      "graphLabel": "Channel / grain",
      "authors": [
        "Kihoon Nam",
        "Chanyang Park",
        "Jun-Sik Yoon",
        "Giho Yang",
        "Min Sang Park",
        "Rock-Hyun Baek"
      ],
      "venue": "TED",
      "year": 2022,
      "bibliography": "IEEE Transactions on Electron Devices 69(7) · pp.3681–3687",
      "doi": "10.1109/TED.2022.3175681",
      "sourceUrl": "https://www.scribd.com/document/856100368/Channel-Thickness-and-Grain-Size-Engineering-for-Improvement-of-Variability-and-Performance-in-3-D-NAND-Flash-Memory",
      "topics": [
        "channel",
        "rtn",
        "3d",
        "physics"
      ],
      "family": "analysis",
      "approach": "물리·통계 TCAD",
      "summary": "채널 두께와 입자 크기가 poly-Si의 성능·변동성에 미치는 영향을 3D Voronoi TCAD로 분석합니다.",
      "problem": "입자를 크게 하면 성능과 Vt 변동성이 함께 좋아지는가?",
      "method": "채널 두께·평균 grain size를 바꾸며 각 조합 평균 88개의 grain pattern을 통계 분석.",
      "finding": "GS 증가에 따른 σVth 변화는 채널 두께에 의존합니다. Tch>22 nm에서는 증가 경향(130 nm GS 예외), Tch<22 nm에서는 일관된 증가 경향이 없습니다.",
      "conditions": "4-WL TCAD, 실측 기반 보정. Grain-boundary trap 분포는 고정하고 Tch·GS를 변화시킵니다.",
      "limitation": "평균 성능과 분포 폭의 tradeoff를 구분해야 합니다. RTN 자체의 시간 통계 실험이 아니라 구조 변동성 연구입니다.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "공개 미러 본문·그림 캡션과 IEEE 초록/서지를 확인. 그림 이미지 미확보."
      },
      "evidence": [
        {
          "paperId": "P29",
          "locator": "pp.3682–3684 · §II–III-A, Figs.1–4 설명",
          "note": "Voronoi 방법, 평균 88개 표본, 채널 두께별 GS–σVth 조건 의존성.",
          "url": "https://www.scribd.com/document/856100368/Channel-Thickness-and-Grain-Size-Engineering-for-Improvement-of-Variability-and-Performance-in-3-D-NAND-Flash-Memory"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P30",
      "title": "Modeling the Operation of Charge Trap Flash Memory–Part I: The Importance of Carrier Energy Relaxation",
      "shortTitle": "에너지 완화 TCAD",
      "graphLabel": "에너지 완화",
      "authors": [
        "F. Schanovsky",
        "D. Verreck",
        "Z. Stanojević",
        "S. Schallert",
        "A. Arreghini",
        "G. van den Bosch",
        "M. Rosmeulen",
        "M. Karner"
      ],
      "venue": "TED",
      "year": 2024,
      "bibliography": "IEEE Transactions on Electron Devices 71(1) · pp. 547–553 · January 2024 (online 2023)",
      "doi": "10.1109/TED.2023.3339076",
      "metadataUrl": "https://imec-publications.be/entities/publication/d9af4f45-3c8a-4019-a105-a29f0cbe2f8c",
      "sourceUrl": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content",
      "topics": [
        "program",
        "ispp",
        "erase",
        "ctn",
        "3d",
        "retention",
        "physics"
      ],
      "approach": "물리 모델",
      "family": "analysis",
      "summary": "주입 전자의 에너지 완화를 반영해 ISPP 기울기와 프로그램 후 전하 분포를 함께 설명하는 TCAD 모델입니다.",
      "problem": "통상적인 drift–diffusion 모델이 ISPP 기울기를 과대평가하고 retention에 부적합한 전하 분포를 예측하는 문제.",
      "method": "열화된 캐리어의 생성 위치를 shape function으로 분포시켜 연속방정식에 결합. Planar·GAA·trench 소자의 측정과 비교.",
      "finding": "제안한 CI 접근이 ISPP/ISPE와 실온 retention을 재현합니다. Trench 결과는 측정 오차 범위 내이며 평균값 정밀 보정은 아직 미완료입니다.",
      "conditions": "GAA: 3 WL, hole 120 nm, TOX/CTL/BOX 각각 6 nm. Planar erase: program 100 μs, erase 1 ms. Retention 별도 구조: 2.2/6/8 nm, 실온, 두 program 상태.",
      "limitation": "보정된 연구용 소자 결과입니다. GAA의 6/6/6 nm 조건과 retention의 2.2/6/8 nm 조건을 혼용하면 안 됩니다. 보편적 모델 정확도 또는 양산 고적층 성능 보장이 아닙니다.",
      "verification": {
        "level": "pdf",
        "label": "PDF·그림 확인",
        "detail": "imec 기관 PDF 7쪽 원문과 p.549 Fig.3, p.551 Figs.5–8, p.552 Figs.9–12를 직접 확인했습니다."
      },
      "evidence": [
        {
          "paperId": "P30",
          "locator": "pp.549–550 · §III–IV",
          "note": "즉시 thermalization 가정의 문제와 shape-function 접근.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=3"
        },
        {
          "paperId": "P30",
          "locator": "p.551 · Figs.5–8; p.552 · Figs.10–12",
          "note": "ISPP/ISPE, GAA 구조, trench 오차 범위와 별도 실온 retention 검증.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=5"
        },
        {
          "paperId": "P30",
          "locator": "p.553 · References [7]",
          "note": "Vianello et al., TED56(9),1980–1990,2009 직접 인용.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=7"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P31",
      "title": "Modeling the Operation of Charge Trap Flash Memory—Part II: Understanding the ISPP Curve With a Semianalytical Model",
      "shortTitle": "Pheido ISPP 모델",
      "graphLabel": "Pheido",
      "authors": [
        "Devin Verreck",
        "Franz Schanovsky",
        "Antonio Arreghini",
        "Geert Van den Bosch",
        "Zlatan Stanojević",
        "Markus Karner",
        "Maarten Rosmeulen"
      ],
      "venue": "TED",
      "year": 2024,
      "bibliography": "IEEE Transactions on Electron Devices 71(1) · pp. 554–559 · January 2024 (online 2023)",
      "doi": "10.1109/TED.2023.3339112",
      "sourceUrl": "https://imec-publications.be/server/api/core/bitstreams/e1732299-73d5-4870-b597-2ab02279467a/content",
      "topics": [
        "program",
        "ispp",
        "ctn",
        "3d",
        "tunnel",
        "physics"
      ],
      "approach": "반해석 모델",
      "family": "analysis",
      "summary": "TCAD의 핵심 물리를 전류 균형식으로 축약해 ISPP의 네 영역을 해석합니다.",
      "problem": "비이상 ISPP를 설명하는 full TCAD의 계산 비용과 복잡성.",
      "method": "주입·탈출 전류와 trap filling을 연결한 Pheido 모델을 수치 적분하고 측정 및 Part I의 MinimosNT와 비교.",
      "finding": "Subonset, onset, quasi-linear, saturation의 네 영역을 구분합니다. 캐리어 탈출과 trap filling을 포함할 때 1보다 작은 기울기와 고전압 포화를 재현합니다.",
      "conditions": "300 mm 공정의 3-gate GAA test vehicle, memory-hole 120 nm, TOx/CTL/BOx 6/6/6 nm, pulse 100 μs. Fig.5–6은 재료·막두께 변화 시뮬레이션.",
      "limitation": "평균 CTL 전계와 주입 분포 등의 근사를 사용합니다. BOx에 도달한 미포획 전자는 사라진다고 처리하며 실제 탈출 경로를 명시적으로 풀지 않습니다. Erase/retention 전체 모델은 아닙니다.",
      "verification": {
        "level": "pdf",
        "label": "PDF·그림 확인",
        "detail": "imec 기관 PDF 6쪽 원문과 p.556 Figs.2–3/Table I를 직접 확인했습니다. 최종 페이지는 559입니다."
      },
      "evidence": [
        {
          "paperId": "P31",
          "locator": "pp.554–556 · §I–II-A, Eq.(2),(13),(16)",
          "note": "Part I과의 관계, 전류 균형, 탈출 가정과 trap filling.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/e1732299-73d5-4870-b597-2ab02279467a/content#page=1"
        },
        {
          "paperId": "P31",
          "locator": "p.556 · Figs.2–3, Table I; pp.557–558 · §II-B–III",
          "note": "실측/TCAD 직접 비교, 시험 조건과 네 영역 해석.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/e1732299-73d5-4870-b597-2ab02279467a/content#page=3"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P32",
      "title": "Experimental and Simulation Analysis of Program/Retention Transients in Silicon Nitride-Based NVM Cells",
      "shortTitle": "Program–retention 연속 모델",
      "graphLabel": "연속 동작 모델",
      "authors": [
        "Elisa Vianello",
        "Francesco Driussi",
        "Antonio Arreghini",
        "Pierpaolo Palestri",
        "David Esseni",
        "Luca Selmi",
        "Nader Akil",
        "Michiel J. van Duuren",
        "Dusan S. Golubović"
      ],
      "venue": "TED",
      "year": 2009,
      "bibliography": "IEEE Transactions on Electron Devices 56(9) · pp. 1980–1990 · September 2009",
      "doi": "10.1109/TED.2009.2026113",
      "metadataUrl": "https://air.uniud.it/handle/11390/876982",
      "sourceUrl": "https://www.researchgate.net/publication/224569347_Experimental_and_Simulation_Analysis_of_ProgramRetention_Transients_in_Silicon_Nitride-Based_NVM_Cells",
      "topics": [
        "program",
        "ctn",
        "retention",
        "tunnel",
        "physics"
      ],
      "approach": "물리 모델",
      "family": "analysis",
      "summary": "Program부터 retention까지 전하 분포를 이어 계산하고 측정 지연이 program 곡선을 왜곡할 수 있음을 분석합니다.",
      "problem": "초기 전하 분포 가정과 빠른 detrapping 때문에 program 효율 및 trap 에너지가 일관되게 추출되지 않는 문제.",
      "method": "SiN 내 1차원 drift–diffusion·Poisson·포획/방출 모델을 결합하고 빠른 Vt 검출 실험과 비교.",
      "finding": "전계에 따른 trap 에너지 모델과 측정 시간 반영으로 program/retention을 단일 파라미터 집합으로 설명합니다. Program 중 top dielectric 손실과 읽기 중 tunnel-oxide 손실을 구분합니다.",
      "conditions": "대표 planar SONOS TOX/SiN/top-oxide 2/6/9 nm. 고온 에너지 분석은 별도 6/6/6 nm 구조. Fig.15 기존 Vt 검출 시간 약 4 s.",
      "limitation": "현대 3D NAND의 직접 실증이 아닌 CTN 물리 선행 연구입니다. 단일 trap energy·균일 trap 분포 등 근사가 있고 초기 retention에는 잔차가 남습니다. 그래프 이미지는 직접 판독하지 않았습니다.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "저자 Francesco Driussi가 업로드한 ResearchGate 공개 원문 텍스트 pp.1980–1990 및 Udine 기관 서지 확인. PDF 다운로드 실패, 그림은 캡션·본문 설명만 확인."
      },
      "evidence": [
        {
          "paperId": "P32",
          "locator": "pp.1980–1983 · §I–II",
          "note": "전체 저자·DOI, DD 방정식과 program–retention 연속 계산.",
          "url": "https://www.researchgate.net/publication/224569347_Experimental_and_Simulation_Analysis_of_ProgramRetention_Transients_in_Silicon_Nitride-Based_NVM_Cells"
        },
        {
          "paperId": "P32",
          "locator": "pp.1986–1988 · §IV, Figs.9–15 설명; §V",
          "note": "검출 지연, trap 에너지, 전하 분포 및 두 동작 구간의 단일 파라미터 검증.",
          "url": "https://www.researchgate.net/publication/224569347_Experimental_and_Simulation_Analysis_of_ProgramRetention_Transients_in_Silicon_Nitride-Based_NVM_Cells"
        }
      ],
      "checkedAt": "2026-11-16",
      "researchType": "device_physics_background"
    },
    {
      "id": "P33",
      "title": "A Process-Aware Compact Model for GIDL-Assisted Erase Optimization of 3-D V-NAND Flash Memory",
      "shortTitle": "ANN·RC erase 모델",
      "graphLabel": "ANN·RC erase",
      "authors": [
        "Yohan Kim",
        "SoYoung Kim"
      ],
      "venue": "TED",
      "year": 2023,
      "bibliography": "IEEE Transactions on Electron Devices 70(4) · pp. 1664–1670 · April 2023",
      "doi": "10.1109/TED.2023.3246024",
      "metadataUrl": "https://icds.skku.edu/icds/Publications/International_Journals.do",
      "sourceUrl": "https://scholarx.skku.edu/item/851de6e9-f0e6-49f8-9b5e-bb6eec29604f",
      "topics": [
        "erase",
        "3d",
        "surrogate"
      ],
      "approach": "ML·물리 결합",
      "family": "learning",
      "summary": "채널 형상에 따른 GIDL을 ANN으로 표현하고 물리 RC network와 결합하는 erase 모델입니다. 현재 초록을 확인했습니다.",
      "problem": "고적층·고종횡비 NAND에서 공정 형상과 RC 지연을 반영한 erase 설계.",
      "method": "초록에 따르면 ANN GIDL 모델과 물리 RC network를 Verilog-A로 구현하고 SPICE에서 채널 전위 상승을 계산합니다.",
      "finding": "초록은 GIDL 주입, 식각 한계, Z shrink를 바꾼 구조 후보의 erase 최적화를 보고합니다. 정량 오차·개선율은 등록하지 않았습니다.",
      "conditions": "초록의 적용 맥락은 200층 이상 V-NAND DTCO입니다. 실제 검증 구조, 데이터 규모, bias·온도·분할 조건은 미확인입니다.",
      "limitation": "본문·그림·참고문헌 미확보. 데이터 효율, 생성모델, transfer learning 또는 사용자 논문과의 직접 인용 관계는 이 초록만으로 판단할 수 없습니다.",
      "verification": {
        "level": "abstract",
        "label": "초록 확인 · 본문 미확보",
        "detail": "성균관대 ScholarX의 원문 초록·DOI·권호·페이지 및 저자 연구실 publication 목록을 교차 확인했습니다."
      },
      "evidence": [
        {
          "paperId": "P33",
          "locator": "기관 저장소 · 초록 및 서지",
          "note": "ANN GIDL + 물리 RC + Verilog-A/SPICE 조합과 적용 범위.",
          "url": "https://scholarx.skku.edu/item/851de6e9-f0e6-49f8-9b5e-bb6eec29604f"
        },
        {
          "paperId": "P33",
          "locator": "저자 연구실 · 2023 publication 42",
          "note": "저자 두 명의 표기 및 TED 서지 확인.",
          "url": "https://icds.skku.edu/icds/Publications/International_Journals.do"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P34",
      "title": "Revisiting Charge Trapping/Detrapping in Flash Memories From a Discrete and Statistical Standpoint—Part I: VT Instabilities",
      "shortTitle": "이산 detrapping 통계",
      "graphLabel": "이산 detrapping",
      "authors": [
        "Giovanni M. Paolucci",
        "Christian Monzio Compagnoni",
        "Carmine Miccoli",
        "Alessandro S. Spinelli",
        "Andrea L. Lacaita",
        "Angelo Visconti"
      ],
      "venue": "TED",
      "year": 2014,
      "bibliography": "IEEE Transactions on Electron Devices 61(8) · pp. 2802–2810",
      "doi": "10.1109/TED.2014.2327661",
      "metadataUrl": "https://re.public.polimi.it/handle/11311/833325",
      "sourceUrl": "https://www.academia.edu/118146127/Revisiting_Charge_Trapping_Detrapping_in_Flash_Memories_From_a_Discrete_and_Statistical_Standpoint_Part_I_V_T_Instabilities",
      "topics": [
        "endurance",
        "retention",
        "rtn",
        "fg",
        "physics"
      ],
      "approach": "통계 모델",
      "family": "analysis",
      "summary": "P/E 이후 터널 산화막의 이산 detrapping을 시간상수와 단일 전하의 ΔVT 분포로 설명합니다.",
      "problem": "평균 retention 이동뿐 아니라 셀별 ΔVT 분포와 드문 큰 이동을 어떻게 계산할 것인가?",
      "method": "독립 사건, 초기 포획 전자 수의 Poisson 분포, 넓은 log-time 상수 분포로 ΔVT의 평균·분산·분포를 유도.",
      "finding": "평균 ΔVT의 logarithmic transient와 분산 관계를 연결합니다. 단일 사건의 ΔVT 크기 분포도 전체 분포 계산에 포함합니다.",
      "conditions": "Fig.1은 nanoscale NAND의 programmed-state post-cycling transient. Fig.8–10의 Nt=10, 평균 단일 ΔVT=50 mV, 시간상수 10⁻⁵–10⁶ h는 계산 예시입니다.",
      "limitation": "수치 예시를 소자 측정 조건으로 해석하지 않습니다. 시간상수 상·하한은 수학적 편의를 위한 가정이며 수명 측정이 아닙니다. microscopic mechanism을 직접 판별하는 연구가 아닙니다.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "Academia 공개 원문 본문·식·그림 캡션 확인. Polimi 기관 서지 교차 확인; 기관 AAM PDF 직접 요청은 403, 그림 이미지 미확보."
      },
      "evidence": [
        {
          "paperId": "P34",
          "locator": "§II-A/B · Fig.1–7; §III-A/B · Eqs.(8)–(18), Fig.8–10",
          "note": "post-cycling NAND 문제, log-time 상수 분포, 독립 사건 가정과 ΔVT 통계 유도. 그림은 캡션·본문 설명만 확인.",
          "url": "https://www.academia.edu/118146127/Revisiting_Charge_Trapping_Detrapping_in_Flash_Memories_From_a_Discrete_and_Statistical_Standpoint_Part_I_V_T_Instabilities"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P35",
      "title": "Cycling-Induced Charge Trapping/Detrapping in Flash Memories—Part II: Modeling",
      "shortTitle": "사이클·열 이력 모델",
      "graphLabel": "사이클 이력",
      "authors": [
        "Davide Resnati",
        "Gianluca Nicosia",
        "Giovanni M. Paolucci",
        "Angelo Visconti",
        "Christian Monzio Compagnoni"
      ],
      "venue": "TED",
      "year": 2016,
      "bibliography": "IEEE Transactions on Electron Devices 63(12) · pp. 4761–4768",
      "doi": "10.1109/TED.2016.2617890",
      "metadataUrl": "https://re.public.polimi.it/handle/11311/1003859",
      "sourceUrl": "https://www.academia.edu/118146112/Cycling_Induced_Charge_Trapping_Detrapping_in_Flash_Memories_Part_II_Modeling",
      "topics": [
        "endurance",
        "retention",
        "fg",
        "physics"
      ],
      "approach": "물리·통계 모델",
      "family": "analysis",
      "summary": "결함의 구조적 이완 이후 기판과 전하를 교환한다는 2단계 모델로 cycling 후 VT 불안정성을 설명합니다.",
      "problem": "사이클 수가 같아도 VT 상태·온도·idle 이력에 따라 달라지는 detrapping을 예측할 수 있는가?",
      "method": "결함 상태 전이와 통계 모델을 결합하고 16 nm NAND의 여러 cycling/bake 실험과 비교.",
      "finding": "단순 방출 시간상수만의 설명을 수정해 VT 상태별 기울기 변화와 cycling·온도 이력을 재현합니다. 분포의 누적확률도 비교합니다.",
      "conditions": "16 nm NAND · E/L1/L2/L3. §IV: 네 cycling 구간과 100°C idle, cycling은 RT 또는 85°C, 총 10k cycles. 모든 그림이 이 동일 조건은 아닙니다.",
      "limitation": "구조적 이완은 측정과 모델 일치에 기초한 해석입니다. 결함 구조의 직접 관측이 아닙니다. RTN을 별도 성분으로 다루며 CT-NAND vertical loss와 동일시하지 않습니다.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "Academia 공개 accepted-version 원문 8쪽의 본문·식·캡션·참고문헌 확인. 기관 서지 교차 확인; 그림 이미지 미확보."
      },
      "evidence": [
        {
          "paperId": "P35",
          "locator": "AAM pp.1–2 · §I–II; pp.3–4 · §III-B, Figs.3–4",
          "note": "2단계 해석과 16 nm NAND 검증, erased-state 및 VT-level 의존성.",
          "url": "https://www.academia.edu/118146112/Cycling_Induced_Charge_Trapping_Detrapping_in_Flash_Memories_Part_II_Modeling"
        },
        {
          "paperId": "P35",
          "locator": "AAM pp.6–7 · §IV, Figs.11–16; p.8 · References [4]",
          "note": "분산 cycling 조건과 열 이력; Paolucci TED2014 Part I 인용 확인.",
          "url": "https://www.academia.edu/118146112/Cycling_Induced_Charge_Trapping_Detrapping_in_Flash_Memories_Part_II_Modeling"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P36",
      "title": "Extraction of 3-D Trap Position in NAND Flash Memory Considering Channel Resistance of Pass Cells and Bit-Line Interference",
      "shortTitle": "RTN 트랩 위치 추출",
      "graphLabel": "RTN 트랩 위치",
      "authors": [
        "S. M. Joe",
        "M. K. Jung",
        "J. W. Lee",
        "M. S. Lee",
        "B. S. Jo",
        "J. H. Bae",
        "S. K. Park",
        "K. R. Han",
        "J. H. Yi",
        "G. S. Cho",
        "J. H. Lee"
      ],
      "venue": "VLSI",
      "year": 2011,
      "bibliography": "Symposium on VLSI Technology 2011 · 4B-5 · pp.76–77 · IEEE document 5984517",
      "doi": "",
      "metadataUrl": "https://snu.elsevierpure.com/en/publications/extraction-of-3-d-trap-position-in-nand-flash-memory-considering-/",
      "sourceUrl": "https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/283.pdf",
      "topics": [
        "rtn",
        "fg",
        "read",
        "planar"
      ],
      "approach": "특성 추출",
      "family": "analysis",
      "summary": "Pass-cell 저항을 보정하고 인접 bit-line 간섭을 활용해 RTN 트랩의 공간 위치를 추출합니다.",
      "problem": "NAND string의 직렬 저항과 인접 셀 상태가 RTN 기반 트랩 위치 추정을 왜곡하는 문제.",
      "method": "저항 유무 MOSFET 대조 실험, 48 nm NAND의 보정식 검증, 3D TCAD와 32 nm NAND의 인접 셀 패턴 비교.",
      "finding": "저항 보정은 정·역 bias 추출값 차이를 줄입니다. 인접 셀 E/P 패턴에 따른 RTN 전류 크기 차이를 폭 방향 위치 추출에 사용합니다.",
      "conditions": "Planar floating-gate NAND · tunnel oxide 8.7 nm · inter-poly ONO 4/4/6 nm. 32 nm 사례: VBL=0.8 V, Vpass=6.5 V, 인접 셀 VT=±3 V. Fig.13은 10셀.",
      "limitation": "제목의 3-D는 트랩 좌표를 뜻하며 수직 적층 NAND가 아닙니다. 국소 트랩 추출 연구로, 전체 array의 RTN 확률분포나 endurance 수명 결과가 아닙니다.",
      "verification": {
        "level": "pdf",
        "label": "PDF·그림 확인",
        "detail": "국민대 연구실 공개 원본 2쪽 본문과 p.77 Figs.1–16·Table1 직접 확인. DOI를 확인하지 못해 공란으로 두고 IEEE document 번호를 기록했습니다."
      },
      "evidence": [
        {
          "paperId": "P36",
          "locator": "p.76 · Devices Structure and Results; p.77 · Figs.3–8, Table1",
          "note": "Pass-cell resistance 교정식과 정·역 bias 비교.",
          "url": "https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/283.pdf"
        },
        {
          "paperId": "P36",
          "locator": "p.76 · Fig.12–13 설명; p.77 · Figs.9–16",
          "note": "인접 bit-line 상태를 바꾼 RTN 측정, 32 nm planar FG TEM과 10셀 트랩 좌표.",
          "url": "https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/283.pdf"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P37",
      "title": "Analysis on New Read Disturbance Induced by Hot Carrier Injections in 3-D Channel-Stacked NAND Flash Memory",
      "shortTitle": "HCI read disturb 억제",
      "graphLabel": "HCI disturb",
      "authors": [
        "Dae Woong Kwon",
        "Do Bin Kim",
        "Junil Lee",
        "Sihyun Kim",
        "Ryoongbin Lee",
        "Jong Ho Lee",
        "Byung Gook Park"
      ],
      "venue": "TED",
      "year": 2019,
      "bibliography": "IEEE Transactions on Electron Devices 66(8) · pp.3326–3330",
      "doi": "10.1109/TED.2019.2920127",
      "metadataUrl": "https://snu.elsevierpure.com/en/publications/analysis-on-new-read-disturbance-induced-by-hot-carrier-injection/",
      "sourceUrl": "https://snu.elsevierpure.com/en/publications/analysis-on-new-read-disturbance-induced-by-hot-carrier-injection/",
      "topics": [
        "read",
        "disturb",
        "3d"
      ],
      "approach": "읽기 파형 설계",
      "family": "control",
      "summary": "채널 적층 NAND에서 Vunsel 상승·하강에 따른 양·음 boosting의 HCI read disturb를 분석한 연구입니다.",
      "problem": "선택되지 않은 채널 층의 인접 셀이 반복 FN stress 외에도 HCI로 교란되는 문제.",
      "method": "초록에 따르면 TCAD와 측정을 비교하고 Vunsel 전환 중 선택 셀을 ON으로 유지하는 read 동작을 제안.",
      "finding": "초록은 BL측·CSL측 인접 셀의 서로 다른 boosting 원인과 제안 동작의 HCI 억제를 보고합니다. 개선율은 등록하지 않았습니다.",
      "conditions": "채널 층별 접근용 SST를 갖는 3D channel-stacked NAND. 정확한 pulse·전압·사이클·온도는 본문 미확보로 미확인.",
      "limitation": "기관 초록만 확인했습니다. 참고문헌, 정량 성능과 다른 구조로의 일반화는 검증하지 않았으며 원문 기반 논문 간 결과 비교에는 사용하지 않습니다.",
      "verification": {
        "level": "abstract",
        "label": "초록 확인 · 본문 미확보",
        "detail": "서울대 기관 서지·초록 확인. IEEE document 8738845; 본문·그림·참고문헌 미확보."
      },
      "evidence": [
        {
          "paperId": "P37",
          "locator": "서울대 기관 서지 · Abstract",
          "note": "메커니즘과 read 동작 개념만 확인; 정량 결과·조건·인용관계 미확인.",
          "url": "https://snu.elsevierpure.com/en/publications/analysis-on-new-read-disturbance-induced-by-hot-carrier-injection/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P38",
      "title": "Bit Cost Scalable Technology with Punch and Plug Process for Ultra High Density Flash Memory",
      "shortTitle": "BiCS · 일괄 관통 적층",
      "graphLabel": "BiCS",
      "authors": [
        "H. Tanaka",
        "M. Kido",
        "K. Yahashi",
        "M. Oomura",
        "R. Katsumata",
        "M. Kito",
        "Y. Fukuzumi",
        "M. Sato",
        "Y. Nagata",
        "Y. Matsuoka",
        "Y. Iwata",
        "H. Aochi",
        "A. Nitayama"
      ],
      "venue": "VLSI",
      "year": 2007,
      "bibliography": "IEEE Symposium on VLSI Technology 2007 · 2-2 · pp. 14–15",
      "doi": "10.1109/VLSIT.2007.4339708",
      "metadataUrl": "https://doi.org/10.1109/VLSIT.2007.4339708",
      "sourceUrl": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1558206/download-documents?artifactId=u_eHoYWI8VssnUX7YxrEWfeRakADti6ohI6RWddq-mMRJH3UPSoMGns",
      "topics": [
        "3d",
        "ctn",
        "stack",
        "scaling",
        "erase"
      ],
      "approach": "공정·구조",
      "family": "design",
      "researchType": "device_demonstration",
      "summary": "적층을 한꺼번에 관통하고 메모리막·채널을 채우는 초기 BiCS 구조를 시연합니다.",
      "problem": "적층 증가에 따른 반복 리소그래피 비용을 어떻게 줄일 것인가?",
      "method": "SONOS 수직 스트링의 punch-and-plug 공정, 계단형 게이트 접속과 GIDL 정공 기반 erase.",
      "finding": "90 nm 어레이를 제작하고 적층 수와 핵심 리소그래피 횟수를 분리하는 구조를 제안합니다.",
      "conditions": "초기 BiCS test array · 90 nm · n×512 kbit 매크로. 셀 면적 6F²/n은 제안 구조의 표현입니다.",
      "limitation": "비용 비교는 공정 모델이며 현재 제품 원가 통계가 아닙니다. 현대 고적층 양산 소자와 직접 비교할 수 없습니다. 그림 원본 미확보.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "USPTO 공개 전시물에 포함된 논문 pp.14–15의 검색 색인 텍스트·캡션. 직접 PDF 요청은 403. 서지는 Crossref와 교차 확인."
      },
      "evidence": [
        {
          "paperId": "P38",
          "locator": "p.14 · Concept / Fabrication and Results; p.15 · Figs.3–7 캡션",
          "note": "BiCS 구조·공정·90 nm 어레이 및 n×512 kbit 매크로. 그림 자체는 판독하지 않았습니다.",
          "url": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1558206/download-documents?artifactId=u_eHoYWI8VssnUX7YxrEWfeRakADti6ohI6RWddq-mMRJH3UPSoMGns"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "P39",
      "title": "Vertical Cell Array using TCAT (Terabit Cell Array Transistor) Technology for Ultra High Density NAND Flash Memory",
      "shortTitle": "TCAT · Gate replacement",
      "graphLabel": "TCAT",
      "authors": [
        "Jaechoon Jang",
        "Han-Soo Kim",
        "Wonseok Cho",
        "Hoosung Cho",
        "Jinho Kim",
        "Sun Il Shim",
        "Younggoan Jang",
        "Jae-Hun Jeong",
        "Byoung-Keun Son",
        "Dong Woo Kim",
        "Kihyun Kim",
        "Jae-Joo Shim",
        "Jin Soo Lim",
        "Kyoung-Hoon Kim",
        "Su Youn Yi",
        "Ju-Young Lim",
        "Dewill Chung",
        "Hui-Chang Moon",
        "Sungmin Hwang",
        "Jong-Wook Lee",
        "Yong-Hoon Son",
        "U-In Chung",
        "Won-Seong Lee"
      ],
      "venue": "VLSI",
      "year": 2009,
      "bibliography": "Symposium on VLSI Technology 2009 · 10A-4 · pp. 192–193 · IEEE document 5200595",
      "doi": null,
      "metadataUrl": "https://ieeexplore.ieee.org/document/5200595",
      "sourceUrl": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1557309/download-documents?artifactId=ao5LP_emoDO__Fa6Qx0_zYFwguqxDABrYuG8qDPXXOM8PXGwhdDosoc",
      "topics": [
        "3d",
        "ctn",
        "stack",
        "erase",
        "scaling"
      ],
      "approach": "공정·구조",
      "family": "design",
      "researchType": "device_demonstration",
      "summary": "희생막을 금속 게이트로 교체하는 TCAT 공정과 bulk erase를 시연합니다.",
      "problem": "수직 적층에서 게이트 공정과 erase 경로를 어떻게 구현할 것인가?",
      "method": "Gate replacement로 metal-gate SONOS를 형성하고 채널을 기판에 연결하는 구조.",
      "finding": "수직 NAND 스트링에서 bulk erase를 보고하며 초기 BiCS의 공정·GIDL erase와 설계 차이를 설명합니다.",
      "conditions": "6개 메모리 셀과 SSL/GSL로 구성된 스트링 · 채널 홀 120 nm. 약 45 nm는 향후 축소 논의이며 제작 조건이 아닙니다.",
      "limitation": "초기 test vehicle 결과입니다. 본문의 미래 치수·장기 retention 외삽을 실측으로 취급하지 않습니다. DOI는 확인되지 않아 IEEE 문서 링크를 사용합니다.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인",
        "detail": "USPTO 공개 전시물의 원문 텍스트·참고문헌·캡션 확인. 직접 PDF 요청은 403이며 그림 판독은 하지 않았습니다."
      },
      "evidence": [
        {
          "paperId": "P39",
          "locator": "p.192 · Abstract / Introduction / Fabrication Process / Electrical Characteristics",
          "note": "Gate replacement, bulk erase와 120 nm 채널 홀 조건. Fig.4/5/11은 본문 설명만 확인.",
          "url": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1557309/download-documents?artifactId=ao5LP_emoDO__Fa6Qx0_zYFwguqxDABrYuG8qDPXXOM8PXGwhdDosoc"
        },
        {
          "paperId": "P39",
          "locator": "p.192 · References [1]",
          "note": "H. Tanaka et al., VLSI 2007, pp.14–15 직접 인용.",
          "url": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1557309/download-documents?artifactId=ao5LP_emoDO__Fa6Qx0_zYFwguqxDABrYuG8qDPXXOM8PXGwhdDosoc"
        }
      ],
      "checkedAt": "2026-11-16",
      "sourceLabel": "원문 수록 출처"
    },
    {
      "id": "P40",
      "title": "3-D NAND Technology Achievements and Future Scaling Perspectives",
      "shortTitle": "3D 집적도 축 · 리뷰",
      "graphLabel": "Scaling 리뷰",
      "authors": [
        "Akira Goda"
      ],
      "venue": "TED",
      "year": 2020,
      "bibliography": "IEEE Transactions on Electron Devices 67(4) · pp. 1373–1381 · Invited Paper",
      "doi": "10.1109/TED.2020.2968079",
      "metadataUrl": "https://doi.org/10.1109/TED.2020.2968079",
      "sourceUrl": "https://borecraft.com/PDF/Articles/NAND_Scaling.pdf",
      "topics": [
        "scaling",
        "3d",
        "stack",
        "fg",
        "ctn",
        "periphery",
        "tlc",
        "qlc",
        "channel",
        "retention"
      ],
      "approach": "문헌 리뷰",
      "family": "analysis",
      "researchType": "invited_review",
      "summary": "층수·셀당 비트 수·주변회로 배치·셀 치수라는 집적도 축을 정리한 2020년 초청 리뷰입니다.",
      "problem": "3D NAND 집적도를 높이는 서로 다른 설계 축과 물리적 제약을 어떻게 구분할 것인가?",
      "method": "선행 구조·측정·ISSCC 발표 자료를 정리하고 FG와 CTF, 채널 및 scaling 과제를 비교.",
      "finding": "WL 적층과 치수 축소, array 이용률, 다중 비트의 기여를 구분합니다. 독립적인 새 소자 실험 논문은 아닙니다.",
      "conditions": "2020년 발행 리뷰 · 집적도 그래프의 3D 자료 구간은 2014–2019년 발표 사례. 제시된 미래 scaling 방향은 전망입니다.",
      "limitation": "현재 산업 전체의 최신 현황을 뜻하지 않습니다. 넓은 주제 태그는 리뷰 범위이며 모든 분야를 직접 실험한 근거가 아닙니다. PDF 직접 링크는 현재 404, 색인 텍스트만 확인.",
      "verification": {
        "level": "text",
        "label": "원문 텍스트 확인 · 리뷰",
        "detail": "검색 색인의 원문 pp.1373–1381과 참고문헌. 미러 PDF 직접 접근은 404이며 그림 원본 미확보. Crossref로 제목·DOI·쪽수 확인."
      },
      "evidence": [
        {
          "paperId": "P40",
          "locator": "pp.1373–1375 · §II–III; pp.1377–1379 · §V",
          "note": "발표 사례 기반 집적도 비교, FG/CTF 구조 및 향후 scaling 축. 그림 수치는 별도로 전사하지 않았습니다.",
          "url": "https://borecraft.com/PDF/Articles/NAND_Scaling.pdf"
        },
        {
          "paperId": "P40",
          "locator": "p.1379 · References [1], [2]; p.1381 · References [87]",
          "note": "Tanaka VLSI2007, Jang VLSI2009, Fu VLSI2019 직접 인용 확인.",
          "url": "https://borecraft.com/PDF/Articles/NAND_Scaling.pdf"
        }
      ],
      "checkedAt": "2026-11-16",
      "sourceLabel": "원문 위치 · 직접 접근 제한"
    },
    {
      "id": "P41",
      "title": "High-Density 3-D NAND Cell Array Design With Hybrid Bonding",
      "shortTitle": "Hybrid bonding · 분리 SL",
      "graphLabel": "분리 SL",
      "authors": [
        "Seungmin Lee",
        "Joonsung Lim",
        "Jun Hyoung Kim",
        "Sunghwan Cho",
        "Yong Kyu Lee",
        "Byoungdeog Choi"
      ],
      "venue": "TED",
      "year": 2023,
      "bibliography": "IEEE Transactions on Electron Devices 70(11) · pp. 5638–5644",
      "doi": "10.1109/TED.2023.3311419",
      "metadataUrl": "https://pure.skku.edu/en/publications/high-density-3-d-nand-cell-array-design-with-hybrid-bonding/",
      "sourceUrl": "https://pure.skku.edu/en/publications/high-density-3-d-nand-cell-array-design-with-hybrid-bonding/",
      "topics": [
        "stack",
        "3d",
        "scaling",
        "program",
        "disturb"
      ],
      "approach": "어레이·동작 설계",
      "family": "design",
      "researchType": "tcad_design",
      "summary": "Hybrid bonding에 맞춰 source line을 분리하고 dummy 영역을 줄이는 어레이 설계입니다. 기관 초록까지 확인했습니다.",
      "problem": "Hybrid bonding 구조의 dummy 셀 면적을 줄이면서 string 선택·inhibit를 구현할 수 있는가?",
      "method": "CSL을 여러 SL로 분리하고 비대칭 GIDL을 활용하는 program 방식의 TCAD 검증.",
      "finding": "초록은 9-cell/24-cell 구조의 bit density 증가를 각각 8%/15%로 제시합니다. 제작 제품에서 측정된 증가율로 해석하지 않습니다.",
      "conditions": "어레이 설계 및 TCAD 시뮬레이션 · 9-cell/24-cell 구조. 상세 치수·바이어스·모델 보정 조건은 본문 미확보.",
      "limitation": "VPASS disturb 개선은 초록에서 기대 효과로 표현됩니다. 실측 신뢰성 개선이나 다른 논문보다 우수한 결과로 등록하지 않습니다. 본문·참고문헌 미확보.",
      "verification": {
        "level": "abstract",
        "label": "초록 확인 · 본문 미확보",
        "detail": "저자 소속 성균관대 연구정보의 원 저자 초록과 서지 확인. 본문·그림 및 인용 목록은 확인하지 못했습니다."
      },
      "evidence": [
        {
          "paperId": "P41",
          "locator": "SKKU 기관 레코드 · Abstract / Bibliographic information",
          "note": "SL 분리, dummy 제거, 밀도 설계 수치와 TCAD program 검증. 실제 소자 측정으로 표시하지 않습니다.",
          "url": "https://pure.skku.edu/en/publications/high-density-3-d-nand-cell-array-design-with-hybrid-bonding/"
        }
      ],
      "checkedAt": "2026-11-16"
    }
  ],
  "relations": [
    {
      "source": "P26",
      "target": "P27",
      "type": "cites",
      "status": "citation_verified",
      "note": "생성형 AI+TL 논문이 기존 25→19 nm 전이학습 연구를 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2709 · References [17]",
          "note": "생성형 AI+TL 논문이 기존 25→19 nm 전이학습 연구를 직접 인용합니다.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L01"
    },
    {
      "source": "P26",
      "target": "P28",
      "type": "cites",
      "status": "citation_verified",
      "note": "시간 의존 NAND 특성에 신경망을 적용한 선행 연구로 인용합니다. P26의 출력은 retention transient가 아닙니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2709 · References [12]",
          "note": "시간 의존 NAND 특성에 신경망을 적용한 선행 연구로 인용합니다. P26의 출력은 retention transient가 아닙니다.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L02"
    },
    {
      "source": "P26",
      "target": "P29",
      "type": "cites",
      "status": "citation_verified",
      "note": "소자/TCAD 구조 설명에서 채널 두께·입자 크기 선행 연구를 인용합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2709 · References [20]",
          "note": "소자/TCAD 구조 설명에서 채널 두께·입자 크기 선행 연구를 인용합니다.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L03"
    },
    {
      "source": "P26",
      "target": "P41",
      "type": "cites",
      "status": "citation_verified",
      "note": "집적도 확장 배경에서 hybrid bonding 어레이 설계를 인용합니다. 이 인용이 P26의 hybrid bonding 실험을 뜻하지는 않습니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2709 · References [3]",
          "note": "집적도 확장 배경에서 hybrid bonding 어레이 설계를 인용합니다. 이 인용이 P26의 hybrid bonding 실험을 뜻하지는 않습니다.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L04"
    },
    {
      "source": "P27",
      "target": "P28",
      "type": "cites",
      "status": "citation_verified",
      "note": "전이학습 연구가 NAND reliability에 NN을 적용한 앞선 연구로 인용합니다.",
      "evidence": [
        {
          "paperId": "P27",
          "locator": "Early Access p.6 · References [10]",
          "note": "전이학습 연구가 NAND reliability에 NN을 적용한 앞선 연구로 인용합니다.",
          "url": "https://www.scribd.com/document/856088282/Fast-and-Accurate-Prediction-of-Electrical-Characteristics-of-Next-Generation-Node-3-D-NAND-Flash-Memory-Using-Transfer-Learning-1"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L05"
    },
    {
      "source": "P27",
      "target": "P29",
      "type": "cites",
      "status": "citation_verified",
      "note": "전이학습 연구의 소자 구조·변수 설정 문맥에서 인용합니다.",
      "evidence": [
        {
          "paperId": "P27",
          "locator": "Early Access p.6 · References [17]",
          "note": "전이학습 연구의 소자 구조·변수 설정 문맥에서 인용합니다.",
          "url": "https://www.scribd.com/document/856088282/Fast-and-Accurate-Prediction-of-Electrical-Characteristics-of-Next-Generation-Node-3-D-NAND-Flash-Memory-Using-Transfer-Learning-1"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L06"
    },
    {
      "source": "P27",
      "target": "P40",
      "type": "cites",
      "status": "citation_verified",
      "note": "다음 세대의 셀 축소와 집적도 배경으로 Goda의 리뷰를 인용합니다.",
      "evidence": [
        {
          "paperId": "P27",
          "locator": "Early Access p.6 · References [6]",
          "note": "다음 세대의 셀 축소와 집적도 배경으로 Goda의 리뷰를 인용합니다.",
          "url": "https://www.scribd.com/document/856088282/Fast-and-Accurate-Prediction-of-Electrical-Characteristics-of-Next-Generation-Node-3-D-NAND-Flash-Memory-Using-Transfer-Learning-1"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L07"
    },
    {
      "source": "P26",
      "target": "P27",
      "type": "extends",
      "status": "author_comparison",
      "note": "대량 기존-node 데이터→소량 새-node 전이에서, 소량 목표-node 데이터→DDPM 합성 사전학습→미세조정으로 접근을 확장합니다. 논문 간 정량 head-to-head 성능 우위를 뜻하지 않습니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2703–2704 · Introduction / Fig.1",
          "note": "[17]의 데이터·구조 제약을 짚고 생성 데이터 기반 학습을 제안.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P27",
          "locator": "Early Access pp.2–3 · §II; p.6 · §IV",
          "note": "기존/새 노드 데이터와 재료·구조 변경 미평가 범위.",
          "url": "https://www.scribd.com/document/856088282/Fast-and-Accurate-Prediction-of-Electrical-Characteristics-of-Next-Generation-Node-3-D-NAND-Flash-Memory-Using-Transfer-Learning-1"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L08"
    },
    {
      "id": "L09",
      "source": "P30",
      "target": "P32",
      "type": "cites",
      "status": "citation_verified",
      "note": "Schanovsky 2024가 Vianello 2009를 DD 기반 program/retention 및 전하 분포의 선행 모델로 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P30",
          "locator": "p.553 · References [7]; p.552 · §VI",
          "note": "Vianello 2009의 서지와 본문 [7] 인용 확인.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=7"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L10",
      "source": "P31",
      "target": "P30",
      "type": "extends",
      "status": "author_comparison",
      "note": "Part II는 Part I의 에너지 완화 물리를 축약한 반해석 모델이며 Fig.3에서 동일 측정 및 full TCAD와 직접 비교합니다. Part I은 본문에 명시되지만 번호형 참고문헌 항목은 없습니다.",
      "evidence": [
        {
          "paperId": "P31",
          "locator": "p.554 · Abstract/§I; p.556 · Fig.3",
          "note": "Part I의 물리 가정을 단순화하고 MinimosNT와 비교한다고 명시.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/e1732299-73d5-4870-b597-2ab02279467a/content#page=3"
        },
        {
          "paperId": "P30",
          "locator": "p.547 · Abstract; p.551 · §V-B/Fig.8",
          "note": "Companion Part II를 예고하고 120 nm GAA 실측과 TCAD를 제시.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=5"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L11",
      "source": "P30",
      "target": "P32",
      "type": "conditions",
      "status": "author_comparison",
      "note": "Part I는 DD의 계면 쪽 전하 집중과 실온 retention 기울기의 불일치를 지적하며 Vianello 모델을 인용합니다. Vianello는 별도 2/6/9 nm 소자와 검출 시간·전계 의존 trap 에너지로 일치를 보고합니다. 동일 구조·파라미터의 재현 실험이 아니므로 논문 전체의 반증으로 표시하지 않습니다.",
      "evidence": [
        {
          "paperId": "P30",
          "locator": "p.552 · §VI, Figs.11–12",
          "note": "[7] DD 전하 분포에 대한 논의 및 2.2/6/8 nm 실온 retention 비교.",
          "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=6"
        },
        {
          "paperId": "P32",
          "locator": "pp.1987–1988 · Figs.12–15 설명 및 §V",
          "note": "2/6/9 nm 소자에서 program/retention의 단일 파라미터 일치, 초기 잔차와 측정 지연 논의.",
          "url": "https://www.researchgate.net/publication/224569347_Experimental_and_Simulation_Analysis_of_ProgramRetention_Transients_in_Silicon_Nitride-Based_NVM_Cells"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "source": "P35",
      "target": "P34",
      "type": "cites",
      "status": "citation_verified",
      "note": "Resnati2016 Part II가 Paolucci2014 Part I의 통계적 detrapping 연구를 인용합니다. 두 논문을 직접 상충으로 표시하지 않습니다.",
      "evidence": [
        {
          "paperId": "P35",
          "locator": "AAM p.8 · References [4]",
          "note": "제목·저자·TED61(8)2802–2810 일치 확인.",
          "url": "https://www.academia.edu/118146112/Cycling_Induced_Charge_Trapping_Detrapping_in_Flash_Memories_Part_II_Modeling"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L12"
    },
    {
      "source": "P25",
      "target": "P34",
      "type": "cites",
      "status": "citation_verified",
      "note": "Refaldi2024가 cycling-induced oxide detrapping의 배경으로 인용합니다. 자신의 vertical-loss 결과에서는 이 annealing 영향이 배제된다고 설명하므로 동일 메커니즘 입증으로 읽지 않습니다.",
      "evidence": [
        {
          "paperId": "P25",
          "locator": "p.1813 · §III; p.1814 · References [14]",
          "note": "본문의 [14]–[16] 인용 맥락과 참고문헌 제목·DOI 확인.",
          "url": "https://www.researchgate.net/publication/382674531_Evidence_of_Widely_Distributed_Time_Constants_in_the_Vertical_Charge_Loss_of_3-D_Charge-Trap_NAND_Flash_Memories"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L13"
    },
    {
      "source": "P25",
      "target": "P35",
      "type": "cites",
      "status": "citation_verified",
      "note": "Refaldi2024가 cycling-induced oxide detrapping과 CT-layer vertical loss를 구분하는 문맥에서 Resnati2016 Part II를 인용합니다.",
      "evidence": [
        {
          "paperId": "P25",
          "locator": "p.1813 · §III; p.1814 · References [16]",
          "note": "Part II Modeling 및 DOI 10.1109/TED.2016.2617890 확인.",
          "url": "https://www.researchgate.net/publication/382674531_Evidence_of_Widely_Distributed_Time_Constants_in_the_Vertical_Charge_Loss_of_3-D_Charge-Trap_NAND_Flash_Memories"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "L14"
    },
    {
      "id": "L15",
      "source": "P39",
      "target": "P38",
      "type": "cites",
      "status": "citation_verified",
      "note": "TCAT 논문이 BiCS 발표를 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P39",
          "locator": "p.192 · References [1]",
          "note": "H. Tanaka et al., VLSI 2007, pp.14–15.",
          "url": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1557309/download-documents?artifactId=ao5LP_emoDO__Fa6Qx0_zYFwguqxDABrYuG8qDPXXOM8PXGwhdDosoc"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L16",
      "source": "P39",
      "target": "P38",
      "type": "alternative",
      "status": "author_comparison",
      "note": "TCAT 저자는 초기 BiCS의 공정·GIDL erase 제약과 비교하며 gate replacement와 bulk erase를 제시합니다. 2007/2009 구조의 설계 대안 비교이며 현대 BiCS 전체나 결과 상충을 뜻하지 않습니다.",
      "evidence": [
        {
          "paperId": "P39",
          "locator": "p.192 · Introduction / Fabrication Process",
          "note": "BiCS를 직접 언급한 공정 및 erase 비교.",
          "url": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1557309/download-documents?artifactId=ao5LP_emoDO__Fa6Qx0_zYFwguqxDABrYuG8qDPXXOM8PXGwhdDosoc"
        },
        {
          "paperId": "P38",
          "locator": "p.14 · Concept / Fabrication and Results; p.15 · Figs.3–7 캡션",
          "note": "BiCS 구조·공정·90 nm 어레이 및 n×512 kbit 매크로. 그림 자체는 판독하지 않았습니다.",
          "url": "https://ptacts.uspto.gov/ptacts/public-informations/petitions/1558206/download-documents?artifactId=u_eHoYWI8VssnUX7YxrEWfeRakADti6ohI6RWddq-mMRJH3UPSoMGns"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L17",
      "source": "P40",
      "target": "P38",
      "type": "cites",
      "status": "citation_verified",
      "note": "Goda의 2020 리뷰가 초기 BiCS를 인용합니다.",
      "evidence": [
        {
          "paperId": "P40",
          "locator": "p.1379 · References [1]",
          "note": "Tanaka VLSI2007 및 DOI 확인.",
          "url": "https://borecraft.com/PDF/Articles/NAND_Scaling.pdf"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L18",
      "source": "P40",
      "target": "P39",
      "type": "cites",
      "status": "citation_verified",
      "note": "Goda의 2020 리뷰가 TCAT를 인용합니다.",
      "evidence": [
        {
          "paperId": "P40",
          "locator": "p.1379 · References [2]",
          "note": "Jang VLSI2009 pp.192–193 확인.",
          "url": "https://borecraft.com/PDF/Articles/NAND_Scaling.pdf"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L19",
      "source": "P40",
      "target": "P22",
      "type": "cites",
      "status": "citation_verified",
      "note": "집적도 리뷰가 retention 개선을 위한 confined nitride 구조를 인용합니다. 구조·scaling과 retention 군집의 교차 연결입니다.",
      "evidence": [
        {
          "paperId": "P40",
          "locator": "p.1381 · References [87]",
          "note": "C.-H. Fu et al., VLSI2019 pp.212–213, DOI 10.23919/VLSIT.2019.8776572.",
          "url": "https://borecraft.com/PDF/Articles/NAND_Scaling.pdf"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L20",
      "source": "P20",
      "target": "P39",
      "type": "cites",
      "status": "citation_verified",
      "note": "Choi의 초기 retention 연구가 TCAT 구조 논문을 인용합니다.",
      "evidence": [
        {
          "paperId": "P20",
          "locator": "p.78 · References [1]",
          "note": "J. Jang et al., VLSI2009 p.192.",
          "url": "https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/t08-011.pdf"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "L21",
      "source": "P21",
      "target": "P39",
      "type": "cites",
      "status": "citation_verified",
      "note": "Woo의 단기 retention 모델 논문이 TCAT를 인용합니다.",
      "evidence": [
        {
          "paperId": "P21",
          "locator": "p.T214 · References [1]",
          "note": "J. Jang et al., VLSI2009 p.192.",
          "url": "https://picture.iczhiku.com/resource/ieee/ShkwTHFuATQaPCMv.pdf"
        }
      ],
      "checkedAt": "2026-11-16"
    }
  ],
  "concepts": [
    {
      "id": "models",
      "label": "Modeling & ML",
      "ko": "모델링과 머신러닝",
      "parent": "nand",
      "x": 620,
      "y": 170,
      "description": "소자를 이해하는 물리 모델과 데이터를 학습하는 예측 모델을 함께 탐색합니다.",
      "question": "어떤 정보와 데이터로 소자의 거동을 예측할 것인가?",
      "group": "models"
    },
    {
      "id": "physics",
      "label": "Physics models",
      "ko": "물리·통계 모델",
      "parent": "models",
      "x": 425,
      "y": 55,
      "description": "수송·포획·통계 모델과 compact/semianalytical 모델을 연결합니다.",
      "question": "어떤 물리 항을 포함하거나 줄여야 하는가?",
      "group": "models"
    },
    {
      "id": "surrogate",
      "label": "ML prediction",
      "ko": "학습 기반 예측·최적화",
      "parent": "models",
      "x": 620,
      "y": 25,
      "description": "소자 변수와 전기적 특성의 관계를 학습합니다.",
      "question": "학습한 관계가 어떤 평가 조건에서 유효한가?",
      "group": "models"
    },
    {
      "id": "small-data",
      "label": "Limited data",
      "ko": "소량 데이터",
      "parent": "models",
      "x": 795,
      "y": 60,
      "description": "제한된 측정·TCAD 예산으로 정확한 모델을 만드는 질문입니다.",
      "question": "작은 데이터의 정보를 어떻게 보완할 것인가?",
      "group": "models"
    },
    {
      "id": "transfer",
      "label": "Transfer learning",
      "ko": "전이학습",
      "parent": "small-data",
      "x": 1020,
      "y": -15,
      "description": "기존 모델의 지식을 새로운 데이터나 소자 조건에 전달합니다.",
      "question": "어떤 층과 정보를 전이하고 무엇을 다시 배워야 하는가?",
      "group": "models"
    },
    {
      "id": "generative",
      "label": "Generative AI",
      "ko": "생성형 데이터",
      "parent": "small-data",
      "x": 800,
      "y": -80,
      "description": "생성 모델의 데이터 증강과 물리적 충실도를 평가합니다.",
      "question": "합성 데이터가 예측의 정확도와 적용 범위를 얼마나 늘리는가?",
      "group": "models"
    },
    {
      "id": "active-learning",
      "label": "Active learning",
      "ko": "표본 선택 · 미수집",
      "parent": "models",
      "x": 425,
      "y": -100,
      "description": "현재 수록 논문이 없는 후속 조사 축입니다. 연구의 부재를 뜻하지 않습니다.",
      "question": "다음에 측정·시뮬레이션할 표본을 어떻게 고를 것인가?",
      "group": "models"
    },
    {
      "id": "uncertainty",
      "label": "Uncertainty",
      "ko": "불확실성 · 미수집",
      "parent": "models",
      "x": 620,
      "y": -115,
      "description": "현재 수록 논문이 없는 후속 조사 축입니다. 연구의 부재를 뜻하지 않습니다.",
      "question": "예측을 신뢰할 범위와 불확실성을 어떻게 정량화할 것인가?",
      "group": "models"
    }
  ],
  "positions": {
    "nand": [
      640,
      430
    ],
    "storage": [
      290,
      270
    ],
    "fg": [
      75,
      200
    ],
    "ctn": [
      225,
      120
    ],
    "tunnel": [
      60,
      40
    ],
    "trap": [
      245,
      5
    ],
    "structure": [
      950,
      260
    ],
    "planar": [
      1060,
      135
    ],
    "3d": [
      1180,
      335
    ],
    "stack": [
      1285,
      175
    ],
    "channel": [
      1310,
      385
    ],
    "operation": [
      1010,
      590
    ],
    "program": [
      1160,
      510
    ],
    "ispp": [
      1320,
      555
    ],
    "erase": [
      1270,
      695
    ],
    "read": [
      1080,
      780
    ],
    "reliability": [
      690,
      690
    ],
    "retention": [
      490,
      810
    ],
    "endurance": [
      685,
      865
    ],
    "disturb": [
      870,
      830
    ],
    "rtn": [
      895,
      700
    ],
    "scaling": [
      295,
      565
    ],
    "mlc": [
      70,
      455
    ],
    "tlc": [
      65,
      610
    ],
    "qlc": [
      180,
      750
    ],
    "periphery": [
      360,
      710
    ]
  }
};
const base=window.NAND_REAL_DATA;
window.NAND_REAL_DATA={...base,schemaVersion:'0.4.0',description:'VLSI·IEDM·TED·EDL의 선별 문헌 지도. 원문 확인 수준과 논문별 조건을 함께 표시합니다. 문헌 수는 수집 범위이며 분야 전체의 연구량·최신 동향 통계가 아닙니다.',groups:{...base.groups,models:{label:'모델링과 머신러닝',color:'#91c9d1'}},concepts:[...base.concepts.map(n=>({...n,x:additions.positions[n.id][0],y:additions.positions[n.id][1]})),...additions.concepts],conceptLinks:[...base.conceptLinks,{source:'surrogate',target:'retention',note:'학습 기반 retention 예측을 탐색하는 연결입니다. 모든 ML 논문이 retention 연구라는 뜻은 아닙니다.'},{source:'physics',target:'channel',note:'물리 모델과 채널 설계를 교차 탐색하는 편집상 연결입니다.'}],papers:[...base.papers,...additions.papers],relations:[...base.relations,...additions.relations],checkedAt:'2026-11-16'};
})();
