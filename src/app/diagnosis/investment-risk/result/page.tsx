'use client';
// 투자 리스크 진단 결과 페이지

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { calculateRisk, decodeAnswers } from "@/lib/risk-calculator";
import { riskResults } from "@/data/results";
import { psychologyTags } from "@/data/psychology-tags";
import { relatedContentByLevel } from "@/data/related-content";

const BADGE_STYLES: Record<string, { bg: string; border: string; dot: string; text: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    dot: "bg-emerald-500",
    text: "text-emerald-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
    text: "text-amber-700",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    dot: "bg-orange-500",
    text: "text-orange-700",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    dot: "bg-red-500",
    text: "text-red-700",
  },
};

const SCORE_BAR_COLOR: Record<string, string> = {
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

const PRIORITY_GUIDE: Record<string, { title: string; description: string; bullets: string[] }> = {
  main_risk: {
    title: "지금 가장 위험한 부분부터 먼저 짚어볼게요.",
    description:
      "지금은 손실 자체보다, 어떤 구조가 손실을 더 키울 수 있는지부터 보는 게 중요해요.",
    bullets: [
      "레버리지나 신용 구조가 겹쳐 있는지",
      "현금 여력이 줄어들고 있는지",
      "손절 기준 없이 버티고 있는 상태인지",
    ],
  },
  stop_loss_standard: {
    title: "손절 기준은 감정보다 구조를 먼저 보는 게 좋아요.",
    description:
      "지금은 팔지 말지를 바로 정하기보다, 어느 구간에서 판단을 다시 볼지 기준부터 세우는 게 더 중요해요.",
    bullets: [
      "현재 손실률이 감당 가능한 범위를 넘었는지",
      "한 종목 비중이 너무 커진 상태인지",
      "손절 이후에도 대응 여력이 남는지",
    ],
  },
  averaging_down_decision: {
    title: "물타기 여부는 추가 매수보다 대응 여력부터 봐야 해요.",
    description:
      "평균 단가를 낮추는 것보다, 지금 더 버틸 수 있는 구조인지 먼저 확인하는 게 안전해요.",
    bullets: [
      "현금 비중이 아직 충분한지",
      "추가 매수가 복구 심리 때문은 아닌지",
      "더 내려가도 대응 기준이 있는지",
    ],
  },
  liquidation_check: {
    title: "청산이나 반대매매가 걱정된다면 가격보다 기준부터 확인해야 해요.",
    description:
      "지금은 전망보다도, 어느 가격에서 강제 정리가 일어날 수 있는지 먼저 확인하는 게 중요해요.",
    bullets: [
      "반대매매 기준 가격이 어디인지",
      "추가 증거금이나 현금 여력이 있는지",
      "레버리지 구조를 정확히 이해하고 있는지",
    ],
  },
  cash_ratio: {
    title: "현금 비중은 기다릴 수 있는 힘과도 연결돼 있어요.",
    description:
      "현금 여력이 부족하면 좋은 판단을 알아도 실행할 수 없을 수 있어서, 지금은 비중부터 보는 게 좋아요.",
    bullets: [
      "보유 현금이 전체 자산에서 어느 정도인지",
      "추가 하락 시 대응 여력이 남는지",
      "현금이 없어 판단이 급해지고 있지는 않은지",
    ],
  },
  action_order: {
    title: "무엇부터 봐야 할지 막막하다면, 순서대로 정리해볼게요.",
    description:
      "지금은 한 번에 결론을 내리기보다, 먼저 숫자와 구조를 차분히 확인하는 순서가 중요해요.",
    bullets: [
      "현재 손실률 확인",
      "보유 현금 비중 확인",
      "레버리지·청산 기준 확인",
    ],
  },
};

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const encoded = searchParams.get("answers");

  const result = useMemo(() => {
    if (!encoded) return null;
    const answers = decodeAnswers(encoded);
    if (!answers) return null;
    return calculateRisk(answers);
  }, [encoded]);

  if (!result) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-5">
        <div className="text-center">
          <p className="text-slate-600 text-base mb-5">답변 데이터를 찾을 수 없어요.</p>
          <Link
            href="/diagnosis/investment-risk"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold"
          >
            다시 진단하기
          </Link>
        </div>
      </main>
    );
  }

  const riskResult = riskResults[result.level];
  const badge = BADGE_STYLES[riskResult.badgeColor] ?? BADGE_STYLES.amber;
  const barColor = SCORE_BAR_COLOR[riskResult.badgeColor] ?? "bg-slate-400";
  const contents = relatedContentByLevel[result.level];
  const priorityGuide = result.priority ? PRIORITY_GUIDE[result.priority] : null;

  const psychMessages = result.activeTags
    .map((tag) => psychologyTags[tag])
    .filter(Boolean);

  function buildSummaryText() {
    return [
      `[리스크체크 진단 결과]`,
      `구간: ${riskResult.label}`,
      ``,
      riskResult.title,
      ``,
      riskResult.summary,
      ``,
      `▶ 가장 조심해서 봐야 할 부분`,
      ...riskResult.watchOut.map((w) => `• ${w}`),
      ``,
      `▶ 지금은 피하는 게 좋은 행동`,
      ...riskResult.avoidActions.map((a) => `• ${a}`),
      ``,
      `▶ 먼저 확인해야 할 기준`,
      ...riskResult.checkFirst.map((c) => `• ${c}`),
      ``,
      `리스크체크 by 금융리스크랩`,
    ].join("\n");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근 실패 시 조용히 무시
    }
  }

  function handleRetry() {
    router.push("/diagnosis/investment-risk");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
            ← 홈으로
          </Link>
          <span className="text-slate-500 text-xs font-medium">진단 결과</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-10 md:py-14 space-y-8">
        {/* 1. 리스크 배지 + 제목 + 요약 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <div className={`inline-flex items-center gap-2 ${badge.bg} border ${badge.border} rounded-full px-3 py-1 mb-5`}>
            <span className={`w-2 h-2 rounded-full ${badge.dot}`}></span>
            <span className={`${badge.text} text-xs font-semibold`}>{riskResult.label}</span>
          </div>
          <h1 className="text-slate-900 text-xl font-bold leading-snug mb-4">
            {riskResult.title}
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            {riskResult.summary}
          </p>

          {/* 점수 바 */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>현재 리스크 구간</span>
              <span>총점 {result.totalScore}점</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${barColor} rounded-full transition-all duration-700`}
                style={{ width: `${result.scorePercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* 2. 우선순위 개인화 안내 */}
        {priorityGuide && (
          <section className="bg-slate-900 rounded-2xl px-6 py-6">
            <p className="text-slate-300 text-xs font-medium mb-2">
              지금 가장 궁금했던 부분부터 정리해드릴게요.
            </p>
            <h2 className="text-white text-lg font-bold mb-3">
              {priorityGuide.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {priorityGuide.description}
            </p>
            <ul className="space-y-2">
              {priorityGuide.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" />
                  <span className="text-slate-200 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 2. 심리 태그 추가 문구 */}
        {psychMessages.length > 0 && (
          <section className="space-y-3">
            {psychMessages.map((tag) => (
              <div key={tag.id} className="bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-4">
                <p className="text-indigo-800 text-sm leading-relaxed">{tag.message}</p>
              </div>
            ))}
          </section>
        )}

        {/* 3. 가장 조심해서 봐야 할 부분 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-slate-900 font-semibold text-base mb-4">
            지금 가장 조심해서 봐야 할 부분이에요.
          </h2>
          <ul className="space-y-3">
            {riskResult.watchOut.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 w-4 h-4 rounded-full bg-orange-100 text-orange-600 text-xs flex items-center justify-center font-bold">!</span>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. 지금은 피하는 게 좋은 행동 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-slate-900 font-semibold text-base mb-4">
            지금은 이런 행동은 피하는 게 좋아요.
          </h2>
          <ul className="space-y-3">
            {riskResult.avoidActions.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 shrink-0 text-red-400 text-base leading-none">×</span>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. 먼저 확인해야 할 기준 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-slate-900 font-semibold text-base mb-4">
            먼저 이 기준부터 확인해보세요.
          </h2>
          <ul className="space-y-3">
            {riskResult.checkFirst.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. 관련 콘텐츠 */}
        <section>
          <h2 className="text-slate-900 font-semibold text-base mb-4 px-1">
            금융리스크랩에서 관련 내용도 살펴보세요.
          </h2>
          <div className="space-y-3">
            {contents.map((content) => (
              <a
                key={content.id}
                href={content.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block text-indigo-500 text-xs font-medium bg-indigo-50 px-2 py-0.5 rounded-md mb-2">
                      {content.tag}
                    </span>
                    <p className="text-slate-900 text-sm font-semibold leading-snug mb-1">
                      {content.title}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {content.description}
                    </p>
                  </div>
                  <svg className="mt-1 w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 7. 머니플로우레이더 연결 카드 */}
        <section className="bg-slate-800 rounded-2xl p-7">
          <h3 className="text-white font-bold text-base mb-3">
            내 상황을 정리했다면, 시장 흐름도 함께 보는 게 좋아요.
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            투자 리스크는 내 판단만의 문제가 아니라, 지금 시장이 어떤 흐름인지와도 연결돼 있어요.
            주요 테마와 자금 흐름은 머니플로우레이더에서 이어서 확인해보세요.
          </p>
          <a
            href="https://moneyflowradar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-slate-900 hover:bg-slate-100 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            머니플로우레이더 보기
          </a>
        </section>

        {/* 8. 액션 버튼 */}
        <div className="flex flex-col sm:flex-row gap-3 pb-8">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-sm font-medium py-4 rounded-xl transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-600">복사됐어요</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                결과 요약 복사하기
              </>
            )}
          </button>
          <button
            onClick={handleRetry}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-4 rounded-xl transition-colors"
          >
            다시 진단하기
          </button>
        </div>

        {/* 주의 문구 */}
        <p className="text-slate-400 text-xs text-center leading-relaxed pb-4">
          이 결과는 투자 조언이 아니에요. 모든 투자 결정은 본인 판단과 책임 하에 이루어져야 해요.
        </p>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500 text-sm">결과를 불러오는 중이에요...</p>
      </main>
    }>
      <ResultContent />
    </Suspense>
  );
}
