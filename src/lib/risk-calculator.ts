// 선택 답변 기반 리스크 점수 계산 및 구간 판정 로직

import { questions } from "@/data/questions";
import type { RiskLevel } from "@/data/results";

export interface DiagnosisAnswers {
  [questionId: string]: string; // questionId -> optionId
}

export interface DiagnosisResult {
  level: RiskLevel;
  totalScore: number;
  maxScore: number;
  scorePercent: number;
  activeTags: string[];
}

const FORCE_RISK_TAGS = [
  "forced_liquidation",
  "crypto_futures",
  "leverage",
  "debt_investing",
  "debt_risk",
  "credit_trading",
] as const;

const FORCE_HIGH_RISK_TAGS = [
  "forced_liquidation",
  "crypto_futures",
  "leverage",
  "debt_investing",
  "debt_risk",
  "low_cash",
  "repeated_averaging_down",
] as const;

export function calculateRisk(answers: DiagnosisAnswers): DiagnosisResult {
  let totalScore = 0;
  let maxScore = 0;
  const tagCounts: Record<string, number> = {};

  for (const question of questions) {
    const selectedOptionId = answers[question.id];
    const maxOptionScore = Math.max(...question.options.map((o) => o.score));
    maxScore += maxOptionScore;

    if (!selectedOptionId) continue;

    const selected = question.options.find((o) => o.id === selectedOptionId);
    if (!selected) continue;

    totalScore += selected.score;

    for (const tag of selected.tags) {
      tagCounts[tag] = (tagCounts[tag] ?? 0) + 1;
    }
  }

  const scorePercent = maxScore > 0 ? (totalScore / maxScore) * 100 : 0;

  let level: RiskLevel;
  if (totalScore >= 19) {
    level = "high_risk";
  } else if (totalScore >= 12) {
    level = "risk";
  } else if (totalScore >= 6) {
    level = "caution";
  } else {
    level = "stable";
  }

  const forceRiskTagCount = FORCE_RISK_TAGS.reduce((count, tag) => {
    return count + ((tagCounts[tag] ?? 0) > 0 ? 1 : 0);
  }, 0);

  const forceHighRiskTagCount = FORCE_HIGH_RISK_TAGS.reduce((count, tag) => {
    return count + ((tagCounts[tag] ?? 0) > 0 ? 1 : 0);
  }, 0);

  if (forceRiskTagCount >= 2 && level === "stable") level = "risk";
  if (forceRiskTagCount >= 2 && level === "caution") level = "risk";
  if (forceHighRiskTagCount >= 3) level = "high_risk";

  // 상위 3개 태그 추출 (빈도 높은 순)
  const activeTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag]) => tag);

  return { level, totalScore, maxScore, scorePercent, activeTags };
}

export function encodeAnswers(answers: DiagnosisAnswers): string {
  return encodeURIComponent(JSON.stringify(answers));
}

export function decodeAnswers(encoded: string): DiagnosisAnswers | null {
  try {
    return JSON.parse(decodeURIComponent(encoded)) as DiagnosisAnswers;
  } catch {
    return null;
  }
}
