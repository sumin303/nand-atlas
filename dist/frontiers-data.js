/* Evidence-grounded questions; not established contradictions or proven field-wide gaps. */
window.NAND_FRONTIERS = [
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
    "checkedAt": "2026-11-16"
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
      "P26",
      "P27",
      "P46",
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
    "checkedAt": "2026-11-16"
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
      "P47",
      "P50"
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
    "checkedAt": "2026-11-16"
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
    "checkedAt": "2026-11-16"
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
      "P26",
      "P51",
      "P52",
      "P50"
    ],
    "positions": [
      {
        "paperId": "P26",
        "claim": "구조로부터 네 전기적 FoM을 예측하는 정확도를 평가합니다. retention·disturb를 제약으로 둔 추천 구조의 최적화 및 실측 검증을 수행한 논문은 아닙니다.",
        "locator": "IEEE HTML §II-A; §III-B; §IV",
        "url": "https://ieeexplore.ieee.org/document/11428269/"
      },
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
    "checkedAt": "2026-11-16"
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
      "P26",
      "P46"
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
    "checkedAt": "2026-11-16"
  }
];
