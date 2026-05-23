// SEO 진단 랜딩페이지별 카피와 메타데이터를 관리하는 데이터 모음
export type SeoDiagnosisSlug =
  | "stock-loss"
  | "water-averaging"
  | "stop-loss"
  | "leverage-risk"
  | "liquidation-risk";

export type SeoDiagnosisPage = {
  slug: SeoDiagnosisSlug;
  title: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string[];
  empathyTitle: string;
  empathyItems: string[];
  interpretationTitle: string;
  interpretationItems: string[];
  checklistTitle: string;
  checklistItems: string[];
  primaryCtaLabel: string;
  relatedSlugs: SeoDiagnosisSlug[];
};

export const seoDiagnosisPages: Record<SeoDiagnosisSlug, SeoDiagnosisPage> = {
  "stock-loss": {
    slug: "stock-loss",
    title: "주식 손실 진단 | 지금 손실을 키우는 판단을 하고 있지 않은가",
    description:
      "주식 손실이 커지는 이유를 가격 하락만으로 보지 않고, 버티기·물타기·기준 부재 관점에서 점검하는 투자 리스크 진단 페이지예요.",
    heroEyebrow: "주식 손실 진단",
    heroTitle: "지금 손실을 키우는 판단을 하고 있지 않은가.",
    heroDescription: [
      "주식 손실은 단순히 가격이 내려서만 커지지 않아요.",
      "기준 없이 버티거나, 손실을 복구하려고 반복적으로 물타기할 때 리스크는 더 빠르게 커질 수 있어요.",
    ],
    empathyTitle: "혹시 이런 상태가 이어지고 있나요?",
    empathyItems: [
      "더 버티면 회복될 것 같아서 기준 없이 시간을 보내고 있어요.",
      "손실을 줄이기보다, 본전이 올 때까지 기다리는 마음이 더 커요.",
      "다른 종목보다 지금 물린 종목만 계속 보게 돼요.",
      "손실을 줄일 방법보다 손실을 인정하지 않는 쪽으로 기울고 있어요.",
    ],
    interpretationTitle: "왜 이 상황에서 손실이 더 커질 수 있나요?",
    interpretationItems: [
      "손실 구간에서는 가격보다 감정이 결정을 주도하기 쉬워져요. 이때 기준 없이 버티면 손실이 구조적인 문제로 바뀔 수 있어요.",
      "손실을 복구하려는 마음이 커질수록 추가매수, 몰빵, 레버리지 같은 행동으로 이어질 수 있고, 이때 전체 자산 리스크가 함께 커질 수 있어요.",
      "지금 필요한 건 수익 예측보다 내 손실 구조를 먼저 정리하는 일이에요. 손실률, 비중, 여력, 기준이 같이 보여야 판단이 흔들리지 않아요.",
    ],
    checklistTitle: "진단 전에 먼저 체크해볼 기준이에요.",
    checklistItems: [
      "손실 허용 범위가 정해져 있는가?",
      "보유 비중이 한 종목에 과도하게 몰려 있지 않은가?",
      "버티는 이유가 기업과 시장 판단인가, 단순한 본전 심리인가?",
      "추가 대응에 쓸 현금 여력이 남아 있는가?",
      "지금 결정이 손실을 줄이기 위한 것인지, 손실을 피하고 싶은 마음인지 구분되는가?",
    ],
    primaryCtaLabel: "내 투자 리스크 진단 시작하기",
    relatedSlugs: ["water-averaging", "stop-loss", "leverage-risk"],
  },
  "water-averaging": {
    slug: "water-averaging",
    title: "물타기 판단 진단 | 지금 추가매수해도 되는 상황인가",
    description:
      "물타기 전 체크해야 할 기준과 리스크를 정리하는 진단 랜딩페이지예요. 평균단가보다 여력·비중·판단 근거를 먼저 확인하게 도와줘요.",
    heroEyebrow: "물타기 판단 진단",
    heroTitle: "지금 추가매수해도 되는 상황인가.",
    heroDescription: [
      "물타기는 평균단가를 낮추는 행동이지만, 기준 없이 반복하면 손실 규모와 리스크를 더 키울 수 있어요.",
      "지금 필요한 건 가격이 아니라 추가매수의 근거와 여력이 있는지부터 확인하는 일이에요.",
    ],
    empathyTitle: "혹시 물타기를 이렇게 생각하고 있나요?",
    empathyItems: [
      "평균단가만 낮아지면 괜찮아질 것 같아요.",
      "지금 안 사면 나중에 더 후회할 것 같아요.",
      "이미 여러 번 물탔는데도 손실이 줄지 않았어요.",
      "기업이나 시장 판단보다 가격이 내려왔다는 이유가 더 커요.",
    ],
    interpretationTitle: "왜 물타기가 리스크가 될 수 있나요?",
    interpretationItems: [
      "물타기는 가격이 아니라 판단 기준이 있어야 의미가 있어요. 근거 없이 반복되면 손실 종목 비중만 커지고 전체 대응 여력은 줄어들어요.",
      "현금이 줄어든 상태에서 하는 물타기는 다음 하락을 버틸 힘까지 함께 깎을 수 있어요. 결국 평균단가보다 생존 여력이 더 중요해져요.",
      "특히 레버리지나 대출이 섞여 있다면 물타기는 회복 전략이 아니라 청산 속도를 높이는 행동이 될 수 있어요.",
    ],
    checklistTitle: "추가매수 전에 확인해야 할 질문이에요.",
    checklistItems: [
      "추가매수 기준이 가격인가, 기업/시장 판단인가?",
      "추가매수 후에도 현금 여력이 충분히 남는가?",
      "이미 물타기를 여러 번 반복하고 있지 않은가?",
      "손실이 더 커졌을 때 멈출 기준이 있는가?",
      "추가매수로 비중이 과도하게 커지지 않는가?",
    ],
    primaryCtaLabel: "물타기 전 리스크 체크하기",
    relatedSlugs: ["stock-loss", "stop-loss", "leverage-risk"],
  },
  "stop-loss": {
    slug: "stop-loss",
    title: "손절 판단 진단 | 지금 버티는 이유가 기준인가 감정인가",
    description:
      "손절을 해야 할지 고민될 때, 실패 인정이 아니라 리스크 제한의 관점에서 현재 상태를 점검하는 진단 랜딩페이지예요.",
    heroEyebrow: "손절 판단 진단",
    heroTitle: "지금 버티는 이유가 기준인가 감정인가.",
    heroDescription: [
      "손절은 실패 인정이 아니라 리스크를 제한하는 판단일 수 있어요.",
      "문제는 손절 여부보다, 지금 내 판단에 기준이 있는지 감정이 앞서고 있는지예요.",
    ],
    empathyTitle: "혹시 이런 이유로 손절을 미루고 있나요?",
    empathyItems: [
      "지금 팔면 진짜 손실이 확정되는 것 같아요.",
      "조금만 반등하면 정리할 수 있을 것 같아요.",
      "손절하면 바로 오를까 봐 더 못 팔겠어요.",
      "기준보다 마음이 흔들릴 때마다 결정을 미루게 돼요.",
    ],
    interpretationTitle: "왜 손절 판단이 더 어려워지나요?",
    interpretationItems: [
      "손실이 커질수록 손절은 숫자보다 감정의 문제가 돼요. 이때 기준이 없으면 매번 같은 고민을 반복하게 돼요.",
      "손절을 계속 미루는 동안 손실폭뿐 아니라 자금 사용 계획과 심리적 여력도 함께 흔들릴 수 있어요.",
      "핵심은 손절 자체를 강요하는 것이 아니라, 언제 멈출지에 대한 기준이 있는 상태를 만드는 일이에요.",
    ],
    checklistTitle: "손절 판단 전에 확인할 기준이에요.",
    checklistItems: [
      "손실 허용 범위를 사전에 정해두었는가?",
      "현재 보유 이유가 처음 샀을 때의 논리와 여전히 같은가?",
      "손절을 미루는 이유가 분석인가, 미련인가?",
      "비중이 과도해져 다른 판단까지 막고 있지 않은가?",
      "손절 후의 자금 계획이 정리돼 있는가?",
    ],
    primaryCtaLabel: "손절 판단 상태 확인하기",
    relatedSlugs: ["stock-loss", "water-averaging", "liquidation-risk"],
  },
  "leverage-risk": {
    slug: "leverage-risk",
    title: "레버리지 리스크 진단 | 신용·미수 거래가 위험해지는 구간",
    description:
      "신용거래, 미수, 레버리지 투자에서 손실과 반대매매 속도가 커지는 구조를 점검하는 진단 랜딩페이지예요.",
    heroEyebrow: "레버리지 리스크 진단",
    heroTitle: "신용·미수 거래가 위험해지는 구간.",
    heroDescription: [
      "레버리지는 수익률을 키우는 도구가 아니라 손실과 반대매매 속도도 함께 키우는 구조예요.",
      "지금 필요한 건 기대 수익보다, 현재 포지션이 어느 구간에서 위험해지는지 먼저 이해하는 일이에요.",
    ],
    empathyTitle: "혹시 이런 상태에서 레버리지를 쓰고 있나요?",
    empathyItems: [
      "회복 속도를 빠르게 만들고 싶어서 신용이나 미수를 쓰고 있어요.",
      "하락이 더 나오면 위험하다는 건 알지만, 정확히 어느 구간인지 모르겠어요.",
      "손실을 줄이기보다 반등이 빨리 오길 기대하게 돼요.",
      "현금보다 레버리지로 대응하는 게 익숙해졌어요.",
    ],
    interpretationTitle: "왜 레버리지는 손실을 더 빠르게 키우나요?",
    interpretationItems: [
      "레버리지는 가격이 같은 폭으로 움직여도 실제 손실 체감과 대응 압박을 더 크게 만들어요.",
      "미수, 신용, 대출이 섞이면 작은 하락도 담보비율과 청산 압력으로 연결돼, 판단할 시간을 줄여버릴 수 있어요.",
      "이 구간에서는 수익 기회보다 청산 조건, 현금 여력, 손실 제한 기준을 먼저 봐야 리스크를 줄일 수 있어요.",
    ],
    checklistTitle: "레버리지 리스크를 보기 전에 체크해볼 질문이에요.",
    checklistItems: [
      "현재 포지션에 신용, 미수, 대출이 섞여 있는가?",
      "담보비율 또는 유지 증거금 기준을 정확히 알고 있는가?",
      "추가 하락이 왔을 때 현금으로 버틸 여력이 있는가?",
      "레버리지를 쓰는 이유가 전략인가, 손실 복구 심리인가?",
      "강제 정리 조건이 오기 전에 줄일 기준이 있는가?",
    ],
    primaryCtaLabel: "레버리지 위험도 확인하기",
    relatedSlugs: ["liquidation-risk", "stock-loss"],
  },
  "liquidation-risk": {
    slug: "liquidation-risk",
    title: "반대매매·청산 위험 진단 | 강제청산 전에 확인해야 할 신호",
    description:
      "담보비율 악화, 반대매매, 청산 위험이 커지는 신호를 점검하는 진단 랜딩페이지예요. 강제 정리 전에 봐야 할 기준을 정리해줘요.",
    heroEyebrow: "반대매매·청산 위험 진단",
    heroTitle: "강제청산 전에 확인해야 할 신호.",
    heroDescription: [
      "반대매매와 청산은 갑자기 발생하는 것처럼 보여도, 대부분은 담보비율 악화와 레버리지 누적에서 시작돼요.",
      "지금 필요한 건 전망보다 먼저, 강제 정리 조건과 대응 여력을 확인하는 일이에요.",
    ],
    empathyTitle: "혹시 이런 불안이 계속 커지고 있나요?",
    empathyItems: [
      "반대매매가 걱정되는데 정확한 기준 가격을 모르겠어요.",
      "청산이 오기 전에 무엇을 봐야 하는지 모르겠어요.",
      "하락보다 강제 정리가 더 무서워요.",
      "레버리지 포지션을 유지하고 있지만 대응 계획은 흐릿해요.",
    ],
    interpretationTitle: "왜 청산 위험은 갑자기 커지는 것처럼 느껴지나요?",
    interpretationItems: [
      "강제청산은 한 번에 발생하는 사건처럼 보여도, 실제로는 담보비율 저하와 여력 부족이 누적되며 다가와요.",
      "현금이 부족하거나 포지션 비중이 크면, 작은 가격 변동도 정리 압박으로 바뀔 수 있어요.",
      "이 구간에서 중요한 건 반등 기대보다, 어느 조건에서 강제 정리가 시작되는지 먼저 명확히 아는 거예요.",
    ],
    checklistTitle: "청산 위험 전에 꼭 확인할 질문이에요.",
    checklistItems: [
      "담보비율 또는 청산 기준 가격을 정확히 알고 있는가?",
      "추가 증거금 요구가 오면 대응할 현금이 있는가?",
      "포지션을 줄일 기준이 미리 정리돼 있는가?",
      "레버리지 포지션 비중이 전체 자산에서 과도하지 않은가?",
      "시장 급락 시 강제 정리 순서를 이해하고 있는가?",
    ],
    primaryCtaLabel: "청산 위험 신호 확인하기",
    relatedSlugs: ["leverage-risk", "stock-loss", "stop-loss"],
  },
};

export const seoDiagnosisSlugList = Object.keys(seoDiagnosisPages) as SeoDiagnosisSlug[];
