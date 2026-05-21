// 투자 리스크 진단 6개 질문 데이터

export interface QuestionOption {
  id: string;
  label: string;
  score: number;
  tags: string[];
}

export interface Question {
  id: string;
  step: number;
  question: string;
  description: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: "q1",
    step: 1,
    question: "지금 가장 가까운 상황은 어떤 쪽인가요?",
    description: "지금 가장 마음에 걸리는 상황을 골라주세요. 정확하지 않아도 괜찮아요.",
    options: [
      { id: "q1_a", label: "손실이 계속 커지고 있어서 불안해요.", score: 2, tags: ["loss_growing"] },
      { id: "q1_b", label: "손절해야 할지, 더 버텨야 할지 모르겠어요.", score: 1, tags: ["indecision"] },
      { id: "q1_c", label: "물타기를 더 해야 할지 고민돼요.", score: 3, tags: ["averaging_down"] },
      { id: "q1_d", label: "한 종목 비중이 너무 커진 것 같아요.", score: 2, tags: ["concentration"] },
      { id: "q1_e", label: "신용거래나 레버리지를 쓰고 있어서 걱정돼요.", score: 4, tags: ["leverage"] },
      { id: "q1_f", label: "반대매매나 청산이 걱정돼요.", score: 5, tags: ["forced_liquidation"] },
      { id: "q1_g", label: "지금 뭘 먼저 봐야 할지 모르겠어요.", score: 1, tags: ["no_criteria"] },
    ],
  },
  {
    id: "q2",
    step: 2,
    question: "지금 마음 상태는 어떤 쪽에 더 가까우세요?",
    description: "판단이 어려울 때는 숫자보다 마음 상태가 더 크게 영향을 줄 수도 있어요.",
    options: [
      { id: "q2_a", label: "손실을 인정하기가 쉽지 않아요.", score: 2, tags: ["denial"] },
      { id: "q2_b", label: "조금만 반등하면 정리할 수 있을 것 같아요.", score: 1, tags: ["waiting_rebound"] },
      { id: "q2_c", label: "어떻게든 손실을 만회하고 싶은 마음이 커요.", score: 3, tags: ["recovery_urge"] },
      { id: "q2_d", label: "더 떨어질까 봐 계속 불안해요.", score: 2, tags: ["fear"] },
      { id: "q2_e", label: "누가 기준을 좀 정리해줬으면 좋겠어요.", score: 1, tags: ["no_criteria"] },
      { id: "q2_f", label: "이미 너무 늦은 건 아닐까 싶어요.", score: 3, tags: ["too_late"] },
    ],
  },
  {
    id: "q3",
    step: 3,
    question: "현재 투자 구조는 어떤 쪽에 가까우세요?",
    description: "지금 어떤 구조에 놓여 있는지 알면, 위험을 더 현실적으로 볼 수 있어요.",
    options: [
      { id: "q3_a", label: "한 종목에 돈이 많이 몰려 있어요.", score: 2, tags: ["concentration"] },
      { id: "q3_b", label: "여러 종목을 갖고 있지만 대부분 손실이에요.", score: 2, tags: ["diversified_loss"] },
      { id: "q3_c", label: "신용거래나 미수를 사용했어요.", score: 4, tags: ["leverage"] },
      { id: "q3_d", label: "코인 선물이나 레버리지 상품을 쓰고 있어요.", score: 5, tags: ["leverage", "forced_liquidation"] },
      { id: "q3_e", label: "대출금으로 투자한 금액이 있어요.", score: 4, tags: ["debt_investment"] },
      { id: "q3_f", label: "현금이 거의 남아 있지 않아요.", score: 3, tags: ["no_cash"] },
      { id: "q3_g", label: "그래도 어느 정도 현금 여력은 있어요.", score: 0, tags: ["has_cash"] },
    ],
  },
  {
    id: "q4",
    step: 4,
    question: "현재 손실 수준은 어느 정도로 느껴지세요?",
    description: "정확한 숫자가 아니어도 괜찮아요. 지금 체감하는 수준에 가장 가까운 걸 골라주세요.",
    options: [
      { id: "q4_a", label: "5% 미만이에요.", score: 0, tags: [] },
      { id: "q4_b", label: "5~15% 정도예요.", score: 1, tags: [] },
      { id: "q4_c", label: "15~30% 정도예요.", score: 2, tags: ["loss_growing"] },
      { id: "q4_d", label: "30~50% 정도예요.", score: 3, tags: ["loss_growing"] },
      { id: "q4_e", label: "50% 이상이에요.", score: 4, tags: ["loss_growing", "recovery_urge"] },
      { id: "q4_f", label: "정확히는 잘 모르겠어요.", score: 1, tags: ["no_criteria"] },
    ],
  },
  {
    id: "q5",
    step: 5,
    question: "지금 대응할 수 있는 여력은 어느 정도 있으세요?",
    description: "지금은 수익보다, 대응할 수 있는 여력이 남아 있는지가 더 중요할 수 있어요.",
    options: [
      { id: "q5_a", label: "현금 여력이 충분한 편이에요.", score: 0, tags: ["has_cash"] },
      { id: "q5_b", label: "일부 현금은 남아 있어요.", score: 1, tags: ["has_cash"] },
      { id: "q5_c", label: "현금이 거의 없어요.", score: 3, tags: ["no_cash"] },
      { id: "q5_d", label: "추가 매수를 위해 대출이나 신용도 고민 중이에요.", score: 4, tags: ["leverage", "averaging_down"] },
      { id: "q5_e", label: "이미 추가 매수를 여러 번 했어요.", score: 4, tags: ["averaging_down"] },
      { id: "q5_f", label: "뚜렷한 기준 없이 버티고 있어요.", score: 2, tags: ["no_criteria"] },
    ],
  },
  {
    id: "q6",
    step: 6,
    question: "지금 가장 알고 싶은 건 무엇인가요?",
    description: "결과에서 어떤 내용을 먼저 보여드리면 좋을지 정하는 질문이에요.",
    options: [
      { id: "q6_a", label: "지금 가장 위험한 부분이 뭔지 알고 싶어요.", score: 0, tags: ["risk_awareness"] },
      { id: "q6_b", label: "손절 기준을 어떻게 봐야 할지 알고 싶어요.", score: 0, tags: ["stop_loss"] },
      { id: "q6_c", label: "물타기를 계속해도 되는지 알고 싶어요.", score: 1, tags: ["averaging_down"] },
      { id: "q6_d", label: "반대매매나 청산 가능성이 궁금해요.", score: 2, tags: ["forced_liquidation"] },
      { id: "q6_e", label: "현금 비중을 어떻게 봐야 할지 궁금해요.", score: 0, tags: ["cash_ratio"] },
      { id: "q6_f", label: "지금 무엇부터 확인해야 할지 알고 싶어요.", score: 0, tags: ["no_criteria"] },
    ],
  },
];
