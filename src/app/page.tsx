// 리스크체크 메인 랜딩페이지
import Link from "next/link";

const empathyItems = [
  "손절해야 할지, 더 버텨야 할지 모르겠어요.",
  "물타기를 해도 되는 건지 확신이 없어요.",
  "반등만 기다리고 있는데 점점 더 불안해져요.",
  "누가 기준만 좀 정리해줬으면 좋겠어요.",
];

const howItWorks = [
  {
    step: "01",
    title: "현재 어떤 상황인지 선택해요.",
    desc: "지금 가장 마음에 걸리는 상황과 심리 상태를 고르면 돼요.",
  },
  {
    step: "02",
    title: "심리 상태와 대응 여력을 함께 점검해요.",
    desc: "투자 구조, 손실 수준, 대응할 수 있는 여력까지 확인해봐요.",
  },
  {
    step: "03",
    title: "지금 리스크와 먼저 확인할 기준을 확인해요.",
    desc: "리스크 구간과 함께, 지금 먼저 봐야 할 기준을 차분히 정리해드려요.",
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
  { label: "가장 큰 위험 요소", value: "손절 기준이 없는 상태로 하락이 이어지는 것" },
  { label: "지금 피해야 할 행동", value: "기준 없는 물타기, 반등 기대만으로 판단 미루기" },
  { label: "먼저 확인해야 할 기준", value: "현재 손실률, 보유 현금 비중, 손절 기준 여부" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <span className="text-slate-900 font-semibold text-base tracking-tight">리스크체크</span>
            <span className="text-slate-400 text-xs ml-2">by 금융리스크랩</span>
          </div>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
          <p className="text-indigo-600 text-sm font-medium mb-4 tracking-wide">투자 리스크 진단</p>
          <h1 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight mb-5">
            지금 판단이 어려운 건,<br />
            정보가 부족해서만은<br className="md:hidden" /> 아닐 수 있어요.
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            손실, 물타기, 레버리지, 반대매매처럼 복잡한 투자 상황에서는
            무엇을 먼저 확인해야 하는지부터 정리하는 게 중요해요.
          </p>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            몇 가지 질문에 답하면, 현재 리스크 상태와
            지금 먼저 확인해야 할 기준을 차분하게 정리해드려요.
          </p>
          <Link
            href="/diagnosis/investment-risk"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base px-8 py-4 rounded-xl transition-colors"
          >
            내 투자 리스크 진단하기
          </Link>
          <p className="text-slate-400 text-xs mt-5 max-w-sm leading-relaxed">
            이 서비스는 투자 조언이 아니라, 현재 상황을 차분히 정리해보기 위한 리스크 체크 도구예요.
          </p>
        </div>
      </section>

      {/* 공감 섹션 */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-8">
            혹시 지금 이런 마음이 드나요?
          </h2>
          <ul className="space-y-4">
            {empathyItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700 text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 작동 방식 섹션 */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-8">
            복잡한 상황을, 질문으로 차분히 정리해봐요.
          </h2>
          <div className="space-y-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-base mb-1">{item.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 결과 예시 섹션 */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-8">
            이런 결과를 확인할 수 있어요.
          </h2>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span className="text-amber-700 text-xs font-semibold">주의 구간</span>
            </div>
            {resultPreview.map((row) => (
              <div key={row.label}>
                <p className="text-slate-400 text-xs mb-1">{row.label}</p>
                <p className="text-slate-700 text-sm leading-relaxed">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 신뢰 섹션 */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <h2 className="text-slate-900 text-xl md:text-2xl font-bold mb-8">
            이런 방식으로 정리해드려요.
          </h2>
          <ul className="space-y-3">
            {trustItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
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
        <div className="max-w-3xl mx-auto px-5 py-14 md:py-20">
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h3 className="text-slate-900 font-bold text-lg mb-3">
              내 상황을 정리했다면, 시장 흐름도 함께 보는 게 좋아요.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
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
        <div className="max-w-3xl mx-auto px-5 py-12 text-center">
          <p className="text-indigo-100 text-sm mb-3">지금 바로 확인해보세요.</p>
          <h3 className="text-white text-xl font-bold mb-6">
            내 투자 리스크 상태, 먼저 정리해봐요.
          </h3>
          <Link
            href="/diagnosis/investment-risk"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-semibold text-base px-8 py-4 rounded-xl transition-colors"
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
