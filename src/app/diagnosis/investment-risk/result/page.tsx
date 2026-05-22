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
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500", text: "text-emerald-700" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   dot: "bg-amber-500",   text: "text-amber-700" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200",  dot: "bg-orange-500",  text: "text-orange-700" },
  red:     { bg: "bg-red-50",     border: "border-red-200",     dot: "bg-red-500",     text: "text-red-700" },
};

const BAR_COLOR: Record<string, string> = {
  emerald: "bg-emerald-500",
  amber:   "bg-amber-500",
  orange:  "bg-orange-500",
  red:     "bg-red-500",
};

const PRIORITY_GUIDE: Record<string, { title: string; bullets: string[] }> = {
  main_risk: {
    title: "지금 가장 위험한 부분부터 짚어볼게요.",
    bullets: ["레버리지·신용 구조가 겹쳐 있는지", "현금 여력이 줄어들고 있는지", "손절 기준 없이 버티고 있는 상태인지"],
  },
  stop_loss_standard: {
    title: "손절 기준은 감정보다 구조를 먼저 봐야 해요.",
    bullets: ["지금 손실률이 감당 가능한 범위를 넘었는지", "한 종목 비중이 너무 커진 상태인지", "손절 이후에도 대응 여력이 남는지"],
  },
  averaging_down_decision: {
    title: "물타기 여부는 대응 여력부터 확인해야 해요.",
    bullets: ["현금 비중이 아직 충분한지", "추가 매수가 복구 심리 때문은 아닌지", "더 내려가도 대응 기준이 있는지"],
  },
  liquidation_check: {
    title: "청산이 걱정된다면 기준 가격부터 확인하세요.",
    bullets: ["반대매매 기준 가격이 어디인지", "추가 증거금이나 현금 여력이 있는지", "레버리지 구조를 정확히 이해하고 있는지"],
  },
  cash_ratio: {
    title: "현금 비중은 버틸 수 있는 힘과도 연결돼 있어요.",
    bullets: ["보유 현금이 전체 자산의 어느 정도인지", "추가 하락 시 대응 여력이 남는지", "현금 부족으로 판단이 급해지고 있진 않은지"],
  },
  action_order: {
    title: "막막하다면, 순서대로 하나씩 정리해봐요.",
    bullets: ["현재 손실률 확인", "보유 현금 비중 확인", "레버리지·청산 기준 확인"],
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
          <p className="text-slate-600 text-sm mb-5">답변 데이터를 찾을 수 없어요.</p>
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
  const barColor = BAR_COLOR[riskResult.badgeColor] ?? "bg-slate-400";
  const contents = relatedContentByLevel[result.level];
  const priorityGuide = result.priority ? PRIORITY_GUIDE[result.priority] : null;

  // 심리 태그는 최대 1개만 표시 — 여러 개 나열되면 오히려 부담
  const psychMessage = result.activeTags
    .map((tag) => psychologyTags[tag])
    .filter(Boolean)[0] ?? null;

  function buildSummaryText() {
    return [
      `[리스크체크 진단 결과]`,
      `구간: ${riskResult.label}`,
      ``,
      riskResult.title,
      ``,
      `▶ 먼저 확인해야 할 기준`,
      ...riskResult.checkFirst.map((c) => `• ${c}`),
      ``,
      `▶ 가장 조심해서 봐야 할 부분`,
      ...riskResult.watchOut.map((w) => `• ${w}`),
      ``,
      `▶ 지금은 피하는 게 좋은 행동`,
      ...riskResult.avoidActions.map((a) => `• ${a}`),
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
      // 클립보드 접근 실패 시 무시
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-lg mx-auto px-5 py-3.5 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
            ← 홈으로
          </Link>
          <span className="text-slate-400 text-xs">진단 결과</span>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-5 py-8 space-y-4 pb-12">

        {/* ① 리스크 구간 + 요약 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-5">
          <div className={`inline-flex items-center gap-1.5 ${badge.bg} border ${badge.border} rounded-full px-2.5 py-1 mb-4`}>
            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
            <span className={`${badge.text} text-xs font-semibold`}>{riskResult.label}</span>
          </div>
          <h1 className="text-slate-900 text-lg font-bold leading-snug mb-3">
            {riskResult.title}
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            {riskResult.summary}
          </p>
          <div className="mt-5">
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${barColor} rounded-full transition-all duration-700`}
                style={{ width: `${result.scorePercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* ② 우선 가이드 (Q6 기반 개인화) */}
        {priorityGuide && (
          <section className="bg-slate-900 rounded-2xl px-5 py-5">
            <p className="text-slate-400 text-xs mb-2">가장 궁금했던 부분부터 정리해드릴게요.</p>
            <h2 className="text-white text-base font-bold mb-3">{priorityGuide.title}</h2>
            <ul className="space-y-2">
              {priorityGuide.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                  <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ③ 심리 태그 — 최대 1개 */}
        {psychMessage && (
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-4">
            <p className="text-indigo-800 text-sm leading-relaxed">{psychMessage.message}</p>
          </div>
        )}

        {/* ④ 먼저 확인할 기준 (정리 중심, 금지보다 앞) */}
        <section className="bg-white rounded-2xl border border-slate-200 p-5">
          <h2 className="text-slate-800 font-semibold text-sm mb-3">
            먼저 이 기준부터 확인해보세요.
          </h2>
          <ul className="space-y-2.5">
            {riskResult.checkFirst.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="mt-0.5 w-3.5 h-3.5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ⑤ 가장 조심할 부분 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-5">
          <h2 className="text-slate-800 font-semibold text-sm mb-3">
            지금 가장 조심해서 봐야 할 부분이에요.
          </h2>
          <ul className="space-y-2.5">
            {riskResult.watchOut.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-orange-400" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ⑥ 피해야 할 행동 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-5">
          <h2 className="text-slate-800 font-semibold text-sm mb-3">
            지금은 이런 행동은 피하는 게 좋아요.
          </h2>
          <ul className="space-y-2.5">
            {riskResult.avoidActions.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-slate-300 text-sm font-bold leading-relaxed">—</span>
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ⑦ 금융리스크랩 관련 읽을거리 */}
        <section>
          <p className="text-slate-400 text-xs font-medium mb-3 px-1">금융리스크랩에서 이어서 보세요.</p>
          <div className="space-y-2.5">
            {contents.map((content) => (
              <a
                key={content.id}
                href={content.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-200 px-4 py-4 hover:border-slate-300 transition-colors"
              >
                <div className="min-w-0">
                  <span className="inline-block text-indigo-500 text-xs font-medium bg-indigo-50 px-2 py-0.5 rounded mb-1.5">
                    {content.tag}
                  </span>
                  <p className="text-slate-800 text-sm font-medium leading-snug truncate">
                    {content.title}
                  </p>
                </div>
                <svg className="w-4 h-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </section>

        {/* ⑧ 머니플로우레이더 */}
        <section className="bg-slate-800 rounded-2xl px-5 py-5">
          <p className="text-white text-sm font-semibold mb-1.5 leading-snug">
            내 상황을 정리했다면, 시장 흐름도 함께 보는 게 좋아요.
          </p>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            주요 테마와 자금 흐름은 머니플로우레이더에서 이어서 확인해보세요.
          </p>
          <a
            href="https://moneyflowradar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            머니플로우레이더 보기
          </a>
        </section>

        {/* ⑨ 액션 버튼 */}
        <div className="flex gap-2.5 pt-1 pb-4">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center gap-1.5 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-sm font-medium py-3.5 rounded-xl transition-colors"
          >
            {copied ? (
              <span className="text-emerald-600 text-sm">복사됐어요</span>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                결과 복사
              </>
            )}
          </button>
          <button
            onClick={() => router.push("/diagnosis/investment-risk")}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
          >
            다시 진단하기
          </button>
        </div>

        <p className="text-slate-400 text-xs text-center leading-relaxed">
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
        <p className="text-slate-400 text-sm">결과를 불러오는 중이에요...</p>
      </main>
    }>
      <ResultContent />
    </Suspense>
  );
}
