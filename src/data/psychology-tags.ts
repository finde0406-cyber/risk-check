// 심리 태그별 추가 결과 문구

export interface PsychTag {
  id: string;
  message: string;
}

export const psychologyTags: Record<string, PsychTag> = {
  recovery_urge: {
    id: "recovery_urge",
    message:
      "손실을 빨리 만회하고 싶은 마음이 클수록 더 큰 위험을 감수하게 될 수 있어요. 지금은 회복보다 추가 손실을 줄일 기준을 먼저 보는 게 중요해요.",
  },
  denial: {
    id: "denial",
    message:
      "손실을 바로 받아들이기 어려운 마음은 자연스러워요. 다만 그 시간이 길어질수록 선택지는 줄어들 수 있어요.",
  },
  fear: {
    id: "fear",
    message:
      "불안이 큰 상태에서는 판단이 더 극단적으로 흐를 수 있어요. 지금은 결정보다 숫자와 구조를 먼저 정리해보는 게 좋아요.",
  },
  waiting_rebound: {
    id: "waiting_rebound",
    message:
      "반등을 기다리는 마음은 자연스러운 반응이에요. 다만 반등이 오지 않았을 때의 기준도 함께 있어야 불안이 덜 커질 수 있어요.",
  },
  no_cash: {
    id: "no_cash",
    message:
      "현금 여력이 줄어들수록 선택할 수 있는 폭도 좁아질 수 있어요. 추가 매수보다 먼저 대응 여력을 확인해보는 게 중요해요.",
  },
  forced_liquidation: {
    id: "forced_liquidation",
    message:
      "반대매매나 청산이 걱정되는 상황이라면, 전망보다 먼저 기준 가격과 강제 정리 조건을 확인해보는 게 좋아요.",
  },
  averaging_down: {
    id: "averaging_down",
    message:
      "물타기는 평균 단가를 낮추는 효과가 있지만, 대응 여력이 부족한 상황에서는 손실 폭을 더 키울 수 있어요. 먼저 현금 여력과 손절 기준을 확인해보세요.",
  },
  leverage: {
    id: "leverage",
    message:
      "레버리지나 신용거래가 포함된 경우, 하락 폭이 작아도 실제 손실은 더 크게 작용해요. 청산 기준 가격부터 먼저 확인해보는 게 중요해요.",
  },
  too_late: {
    id: "too_late",
    message:
      "지금 늦었다는 느낌이 들더라도, 지금 이 순간에도 할 수 있는 것들이 있어요. 판단 기준을 정리하는 것 자체가 리스크를 줄이는 첫 번째 행동이에요.",
  },
};
