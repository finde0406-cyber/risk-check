// 리스크체크 메인 랜딩페이지
import Link from "next/link";

const empathyItems = [
  "손절해야 할지 모르겠어요.",
  "물타기를 더 해도 될지 불안해요.",
  "누가 기준만 좀 정리해줬으면 좋겠어요.",
];

const howItWorks = [
  {
    step: "01",
    title: "지금 가장 마음에 걸리는 상황을 고르세요.",
    desc: "길게 설명하지 않아도 괜찮아요. 지금 내 마음에 가장 가까운 걸 고르면 돼요.",
  },
  {
    step: "02",
    title: "심리 상태와 대응 여력을 함께 봐요.",
    desc: "손실보다 더 중요한 건 지금 내가 버틸 수 있는 구조인지 확인하는 거예요.",
  },
  {
    step: "03",
    title: "지금 먼저 봐야 할 기준을 정리해드려요.",
    desc: "정답을 대신 고르기보다, 지금 흔들리지 않게 해줄 기준부터 차분히 짚어드려요.",
  },
];

const trustItems = [
  "사용자를 탓하지 않아요.",
  "불안을 과장하지 않아요.",
  "매수나 매도를 직접 지시하지 않아요.",
  "판단 기준을 함께 정리해드려요.",
];

const resultPreview = [
  { label: "현재 리스크 구간", value: "주의 구간" },
  { label: "가장 큰 위험 요소", value: "기준 없이 버티는 동안 대응 여력이 줄어드는 것" },
  { label: "지금 피해야 할 행동", value: "기준 없는 물타기, 반등 기대만으로 판단 미루기" },
  { label: "먼저 확인해야 할 기준", value: "현재 손실률, 보유 현금 비중, 청산 기준 여부" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_26%,#f8fafc_100%)]">
      {/* 헤더 */}
      <header className="bg-white/90 border-b border-slate-100 backdrop-blur">
        <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <span className="text-slate-900 font-semibold text-base tracking-tight">리스크체크</span>
            <span className="text-slate-400 text-xs ml-2">by 금융리스크랩</span>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.14),_transparent_54%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.08),_transparent_42%)]" />
        <div className="relative max-w-4xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-18">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                투자 리스크 진단
              </p>
              <h1 className="max-w-[11ch] text-slate-900 text-[2.35rem] leading-[1.08] tracking-[-0.03em] font-bold md:max-w-none md:text-6xl md:leading-[1.03]">
                지금 필요한 건
                <br />
                더 많은 정보보다
                <br />
                흔들리지 않을 기준일지 몰라요.
              </h1>
              <p className="mt-5 max-w-xl text-slate-600 text-[1.03rem] leading-7 md:text-lg">
                손실이 커질수록 마음이 급해질 수 있어요. 몇 가지 질문에 답하면, 지금 내 상황에서 무엇부터 확인해야 하는지 차분하게 정리해드려요.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/diagnosis/investment-risk"
                  className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-7 py-4 rounded-2xl transition-colors shadow-[0_14px_30px_rgba(79,70,229,0.18)]"
                >
                  내 투자 리스크 진단하기
                </Link>
                <p className="max-w-xs text-slate-400 text-xs leading-5">
                  투자 조언이 아니라, 지금 상태를 차분히 정리해보기 위한 리스크 체크예요.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/80 bg-white/90 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
              <p className="text-slate-400 text-xs font-medium mb-4">혹시 지금 이런 마음인가요?</p>
              <div className="space-y-3">
                {empathyItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-slate-900 px-4 py-4">
                <p className="text-slate-300 text-xs mb-1">이럴 때 필요한 건.</p>
                <p className="text-white text-sm leading-6">
                  지금 무엇을 해야 할지보다, 무엇부터 봐야 하는지 먼저 정리하는 일이에요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공감 섹션 */}
      <section className="border-t border-slate-100 bg-white/70">
        <div className="max-w-4xl mx-auto px-5 py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-slate-900 text-sm font-semibold mb-2">손실이 무서울수록.</p>
              <p className="text-slate-600 text-sm leading-6">
                사람은 판단보다 버티기에 가까워질 수 있어요.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-slate-900 text-sm font-semibold mb-2">정보가 많아질수록.</p>
              <p className="text-slate-600 text-sm leading-6">
                오히려 무엇부터 봐야 할지 더 흐려질 수 있어요.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm">
              <p className="text-slate-900 text-sm font-semibold mb-2">그래서 먼저 필요한 건.</p>
              <p className="text-slate-600 text-sm leading-6">
                지금 내 상태를 차분히 정리해볼 기준이에요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 작동 방식 섹션 */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-5 py-12 md:py-18">
          <p className="text-slate-400 text-xs font-medium mb-3">이 서비스는 이렇게 도와드려요.</p>
          <h2 className="text-slate-900 text-xl md:text-3xl font-bold mb-8">
            복잡한 상황을, 질문으로 차분히 정리해봐요.
          </h2>
          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-4 md:space-y-0">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:p-6">
                <div className="mb-4 h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <p className="text-slate-900 font-semibold text-base mb-2">{item.title}</p>
                <p className="text-slate-500 text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 결과 예시 섹션 */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-5 py-12 md:py-18">
          <p className="text-slate-400 text-xs font-medium mb-3">진단을 마치면.</p>
          <h2 className="text-slate-900 text-xl md:text-3xl font-bold mb-8">
            이런 결과를 확인할 수 있어요.
          </h2>
          <div className="bg-white rounded-[28px] border border-slate-200 p-5 md:p-7 space-y-4 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-amber-700 text-xs font-semibold">주의 구간</span>
            </div>
            {resultPreview.map((row) => (
              <div key={row.label} className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4">
                <p className="text-slate-400 text-xs mb-1">{row.label}</p>
                <p className="text-slate-700 text-sm leading-6">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 신뢰 섹션 */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-5 py-12 md:py-18">
          <p className="text-slate-400 text-xs font-medium mb-3">리스크체크는.</p>
          <h2 className="text-slate-900 text-xl md:text-3xl font-bold mb-8">
            이런 방식으로 정리해드려요.
          </h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {trustItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <svg className="w-5 h-5 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 머니플로우레이더 연결 섹션 */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-5 py-12 md:py-18">
          <div className="bg-white rounded-[28px] border border-slate-200 p-6 md:p-7 shadow-sm">
            <h3 className="text-slate-900 font-bold text-lg mb-3">
              내 상황을 정리했다면, 시장 흐름도 함께 보는 게 좋아요.
            </h3>
            <p className="text-slate-600 text-sm leading-6 mb-6 max-w-2xl">
              투자 리스크는 내 판단만의 문제가 아니라, 지금 시장이 어떤 흐름인지와도 연결돼 있어요.
              주요 테마와 자금 흐름은 머니플로우레이더에서 이어서 확인해보세요.
            </p>
            <a
              href="https://moneyflowradar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              머니플로우레이더 보기
            </a>
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="bg-indigo-600">
        <div className="max-w-4xl mx-auto px-5 py-12 md:py-14 text-center">
          <p className="text-indigo-100 text-sm mb-3">지금 바로 확인해보세요.</p>
          <h3 className="text-white text-2xl leading-tight font-bold mb-6 md:text-3xl">
            내 투자 리스크 상태, 먼저 정리해봐요.
          </h3>
          <Link
            href="/diagnosis/investment-risk"
            className="inline-flex items-center justify-center bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-base px-8 py-4 rounded-2xl transition-colors"
          >
            내 투자 리스크 진단하기
          </Link>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-slate-900 text-slate-400 text-xs">
        <div className="max-w-3xl mx-auto px-5 py-8">
          <p className="font-medium text-slate-300 mb-1">리스크체크 by 금융리스크랩</p>
          <p className="leading-relaxed">
            이 서비스는 투자 조언이나 투자 권유를 목적으로 하지 않아요.
            모든 투자 결정은 본인 판단과 책임 하에 이루어져야 해요.
          </p>
        </div>
      </footer>
    </main>
  );
}
