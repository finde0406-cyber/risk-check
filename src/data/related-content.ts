// 관련 콘텐츠 데이터 — 리스크 구간별 추천 3개

import type { RiskLevel } from "./results";

export interface RelatedContent {
  id: string;
  title: string;
  description: string;
  tag: string;
  href: string;
}

export const relatedContentByLevel: Record<RiskLevel, RelatedContent[]> = {
  stable: [
    {
      id: "sc1",
      title: "손절 기준, 어떻게 정해야 할까요?",
      description:
        "손절을 잘하는 것도 전략이에요. 기준 없는 보유가 더 위험할 수 있어요.",
      tag: "기준 정리",
      href: "https://www.moneynestlab.com/stock/guide/stop-loss-vs-averaging",
    },
    {
      id: "sc2",
      title: "현금 비중은 얼마가 적당할까요?",
      description:
        "투자 자산 중 현금 비중을 어떻게 유지하면 좋을지 기준을 정리해봤어요.",
      tag: "리스크 관리",
      href: "https://economic-structure.com/cash-allocation-strategy/",
    },
    {
      id: "sc3",
      title: "포트폴리오 집중도 점검하기",
      description:
        "한 종목에 쏠려 있는 자산은 생각보다 더 큰 리스크를 안고 있어요.",
      tag: "구조 점검",
      href: "https://economic-structure.com/position-sizing-guide/",
    },
  ],
  caution: [
    {
      id: "cc1",
      title: "판단이 흔들릴 때, 먼저 확인할 3가지",
      description:
        "불안한 상황에서 서두르기보다, 먼저 정리해야 할 것들이 있어요.",
      tag: "판단 기준",
      href: "https://economic-structure.com/max-drawdown-mdd-control-rules/",
    },
    {
      id: "cc2",
      title: "물타기, 언제 해야 하고 언제 피해야 할까요?",
      description:
        "물타기는 상황에 따라 합리적인 전략일 수도, 리스크를 키우는 행동일 수도 있어요.",
      tag: "전략 점검",
      href: "https://www.moneynestlab.com/blog/stock-averaging-strategy",
    },
    {
      id: "cc3",
      title: "손절 기준, 어떻게 정해야 할까요?",
      description:
        "손절을 잘하는 것도 전략이에요. 기준 없는 보유가 더 위험할 수 있어요.",
      tag: "기준 정리",
      href: "https://www.moneynestlab.com/stock/guide/stop-loss-vs-averaging",
    },
  ],
  risk: [
    {
      id: "rc1",
      title: "손실이 커질수록 왜 판단이 더 어려워질까요?",
      description:
        "손실 확대 상황에서 심리가 어떻게 작동하는지, 그리고 어떻게 대응할 수 있는지 살펴봐요.",
      tag: "심리 이해",
      href: "https://economic-structure.com/max-drawdown-mdd-control-rules/",
    },
    {
      id: "rc2",
      title: "지금 내 포지션, 어떻게 정리해야 할까요?",
      description:
        "손실 구간에서의 포지션 정리 기준과 우선순위를 정리해봤어요.",
      tag: "대응 기준",
      href: "https://economic-structure.com/position-sizing-guide/",
    },
    {
      id: "rc3",
      title: "물타기, 언제 해야 하고 언제 피해야 할까요?",
      description:
        "물타기는 상황에 따라 합리적인 전략일 수도, 리스크를 키우는 행동일 수도 있어요.",
      tag: "전략 점검",
      href: "https://economic-structure.com/scaling-in-plan-vs-averaging-down/",
    },
  ],
  high_risk: [
    {
      id: "hc1",
      title: "반대매매, 어떻게 작동하고 어떻게 피할 수 있을까요?",
      description:
        "반대매매 구조와 청산 조건을 이해하면, 지금 상황을 더 현실적으로 볼 수 있어요.",
      tag: "구조 이해",
      href: "https://alpha.mindtrip.kr/%EB%B0%98%EB%8C%80%EB%A7%A4%EB%A7%A4-%EB%8B%B9%ED%95%98%EB%A9%B4-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%90%98%EB%82%98%EC%9A%94-%EC%8B%A0%EC%9A%A9%EA%B1%B0%EB%9E%98-%EC%83%81%ED%99%A9%EB%B3%84/",
    },
    {
      id: "hc2",
      title: "레버리지 투자, 지금 상황에서 먼저 확인할 것들",
      description:
        "레버리지나 신용 포지션이 있는 경우, 먼저 확인해야 할 기준들을 정리해봤어요.",
      tag: "긴급 점검",
      href: "https://etooinvest.com/77",
    },
    {
      id: "hc3",
      title: "손실이 커질수록 왜 판단이 더 어려워질까요?",
      description:
        "손실 확대 상황에서 심리가 어떻게 작동하는지, 그리고 어떻게 대응할 수 있는지 살펴봐요.",
      tag: "심리 이해",
      href: "https://economic-structure.com/max-drawdown-mdd-control-rules/",
    },
  ],
};
