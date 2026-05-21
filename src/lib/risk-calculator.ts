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

const LEVEL_THRESHOLDS: { level: RiskLevel; minPercent: number }[] = [
  { level: "high_risk", minPercent: 65 },
  { level: "risk", minPercent: 40 },
  { level: "caution", minPercent: 20 },
  { level: "stable", minPercent: 0 },
];

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

  // 강한 위험 태그가 있으면 최소 risk 구간 보장
  const hasHighRiskTag =
    (tagCounts["forced_liquidation"] ?? 0) >= 2 ||
    (tagCounts["leverage"] ?? 0) >= 2;

  let level: RiskLevel = "stable";
  for (const threshold of LEVEL_THRESHOLDS) {
    if (scorePercent >= threshold.minPercent) {
      level = threshold.level;
      break;
    }
  }

  if (hasHighRiskTag && level === "caution") level = "risk";
  if (hasHighRiskTag && level === "stable") level = "caution";

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
