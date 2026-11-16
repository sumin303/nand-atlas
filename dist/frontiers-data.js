/* Analyst questions between existing papers; not verified contradictions. */
window.NAND_FRONTIERS = [
  {
    "id": "gap-retention-pattern-boundary",
    "title": "패턴 의존성은 어느 조건에서 사라지는가?",
    "question": "같은 CTL lateral migration을 다루지만 서로 다른 소자의 동일 이름 PV1이 동일 저장 전하나 erase 상태를 뜻하지 않는다. P24는 P20을 인용하므로 이 점선은 인용 부재를 뜻하지 않는다.",
    "topics": [
      "retention",
      "ctn"
    ],
    "paperIds": [
      "P20",
      "P24"
    ],
    "positions": [
      {
        "paperId": "P20",
        "claim": "초기 retention에서 checkerboard가 solid보다 불리하며, 공유 CTL의 lateral migration과 erase 후 잔류 hole·fringing field를 함께 해석한다.",
        "conditions": "tube-type 3D NAND, PV1/2/3 및 EV 변화, 빠른 pulse I–V. 최소 측정 지연 <100 μs. 논문의 DC 특성 측정 90°C를 모든 pulse retention 조건으로 확대하지 않는다.",
        "locator": "p.78 Measurement Results and Discussion; p.79 Figs.7–16",
        "url": "https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/t08-011.pdf",
        "publisherUrl": "https://doi.org/10.1109/VLSIT.2016.7573385",
        "verificationScope": "연구실 공개 원문 PDF의 로컬 추출 본문과 캡션 재독. 본문의 PV 증감 설명 한 문장은 인접 설명과 불일치하여 정량 비교 근거로 사용하지 않았다."
      },
      {
        "paperId": "P24",
        "claim": "PV1에서는 solid/checkerboard 손실 차이가 거의 없고, 전자 LM과 잔류 hole LM을 분리한 네 성분 모델을 제시한다.",
        "conditions": "PV1 및 PV3/5/7 비교, 25–115°C, 100 s 이내; S/P=P-P-P, C/P=E-P-E. hole LM의 더 짧은 시정수는 모델 가정이다.",
        "locator": "pp.2645–2647, §I–III, Figs.1–6; References [5]",
        "url": "https://www.scribd.com/document/769485586/2020-TED-Kim",
        "publisherUrl": "https://doi.org/10.1109/TED.2020.2989734",
        "verificationScope": "원문 사본의 본문·식·캡션·참고문헌 텍스트 확인. 그래프 이미지를 정량 digitization하지 않았다."
      }
    ],
    "gap": "같은 CTL lateral migration을 다루지만 서로 다른 소자의 동일 이름 PV1이 동일 저장 전하나 erase 상태를 뜻하지 않는다. P24는 P20을 인용하므로 이 점선은 인용 부재를 뜻하지 않는다.",
    "proposedTest": "같은 소자에서 초기 VT·erase verify·program pulse·온도·측정 지연을 맞춘 뒤 PV와 이웃 패턴을 함께 바꾸어, 패턴 차이가 약해지는 경계를 얻는다. 전자/hole LM 성분의 식별 가능성도 함께 확인한다.",
    "confidence": "source_grounded_question",
    "relationLabel": "조건 경계 미검증",
    "caution": "관찰 차이는 조건 의존성을 확인할 동기다. 동일 조건에서의 모순 또는 한 논문의 반박으로 표시하지 않는다.",
    "scopeNote": "현재 맵에 이미 수록된 논문 쌍 사이의 비교 과제. 분야 전체의 미해결 문제나 인용 부재를 확정한 결과가 아니다.",
    "checkedAt": "2026-11-16",
    "category": "Retention · 신뢰성",
    "shortLabel": "PV·EV × 패턴",
    "pairs": [
      {
        "source": "P20",
        "target": "P24",
        "label": "조건 경계 미검증",
        "reason": "같은 CTL lateral migration을 다루지만 서로 다른 소자의 동일 이름 PV1이 동일 저장 전하나 erase 상태를 뜻하지 않는다. P24는 P20을 인용하므로 이 점선은 인용 부재를 뜻하지 않는다.",
        "test": "같은 소자에서 초기 VT·erase verify·program pulse·온도·측정 지연을 맞춘 뒤 PV와 이웃 패턴을 함께 바꾸어, 패턴 차이가 약해지는 경계를 얻는다. 전자/hole LM 성분의 식별 가능성도 함께 확인한다."
      }
    ]
  },
  {
    "id": "gap-retention-vertical-history",
    "title": "수직 재분포와 실제 수직 손실을 어떻게 분리할까?",
    "question": "두 논문에서 vertical이 가리키는 전하 이동 경로가 다르다. 또한 temperature sweep과 program 후 temperature switching은 초기 trap 점유 이력이 다르다.",
    "topics": [
      "retention",
      "ctn"
    ],
    "paperIds": [
      "P21",
      "P25"
    ],
    "positions": [
      {
        "paperId": "P21",
        "claim": "초기 ΔVT를 detrapping·CTL 내부 vertical redistribution(VR)·lateral migration으로 분해한다. VR은 다른 성분과 반대 부호의 ΔVT 기여를 갖는 모델이다.",
        "conditions": "program-read 약 10 μs, 25–115°C, PV3/5/7, solid/checkerboard. 여기서 vertical은 CTL 내부 charge centroid 재배치다.",
        "locator": "T214 Abstract; Measurement Results and Discussion, Fig.5 설명",
        "url": "https://picture.iczhiku.com/resource/ieee/ShkwTHFuATQaPCMv.pdf",
        "publisherUrl": "https://doi.org/10.23919/VLSIT.2019.8776579",
        "verificationScope": "원문 PDF의 검색 색인 본문을 확인했다. 직접 PDF 열기는 403으로 제한되어 그래프 이미지는 이번 조사에서 재검증하지 못했다."
      },
      {
        "paperId": "P25",
        "claim": "erase/program/retention 온도를 함께 바꾸면 겉보기 활성화에너지가 거의 0일 수 있으나, program 후 온도를 바꾸는 실험은 손실의 열활성화를 드러낸다.",
        "conditions": "gate stack에서 channel로 빠지는 수직 전하 손실. lateral gradient를 줄인 균일 pattern, 10 WL 구조, 300 K·15 K 및 온도 전환 실험; 다수 BL의 등가 VT 측정.",
        "locator": "pp.1811–1813, §II–III, Figs.2–6",
        "url": "https://www.researchgate.net/publication/382674531_Evidence_of_Widely_Distributed_Time_Constants_in_the_Vertical_Charge_Loss_of_3-D_Charge-Trap_NAND_Flash_Memories",
        "publisherUrl": "https://doi.org/10.1109/LED.2024.3435345",
        "verificationScope": "논문 원문 본문·캡션을 확인했다. 본문이 설명하는 온도 전환 결과를 사용했으며 그림 수치를 새로 추출하지 않았다."
      }
    ],
    "gap": "두 논문에서 vertical이 가리키는 전하 이동 경로가 다르다. 또한 temperature sweep과 program 후 temperature switching은 초기 trap 점유 이력이 다르다.",
    "proposedTest": "같은 소자에서 program 온도와 retention 온도를 독립 제어하고, 빠른 측정과 장시간 측정을 연결한다. VR·detrapping·실제 전하 유출을 분리한 모델이 여러 온도 이력을 동시에 설명하는지 검증한다.",
    "confidence": "source_grounded_question",
    "relationLabel": "공통 프로토콜 필요",
    "caution": "P21의 성분별 활성화에너지와 P25의 겉보기 활성화에너지를 그대로 대립시키면 안 된다. 공통 측정량만으로 서로 다른 기작을 얼마나 구분할 수 있는지가 질문이다.",
    "scopeNote": "현재 맵에 이미 수록된 논문 쌍 사이의 비교 과제. 분야 전체의 미해결 문제나 인용 부재를 확정한 결과가 아니다.",
    "checkedAt": "2026-11-16",
    "category": "Retention · 신뢰성",
    "shortLabel": "VR ↔ 손실·온도 이력",
    "pairs": [
      {
        "source": "P21",
        "target": "P25",
        "label": "공통 프로토콜 필요",
        "reason": "두 논문에서 vertical이 가리키는 전하 이동 경로가 다르다. 또한 temperature sweep과 program 후 temperature switching은 초기 trap 점유 이력이 다르다.",
        "test": "같은 소자에서 program 온도와 retention 온도를 독립 제어하고, 빠른 측정과 장시간 측정을 연결한다. VR·detrapping·실제 전하 유출을 분리한 모델이 여러 온도 이력을 동시에 설명하는지 검증한다."
      }
    ]
  },
  {
    "id": "gap-retention-local-trap-population-tail",
    "title": "국소 trap 위치가 배열의 ΔVT tail을 예측할 수 있을까?",
    "question": "P36은 국소 RTN trap 진단, P34는 다양한 단일 사건 진폭을 입력하는 통계 틀이다. RTN과 cycling-induced detrapping의 defect 집단이 같다고 가정할 수 없다.",
    "topics": [
      "retention",
      "variability"
    ],
    "paperIds": [
      "P34",
      "P36"
    ],
    "positions": [
      {
        "paperId": "P34",
        "claim": "독립 detrapping과 Poisson trap 수를 가정한 통계 모델에서, 평균 단일 전하 ΔVT가 같아도 그 분포가 다르면 배열 ΔVT의 폭과 tail이 달라진다.",
        "conditions": "Fig.9–10의 지수/Gamma 비교는 이론 예시다. 단일 전하 진폭 분포와 시정수 분포가 입력이며 평균만 맞추어서는 tail을 정하지 못한다.",
        "locator": "§III, Eq.(18), Figs.9–10; §I의 서로 다른 oxide defect에 대한 구분",
        "url": "https://www.academia.edu/118146127/Revisiting_Charge_Trapping_Detrapping_in_Flash_Memories_From_a_Discrete_and_Statistical_Standpoint_Part_I_V_T_Instabilities",
        "publisherUrl": "https://doi.org/10.1109/TED.2014.2327661",
        "verificationScope": "원문 accepted-manuscript 본문·식·캡션의 웹 텍스트를 확인. 사이트의 AI summary와 추천 논문 텍스트는 근거에서 제외했다. 기관 저장소 PDF는 403으로 열리지 않았다."
      },
      {
        "paperId": "P36",
        "claim": "pass-cell 직렬 저항을 보정하고 이웃 BL pattern의 RTN 전류 변화를 TCAD와 비교해 trap의 세 좌표를 추출한다.",
        "conditions": "planar floating-gate NAND. 제목의 3-D는 trap 좌표를 뜻한다. MOSFET 저항 검증과 48/32 nm NAND 사례; Fig.13의 위치 표본은 10 cells이다.",
        "locator": "p.76 Devices Structure and Results; p.77 Table I, Figs.3–16, 특히 Fig.13",
        "url": "https://silk.kookmin.ac.kr/img_up/shop_pds/kmusilk/contents/myboard/283.pdf",
        "publisherUrl": "https://ieeexplore.ieee.org/document/5984517",
        "verificationScope": "연구실 공개 원문 PDF의 로컬 추출 본문과 캡션 재독. 개별 trap 진단을 배열 tail의 직접 측정으로 확대하지 않는다."
      }
    ],
    "gap": "P36은 국소 RTN trap 진단, P34는 다양한 단일 사건 진폭을 입력하는 통계 틀이다. RTN과 cycling-induced detrapping의 defect 집단이 같다고 가정할 수 없다.",
    "proposedTest": "충분한 cell 수에서 저항 보정된 trap 위치·단일 사건 ΔVT·시정수의 공동 분포를 얻고, 대응되는 stress/retention 조건의 배열 tail을 별도 검증 데이터로 예측한다. trap 선별 편향과 독립성 가정을 평가한다.",
    "confidence": "method_bridge_hypothesis",
    "relationLabel": "통계 연결 가설",
    "caution": "공간 정보에서 통계 입력으로 이어지는 분석자 제안 연결이다. 기존 인용의 존재·부재를 조사 완료한 관계도 아니고, 두 논문이 이미 연결 모델을 검증했다는 뜻도 아니다.",
    "scopeNote": "현재 맵에 이미 수록된 논문 쌍 사이의 비교 과제. 분야 전체의 미해결 문제나 인용 부재를 확정한 결과가 아니다.",
    "checkedAt": "2026-11-16",
    "category": "Retention · 신뢰성",
    "shortLabel": "trap 위치 → tail",
    "pairs": [
      {
        "source": "P34",
        "target": "P36",
        "label": "통계 연결 가설",
        "reason": "P36은 국소 RTN trap 진단, P34는 다양한 단일 사건 진폭을 입력하는 통계 틀이다. RTN과 cycling-induced detrapping의 defect 집단이 같다고 가정할 수 없다.",
        "test": "충분한 cell 수에서 저항 보정된 trap 위치·단일 사건 ΔVT·시정수의 공동 분포를 얻고, 대응되는 stress/retention 조건의 배열 tail을 별도 검증 데이터로 예측한다. trap 선별 편향과 독립성 가정을 평가한다."
      }
    ]
  },
  {
    "id": "existing-energy-relaxation-validation",
    "title": "전하 분포 차이: 에너지 완화 모델을 같은 조건에서 비교하면?",
    "question": "P32는 drift–diffusion 기반으로 program에서 retention까지 연속 계산하고 trap 에너지·검출 지연의 중요성을 보입니다. P30은 주입 직후 에너지 완화를 명시하면 전하 분포와 retention 설명이 달라진다고 보입니다. P30이 P32를 실제로 인용하므로 미싱 링크는 인용선이 아니라, 동일 소자·파라미터·측정 조건에서 두 설명을 판별하는 검증입니다.",
    "topics": [
      "models",
      "program",
      "retention"
    ],
    "paperIds": [
      "P32",
      "P30"
    ],
    "positions": [
      {
        "paperId": "P32",
        "claim": "DD와 trapping을 연결한 program–retention 연속 모델을 사용합니다. 전계 의존 trap 에너지와 검출 지연을 고려하며, thermal carrier 가정이 program 중 가열된 캐리어의 tunneling-out을 과소평가할 수 있다는 제한도 본문에서 언급합니다.",
        "conditions": "주요 SONOS 비교는 TOx/SiN/top oxide 2/6/9 nm이며, 별도 thermal 분석 조건도 있습니다. Conventional Vt 검출 지연과 빠른 초기 retention 측정을 구분해야 합니다.",
        "url": "https://www.researchgate.net/publication/224569347_Experimental_and_Simulation_Analysis_of_ProgramRetention_Transients_in_Silicon_Nitride-Based_NVM_Cells",
        "locator": "pp.1980–1983 §I–II; pp.1986–1988 §IV, Figs.9–15 본문 설명; §V",
        "verificationScope": "저자 공개 원문 텍스트. 그림 픽셀은 확인하지 않음."
      },
      {
        "paperId": "P30",
        "claim": "즉시 thermalization을 가정하는 DD-only 접근과 energy-relaxation shape-function을 비교합니다. Fig.11의 전하 분포 차이 및 Fig.12의 retention 곡선을 근거로 내부에 분포하는 전하의 필요성을 논의합니다.",
        "conditions": "Fig.12의 실온 retention 비교는 2.2/6/8 nm stack과 두 program 상태입니다. 별도 6/6/6 nm·120 nm hole GAA program vehicle과 혼동하면 안 됩니다.",
        "url": "https://imec-publications.be/server/api/core/bitstreams/6dd3bbcb-3301-49b1-84df-b3821ea691bd/content#page=6",
        "locator": "pp.549–550 §III–IV; p.552 Figs.11–12 및 §VI; p.553 References[7]",
        "verificationScope": "기관 PDF 원문 텍스트 재검토. 기존 corpus에는 Fig.11–12 시각 검증도 기록됨."
      }
    ],
    "gap": "P32는 drift–diffusion 기반으로 program에서 retention까지 연속 계산하고 trap 에너지·검출 지연의 중요성을 보입니다. P30은 주입 직후 에너지 완화를 명시하면 전하 분포와 retention 설명이 달라진다고 보입니다. P30이 P32를 실제로 인용하므로 미싱 링크는 인용선이 아니라, 동일 소자·파라미터·측정 조건에서 두 설명을 판별하는 검증입니다.",
    "proposedTest": "한 소자와 공통 calibration 예산에서 DD-only와 energy-relaxation 모델을 각각 보정한 뒤, 보정에 쓰지 않은 program·초기/후기 retention을 함께 예측하게 합니다. 가능하면 전하 위치에 민감한 별도 관측을 포함해 같은 Vt 적합으로 서로 다른 내부 분포가 숨는지 판별합니다.",
    "confidence": "source_grounded_question",
    "relationLabel": "동일 조건 비교 ?",
    "caution": "P30은 모델 클래스에 대한 비판과 자체 비교를 제시합니다. 이것만으로 P32의 정확한 소자·파라미터 결과가 재현 실험에서 반증되었다고 표시하지 않습니다.",
    "scopeNote": "이미 맵에 들어 있는 논문 사이의 비교 조건과 검증 연결을 검토한 편집자 분석입니다. 미인용이나 분야 전체의 연구 부재를 뜻하지 않습니다.",
    "checkedAt": "2026-11-16",
    "category": "동작 · 물리 모델",
    "shortLabel": "에너지 완화 비교",
    "pairs": [
      {
        "source": "P32",
        "target": "P30",
        "label": "동일 조건 비교 ?",
        "reason": "P32는 drift–diffusion 기반으로 program에서 retention까지 연속 계산하고 trap 에너지·검출 지연의 중요성을 보입니다. P30은 주입 직후 에너지 완화를 명시하면 전하 분포와 retention 설명이 달라진다고 보입니다. P30이 P32를 실제로 인용하므로 미싱 링크는 인용선이 아니라, 동일 소자·파라미터·측정 조건에서 두 설명을 판별하는 검증입니다.",
        "test": "한 소자와 공통 calibration 예산에서 DD-only와 energy-relaxation 모델을 각각 보정한 뒤, 보정에 쓰지 않은 program·초기/후기 retention을 함께 예측하게 합니다. 가능하면 전하 위치에 민감한 별도 관측을 포함해 같은 Vt 적합으로 서로 다른 내부 분포가 숨는지 판별합니다."
      }
    ]
  },
  {
    "id": "existing-ispp-waveform-mechanism",
    "title": "물리적 ISPP 영역에 따라 최적 파형이 달라질까?",
    "question": "P31은 주입–탈출 균형과 trap filling으로 ISPP 형태를 설명하고, P52는 제한된 파형 공간에서 실측 기반 NN으로 최적 pulse를 찾습니다. 초기 trap occupancy나 saturation에 가까운 상태가 바뀌어도 낮은 전압→높은 전압 순서가 유지되는지를 물리 모델로 검증할 수 있습니다.",
    "topics": [
      "models",
      "program",
      "retention"
    ],
    "paperIds": [
      "P31",
      "P52"
    ],
    "positions": [
      {
        "paperId": "P31",
        "claim": "No escape/no trap filling, escape, trap filling의 조건에서 ISPP slope와 saturation이 달라지는 모델 결과를 비교합니다.",
        "conditions": "3-gate GAA, hole 120 nm, TOx/CTL/BOx 6/6/6 nm, 100 μs pulse. BOx에 도달한 untrapped carrier의 escape는 단순화합니다.",
        "url": "https://imec-publications.be/server/api/core/bitstreams/e1732299-73d5-4870-b597-2ab02279467a/content#page=3",
        "locator": "pp.554–556 §II-A Eq.(2),(5),(13),(16), Fig.3; pp.557–558 §II-B–III",
        "verificationScope": "기관 PDF 원문 텍스트 재검토; 기존 corpus의 Fig.3 시각 확인 기록."
      },
      {
        "paperId": "P52",
        "claim": "실측으로 학습한 NN에서 6 μs·4구간·평균 및 최대 전압 제약을 만족하는 low-to-high pulse를 선택하고 ISPP와 신뢰성을 평가합니다.",
        "conditions": "100층 이상 상용 NAND. P31의 test vehicle 및 pulse 시간과 달라 직접 정량 비교 불가.",
        "url": "https://ieeexplore.ieee.org/document/10654387/",
        "locator": "§II Figs.1–2; §III Figs.3–6",
        "verificationScope": "저장된 IEEE HTML 본문·캡션 재검토; 그림 픽셀 미확인."
      }
    ],
    "gap": "P31은 주입–탈출 균형과 trap filling으로 ISPP 형태를 설명하고, P52는 제한된 파형 공간에서 실측 기반 NN으로 최적 pulse를 찾습니다. 초기 trap occupancy나 saturation에 가까운 상태가 바뀌어도 낮은 전압→높은 전압 순서가 유지되는지를 물리 모델로 검증할 수 있습니다.",
    "proposedTest": "P31 계열 모델을 time-varying waveform에 맞추어 보정·검증한 뒤 P52의 파형 후보를 예측하게 합니다. 서로 다른 초기 상태에서 NN과 물리 모델의 선택 및 실측을 비교해 최적 순서가 보편적인지 조건에 의존하는지 확인합니다.",
    "confidence": "source_grounded_question",
    "relationLabel": "물리 모델로 검증 ?",
    "caution": "P31이 P52의 commercial device나 6 μs shaped pulse를 이미 설명했다고 표시하지 않습니다. 상충 결과가 아니라 공통 조건에서 확인할 연결입니다.",
    "scopeNote": "이미 맵에 들어 있는 논문 사이의 비교 조건과 검증 연결을 검토한 편집자 분석입니다. 미인용이나 분야 전체의 연구 부재를 뜻하지 않습니다.",
    "checkedAt": "2026-11-16",
    "category": "동작 · 물리 모델",
    "shortLabel": "ISPP 영역 × 파형",
    "pairs": [
      {
        "source": "P31",
        "target": "P52",
        "label": "물리 모델로 검증 ?",
        "reason": "P31은 주입–탈출 균형과 trap filling으로 ISPP 형태를 설명하고, P52는 제한된 파형 공간에서 실측 기반 NN으로 최적 pulse를 찾습니다. 초기 trap occupancy나 saturation에 가까운 상태가 바뀌어도 낮은 전압→높은 전압 순서가 유지되는지를 물리 모델로 검증할 수 있습니다.",
        "test": "P31 계열 모델을 time-varying waveform에 맞추어 보정·검증한 뒤 P52의 파형 후보를 예측하게 합니다. 서로 다른 초기 상태에서 NN과 물리 모델의 선택 및 실측을 비교해 최적 순서가 보편적인지 조건에 의존하는지 확인합니다."
      }
    ]
  },
  {
    "id": "frontier-generators",
    "title": "Diffusion이 항상 최선인가?",
    "question": "평균 오차·꼬리 분포·생성 속도를 함께 보면 어떤 생성기가 적합한가?",
    "topics": [
      "generative",
      "variability",
      "small-data"
    ],
    "paperIds": [
      "P43",
      "P44",
      "P26"
    ],
    "positions": [
      {
        "paperId": "P43",
        "claim": "시험한 GAN에서는 mode collapse가 발생했습니다. MOSFET/BJT의 실측 기반 SPICE 파라미터를 생성한 diffusion은 GMM보다 전류 분포와 꼬리를 대체로 잘 재현했습니다.",
        "locator": "IEEE PDF pp.1–2 §II–III; pp.3–4 Figs.3,7–10",
        "url": "https://ieeexplore.ieee.org/document/10413830/"
      },
      {
        "paperId": "P44",
        "claim": "여러 생성기를 비교한 2026년 연구는 시험한 VAE-GAN이 diffusion보다 BSIM 파라미터의 꼬리와 생성 시간에서 유리하다고 보고합니다. §III Fig.12에서는 P43의 실측 데이터를 사용한 비교도 제시합니다.",
        "locator": "IEEE HTML §II Figs.4–6; §III Figs.7,10,12; References[14]",
        "url": "https://ieeexplore.ieee.org/document/11521068/"
      },
      {
        "paperId": "P26",
        "claim": "DDPM으로 NAND 구조–FoM 결합 데이터를 생성하여 별도 예측기를 사전학습·미세조정합니다. 생성기 간 tail·시간 순위 비교를 수행한 연구는 아닙니다.",
        "locator": "IEEE HTML §II-B; §III-A–B Figs.3–8, Tables II–IV",
        "url": "https://ieeexplore.ieee.org/document/11428269/"
      }
    ],
    "gap": "P44의 생성기 순위가 소량 NAND 데이터와 최종 FoM 예측 성능에서도 유지되는지는 이 문헌 조합으로 확인되지 않았습니다.",
    "proposedTest": "P26과 같은 TCAD 분할·예측기·튜닝 예산에서 DDPM/VAE-GAN/VAE를 교체하고, 원 데이터 시험 오차·조건 위반률·tail 오차·총 계산 시간을 함께 비교합니다.",
    "confidence": "evidence_comparison",
    "relationLabel": "생성기 선택에 대한 후속 비교",
    "caution": "P44의 controlled comparison은 해당 논문 설정의 결과입니다. GAN과 VAE-GAN은 동일 모델이 아니며, P43이나 P26의 결과를 동일 조건에서 반박했다고 해석하지 않습니다.",
    "scopeNote": "선별된 2023–2026 원문에서 확인한 쟁점; 분야 전체의 중요도 순위가 아닙니다.",
    "checkedAt": "2026-11-16",
    "category": "AI · 전이 · 일반화",
    "shortLabel": "생성기 · tail · 속도",
    "pairs": [
      {
        "source": "P43",
        "target": "P44",
        "label": "생성기·평가 기준 차이",
        "reason": "P43의 시험 GAN과 P44의 VAE-GAN은 서로 다른 모델이다. P44는 P43의 실측 데이터를 사용한 Fig.12 비교도 제공한다. 단순히 GAN과 diffusion의 결론이 반대라고 읽기보다, tail·속도·학습 조건을 분리해 확인해야 한다."
      },
      {
        "source": "P44",
        "target": "P26",
        "label": "NAND 적용 검증",
        "reason": "P44의 BSIM 파라미터 생성 평가와 P26의 NAND 구조–FoM 예측 평가는 출력과 목적이 다르다. 동일 NAND 데이터·학습 예산에서 생성기를 바꾼 비교가 필요하다."
      }
    ]
  },
  {
    "id": "frontier-generalization",
    "title": "생성 공간 확대와 외삽 정확도 사이",
    "question": "데이터가 넓게 생성되면 새 구조·재료에서도 예측이 정확한가?",
    "topics": [
      "generative",
      "transfer",
      "surrogate",
      "scaling"
    ],
    "paperIds": [
      "P27",
      "P46",
      "P26",
      "P47"
    ],
    "positions": [
      {
        "paperId": "P26",
        "claim": "Fig.9는 생성·미세조정 표본이 원 데이터의 공간과 밀도를 확장함을 분석합니다. 목표 15 nm NAND의 무작위 분할 시험이며 새 재료를 통째로 제외한 OOD 시험과는 다릅니다.",
        "locator": "IEEE HTML §II-A–B; §III-C Fig.9; §IV",
        "url": "https://ieeexplore.ieee.org/document/11428269/"
      },
      {
        "paperId": "P27",
        "claim": "25→19 nm NAND 전이는 동일 재료 조건에서 검증했습니다. 결론은 재료·구조가 달라질 때의 전이를 후속 과제로 남깁니다.",
        "locator": "IEEE HTML §II-A; §IV Conclusion",
        "url": "https://ieeexplore.ieee.org/document/10960371/"
      },
      {
        "paperId": "P46",
        "claim": "LDMOS의 비중첩 확장 영역을 별도로 생성하고 그 영역의 라벨을 사용해 fine-tuning합니다. 확장 영역 적응은 검증하지만 zero-shot 외삽과는 구별해야 합니다.",
        "locator": "IEEE HTML §II-A; §III Fig.3(c); Fig.5",
        "url": "https://ieeexplore.ieee.org/document/11072478/"
      },
      {
        "paperId": "P47",
        "claim": "NW FET의 bias 외삽과 채널 길이 외삽을 시험합니다. 길이 변동 시험은 전위를 계산하는 SCP-NET에 한정되므로 모든 전기적 FoM의 구조 외삽 성공을 뜻하지 않습니다.",
        "locator": "IEEE HTML §III-A; §III-C Fig.12",
        "url": "https://ieeexplore.ieee.org/document/10271263/"
      }
    ],
    "gap": "공간 확대, 목표영역 소량 라벨 적응, zero-shot 외삽을 동일 척도로 연결한 NAND 평가가 필요합니다.",
    "proposedTest": "게이트 재료·산화막 또는 기하 영역을 통째로 holdout하고 zero-shot과 k-shot 적응을 분리합니다. 생성 표본과 추천 설계를 새 TCAD로 계산해 최종 FoM까지 검증합니다.",
    "confidence": "open_question",
    "relationLabel": "일반화 검증의 미싱 링크",
    "caution": "소자·출력·목표영역 라벨 사용 여부가 다릅니다. 이 차이는 논문 간 모순이나 성능 순위가 아닙니다.",
    "scopeNote": "선별된 2023–2026 원문에서 확인한 쟁점; 아직 답을 확인하지 못한 평가 질문입니다.",
    "checkedAt": "2026-11-16",
    "category": "AI · 전이 · 일반화",
    "shortLabel": "일반화 경계",
    "pairs": [
      {
        "source": "P27",
        "target": "P46",
        "label": "세대 전이와 영역 전이",
        "reason": "P27은 NAND 세대 간 전이, P46은 목표 label을 이용하는 LDMOS 영역 전이다. 목표 label 수와 도메인 거리를 맞춰 전이 이득의 경계를 확인해야 한다."
      },
      {
        "source": "P26",
        "target": "P47",
        "label": "새 형상에서 최종 성능",
        "reason": "P26의 생성 데이터 범위 확대만으로 OOD 성능을 보장할 수 없다. P47의 geometry 외삽도 SCPNET potential 중심이다. 두 접근을 공통 held-out geometry와 최종 소자 FoM에서 평가할 필요가 있다."
      }
    ]
  },
  {
    "id": "frontier-physics-synthetic",
    "title": "데이터를 만들 것인가, 물리를 넣을 것인가?",
    "question": "소량 데이터에서 생성형 사전학습과 물리 정보는 대안인가, 함께 쓸 때 더 유리한가?",
    "topics": [
      "small-data",
      "generative",
      "physics-ml",
      "transfer"
    ],
    "paperIds": [
      "P26",
      "P50",
      "P47"
    ],
    "positions": [
      {
        "paperId": "P26",
        "claim": "목표 NAND의 제한된 TCAD 데이터만으로 DDPM을 학습하고 합성 표본으로 MLP를 사전학습합니다. 마지막으로 원 TCAD 데이터에서 미세조정합니다.",
        "locator": "IEEE HTML §II-B; Fig.1; §III-B Tables II–IV",
        "url": "https://ieeexplore.ieee.org/document/11428269/"
      },
      {
        "paperId": "P47",
        "claim": "NW FET에서 PDE·경계 조건을 loss에 넣어 공간 물리량과 최종 전류를 예측합니다. 물리 제약은 데이터 효율을 높이지만 학습 비용과 물리 모델 구현을 요구합니다.",
        "locator": "IEEE HTML §II Figs.3–6; §III-A–B Tables I–II, Fig.11",
        "url": "https://ieeexplore.ieee.org/document/10271263/"
      },
      {
        "paperId": "P50",
        "claim": "NAND의 전계 시퀀스에서 특징을 학습해 구조-only 예측기로 전달합니다. target-only와 conventional→recessed 전이를 모두 비교하며 ISPP·retention을 공동 예측합니다.",
        "locator": "IEEE PDF pp.1864–1867 §II-A–D, §III-A; Figs.2,4–5",
        "url": "https://ieeexplore.ieee.org/document/11428256/"
      }
    ],
    "gap": "같은 NAND·원 데이터 수·TCAD 비용에서 합성 데이터, 전계 특징, PDE 제약의 개별 효과와 결합 효과는 이 세 논문만으로 판정할 수 없습니다.",
    "proposedTest": "동일 목표 데이터로 baseline, DDPM+TL, field-feature 모델, DDPM+field-feature 조합을 ablation합니다. 전계 추출 비용도 계산 예산에 포함하고 물리 제약 위반·OOD 오차를 측정합니다.",
    "confidence": "open_question",
    "relationLabel": "상보적 방법론의 미싱 링크",
    "caution": "P50은 PDE residual PINN과 다른 physics-assisted 방법입니다. 결합의 효과는 아직 검증할 가설이며 기존 논문이 제안했다고 표시하지 않습니다.",
    "scopeNote": "선별된 2023–2026 문헌에서 도출한 연구 가설입니다.",
    "checkedAt": "2026-11-16",
    "category": "AI · 전이 · 일반화",
    "shortLabel": "합성 × 물리",
    "pairs": [
      {
        "source": "P26",
        "target": "P50",
        "label": "합성 데이터 × 물리 특징",
        "reason": "P26은 DDPM 합성 데이터와 전이를, P50은 NAND 물리 필드의 teacher–student 전달을 사용한다. 같은 실제 label 수와 TCAD 비용에서 개별·결합 ablation이 필요하다."
      },
      {
        "source": "P47",
        "target": "P50",
        "label": "물리 제약과 물리 특징",
        "reason": "P47의 방정식 제약과 P50의 field-derived representation은 물리 정보를 넣는 방식이 다르다. 형상 밖 예측에서 물리 잔차와 최종 FoM을 함께 비교해야 한다."
      }
    ]
  },
  {
    "id": "frontier-transfer-budget",
    "title": "전이학습에서 무엇을 얼마나 고정할까?",
    "question": "더 많은 합성 표본과 더 많은 층 고정이 항상 도움이 되는가?",
    "topics": [
      "transfer",
      "small-data",
      "generative"
    ],
    "paperIds": [
      "P27",
      "P26",
      "P45"
    ],
    "positions": [
      {
        "paperId": "P27",
        "claim": "동일 재료의 세대 간 NAND 전이에서 앞쪽 세 hidden layer를 고정하고 마지막 hidden layer를 학습해 소량 데이터의 수렴과 예측을 개선합니다.",
        "locator": "IEEE HTML §III-A–B Figs.7–10; §IV",
        "url": "https://ieeexplore.ieee.org/document/10960371/"
      },
      {
        "paperId": "P26",
        "claim": "합성→TCAD 전이에서는 최적 층 고정 수가 FoM에 따라 달랐습니다. Vt와 Ion은 full fine-tuning이 유리했고 합성 표본을 1k보다 늘렸을 때 오차가 커졌습니다. 초기 Vt에서는 혼합학습이 TL보다 낮은 오차를 보였습니다.",
        "locator": "IEEE HTML §III-B Figs.6–8, Tables II–IV",
        "url": "https://ieeexplore.ieee.org/document/11428269/"
      },
      {
        "paperId": "P45",
        "claim": "NW FET의 RDD&MGG 곡선 모델을 개별 변동원에 옮길 때 50개 새 곡선으로 적응하는 방식을 제시합니다. 전이 대상은 NAND 세대나 synthetic→TCAD가 아니라 변동원입니다.",
        "locator": "IEEE HTML §III Figs.8–9",
        "url": "https://ieeexplore.ieee.org/document/11017451/"
      }
    ],
    "gap": "도메인 차이와 출력별 합성 오차를 바탕으로 층 고정·합성량을 선택하는 사전 기준은 이 문헌 조합에서 확인되지 않았습니다.",
    "proposedTest": "FoM별 합성–원 데이터 discrepancy와 gradient 변화를 측정하고, validation만으로 freezing depth와 synthetic ratio를 선택합니다. 동일 label budget에서 다중 seed와 고정 test set으로 negative transfer 빈도를 비교합니다.",
    "confidence": "evidence_comparison",
    "relationLabel": "전이 조건에 따른 결과 차이",
    "caution": "P27과 P26의 최적 고정 층 차이는 전이 경로·FoM·데이터가 다른 조건 의존 결과입니다. 서로의 실험 결과를 직접 부정하는 관계는 아닙니다.",
    "scopeNote": "선별된 2025–2026 원문에서 확인한 조건 의존성입니다.",
    "checkedAt": "2026-11-16",
    "category": "AI · 전이 · 일반화",
    "shortLabel": "층 고정 · 표본 수",
    "pairs": [
      {
        "source": "P27",
        "target": "P26",
        "label": "층 고정 조건 차이",
        "reason": "P27은 앞의 세 hidden layer를 고정한다. P26에서는 출력 FoM에 따라 최적 고정 층 수가 달라진다. 세대 전이와 합성→목표 데이터 전이를 같은 문제로 볼 수 없으므로, shift·목표 표본 수별 ablation이 필요하다."
      },
      {
        "source": "P27",
        "target": "P45",
        "label": "공정 shift × 변동성 shift",
        "reason": "P27의 세대 간 전이와 P45의 VAE variation transfer는 목표 변화와 관측 단위가 다르다. 같은 target label 예산에서 어떤 표현이 재사용되는지 검증할 연결이다."
      }
    ]
  },
  {
    "id": "frontier-reliability-objective",
    "title": "예측 정확도가 실제 설계 개선으로 이어지는가?",
    "question": "program 효율을 높여도 retention·disturb·에너지 조건을 함께 만족하는가?",
    "topics": [
      "optimization",
      "ispp",
      "retention",
      "disturb",
      "surrogate"
    ],
    "paperIds": [
      "P51",
      "P52",
      "P50"
    ],
    "positions": [
      {
        "paperId": "P51",
        "claim": "NAND 구조 최적화로 ISPP 효율을 높이고 선택한 설계를 TCAD로 재검증합니다. 학습 데이터는 cycling 조건을 포함하지 않습니다.",
        "locator": "IEEE HTML §II-A; §III-A–C Figs.7–10",
        "url": "https://ieeexplore.ieee.org/document/10130688/"
      },
      {
        "paperId": "P52",
        "claim": "상용 V-NAND에서 NN으로 찾은 pulse shape를 실측합니다. 같은 VPGM에서는 disturb가 증가하지만 같은 PV 도달 기준에서는 pulse 수가 줄어 disturb가 유사하거나 감소합니다. 에너지 이점은 pulse 전압·수에 근거한 추론입니다.",
        "locator": "IEEE HTML §III Figs.5–6, Table I 설명",
        "url": "https://ieeexplore.ieee.org/document/10654387/"
      },
      {
        "paperId": "P50",
        "claim": "NAND recessed 구조의 program–retention 다목적 최적화를 수행하고 Pareto 후보를 TCAD로 재계산합니다. 이미 최적화한 conventional 셀을 별도 기준으로 비교합니다.",
        "locator": "IEEE PDF pp.1868–1869 §III-C; Figs.7–9, Tables II–III",
        "url": "https://ieeexplore.ieee.org/document/11428256/"
      }
    ],
    "gap": "생성형 예측기를 구조·pulse 공동 최적화에 연결했을 때의 최종 이득과 장기 신뢰성은 현재 수록 문헌 조합으로 확인되지 않았습니다.",
    "proposedTest": "고정 PV·총 프로그램 시간·에너지 예산을 명시하고 구조와 pulse를 공동 탐색합니다. 선택 후보를 독립 TCAD 또는 실측에서 재검증하고 retention·disturb·cycling을 함께 보고합니다.",
    "confidence": "open_question",
    "relationLabel": "예측과 설계 검증 사이의 미싱 링크",
    "caution": "P52의 disturb 결과는 비교 기준에 따라 방향이 바뀝니다. 단일 소자 ΔVth, 분포 폭, 장기 신뢰성 및 실제 주변회로 에너지 측정을 혼동하지 않습니다.",
    "scopeNote": "선별된 2023–2026 원문에서 도출한 설계·검증 질문입니다.",
    "checkedAt": "2026-11-16",
    "category": "AI · 전이 · 일반화",
    "shortLabel": "구조 × 파형",
    "pairs": [
      {
        "source": "P51",
        "target": "P52",
        "label": "구조 × 파형 공동 검증",
        "reason": "P52는 P51을 직접 인용한다. 고정 동작 조건의 구조 최적화와 상용 소자의 파형 최적화를 결합한 효과는 별도 검증이 필요하다. 동일 target PV·peak 전압·시간과 cycling 조건에서 비교해야 한다."
      },
      {
        "source": "P52",
        "target": "P50",
        "label": "실측 파형 × 소자 형상",
        "reason": "P52는 실측 pulse 최적화, P50은 recessed NAND에서 program–retention Pareto를 다룬다. 각각의 제약과 소자가 다르므로 공동 신뢰성 개선을 곧바로 추론할 수 없다."
      }
    ]
  },
  {
    "id": "frontier-active-learning",
    "title": "불확실성을 다음 실험 선택으로 연결할 수 있을까?",
    "question": "어느 TCAD·실측 표본을 추가해야 제한된 예산에서 오차와 위험을 가장 크게 줄일 수 있는가?",
    "topics": [
      "uncertainty",
      "active-learning",
      "small-data",
      "optimization"
    ],
    "paperIds": [
      "P50",
      "P46",
      "P26"
    ],
    "positions": [
      {
        "paperId": "P50",
        "claim": "60개 ensemble의 전계 특징 분산과 binned MAE의 관계를 평가하고, 이를 더 신뢰할 수 있는 설계 영역을 선호하는 지표로 사용합니다. Fig.6의 95% 구간은 binned MAE의 bootstrap 구간입니다.",
        "locator": "IEEE PDF p.1867 §III-B Fig.6; pp.1868–1869 §III-C",
        "url": "https://ieeexplore.ieee.org/document/11428256/"
      },
      {
        "paperId": "P26",
        "claim": "제한된 목표 데이터에서 합성 표본을 늘리고 원 데이터로 미세조정합니다. 새 TCAD를 반복적으로 선택·획득·재학습하는 active-learning loop를 검증하지는 않습니다.",
        "locator": "IEEE HTML §II-B; §III-B–C Figs.8–9",
        "url": "https://ieeexplore.ieee.org/document/11428269/"
      },
      {
        "paperId": "P46",
        "claim": "초기 영역과 비중첩 확장 영역에서 TCAD 데이터를 생성하여 두 surrogate를 학습하고 MOPSO로 탐색합니다. 제시된 절차는 불확실성 기반의 반복 라벨 획득 평가와 구별됩니다.",
        "locator": "IEEE HTML §II-A–B Fig.1; §III Fig.5",
        "url": "https://ieeexplore.ieee.org/document/11072478/"
      }
    ],
    "gap": "불확실성 지표를 TCAD 획득 함수로 사용할 때 random/LHS보다 효율적인지, 생성 데이터가 불확실성을 과소평가하게 만드는지는 이 문헌들에서 답을 확인하지 못했습니다.",
    "proposedTest": "고정 총 TCAD 예산에서 random/LHS, ensemble uncertainty, uncertainty+diversity 획득을 반복 비교합니다. 시험 집합을 잠그고 오류 감소·Pareto 개선·실패 설계 비율을 새 실측/TCAD 라벨 수에 대해 평가합니다.",
    "confidence": "open_question",
    "relationLabel": "신뢰도와 능동 표본 선택의 미싱 링크",
    "caution": "수록 문헌에서 확인하지 못했다는 뜻이며 분야 전체에 연구가 없다는 주장은 아닙니다. P50의 구간은 개별 예측의 보장된 95% coverage 구간이 아닙니다.",
    "scopeNote": "선별된 2025–2026 문헌에서 도출한 후속 연구 가설입니다.",
    "checkedAt": "2026-11-16",
    "category": "AI · 전이 · 일반화",
    "shortLabel": "불확실성 → 표본",
    "pairs": [
      {
        "source": "P50",
        "target": "P46",
        "label": "불확실성 → 다음 표본",
        "reason": "P50의 ensemble 오차 진단과 P46의 목표 영역 label 활용을 연결해, 불확실성이 다음 TCAD 표본의 유용성을 예측하는지 검증할 수 있다. 두 논문이 반복 능동학습을 검증했다는 의미는 아니다."
      },
      {
        "source": "P50",
        "target": "P26",
        "label": "합성할 영역 선택",
        "reason": "P50의 불확실성 정보를 P26의 데이터 생성 위치 선정에 사용할 수 있는가? 생성 데이터가 높은 오차 영역의 bias를 복제하는지, 추가 실제 label과 비교할 검증이 필요하다."
      }
    ]
  }
];
