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
      href: "https://financialrisklab.com/%ed%95%98%eb%9d%bd%ec%9e%a5%ec%97%90%ec%84%9c-%ed%98%84%ea%b8%88-%eb%b9%84%ec%a4%91%ec%9d%b4-%ec%a4%91%ec%9a%94%ed%95%9c-%ec%9d%b4%ec%9c%a0-%ec%86%90%ec%8b%a4-%ea%b4%80%eb%a6%ac%ec%97%90%ec%84%9c/",
    },
    {
      id: "sc2",
      title: "현금 비중은 얼마가 적당할까요?",
      description:
        "투자 자산 중 현금 비중을 어떻게 유지하면 좋을지 기준을 정리해봤어요.",
      tag: "리스크 관리",
      href: "https://financialrisklab.com/%ed%95%98%eb%9d%bd%ec%9e%a5%ec%97%90%ec%84%9c-%ed%98%84%ea%b8%88-%eb%b9%84%ec%a4%91%ec%9d%b4-%ec%a4%91%ec%9a%94%ed%95%9c-%ec%9d%b4%ec%9c%a0-%ec%86%90%ec%8b%a4-%ea%b4%80%eb%a6%ac%ec%97%90%ec%84%9c/",
    },
    {
      id: "sc3",
      title: "신용거래와 미수거래 차이, 위험 구조부터 이해해보세요.",
      description:
        "레버리지 구조를 이해하면 손실보다 더 빠르게 커질 수 있는 계좌 리스크를 읽기 쉬워져요.",
      tag: "구조 점검",
      href: "https://financialrisklab.com/%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98%ec%99%80-%eb%af%b8%ec%88%98%ea%b1%b0%eb%9e%98-%ec%b0%a8%ec%9d%b4-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e%ec%9d%b4-%eb%86%93%ec%b9%98/",
    },
  ],
  caution: [
    {
      id: "cc1",
      title: "판단이 흔들릴 때, 먼저 확인할 3가지",
      description:
        "불안한 상황에서 서두르기보다, 먼저 정리해야 할 것들이 있어요.",
      tag: "판단 기준",
      href: "https://financialrisklab.com/%ed%95%98%eb%9d%bd%ec%9e%a5%ec%97%90%ec%84%9c-%ed%98%84%ea%b8%88-%eb%b9%84%ec%a4%91%ec%9d%b4-%ec%a4%91%ec%9a%94%ed%95%9c-%ec%9d%b4%ec%9c%a0-%ec%86%90%ec%8b%a4-%ea%b4%80%eb%a6%ac%ec%97%90%ec%84%9c/",
    },
    {
      id: "cc2",
      title: "반대매매는 왜 발생할까? 가장 놓치기 쉬운 위험 기준",
      description:
        "단순 하락보다 더 위험한 건 추가 대응이 불가능해지는 순간일 수 있어요.",
      tag: "전략 점검",
      href: "https://financialrisklab.com/%eb%b0%98%eb%8c%80%eb%a7%a4%eb%a7%a4%eb%8a%94-%ec%99%9c-%eb%b0%9c%ec%83%9d%ed%95%a0%ea%b9%8c-%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e/",
    },
    {
      id: "cc3",
      title: "신용거래와 미수거래 차이, 투자자가 놓치기 쉬운 구조",
      description:
        "같은 레버리지처럼 보여도 위험이 작동하는 방식은 다를 수 있어요.",
      tag: "기준 정리",
      href: "https://financialrisklab.com/%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98%ec%99%80-%eb%af%b8%ec%88%98%ea%b1%b0%eb%9e%98-%ec%b0%a8%ec%9d%b4-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e%ec%9d%b4-%eb%86%93%ec%b9%98/",
    },
  ],
  risk: [
    {
      id: "rc1",
      title: "손실이 커질수록 왜 판단이 더 어려워질까요?",
      description:
        "손실 확대 상황에서 심리가 어떻게 작동하는지, 그리고 어떻게 대응할 수 있는지 살펴봐요.",
      tag: "심리 이해",
      href: "https://financialrisklab.com/%ed%95%98%eb%9d%bd%ec%9e%a5%ec%97%90%ec%84%9c-%ed%98%84%ea%b8%88-%eb%b9%84%ec%a4%91%ec%9d%b4-%ec%a4%91%ec%9a%94%ed%95%9c-%ec%9d%b4%ec%9c%a0-%ec%86%90%ec%8b%a4-%ea%b4%80%eb%a6%ac%ec%97%90%ec%84%9c/",
    },
    {
      id: "rc2",
      title: "반대매매는 왜 발생할까? 투자자가 가장 많이 놓치는 위험 기준",
      description:
        "가격 하락 자체보다 강제 청산 구조를 이해하는 게 더 중요할 수 있어요.",
      tag: "대응 기준",
      href: "https://financialrisklab.com/%eb%b0%98%eb%8c%80%eb%a7%a4%eb%a7%a4%eb%8a%94-%ec%99%9c-%eb%b0%9c%ec%83%9d%ed%95%a0%ea%b9%8c-%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e/",
    },
    {
      id: "rc3",
      title: "신용거래와 미수거래 차이, 투자자가 가장 많이 놓치는 위험 구조",
      description:
        "레버리지 구조를 모르고 버티면 손실보다 빠르게 계좌 리스크가 커질 수 있어요.",
      tag: "전략 점검",
      href: "https://financialrisklab.com/%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98%ec%99%80-%eb%af%b8%ec%88%98%ea%b1%b0%eb%9e%98-%ec%b0%a8%ec%9d%b4-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e%ec%9d%b4-%eb%86%93%ec%b9%98/",
    },
  ],
  high_risk: [
    {
      id: "hc1",
      title: "반대매매, 어떻게 작동하고 어떻게 피할 수 있을까요?",
      description:
        "반대매매 구조와 청산 조건을 이해하면, 지금 상황을 더 현실적으로 볼 수 있어요.",
      tag: "구조 이해",
      href: "https://financialrisklab.com/%eb%b0%98%eb%8c%80%eb%a7%a4%eb%a7%a4%eb%8a%94-%ec%99%9c-%eb%b0%9c%ec%83%9d%ed%95%a0%ea%b9%8c-%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e/",
    },
    {
      id: "hc2",
      title: "신용거래와 미수거래 차이, 투자자가 가장 많이 놓치는 위험 구조",
      description:
        "레버리지와 신용 구조를 모른 채 버티는 상황이라면 먼저 구조부터 이해하는 게 필요해요.",
      tag: "긴급 점검",
      href: "https://financialrisklab.com/%ec%8b%a0%ec%9a%a9%ea%b1%b0%eb%9e%98%ec%99%80-%eb%af%b8%ec%88%98%ea%b1%b0%eb%9e%98-%ec%b0%a8%ec%9d%b4-%ed%88%ac%ec%9e%90%ec%9e%90%ea%b0%80-%ea%b0%80%ec%9e%a5-%eb%a7%8e%ec%9d%b4-%eb%86%93%ec%b9%98/",
    },
    {
      id: "hc3",
      title: "하락장에서 현금 비중이 중요한 이유, 손실 관리의 기준",
      description:
        "대응 여력이 거의 없을수록 현금 비중은 단순 대기 자금이 아니라 생존 기준이 될 수 있어요.",
      tag: "심리 이해",
      href: "https://financialrisklab.com/%ed%95%98%eb%9d%bd%ec%9e%a5%ec%97%90%ec%84%9c-%ed%98%84%ea%b8%88-%eb%b9%84%ec%a4%91%ec%9d%b4-%ec%a4%91%ec%9a%94%ed%95%9c-%ec%9d%b4%ec%9c%a0-%ec%86%90%ec%8b%a4-%ea%b4%80%eb%a6%ac%ec%97%90%ec%84%9c/",
    },
  ],
};
