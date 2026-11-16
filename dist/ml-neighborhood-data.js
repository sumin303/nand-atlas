/* IEEE Xplore original-verified neighborhood. No full-text redistribution. */
(() => {
const additions = {
  "papers": [
    {
      "id": "P42",
      "title": "Out-of-Training-Range Synthetic FinFET and Inverter Data Generation Using a Modified Generative Adversarial Network",
      "shortTitle": "Modified GAN · 범위 밖 예측",
      "graphLabel": "GAN · out-of-range",
      "authors": [
        "Vasu Eranki",
        "Nathan Yee",
        "Hiu Yung Wong"
      ],
      "venue": "EDL",
      "year": 2022,
      "bibliography": "IEEE Electron Device Letters 43(11) · pp.1810–1813 · November 2022",
      "doi": "10.1109/LED.2022.3207784",
      "sourceUrl": "https://ieeexplore.ieee.org/document/9895246/",
      "metadataUrl": "https://scholarworks.sjsu.edu/faculty_rsca/2042/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "generative",
        "small-data",
        "surrogate"
      ],
      "family": "generative",
      "approach": "조건부 GAN 곡선 예측",
      "scope": "method_neighbor",
      "deviceScope": "FinFET · CMOS inverter · NAND 외 방법론",
      "summary": "구조·회로 변수를 입력으로 받는 modified GAN으로 전기적 곡선을 예측하고 훈련 범위 밖 조건을 검증합니다.",
      "problem": "적은 시뮬레이션 데이터로 IV/CV·VTC 곡선을 생성하고 파라미터 범위 밖에서도 예측할 수 있는가?",
      "method": "구조 변수를 입력한 WGAN에 supervised generator 갱신을 추가. FinFET TCAD 곡선과 inverter SPICE 곡선에 적용합니다.",
      "finding": "범위 안 비교는 50개 학습 표본. 범위 밖 FinFET 시험은 64개 학습/151개 시험이며 parameter volume이 4.6배입니다. 낮은 VG에서 GIDL이 다른 16개 표본은 큰 예측 오차가 남습니다.",
      "conditions": "FinFET의 LG·WF·Wtop 범위를 분리. Inverter 범위 밖 비교는 약 2k개 학습/10k개 시험이며 실측 VTC도 비교합니다. 모든 결과가 50개 학습 조건인 것은 아닙니다.",
      "limitation": "특정 출력의 외삽 성공이 모든 물리 영역의 성공을 뜻하지 않습니다. P26의 500 TCAD, FoM MSE와 직접 순위 비교할 수 없습니다. NAND 소자 검증은 없습니다.",
      "verification": {
        "level": "text",
        "label": "IEEE Xplore 본문 확인",
        "detail": "POSTECH Library 접근이 표시된 IEEE Xplore HTML의 §I–V·그림 캡션을 직접 확인한 텍스트. 표의 이미지 값은 전사하지 않았고 참고문헌 목록은 이 저장본에서 미로딩 상태입니다."
      },
      "evidence": [
        {
          "paperId": "P42",
          "locator": "IEEE HTML §II · Fig.1 설명",
          "note": "파라미터 입력, 추가 supervised step, 600 epochs의 modified WGAN. PDE를 손실에 직접 넣는 방식과 구별됩니다.",
          "url": "https://ieeexplore.ieee.org/document/9895246/"
        },
        {
          "paperId": "P42",
          "locator": "IEEE HTML §III–IV · Fig.3, Tables I–III 문맥",
          "note": "50개 범위 내 비교와 64개/151개 FinFET 범위 밖 시험, 약 2k개 inverter 학습을 구별.",
          "url": "https://ieeexplore.ieee.org/document/9895246/"
        },
        {
          "paperId": "P42",
          "locator": "IEEE HTML §IV · Figs.4–5 설명",
          "note": "VG=-0.6V의 ID 예측 R²=0.34와 GIDL 특성이 다른 16개 outlier. VTH·SS의 양호한 결과만으로 전체 곡선의 신뢰성을 판단할 수 없습니다.",
          "url": "https://ieeexplore.ieee.org/document/9895246/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true
    },
    {
      "id": "P43",
      "title": "Deep Generative Model for Device Variation Modeling",
      "shortTitle": "Diffusion · 소자 변동 분포",
      "graphLabel": "Diffusion · joint tails",
      "authors": [
        "Amirhossein Davoody",
        "Ananda S. Roy",
        "Sivakumar P. Mudanai"
      ],
      "venue": "IEDM",
      "year": 2023,
      "bibliography": "2023 IEEE International Electron Devices Meeting · pp.1–4 · session 30.4",
      "doi": "10.1109/IEDM45741.2023.10413830",
      "sourceUrl": "https://ieeexplore.ieee.org/document/10413830/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "generative",
        "small-data",
        "surrogate",
        "variability"
      ],
      "family": "generative",
      "approach": "Diffusion · 통계 compact model",
      "scope": "method_neighbor",
      "deviceScope": "MOSFET · BJT · NAND 외 방법론",
      "summary": "실측에서 추출한 SPICE 파라미터의 결합 분포를 diffusion으로 생성하고 전기 특성의 꼬리·상관관계를 검증합니다.",
      "problem": "파라미터 각각의 분포와 상관계수만 맞춰도 전류의 극단 분포까지 재현할 수 있는가?",
      "method": "MOSFET/BJT에서 추출한 약 2,000개씩의 8/6개 SPICE 파라미터 분포를 diffusion으로 학습. 생성 파라미터를 SPICE로 재계산하여 실측 분포와 비교합니다.",
      "finding": "시험한 GAN에서 mode collapse를 관찰했고, diffusion은 100-component GMM보다 전류 QQ 분포를 대체로 잘 재현했습니다. 평균 오차를 넘어 결합 분포와 tail을 평가합니다.",
      "conditions": "결과 상세 그림은 BJT 중심. 바이어스·온도별 emitter/collector/base 전류 재계산, 약 10배 생성 표본, 반복 생성 4회 비교입니다.",
      "limitation": "전이학습 또는 NAND FoM 예측 검증은 아닙니다. 관측 데이터 밖 quantile의 합리적 추세는 독립 실측 정답에 의한 극단 tail 검증과 구별해야 합니다.",
      "verification": {
        "level": "pdf",
        "label": "IEEE Xplore 원문·그림 확인",
        "detail": "POSTECH Library 접근의 IEEE Xplore PDF를 브라우저로 직접 다운로드. 4쪽 본문을 읽고 pp.2–4를 렌더링해 결과·참고문헌·Figs.1–10 확인. PDF에 Xplore 다운로드 provenance가 표시됩니다."
      },
      "localSource": "nand-retention-research/P43-IEDM-2023-deep-generative-variation.pdf",
      "evidence": [
        {
          "paperId": "P43",
          "locator": "PDF pp.1–2 · §I–III; p.3 Figs.1–3",
          "note": "주변 분포와 상관만으로 부족한 tail 문제, GAN mode collapse, 각 소자 약2,000표본·8/6 SPICE변수.",
          "url": "https://ieeexplore.ieee.org/document/10413830/"
        },
        {
          "paperId": "P43",
          "locator": "PDF p.2 §III; p.4 Figs.7–10",
          "note": "파라미터 결합 분포, 바이어스·온도별 전류 QQ, GMM100 비교와 반복 생성 검증. 외부 holdout 정답으로 tail 전체를 확인한 것은 아닙니다.",
          "url": "https://ieeexplore.ieee.org/document/10413830/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true
    },
    {
      "id": "P44",
      "title": "The Investigation of Deep Generative Models for Statistical BSIM Parameter Generation",
      "shortTitle": "VAE-GAN · 생성 모델 비교",
      "graphLabel": "VAE-GAN · tail benchmark",
      "authors": [
        "Yao Zhang",
        "Yifan Zhou",
        "Guoxiang Chen",
        "Xiaojing Su",
        "Yajuan Su",
        "Xuge Fan",
        "Jie Ding"
      ],
      "venue": "TED",
      "year": 2026,
      "bibliography": "IEEE Transactions on Electron Devices 73(7) · pp.3995–4000 · July 2026; online 15 May 2026",
      "doi": "10.1109/TED.2026.3691737",
      "sourceUrl": "https://ieeexplore.ieee.org/document/11521068/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "generative",
        "surrogate",
        "variability"
      ],
      "family": "generative",
      "approach": "VAE-GAN · 생성기 benchmark",
      "scope": "method_neighbor",
      "deviceScope": "2nm-node BSIM-CMG · inverter/RO · NAND 외 방법론",
      "summary": "여러 생성 모델을 동일한 compact-parameter 생성 문제에 비교하여 VAE-GAN의 tail 재현과 생성 속도 이점을 보고합니다.",
      "problem": "생성 모델이 BSIM 파라미터의 분포·상관관계를 보존하고 회로 특성 분포까지 재현하는가?",
      "method": "2nm-node TCAD에서 추출한 12개 BSIM-CMG 파라미터, 2,000개 추출 세트와 20,000개 생성 세트 비교. VQ-VAE·BigGAN·InfoGAN·MADE·AAE·diffusion·VAE-GAN 및 전통 GLD를 평가합니다.",
      "finding": "시험한 VAE-GAN은 diffusion보다 tail·소자 FoM 분포를 더 잘 재현하며, IEDM2023 실측 데이터에도 비교를 확장합니다. inverter·5단 RO 분포를 재계산합니다.",
      "conditions": "20,000세트 생성에서 약2초 대 최소8분을 보고하지만 구현·하드웨어 조건에 의존하는 논문 내 결과입니다. P26 이후인 2026-05-15 온라인 공개 비교 문헌입니다.",
      "limitation": "NAND의 500 TCAD와 같은 실험이 아니므로 P26 DDPM의 실패나 VAE-GAN의 보편적 우위를 증명하지 않습니다. 원문 HTML·캡션은 확인했고 그림 픽셀·하드웨어 상세는 아직 확인하지 않았습니다.",
      "verification": {
        "level": "text",
        "label": "IEEE Xplore 본문 확인",
        "detail": "POSTECH Library 제공 IEEE Xplore HTML §I–IV, Figs.1–16 캡션과 References[1]–[27] 직접 확인. 이미지 수치는 별도 전사하지 않았습니다."
      },
      "evidence": [
        {
          "paperId": "P44",
          "locator": "IEEE HTML §II · Figs.1–6",
          "note": "2nm노드·12 BSIM-CMG변수, 여러 생성기 비교와 diffusion/VAE-GAN의 분포·상관 평가.",
          "url": "https://ieeexplore.ieee.org/document/11521068/"
        },
        {
          "paperId": "P44",
          "locator": "IEEE HTML §III · Figs.7–12",
          "note": "2,000→20,000세트, 생성 시간과 tail·FoM 비교. Fig12는 P43의 실측 데이터를 사용한다고 본문에 명시합니다.",
          "url": "https://ieeexplore.ieee.org/document/11521068/"
        },
        {
          "paperId": "P44",
          "locator": "IEEE HTML §III · Figs.15–16; References[14]",
          "note": "inverter/RO 평가 및 Davoody IEDM2023 직접 인용.",
          "url": "https://ieeexplore.ieee.org/document/11521068/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true
    },
    {
      "id": "P45",
      "title": "Generative Process Variation Modeling and Analysis for Advanced Technology Based on Variational Autoencoder",
      "shortTitle": "VAE · 변동원 전이학습",
      "graphLabel": "VAE + TL · variation",
      "authors": [
        "Liyuan Xue",
        "Ankit Dixit",
        "Naveen Kumar",
        "Vihar Georgiev"
      ],
      "venue": "TED",
      "year": 2025,
      "bibliography": "IEEE Transactions on Electron Devices 72(7) · pp.3889–3895 · July 2025; online 28 May 2025",
      "doi": "10.1109/TED.2025.3570675",
      "sourceUrl": "https://ieeexplore.ieee.org/document/11017451/",
      "metadataUrl": "https://eprints.gla.ac.uk/355043/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "generative",
        "transfer",
        "small-data",
        "variability"
      ],
      "family": "generative",
      "approach": "VAE + interpolation + TL",
      "scope": "method_neighbor",
      "deviceScope": "Si nanowire · MGG/RDD · NAND 외 방법론",
      "summary": "적은 전압 샘플의 곡선을 VAE로 생성하고, 변동원이 달라질 때 소량 곡선으로 전이학습합니다.",
      "problem": "금속 gate grain과 discrete dopant 변동을 많은 TCAD 반복 없이 곡선 분포로 모델링할 수 있는가?",
      "method": "VAE의 2차원 latent 변수로 10개 전압점 곡선을 재구성·생성하고 별도 ANN interpolator로 연속 곡선을 만듭니다. 결합 변동원 RDD&MGG 학습 모델에서 RDD/MGG 각각으로 전이합니다.",
      "finding": "각 변동원 사례 200개 학습/800개 unseen곡선을 비교. TL은 결합 변동원→개별 변동원으로 50개 곡선 재학습 시 scratch200보다 SAE 개선을 보입니다.",
      "conditions": "SiNW TCAD, MGG/RDD/결합 각1,000회 시뮬레이션. VG0–0.9V 10점, VDS50mV. 전체 TCAD 비용과 실제 학습 표본 수를 구별해야 합니다.",
      "limitation": "세대 간 NAND TL 또는 합성 데이터→별도 예측기 사전학습은 아닙니다. 본문이 입증한 전이는 결합→개별 변동원이며, 임의의 새 변동원 일반화를 뜻하지 않습니다. P26의 MSE와 곡선 SAE/MAPE는 직접 비교하지 않습니다.",
      "verification": {
        "level": "text",
        "label": "IEEE Xplore 본문 확인",
        "detail": "POSTECH Library 제공 IEEE Xplore HTML §I–IV·Figs.1–9 캡션·References[1]–[25] 직접 확인. 표 이미지의 개별 값은 본문에 있는 숫자 외 전사하지 않았습니다."
      },
      "evidence": [
        {
          "paperId": "P45",
          "locator": "IEEE HTML §II-A/B · Figs.3–4",
          "note": "변동원별1,000회·10개 VG샘플. VAE latent 생성과 NN interpolator는 별도 역할입니다.",
          "url": "https://ieeexplore.ieee.org/document/11017451/"
        },
        {
          "paperId": "P45",
          "locator": "IEEE HTML §III · Figs.5–9",
          "note": "200학습/800unseen, RDD&MGG모델→개별RDD/MGG TL50 대 scratch200를 확인.",
          "url": "https://ieeexplore.ieee.org/document/11017451/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true
    },
    {
      "id": "P46",
      "title": "Efficient LDMOS Design via Transferable Surrogate Models and Multi-Objective Optimization",
      "shortTitle": "LDMOS 전이학습·다목적 설계",
      "graphLabel": "LDMOS · TL",
      "authors": [
        "Hongyu Tang",
        "Chenggang Xu",
        "Xiaoyun Huang",
        "Yuxuan Zhu",
        "Yunlong Li",
        "Dawei Gao",
        "Yitao Ma",
        "Kai Xu"
      ],
      "venue": "EDL",
      "year": 2025,
      "bibliography": "IEEE Electron Device Letters 46(9) · pp.1593–1596 · September 2025",
      "doi": "10.1109/LED.2025.3586707",
      "sourceUrl": "https://ieeexplore.ieee.org/document/11072478/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "transfer",
        "small-data",
        "surrogate",
        "optimization"
      ],
      "family": "transfer",
      "researchType": "non_nand_method",
      "deviceScope": "LDMOS power transistor; not NAND",
      "approach": "전이학습 + 다목적 최적화",
      "summary": "서로 겹치지 않는 LDMOS 설계 영역에 소량의 목표 영역 TCAD 데이터로 DNN을 적응시키고, 두 surrogate를 다목적 설계 탐색에 사용합니다.",
      "problem": "초기 파라미터 범위를 벗어나는 LDMOS 설계 영역에서 예측 모델을 적응시키고 BV–Ron,sp–FOM trade-off를 탐색할 수 있는가?",
      "method": "초기 ±30% 영역의 LHS 2500개로 DNN을 학습합니다(80% 학습·교차검증/20% 시험). ±60% 영역에서 초기 영역을 제외한 500개를 만들고, 400개로 fine-tuning하고 100개로 시험합니다. 영역에 따라 초기/적응 DNN을 선택하는 MOPSO(100 particles×1000 iterations)를 적용합니다.",
      "finding": "§III/Fig.3(c)는 목표 영역 fine-tuning의 MRE가 50%에서 5%로 줄었다고 보고합니다. Fig.3(d)의 데이터 생성·학습 비용을 포함한 평균 속도 이득은 약 10000회 설계 평가에서 초기 DNN 40배, 적응 DNN 200배입니다. 확장 영역을 포함한 Pareto front의 다양성·성능 개선도 제시합니다.",
      "conditions": "STI LDMOS Sentaurus TCAD, 9개 구조·도핑 설계 변수, BV/Ron,sp 출력과 이들로 계산한 FOM. 비중첩 영역 평가이지만 목표 영역의 400개 라벨로 적응한 뒤의 시험이며 zero-shot 외삽이 아닙니다. 원 영역 2500개와 목표 영역 500개의 전체 데이터 비용을 구분해야 합니다.",
      "limitation": "NAND 직접 경쟁 결과가 아닙니다. 원문 HTML의 §III/Fig.5에는 선택된 Pareto 설계를 새 TCAD로 재계산했다는 명시적 확인이 없어 최적해의 독립 재검증은 미확인입니다. SHAP 중요도의 물리적 일관성은 인과성이나 PDE 충족의 증명이 아닙니다. 같은 목표 데이터로 처음부터 학습한 모델과의 상세 통제 비교는 확인한 본문에 명시되지 않습니다.",
      "verification": {
        "level": "text",
        "label": "IEEE 본문 직접 확인",
        "detail": "POSTECH Library 접근으로 연 IEEE Xplore 원문 HTML의 §I–IV와 Fig.1–5 캡션을 읽었습니다. 표의 이미지 내용과 그림의 수치 곡선을 별도로 시각 판독하지 않았습니다. References 탭은 추출에 제공되지 않아 인용 관계를 추가하지 않습니다."
      },
      "evidence": [
        {
          "paperId": "P46",
          "locator": "§II-A; Fig.2; Table I 언급",
          "note": "STI LDMOS; 초기 2500개 ±30% LHS와 비중첩 확장 영역 500개 ±60%; 각각 80/20 분리.",
          "url": "https://ieeexplore.ieee.org/document/11072478/"
        },
        {
          "paperId": "P46",
          "locator": "§II-B; Fig.1",
          "note": "BV/Ron,sp DNN; FOM은 예측값으로 계산; 5-fold CV; 100 particles×1000 iterations MOPSO.",
          "url": "https://ieeexplore.ieee.org/document/11072478/"
        },
        {
          "paperId": "P46",
          "locator": "§III; Fig.3(c)–(d)",
          "note": "MRE 50%→5%; 데이터 생성·학습을 포함해 약 10000회 평가에서 초기/적응 모델 40배/200배 speedup.",
          "url": "https://ieeexplore.ieee.org/document/11072478/"
        },
        {
          "paperId": "P46",
          "locator": "§III; Figs.4–5",
          "note": "SHAP 일관성 및 확장 영역을 포함하는 Pareto front 비교. 확인한 본문은 별도의 최적해 TCAD 재검증을 명시하지 않음.",
          "url": "https://ieeexplore.ieee.org/document/11072478/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true,
      "scope": "method_neighbor"
    },
    {
      "id": "P47",
      "title": "A Novel Neural-Network Device Modeling Based on Physics-Informed Machine Learning",
      "shortTitle": "물리 제약 기반 소량 데이터 모델",
      "graphLabel": "Physics-informed NN",
      "authors": [
        "Bokyeom Kim",
        "Mincheol Shin"
      ],
      "venue": "TED",
      "year": 2023,
      "bibliography": "IEEE Transactions on Electron Devices 70(11) · pp.6021–6025 · November 2023",
      "doi": "10.1109/TED.2023.3316635",
      "sourceUrl": "https://ieeexplore.ieee.org/document/10271263/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "physics",
        "surrogate",
        "small-data",
        "physics-ml"
      ],
      "family": "physics-ml",
      "researchType": "non_nand_method",
      "deviceScope": "3D nanowire FET; not NAND",
      "approach": "Physics-informed NN / DeepONet",
      "summary": "25개 bias 조건의 공간 물리량과 Poisson·Schrödinger·Boltzmann 방정식 제약을 함께 학습해 전위·전하·전류를 예측합니다. 별도로 채널 길이 외삽은 전위 네트워크에서 검증합니다.",
      "problem": "적은 bias 시뮬레이션 조건에서 물리 방정식을 활용해 공간 물리량과 전류의 보간·외삽 정확도를 높일 수 있는가?",
      "method": "SCP-NET(PINN)과 SE/BTE-NET(PI-DeepONet)을 연결합니다. PE/SE/BTE의 PDE residual 및 경계·계면 조건을 loss에 더하고, 같은 DD 모델(physics weight=0)과 비교합니다. 0.1–0.3 V 간격의 비정규 25개 bias 조건을 사용하며, bias당 전위 52920개와 BTE phase-space 30000개 위치 데이터가 존재합니다.",
      "finding": "§III-A는 potential MAPE가 보간 점에서 0.12%, 외삽 점에서 0.19%라고 보고합니다(외삽 DD 0.20%). §III-B/Fig.11의 전체 연결 모델은 441개 bias 조건에서 current MAPE를 DD 11.8%에서 PI 3.5%로 줄입니다. §III-C/Fig.12는 Lch=10/15/20 nm 학습 후 8/22 nm에서 SCP-NET 전위를 평가합니다.",
      "conditions": "기본 bias 평가: IVP Vg=0.6,Vd=0.7 V; EVP Vg=1.0,Vd=1.0 V. Geometry 평가는 Vg=0.7,Vd=0.4 V에서 전위만 검증합니다. 25개 bias는 25개의 scalar label과 같지 않습니다. 전체 PI 학습 224분 대 DD 78분. 441조건 추론 6.6초 대 numerical 96300초는 GPU NN과 CPU solver의 추론 비교이며 학습 포함 총비용 비교가 아닙니다.",
      "limitation": "실측 NAND/retention 또는 재료 외삽을 검증한 논문이 아닙니다. 구조 외삽은 SCP-NET 전위에 한정되며 전체 체인의 current/charge geometry 외삽은 미검증이라고 저자가 명시합니다. Fig.9의 BTE 단독 평가는 수치해석의 정확한 force field를 입력한 조건이며, Fig.11의 전체 연결 모델 결과와 구별해야 합니다. PDE residual의 loss 가중치는 수동 조정됩니다.",
      "verification": {
        "level": "text",
        "label": "IEEE 본문 직접 확인",
        "detail": "POSTECH Library 접근으로 연 IEEE Xplore 원문 HTML의 §I–IV 및 Fig.1–12 캡션을 읽었습니다. 그림 내 상세 표·곡선은 별도 시각 판독하지 않았습니다. 수치·범위는 본문에 명시된 것만 채택했습니다."
      },
      "evidence": [
        {
          "paperId": "P47",
          "locator": "§II; §II-A–C; Figs.1(e),3–6",
          "note": "25개 bias, PE/SE/BTE residual와 경계·계면 loss. 전위 52920개/bias, phase-space 30000개/bias. 물리 loss 가중치는 수동 조정.",
          "url": "https://ieeexplore.ieee.org/document/10271263/"
        },
        {
          "paperId": "P47",
          "locator": "§III 서두; §III-A; Figs.7–10; Table I 언급",
          "note": "IVP(.6,.7V)와 EVP(1,1V); 전위 MAPE .12%/.19%; PI/DD 학습 224/78분. Fig.9 BTE-NET은 수치해석의 정확한 force field 입력.",
          "url": "https://ieeexplore.ieee.org/document/10271263/"
        },
        {
          "paperId": "P47",
          "locator": "§III-B; Fig.11; Table II 언급",
          "note": "current를 직접 label로 학습하지 않은 전체 체인에서 25bias 학습→441bias 예측; MAPE DD11.8%/PI3.5%; GPU inference 6.6초 대 CPU numerical96300초.",
          "url": "https://ieeexplore.ieee.org/document/10271263/"
        },
        {
          "paperId": "P47",
          "locator": "§III-C; Fig.12",
          "note": "SCP-NET: Lch10/15/20nm×25bias 학습,8/22nm 평가(Vg=.7,Vd=.4V); 짧은 Lch에서 MAPE.20%,maxAPE1.5%. Geometry variation은 SCP-NET만 시험했다고 명시.",
          "url": "https://ieeexplore.ieee.org/document/10271263/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true,
      "scope": "method_neighbor"
    },
    {
      "id": "P52",
      "title": "Optimization of Programming Pulse Shape for Vertical NAND Flash Memory Using Neural Networks",
      "shortTitle": "실측 기반 program pulse 최적화",
      "graphLabel": "실측 pulse · NN",
      "authors": [
        "Sung-Ho Park",
        "Jaehyeon Kim",
        "Jonghyun Ko",
        "Jiseong Im",
        "Yeongheon Yang",
        "Jae-Joon Kim",
        "Jong-Ho Lee"
      ],
      "venue": "EDL",
      "year": 2024,
      "bibliography": "IEEE Electron Device Letters 45(11) · pp.2102–2105 · November 2024",
      "doi": "10.1109/LED.2024.3451430",
      "sourceUrl": "https://ieeexplore.ieee.org/document/10654387/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "surrogate",
        "program",
        "ispp",
        "disturb",
        "retention",
        "3d",
        "optimization"
      ],
      "family": "optimization",
      "approach": "실측 NN surrogate + pulse 최적화",
      "summary": "상용 V-NAND의 무작위 pulse 실측으로 NN을 학습하고 program pulse 모양을 최적화한 뒤 실측으로 효과를 확인합니다.",
      "problem": "동일 평균 program 전압과 pulse 시간에서 더 적은 ISPP pulse로 목표 Vt에 도달할 수 있는가?",
      "method": "100층 이상 상용 V-NAND에서 150개가 넘는 무작위 pulse의 ΔVth를 측정합니다. 4개 구간 전압을 입력하는 64노드 단일 hidden-layer NN을 학습하고 SGD로 ΔVth가 커지는 pulse를 찾습니다. 평균18V, 각 구간16–20V, 전체6μs(각1.5μs) 조건에서 앞부분16V·뒷부분20V를 얻습니다.",
      "finding": "실측 ISPP에서 Vstep0.5V, TLC PV7까지의 slope가36.7% 개선됐고 필요한 pulse 수가 줄었습니다. 동일 목표 PV 기준으로 program disturb가 비슷하거나 작았습니다. 동일 평균 VPGM 비교에서는 높은 peak 전압으로 disturb가 더 클 수 있어 비교 기준을 구분해야 합니다.",
      "conditions": "학습용 pulse는 평균18V 고정, 각 구간 ±2V 이내. 10000epoch 후 학습 MSE0.001 보고. 본문에서 별도 holdout 분할·데이터 수 축소 실험·생성 모델·전이학습은 확인되지 않았습니다. 실측 검증은 pulse 형태·WL 위치·ISPP·disturb·PV7/85°C/10^4s retention을 포함합니다.",
      "limitation": "소량 데이터 효율을 baseline과 검증한 논문은 아니지만 실측 150개 이상의 pulse로 최적화한 근접 사례입니다. 에너지 감소는 주변회로·charge pump까지 측정한 전력 결과가 아니라 pulse 전압·개수 비교에서 추론합니다.10^4s/85°C retention을 room-temperature10^8s 직접 실측으로 해석하면 안 됩니다.",
      "verification": {
        "level": "text",
        "label": "IEEE 본문·참고문헌 확인",
        "detail": "POSTECH Library기관 접근으로 IEEE Xplore §I–IV, Figs.1–6 설명과 References[1]–[20] 직접 확인. PDF·그림 픽셀·TableI 이미지는 검사하지 않았습니다. 전체 저자 목록은 SNU 기관 서지와 교차 확인했습니다."
      },
      "evidence": [
        {
          "paperId": "P52",
          "locator": "IEEE HTML §II; Figs.1–2 설명",
          "note": "100층 이상 상용 V-NAND,150개 넘는 pulse 실측,4전압→64노드→ΔVth,10000epoch·MSE0.001.",
          "url": "https://ieeexplore.ieee.org/document/10654387/"
        },
        {
          "paperId": "P52",
          "locator": "IEEE HTML §III; Figs.3–6 설명",
          "note": "6μs·평균18V·±2V 제약,36.7% slope, 동일PV와 동일VPGM의 서로 다른 disturb 비교.",
          "url": "https://ieeexplore.ieee.org/document/10654387/"
        },
        {
          "paperId": "P52",
          "locator": "IEEE HTML §III 마지막 두 문단; TableI 설명",
          "note": "Retention의 직접 측정 범위와 온도 환산의 구분. 에너지 감소는 전압·pulse 수에 근거한 추론.",
          "url": "https://ieeexplore.ieee.org/document/10654387/"
        },
        {
          "paperId": "P52",
          "locator": "IEEE HTML §I–II; References[9]",
          "note": "Cho2023 P51을 NN 최적화 선행 연구와 Fig.2 방법 설명에 직접 인용.",
          "url": "https://ieeexplore.ieee.org/document/10654387/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true,
      "scope": "nand"
    },
    {
      "id": "P28",
      "title": "Optimization of Process Parameters on Short-Term Retention for Charge-Trapping 3-D NAND Flash Memories Using Novel Neural Networks Approach",
      "shortTitle": "NN 기반 retention 최적화",
      "graphLabel": "Retention · MLP/LSTM",
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
      "bibliography": "IEEE Transactions on Electron Devices70(8) · pp.4157–4162 · August2023",
      "doi": "10.1109/TED.2023.3288840",
      "sourceUrl": "https://ieeexplore.ieee.org/document/10172051/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "surrogate",
        "retention",
        "ctn",
        "3d",
        "tunnel"
      ],
      "family": "learning",
      "approach": "MLP+LSTM 구조 최적화",
      "summary": "구조·도핑 변수와 시간에 따른 Vt를 MLP+LSTM으로 연결하고 short-term retention loss를 최소화합니다.",
      "problem": "시간 의존 retention을 예측하면서 시간 불변 구조 변수를 함께 최적화할 수 있는가?",
      "method": "실측으로 보정한 TCAD 4312개 소자, 12개 구조·도핑 변수를 사용합니다. MLP로 초기 15개 시간점의 Vt를 만들고 LSTM으로 후속 5개 시간점까지 예측합니다. Sliding window 5, 무작위 70:30 분할, Adam/MSE. 수정 gradient descent를 여러 초기값에서 반복하고 최적 후보를 TCAD로 검증합니다.",
      "finding": "최적 구조는 4312개 무작위 소자의 최소 Vt loss보다 32.37% 작은 loss를 보이며 TCAD 재검증 오차 0.159%를 보고합니다. 이는 대량 데이터의 surrogate를 활용한 구조 탐색 결과입니다. 두꺼운 TOX·긴 spacer 외에도 파라미터 상호작용을 고려합니다.",
      "conditions": "48층 U형 CT NAND 실측 보정, E-P-E 패턴, nitride trap 농도 고정. 초기 10^-4–8×10^-2 s의 15점 학습, 0.1–0.8 s의 5점 예측. 4312개 소자×15점=64680개 초기 데이터점. 70:30 무작위 분할은 구조·물리 조건을 통째로 제외한 OOD 검증을 의미하지 않습니다.",
      "limitation": "Retention만 최적화하므로 구조가 커지며 다른 성능과 tradeoff가 있을 수 있다고 본문에서 인정합니다. 4.27은 trapped charge loss 13.05%→8.78%의 percentage-point 차이입니다. P26의 소량 target 데이터 DDPM 학습과 목적·데이터 예산이 다릅니다. 본문·캡션을 읽었고 그림 픽셀·Tables I–II 값은 직접 검사하지 않았습니다.",
      "verification": {
        "level": "text",
        "label": "IEEE 본문·참고문헌 확인",
        "detail": "이전 저자초록 단계를 POSTECH Library를 통한 IEEE Xplore HTML원문으로 업그레이드. §I–IV, 그림캡션과 References[1]–[18] 직접 확인. PDF·그림 이미지 검사와 구분합니다."
      },
      "evidence": [
        {
          "paperId": "P28",
          "locator": "IEEE HTML §II-A–C; Figs.2–5 설명",
          "note": "4312소자,12변수,64680점,15→5시간점,70:30분할,trap고정,E-P-E,최적화방식.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        },
        {
          "paperId": "P28",
          "locator": "IEEE HTML §III-A–B; Figs.6–10 설명",
          "note": "MLP평균R²0.9405·LSTM평균R²0.9991은 각 submodel평가.32.37%loss개선의 비교기준,0.159%TCAD오차,15회재시작검사·크기tradeoff.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        },
        {
          "paperId": "P28",
          "locator": "IEEE HTML §I; References[8],[9],[11],[13]",
          "note": "기존map P19·P20·P21을 인용하고2022Bi-LSTM연구에서 발전했다고 설명합니다. P24인용은 확인되지 않았습니다.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true,
      "scope": "nand"
    },
    {
      "id": "P51",
      "title": "Enhancement of ISPP Efficiency Using Neural Network-Based Optimization of 3-D NAND Cell",
      "shortTitle": "NN 기반 ISPP 구조 최적화",
      "graphLabel": "ISPP · MLP 최적화",
      "authors": [
        "Kyeongrae Cho",
        "Hyeok Yun",
        "Kihoon Nam",
        "Chanyang Park",
        "Hyundong Jang",
        "Jun-Sik Yoon",
        "Hyun-Chul Choi",
        "Min Sang Park",
        "Rock-Hyun Baek"
      ],
      "venue": "TED",
      "year": 2023,
      "bibliography": "IEEE Transactions on Electron Devices70(7) · pp.3504–3510 · July2023",
      "doi": "10.1109/TED.2023.3275549",
      "sourceUrl": "https://ieeexplore.ieee.org/document/10130688/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "surrogate",
        "ispp",
        "program",
        "ctn",
        "3d",
        "optimization"
      ],
      "family": "optimization",
      "approach": "MLP surrogate + gradient 최적화",
      "summary": "8000개 TCAD 소자로 학습한 MLP가 21개 상태의 Vt를 예측하고, 구조 변수를 함께 조절해 ISPP 효율을 최적화합니다.",
      "problem": "서로 연관된 NAND 구조 변수를 동시에 조절해 ISPP slope의 평균을 높이고 포화구간 변동을 줄일 수 있는가?",
      "method": "실측 10개 셀의 평균·표준편차로 보정한 cylindrical TCAD에서 8000개 구조를 생성합니다. 80/10/10 학습·검증·시험 분할. 1개 hidden layer, 47노드 MLP의 21개 상태 Vt로 19개 ISPP slope를 만들고 구간별 평균·표준편차 비율 loss를 gradient descent로 최소화합니다.",
      "finding": "800개 test 소자의 Vt 분포 평균·표준편차 오차를 평가하고, 최적 구조를 TCAD로 재검증합니다. 20 pulse 후 ΔVt는 기준 보정셀 및 8000개 중 best case 대비 최소 16.1% 개선, 포화구간 slope 평균·표준편차는 각각 4.5%·23.5% 개선을 보고합니다. 개별 모든 셀 오차가 분포 통계오차 이내라는 뜻은 아닙니다.",
      "conditions": "SMArT형 3-layer cylindrical TCAD; 동일 program/read 조건, cycling 제외. 20 ISPP pulse+initial의 21개 상태. 8000개의 구조 변화 데이터이며 명시적인 소량 데이터·생성형 AI·전이학습 평가는 아닙니다.",
      "limitation": "선택된 최적 구조는 더 얇은 TOX·더 두꺼운 CTN을 사용합니다. 목적이 program 효율이라 retention 동시 개선을 입증하지 않습니다. RNN/LSTM은 훈련 RMSE가 낮아도 연쇄 예측오차가 누적되어 이 과제에서는 MLP가 선택됐습니다. P28의 시간 외삽 목표와 다르므로 MLP와 LSTM의 보편적 우열 주장이 아닙니다.",
      "verification": {
        "level": "text",
        "label": "IEEE 본문·참고문헌 확인",
        "detail": "POSTECH Library기관접근으로IEEE Xplore §I–IV, 그림캡션과References[1]–[26] 직접확인. PDF 및그림픽셀·표이미지는검사하지않았습니다. 저자전체목록은연구실publication목록과교차확인했습니다."
      },
      "evidence": [
        {
          "paperId": "P51",
          "locator": "IEEE HTML §II-A–C; TablesI–II설명, Figs.1–6캡션",
          "note": "실측보정,8000개·80/10/10분할,47노드MLP,모델선정과ISPP최적화loss.",
          "url": "https://ieeexplore.ieee.org/document/10130688/"
        },
        {
          "paperId": "P51",
          "locator": "IEEE HTML §III-A–C; Figs.7–10설명, TablesIII–V설명",
          "note": "800개test분포통계,선택최적후보,기준비교·TCAD재검증·TOX/CTN변화.",
          "url": "https://ieeexplore.ieee.org/document/10130688/"
        },
        {
          "paperId": "P51",
          "locator": "IEEE HTML References[14]",
          "note": "Ko2020 Variability-awareML, DOI10.1109/TED.2020.2971784직접인용. 현재추가후보로보류.",
          "url": "https://ieeexplore.ieee.org/document/10130688/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true,
      "scope": "nand"
    },
    {
      "id": "P50",
      "title": "Physics-Assisted Neural Network Modeling of Advanced Recessed-3D NAND Cells Under Sparse-Data Conditions",
      "shortTitle": "물리 특징·소량 recessed NAND",
      "graphLabel": "EFA-NN · sparse NAND",
      "authors": [
        "Kyeongrae Cho",
        "Soomin Kim",
        "Seungjoon Eom",
        "Sinyeong Kang",
        "Seongsoo Jeong",
        "Rock-Hyun Baek"
      ],
      "venue": "TED",
      "year": 2026,
      "bibliography": "IEEE Transactions on Electron Devices 73(4) · pp.1863–1870 · April 2026 · online 10 March 2026",
      "doi": "10.1109/TED.2026.3668203",
      "sourceUrl": "https://ieeexplore.ieee.org/document/11428256/",
      "sourceLabel": "IEEE Xplore 원문",
      "topics": [
        "small-data",
        "transfer",
        "surrogate",
        "physics",
        "retention",
        "ispp",
        "ctn",
        "3d",
        "physics-ml",
        "optimization",
        "uncertainty"
      ],
      "family": "physics-ml",
      "approach": "전계 특징 증류 + 전이학습 + 다목적 최적화",
      "summary": "전계의 시공간 특징을 학습한 EFA-NN으로 소량 convex/concave recessed NAND의 program·retention을 예측하고 최적화합니다.",
      "problem": "기존 구조의 데이터와 물리 특징을 활용해 복잡한 recessed NAND를 10–100개 수준의 제한된 target 데이터로 예측할 수 있는가?",
      "method": "CNN–GRU 전계 encoder의 key feature(KF)를 구조 변수만으로 재구성하도록 teacher–student 학습합니다. 17점 Vth 시퀀스를 예측하며 conventional→recessed 전이학습, 60모델 ensemble, KF 분산을 사용하는 NSGA-II 최적화를 결합합니다. 추론 시에는 전계 TCAD 입력 없이 구조 변수만 사용합니다.",
      "finding": "10개 advanced 표본에서 구조-only MLP 대비 R²의 상대 향상은 전이학습 없이 약81%, 전이학습 시 약35%입니다. TCAD 재검증한 concave 구조는 최적화된 conventional 셀 대비 retention loss를33.88% 줄이고 ISPP shift를0.96% 높였습니다. 서로 다른 지표인 P26의 FoM MSE와 직접 순위화할 수 없습니다.",
      "conditions": "실측 보정 TCAD. Conventional3000개(2900 train/validation+100test), advanced140개(각 convex/concave70;100 train/validation+40test). 9개 구조 변수, ISPP8pulse·retention10000s,17점Vth. 전이학습 source 규모 효과는 약1000개부터 포화. Advanced 학습에 정규화 구조 변수 Gaussian noise σ=0.01을 추가했습니다.",
      "limitation": "새 구조의 최적화 결과는 TCAD 재검증이며 독립 실측 재현 결과가 아닙니다. 결론은 source 사전학습이 대표하는 물리 범위 내 일반화를 예상합니다. KF 분산은 오차와 연관된 신뢰성 지표이며 Fig.6에는 비단조 구간과 넓은 bootstrap구간이 있어 보정된 개별 예측구간이나 OOD 보장을 뜻하지 않습니다.",
      "verification": {
        "level": "pdf",
        "label": "IEEE 원문·PDF·그림 확인",
        "detail": "POSTECH Library 기관 접근으로 IEEE Xplore HTML 본문과 직접 내려받은 출판 PDF8쪽을 읽었습니다. PDF pp.1867,1869,1870을 렌더링해 Figs.5–6, TablesII–III와 참고문헌을 시각 확인했습니다. 공개 웹에는 PDF 자체를 재배포하지 않습니다."
      },
      "evidence": [
        {
          "paperId": "P50",
          "locator": "pp.1864–1866 · §II-A–D, Figs.1–4",
          "note": "기하·데이터 분할·전계 특징 teacher–student 학습·17점 출력·추론 시 구조-only 조건.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        },
        {
          "paperId": "P50",
          "locator": "pp.1866–1867 · §III-A–B, Figs.4–6",
          "note": "소량 데이터 R² 비교, source 규모·ensemble 수, KF 분산과 binned MAE 및95%bootstrap CI. R² 상대 개선을 정확도 percentage-point로 해석하지 않습니다.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        },
        {
          "paperId": "P50",
          "locator": "pp.1868–1869 · §III-C, Figs.7–9, TablesII–III, §IV",
          "note": "NSGA-II 최적화 후보의 TCAD 재검증.33.88%retention 개선의 기준은 이미 최적화된 conventional셀. 물리 범위 내 일반화 조건.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        },
        {
          "paperId": "P50",
          "locator": "p.1870 · References[15],[20],[22]",
          "note": "P27 세대 간 TL, Nam2024 Pareto, P51 ISPP-NN을 직접 인용. 제공된 P26을 인용한 항목은 없습니다.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        }
      ],
      "checkedAt": "2026-11-16",
      "publisherVerified": true,
      "scope": "nand"
    }
  ],
  "relations": [
    {
      "source": "P44",
      "target": "P43",
      "type": "cites",
      "status": "citation_verified",
      "note": "References[14]에서 직접 인용하고 §III/Fig12에서 IEDM2023 실측 데이터로 VAE-GAN과 diffusion을 비교합니다.",
      "evidence": [
        {
          "paperId": "P44",
          "locator": "§I, §III Fig.12; References [14]",
          "note": "직접 인용 및 데이터 비교를 원문에서 확인.",
          "url": "https://ieeexplore.ieee.org/document/11521068/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M01"
    },
    {
      "source": "P26",
      "target": "P42",
      "type": "cites",
      "status": "citation_verified",
      "note": "P26 References[13]에서 modified GAN의 범위 밖 FinFET/inverter 생성 연구를 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2709 · References [13]",
          "note": "사용자가 제공한 원문에서 논문명·저자·권호를 재확인.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M02"
    },
    {
      "source": "P26",
      "target": "P43",
      "type": "cites",
      "status": "citation_verified",
      "note": "P26 References[16]에서 IEDM2023 diffusion 기반 소자 변동 모델을 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2709 · References [16]",
          "note": "사용자가 제공한 원문에서 논문명·저자·학회를 재확인.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M03"
    },
    {
      "source": "P26",
      "target": "P42",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "P42는 구조 변수를 입력해 곡선을 직접 예측하는 GAN이며, P26은 구조+FoM의 결합 분포를 DDPM으로 생성한 뒤 별도 MLP를 사전학습·미세조정합니다. 목적 함수와 출력이 달라 수치 우열 비교는 하지 않습니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2705 · Fig.1, §II",
          "note": "DDPM 합성 데이터→MLP 사전학습→TCAD 미세조정.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P42",
          "locator": "IEEE HTML §II · Fig.1 설명",
          "note": "파라미터 입력과 supervised generator 갱신이 있는 직접 곡선 생성.",
          "url": "https://ieeexplore.ieee.org/document/9895246/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M04"
    },
    {
      "source": "P26",
      "target": "P43",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "두 연구 모두 diffusion을 사용하지만, P43은 실측 기반 SPICE 파라미터 분포와 electrical playback을 목표로 하며 P26은 구조+FoM 합성 데이터로 별도 MLP 예측기를 사전학습·미세조정합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2705 · Fig.1, §II",
          "note": "DDPM 합성→MLP pretraining→TCAD fine-tuning.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P43",
          "locator": "PDF pp.2–4 · §III, Figs.7–10",
          "note": "실측 compact 파라미터의 상관·tail 및 전류 분포 재계산.",
          "url": "https://ieeexplore.ieee.org/document/10413830/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M05"
    },
    {
      "source": "P26",
      "target": "P45",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "P45의 VAE+TL은 RDD&MGG 곡선 모델을 50개 개별 변동원 곡선에 맞추는 방식입니다. P26의 차이는 NAND 구조+FoM DDPM 합성을 별도 predictor의 pretraining에 사용하는 전달 경로에 있습니다. 생성형 AI와 TL의 결합 자체를 최초 차별점으로 주장하기는 어렵습니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2705 · Fig.1, §II",
          "note": "생성 데이터→별도 MLP→TCAD fine-tuning.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P45",
          "locator": "IEEE HTML §II-B Fig.4; §III Fig.9",
          "note": "VAE 곡선 생성 및 결합 변동원→개별 변동원 TL50/scratch200.",
          "url": "https://ieeexplore.ieee.org/document/11017451/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M06"
    },
    {
      "source": "P26",
      "target": "P44",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "P44는 P26 이후 발표된 방법론 비교입니다. 다른 소자·출력에서 VAE-GAN의 tail/속도 이점을 보고하여 P26 후속으로 생성기 교체와 tail 평가를 시험할 근거를 줍니다. P26의 DDPM 결과를 반박하는 동일 조건 재현실험은 아닙니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2708 · Fig.1 및 예측 결과",
          "note": "NAND joint Spara/FoM 합성과 downstream predictor.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P44",
          "locator": "IEEE HTML §II–III · Figs.4–12",
          "note": "2nm BSIM 12변수와 파라미터/소자 분포, 20k 생성 시간 비교.",
          "url": "https://ieeexplore.ieee.org/document/11521068/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M07"
    },
    {
      "source": "P44",
      "target": "P43",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "P43은 시험한 GAN/GMM 대비 diffusion 이점을 보였고 P44는 P43 데이터도 사용하여 VAE-GAN의 tail 재현 이점을 보고합니다. 경쟁 가설을 같은 benchmark에서 재시험할 연결이며 생성기 종류의 보편적 순위를 뜻하지 않습니다.",
      "evidence": [
        {
          "paperId": "P43",
          "locator": "PDF pp.1–4 · Figs.3,7–10",
          "note": "GAN mode collapse와 GMM100 대비 diffusion의 전기 분포 재현.",
          "url": "https://ieeexplore.ieee.org/document/10413830/"
        },
        {
          "paperId": "P44",
          "locator": "IEEE HTML §III · Fig.12; References [14]",
          "note": "P43 실측 데이터에서 VAE-GAN/diffusion 직접 비교.",
          "url": "https://ieeexplore.ieee.org/document/11521068/"
        }
      ],
      "checkedAt": "2026-11-16",
      "id": "M08"
    },
    {
      "id": "M09",
      "source": "P26",
      "target": "P46",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "같은 전이학습이라도 P26은 같은 목표 NAND에서 생성한 synthetic→real 적응, P46은 비중첩 LDMOS 설계 영역 사이의 labeled-target 적응입니다. P26의 생성형 사전학습은 차별점이며, P46의 영역 분리 평가는 후속 검증 설계로 참고할 수 있습니다. 직접 인용이나 성능 우열을 뜻하지 않습니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2705 §II-B; Fig.1",
          "note": "300개 raw training data에서 DDPM을 학습하고 synthetic 사전학습→raw TCAD fine-tuning. 원500개는 random60/20/20 분리.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P46",
          "locator": "§II-A–B; §III Fig.3",
          "note": "초기2500개 ±30%; 이를 제외한 확장500개 ±60%; 400개로 fine-tune하고100개 시험.",
          "url": "https://ieeexplore.ieee.org/document/11072478/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M10",
      "source": "P26",
      "target": "P46",
      "type": "conditions",
      "status": "analyst_comparison",
      "note": "P26 Fig.9의 생성 분포 공간 확대는 새 공정/재료에서의 예측 정확도 검증이 아닙니다. P46은 실제 비중첩 구조·도핑 영역 시험을 하되 목표영역 학습 라벨을 사용합니다. 후속에는 zero-shot holdout과 k-shot adaptation을 분리하고 추천 설계를 새 TCAD로 재검증하는 평가가 유용합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2708–2709 Fig.9; §IV",
          "note": "α-shape/kNN은 생성 공간의 coverage/density를 평가하며, 결론은 제한된 raw coverage와 물리현상 재현 한계를 인정.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P46",
          "locator": "§II-A; §III Figs.3,5",
          "note": "목표 영역400/100분리와 확장 Pareto front. 본문에는 Pareto 최적해의 독립 TCAD 재검증을 명시하지 않음.",
          "url": "https://ieeexplore.ieee.org/document/11072478/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M11",
      "source": "P26",
      "target": "P47",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "소량 데이터의 보완 수단이 다릅니다. P26은 DDPM 합성 데이터와 synthetic→real TL, P47은 공간 물리량 감독과 PDE/경계 제약을 사용합니다. P47은 NAND·생성형 TL의 직접 대체 결과가 아니며, 물리량 conditioning이나 physics loss를 P26에 결합하는 것은 검증할 후속 가설입니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "p.2705 §II-B; pp.2706–2707 Fig.4, Table II; p.2709 §IV",
          "note": "DDPM+MLP TL; Vt/Ion 합성 충실도가 상대적으로 낮고 Spara만으로 설명하기 어려운 물리현상을 한계로 언급.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P47",
          "locator": "§II-A–C Figs.4–6; §III-A–B Figs.9,11",
          "note": "PE/SE/BTE residual와 물리 경계 제약; DD/PI 비교에서 전체 체인 current MAPE11.8%→3.5%.",
          "url": "https://ieeexplore.ieee.org/document/10271263/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M12",
      "source": "P26",
      "target": "P47",
      "type": "conditions",
      "status": "analyst_comparison",
      "note": "P47은 bias 외삽에 더해 Lch10/15/20nm→8/22nm 전위 외삽도 확인하지만 geometry 검증은 SCP-NET에 한정됩니다. 이를 P26의 네 NAND FoM 또는 재료 외삽 성공으로 확대 해석할 수 없습니다. P26의 실제 후속 평가는 holdout된 구조·재료에서 최종 FoM까지 검증해야 합니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2705 §II-A–B; p.2708 Fig.9",
          "note": "15nm NAND의 네 scalar FoM, 동일 파라미터 범위의 random split와 합성 분포 공간 분석.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P47",
          "locator": "§III-C; Fig.12",
          "note": "학습 Lch10/15/20nm,평가8/22nm; fixed bias .7/.4V; geometry variation은 SCP-NET만 시험했다고 명시.",
          "url": "https://ieeexplore.ieee.org/document/10271263/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M13",
      "source": "P52",
      "target": "P51",
      "type": "cites",
      "status": "citation_verified",
      "note": "P52는 P51의 NN 기반 NAND 최적화를 선행 연구로 인용합니다. P51은 TCAD 구조 최적화, P52는 실측 기반 동작 pulse 최적화로 적용 대상이 다릅니다.",
      "evidence": [
        {
          "paperId": "P52",
          "locator": "IEEE HTML §I–II; Fig.2 설명; References [9]",
          "note": "Cho2023의 제목·저자·DOI 및 본문[9]를 직접 확인.",
          "url": "https://ieeexplore.ieee.org/document/10654387/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M14",
      "source": "P26",
      "target": "P52",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "P26은 제한된 TCAD의 구조–FoM 분포를 생성해 예측 모델을 보강하고, P52는 150개 이상의 실측 pulse로 학습해 동작 조건을 최적화합니다. P26을 실측으로 확장할 때의 검증 방식과 비교 기준을 제공하지만 생성 데이터의 효과를 입증한 연구는 아닙니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2707 · §II–III, Figs.1–4",
          "note": "TCAD 기반 데이터 생성·FoM 예측, 생성 데이터의 TCAD 확인.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P52",
          "locator": "IEEE HTML §II–III; Figs.2–6 설명",
          "note": "무작위 pulse 실측·NN 최적화·ISPP 및 disturb 실측 검증.",
          "url": "https://ieeexplore.ieee.org/document/10654387/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M15",
      "source": "P51",
      "target": "P28",
      "type": "conditions",
      "status": "analyst_comparison",
      "note": "P51의 program 효율 최적화는 더 얇은 TOX, P28의 retention 최적화는 더 두꺼운 TOX를 선택합니다. 목표·구조·데이터 조건이 달라 목표별 tradeoff로 읽어야 합니다. 두 연구 모두 상관된 변수를 함께 최적화해 단일 변수의 극단값을 그대로 택하지 않습니다.",
      "evidence": [
        {
          "paperId": "P51",
          "locator": "IEEE HTML §III-C; Fig.10 설명",
          "note": "얇은 TOX의 FN 주입 증가·두꺼운 CTN 저장용량, 범위 내 최소/최대 극단은 아님.",
          "url": "https://ieeexplore.ieee.org/document/10130688/"
        },
        {
          "paperId": "P28",
          "locator": "IEEE HTML §III-B; Figs.7–8 설명",
          "note": "두꺼운 TOX의 전계 감소·긴 spacer, 기타 특성과의 tradeoff 인정.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M16",
      "source": "P28",
      "target": "P19",
      "type": "cites",
      "status": "citation_verified",
      "note": "초기 charge loss와 Vt분포 변화의 배경으로 Chen2010을 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P28",
          "locator": "IEEE HTML §I; References [8]",
          "note": "DOI10.1109/IEDM.2010.5703304 및 직접 인용 확인.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M17",
      "source": "P28",
      "target": "P20",
      "type": "cites",
      "status": "citation_verified",
      "note": "수초 내 early retention의 배경으로 Choi2016VLSI를 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P28",
          "locator": "IEEE HTML §I; References [9]",
          "note": "DOI10.1109/VLSIT.2016.7573385 및 직접 인용 확인.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M18",
      "source": "P28",
      "target": "P21",
      "type": "cites",
      "status": "citation_verified",
      "note": "손실 메커니즘 분해·모델링의 선행 연구로 Woo2019VLSI를 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P28",
          "locator": "IEEE HTML §I; References [11]",
          "note": "DOI10.23919/VLSIT.2019.8776579 및 직접 인용 확인.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M19",
      "source": "P28",
      "target": "P50",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "P28은 retention만 최소화해 커진 구조·다른 특성과의 tradeoff를 인정합니다. P50은 program과 retention을 함께 Pareto 최적화합니다. 서로 다른 데이터·구조·시간 구간이므로 32.37%와 33.88%를 우열로 비교하지 않습니다. 직접 인용은 확인하지 못했습니다.",
      "evidence": [
        {
          "paperId": "P28",
          "locator": "IEEE HTML §III-B; Fig.7 설명",
          "note": "단일 목표와 크기 tradeoff, 무작위 4312개 소자의 최저 loss 기준.",
          "url": "https://ieeexplore.ieee.org/document/10172051/"
        },
        {
          "paperId": "P50",
          "locator": "pp.1866–1869 · §II-E, §III-C, Table III",
          "note": "Program·retention 동시 최적화, 최적 conventional 셀 기준 33.88%.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M20",
      "source": "P50",
      "target": "P27",
      "type": "cites",
      "status": "citation_verified",
      "note": "P50은 P27의 세대 간 전이학습을 데이터 부족 완화 선행 연구로 인용하고 recessed 구조·극소량 데이터에 대한 확장을 다룹니다.",
      "evidence": [
        {
          "paperId": "P50",
          "locator": "p.1864 · §I; p.1870 · References [15]",
          "note": "전이학습 선행 연구의 본문 인용과 서지를 PDF에서 확인.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M21",
      "source": "P50",
      "target": "P51",
      "type": "cites",
      "status": "citation_verified",
      "note": "P50은 구조-only MLP 비교 기준을 설명하며 P51의 ISPP-NN 연구를 직접 인용합니다.",
      "evidence": [
        {
          "paperId": "P50",
          "locator": "p.1866 · §III-A; p.1870 · References [22]",
          "note": "MLP baseline 설명의[22]와 Cho2023 서지 확인.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        }
      ],
      "checkedAt": "2026-11-16"
    },
    {
      "id": "M22",
      "source": "P26",
      "target": "P50",
      "type": "alternative",
      "status": "analyst_comparison",
      "note": "같은 NAND 소량 데이터 문제에서 P26은 target-only DDPM 합성 데이터→MLP 사전학습·미세조정, P50은 전계 특징의 teacher–student 학습과 conventional→recessed 전이를 선택합니다. P50에는 이미 reliability indicator와 program/retention 최적화가 있으며 target-only 학습 실험도 있습니다. 직접 인용 또는 수치 우열 관계가 아닙니다.",
      "evidence": [
        {
          "paperId": "P26",
          "locator": "pp.2704–2705 · §II, Figs.1–3; pp.2707–2708 · Tables II–IV",
          "note": "500개 target TCAD의 DDPM 데이터 증강·별도 MLP 전이 및 네 FoM 평가.",
          "url": "https://ieeexplore.ieee.org/document/11428269/"
        },
        {
          "paperId": "P50",
          "locator": "pp.1865–1869 · §II-B–E, Figs.4–9, Table III",
          "note": "전계에서 얻은 KF, conventional 데이터 전이, 17점 Vth·신뢰성 지표·최적화로 다른 경로를 택함.",
          "url": "https://ieeexplore.ieee.org/document/11428256/"
        }
      ],
      "checkedAt": "2026-11-16"
    }
  ],
  "review": {
    "headline": "내 연구의 위치 · 차별점과 다음 질문",
    "primary": "목표 NAND의 소량 TCAD → 구조·FoM 결합 생성 → MLP 사전학습 → 원 데이터 미세조정",
    "device": "15 nm 3D CTN NAND · 전기적 FoM 예측 · DDPM + synthetic-to-TCAD transfer",
    "interpretation": "생성형 AI와 전이학습의 결합 자체보다, 무엇을 생성하고 어느 모델로 전달하는지가 핵심입니다. 기존 세대의 대량 ML 사전학습 데이터를 사용하지 않지만 TCAD 보정에는 기존 실측을 사용합니다. 비교 문헌 내 구분이며 전 분야 최초성 판정은 아닙니다.",
    "dates": "P26과 P50은 모두 2026-03-10 온라인 공개입니다. 호수의 월로 선후를 정하지 않습니다. P44는 2026-05-15 공개되어 P26 이후의 방법 비교입니다.",
    "comparisons": [
      {
        "ids": [
          "P27"
        ],
        "title": "세대 간 전이학습",
        "known": "기존 노드의 대량 데이터에서 사전학습하고 차세대 NAND로 전이합니다.",
        "difference": "P26은 목표 노드의 훈련 데이터로 합성 분포를 만들어 사전학습 데이터를 구성합니다.",
        "locators": "P27 §II · P26 Fig.1, References [17]"
      },
      {
        "ids": [
          "P42",
          "P43",
          "P44"
        ],
        "title": "생성기의 목적과 검증",
        "known": "직접 I–V 생성, SPICE 파라미터 분포·tail 재현, VAE-GAN/diffusion 비교를 다룹니다. NAND 외 방법론 이웃입니다.",
        "difference": "P26은 구조와 네 가지 FoM을 함께 생성하여 별도 예측 모델을 학습합니다. 생성 품질과 downstream 예측 품질을 구분할 수 있습니다.",
        "locators": "P42 §II–IV · P43 §III/Figs.7–10 · P44 §III/Fig.12 · P26 §II/Fig.1"
      },
      {
        "ids": [
          "P45"
        ],
        "title": "이미 존재하는 생성형 모델 + TL",
        "known": "VAE 기반 결합 변동원 모델을 개별 변동원으로 전이합니다. 목표 50개 곡선과 scratch 200개를 비교합니다.",
        "difference": "P26은 합성→TCAD로 별도 MLP를 전이합니다. 결합 자체를 최초 차별점으로 주장하기는 어렵습니다.",
        "locators": "P45 §II-B/Fig.4, §III/Fig.9 · P26 Fig.1"
      },
      {
        "ids": [
          "P46",
          "P47"
        ],
        "title": "적은 데이터의 단위를 구분",
        "known": "P46은 비중첩 설계 영역의 목표 400개로 적응합니다. P47의 25 bias는 각 bias의 밀집 공간 물리량을 포함합니다.",
        "difference": "P26의 300개 훈련 구조·FoM 쌍과 데이터 정보량·비용이 다릅니다. 50%, MAPE, MSE를 같은 성능 순위로 비교할 수 없습니다.",
        "locators": "P46 §II-A/Fig.3 · P47 §II/§III · P26 §II"
      },
      {
        "ids": [
          "P50"
        ],
        "title": "가장 가까운 sparse-data NAND 연구",
        "known": "전계 특징을 전달하는 EFA-NN, 선택적 기존 노드 TL, 17개 Vt 상태, ensemble, 설계 최적화와 TCAD 검증을 다룹니다. Advanced-only 학습도 평가합니다.",
        "difference": "P26은 joint-data 생성과 synthetic-to-TCAD 학습입니다. 기존 데이터 없이 동작한다는 조건만으로 구분할 수 없고, 물리 특징과 생성 데이터가 언제 상호보완되는지가 다음 질문입니다.",
        "locators": "P50 §II–III/Figs.1–6,9/Table III · P26 Fig.1/§II"
      },
      {
        "ids": [
          "P28",
          "P51",
          "P52"
        ],
        "title": "동작·실측 검증으로 이어지는 이웃",
        "known": "Retention 예측, 21개 program 상태의 구조 최적화, 실측 기반 펄스 최적화가 이미 있습니다.",
        "difference": "P26은 정적 전기 FoM입니다. Retention/ISPP로 출력만 확장하기보다 소량 실측으로의 전이 비용과 검증 가능성을 질문해야 합니다.",
        "locators": "P28 §III · P51 §III · P52 §III · P26 §II"
      }
    ],
    "contributions": [
      {
        "title": "생성 대상과 전달 경로",
        "text": "목표 15 nm NAND의 구조·FoM 결합 DDPM을 학습하고, 합성 데이터로 MLP를 사전학습한 뒤 원 TCAD 데이터로 미세조정합니다. 타 소자의 직접 곡선 생성이나 기존 노드→목표 노드 전이와 구분됩니다.",
        "ids": [
          "P26",
          "P27",
          "P42",
          "P45"
        ]
      },
      {
        "title": "분리한 학습·평가 절차",
        "text": "500개 원 TCAD를 300/100/100으로 나누고 생성기는 훈련 부분만 사용합니다. TRTR/TSTR/TSRTR/TL과 freeze 층·합성량을 비교했습니다. 합성 검사용 추가 TCAD 100개도 총 비용에 포함해야 합니다.",
        "ids": [
          "P26"
        ]
      },
      {
        "title": "효과의 범위를 한정",
        "text": "Table II의 TL은 raw-only 대비 네 FoM 모두 개선되지만 초기 Vt는 TSRTR가 더 낮은 MSE입니다. Fig.9의 분포 커버리지 확대는 OOD 정답 정확도의 증명이 아닙니다.",
        "ids": [
          "P26"
        ]
      }
    ],
    "followups": [
      {
        "title": "1. 생성 데이터 × 물리 특징의 기여 분리",
        "text": "동일 target split·TCAD 예산에서 raw MLP, DDPM+TL, EFA-NN, EFA+DDPM을 교차 비교합니다. 기존 노드 데이터 유무도 분리하고 전계 추출·생성기·ensemble 비용까지 계산합니다. P50의 physics+TL을 다시 구현하는 데서 그치지 않고 어느 조건에서 조합이 이득인지 검증합니다.",
        "ids": [
          "P26",
          "P47",
          "P50"
        ],
        "locator": "P26 Fig.1/§II · P47 §II–III · P50 Figs.1–4"
      },
      {
        "title": "2. 실제 OOD 평가와 신뢰도 기반 표본 선택",
        "text": "재료·recess·치수의 특정 구간을 통째로 제외한 테스트를 만들고 zero-shot과 k-shot 적응을 분리합니다. 예측 구간의 coverage와 실패 검출을 평가한 뒤 다음 TCAD를 반복 선택해 random sampling과 비교합니다. P50의 KF 분산–오차 경향은 보정된 coverage 보장이 아니며 반복 active learning과도 구분됩니다.",
        "ids": [
          "P26",
          "P42",
          "P46",
          "P50"
        ],
        "locator": "P26 Fig.9 · P42 §IV/GIDL 실패 · P46 §II-A · P50 Fig.6"
      },
      {
        "title": "3. 생성기·tail·물리 검증을 같은 예산에서 비교",
        "text": "DDPM/VAE/VAE-GAN과 무합성 모델을 동일 split·MLP·실제 데이터 예산으로 비교합니다. P26의 합성 100개 TCAD 재검증을 출발점으로 극단 FoM·공동 실패·물리적으로 불가능한 조합을 나누어 보고합니다. 평균 오차, tail 오차, 생성·학습 시간과 반복 seed를 함께 평가합니다.",
        "ids": [
          "P26",
          "P43",
          "P44"
        ],
        "locator": "P26 합성 검증/Fig.4 · P43 Figs.7–10 · P44 §III/Figs.8–12"
      },
      {
        "title": "4. 소량 실측 전이와 검증된 설계 제안",
        "text": "TCAD→실측에서 적응 표본 수에 따른 개선과 negative transfer를 측정합니다. 추천 구조·펄스는 학습에 쓰지 않은 신규 TCAD 또는 실측으로 재검증하고 실패율도 보고합니다. 최적화 자체는 P50/P51, 실측 펄스 검증은 P52가 이미 수행했으므로 목표는 소량 실측에서의 비용 대비 효과입니다.",
        "ids": [
          "P26",
          "P50",
          "P51",
          "P52"
        ],
        "locator": "P26 TCAD 보정/평가 범위 · P50 Fig.9/Table III · P51 §III · P52 §III"
      }
    ],
    "coverage": "새로 추가한 9편은 모두 IEEE Xplore 원문을 직접 읽었습니다(HTML 7편, PDF·그림 2편). 기존 P26·P27·P28도 IEEE 본문으로 재확인했습니다. VLSI에서는 이번 좁은 주제에 맞는 원문을 확인하지 못해 억지로 추가하지 않았습니다. 빈 가지는 문헌 수집의 공백이며 연구의 부재가 아닙니다.",
    "relationNote": "실선 인용은 참고문헌에서 확인한 방향입니다. 비교 선은 양쪽 원문에 근거한 분석입니다. P43/P44의 생성기 비교 결과는 모델·데이터·평가 조건에 의존하므로 P26의 결과를 반박한다고 표시하지 않았습니다. 확인된 직접 상충은 0건입니다."
  },
  "searchAudit": {
    "venuesSearched": [
      "VLSI Symposium on Technology and Circuits",
      "IEDM",
      "TED",
      "EDL"
    ],
    "vlsiQueries": [
      "generative model VLSI 2024 transistor",
      "generative VLSI Technology 2025",
      "small data VLSI device transfer",
      "generative VLSI Technology and Circuits device modeling"
    ],
    "vlsiResult": "No close original device-modeling generative paper confirmed in this bounded search. VLSI2025 program returned AI accelerator/plenary/workshop items; excluded because AI hardware or invited workshop is not the same modeling problem. A title containing VLSI at SISIMPACT is not VLSI Symposium and was excluded.",
    "vlsiPrimaryPrograms": [
      "https://dev.vlsisymposium.org/wp-content/uploads/VLSI2025_Advanceprogram0611.pdf",
      "https://dev.vlsisymposium.org/workshop/workshop2025_1/"
    ],
    "access": "web.open returned JavaScript/robot-check screens for doc9895246 and10413830; root's browser succeeded with existing POSTECH Library access. No paywall or security protection bypass was used."
  }
};

const D=window.NAND_REAL_DATA;
for(const p of additions.papers){const i=D.papers.findIndex(v=>v.id===p.id);if(i<0)D.papers.push(p);else D.papers[i]={...D.papers[i],...p};}
D.relations.push(...additions.relations);
const own=D.papers.find(p=>p.id==='P26');own.position={...own.position,...additions.review};own.family='generative';own.publisherVerified=true;own.onlineDate='2026-03-10';own.sourceLabel='IEEE Xplore 원문 · 제공 PDF도 확인';
delete own.position.mapGaps;delete own.position.nextQuestions;
own.verification.detail+=' IEEE Xplore HTML 본문에서도 구성·평가·공개일을 재확인했습니다.';
const previous=D.papers.find(p=>p.id==='P27');previous.family='transfer';previous.publisherVerified=true;previous.sourceUrl='https://ieeexplore.ieee.org/document/10960371/';previous.sourceLabel='IEEE Xplore 원문';previous.verification={level:'text',label:'IEEE Xplore 본문 직접 확인',detail:'기관 접근으로 IEEE Xplore §I–IV의 전체 HTML 본문과 그림 캡션을 직접 읽어 세대 간 전이 및 평가 조건을 재확인했습니다. PDF 그림 픽셀 판독과 구분합니다.'};
const uncertainty=D.concepts.find(n=>n.id==='uncertainty');uncertainty.ko='예측 신뢰도 · 불확실성';uncertainty.description='P50의 ensemble 기반 KF 분산과 오차 관계를 탐색합니다. 보정된 예측 구간과 능동 표본 선택은 별도 검증 질문입니다.';
D.concepts.push(
 {id:'physics-ml',parent:'physics',label:'Physics + ML',ko:'물리 정보를 활용한 학습',x:235,y:-95,group:'models',description:'방정식 제약과 전계 특징 전달은 서로 다른 물리 활용 방식입니다.',question:'물리 정보가 합성 데이터와 어느 조건에서 상호보완되는가?'},
 {id:'optimization',parent:'surrogate',label:'Design optimization',ko:'설계·동작 최적화',x:600,y:-270,group:'models',description:'학습 모델이 제안한 구조·동작 조건의 독립 TCAD/실측 검증을 비교합니다.',question:'예측 정확도가 실제 설계 개선으로 이어지는가?'},
 {id:'variability',parent:'generative',label:'Distribution & tails',ko:'분포·상관·극단값',x:940,y:-245,group:'models',description:'파라미터 분포의 충실도와 전기 특성 재계산을 연결합니다. NAND 외 방법론 문헌도 포함합니다.',question:'평균뿐 아니라 드문 실패와 공동 분포를 재현하는가?'}
);
D.papers.find(p=>p.id==='P50').onlineDate='2026-03-10';D.papers.find(p=>p.id==='P44').onlineDate='2026-05-15';
D.schemaVersion='0.5.0';D.searchAudit=additions.searchAudit;
D.description='NAND 문헌과 생성형 AI·전이학습의 방법론 이웃을 연결한 선별 지도. IEEE 직접 본문 확인 여부, 소자 범위, 인용 근거와 비교 조건을 구별합니다. 편수는 분야 전체의 연구량을 뜻하지 않습니다.';
})();
