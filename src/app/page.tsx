// 리스크체크 메인 랜딩페이지
import Link from "next/link";

const empathyCards = [
  { text: "손절을\n미루고 있음", active: true },
  { text: "물타기\n고민 중", active: false },
  { text: "버텨야 할지\n모르겠음", active: false },
  { text: "기준 없이\n대응 중", active: false },
];

const steps = [
  { n: "01", label: "지금 상황과 마음 상태를 선택해요." },
  { n: "02", label: "손실 수준과 대응 여력을 확인해요." },
  { n: "03", label: "리스크 구간과 먼저 볼 기준을 정리해드려요." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* 헤더 */}
      <header className="bg-white border-b border-slate-200/70">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center">
          <span className="text-slate-900 font-bold text-sm tracking-tight">리스크체크</span>
          <span className="text-slate-300 mx-2.5 text-sm" aria-hidden="true">·</span>
          <span className="text-slate-400 text-xs">금융리스크랩</span>
        </div>
      </header>

      {/* ── 첫 화면 ── */}
      <section className="bg-slate-900">
        <div className="max-w-lg mx-auto px-6 pt-10 pb-9">

          {/* 브랜드 라벨 */}
          <div className="mb-5">
            <p className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-indigo-300 uppercase">
              투자 리스크 진단
            </p>
          </div>

          {/* 카피 블록 */}
          <div className="mb-7">
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-2">
              판단이 흔들릴 때일수록,
            </p>
            <h1 className="text-slate-50 text-[2rem] font-extrabold leading-[1.18] tracking-tight mb-3">
              먼저 내 상태부터
              <br />
              정리해보세요.
            </h1>
            <p className="text-slate-300/90 text-[13px] leading-relaxed max-w-sm">
              손절을 미루고 있거나, 물타기를 고민하고 있거나, 더 버텨야 할지 헷갈릴 때 지금 내 상태를 먼저 점검해보는 게 좋아요.
            </p>
          </div>

          {/* 공감 카드 그리드 */}
          <p className="text-slate-500 text-[10px] font-semibold tracking-[0.08em] mb-3">
            지금 이런 상태인가요?
          </p>
          <div className="grid grid-cols-2 gap-2.5 mb-7" aria-hidden="true">
            {empathyCards.map((card, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 border ${
                  card.active
                    ? "bg-slate-800 border-indigo-400/70 shadow-[0_12px_24px_rgba(15,23,42,0.28)]"
                    : "bg-slate-800/80 border-slate-700"
                }`}
              >
                <p
                  className={`text-[12px] font-semibold leading-snug whitespace-pre-line ${
                    card.active ? "text-indigo-100" : "text-slate-300"
                  }`}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/diagnosis/investment-risk"
            className="block w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-[14px] py-[15px] rounded-2xl text-center transition-colors shadow-[0_10px_28px_rgba(99,102,241,0.35)]"
          >
            내 투자 상태 먼저 정리하기
          </Link>
          <p className="mt-3 text-[11px] text-slate-400 text-center">
            무료 · 3분 · 개인정보 불필요
          </p>
        </div>
      </section>

      {/* 3단계 흐름 */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-lg mx-auto px-5 pt-8 pb-7">
          <p className="text-slate-500 text-xs font-medium tracking-wide mb-4">이렇게 진행돼요.</p>
          <div className="space-y-3">
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-3">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">
                  {s.n}
                </span>
                <span className="text-slate-600 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 머니플로우레이더 */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-lg mx-auto px-5 py-7">
          <div className="bg-slate-800 rounded-2xl px-5 py-5">
            <p className="text-white text-sm font-semibold mb-1.5 leading-snug">
              내 상태를 정리했다면, 지금 시장의 관심과 자금이 어디로 몰리는지도 함께 보세요.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              돈과 관심이 몰리는 구간에는 과열, 레버리지, 청산 리스크도 함께 커질 수 있어요.
            </p>
            <a
              href="https://moneyflowradar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              머니플로우레이더 보기
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-slate-100">
        <div className="max-w-lg mx-auto px-5 py-5">
          <p className="text-slate-400 text-xs leading-relaxed">
            이 서비스는 투자 조언이나 투자 권유를 목적으로 하지 않아요. 모든 투자 결정은 본인 판단과 책임 하에 이루어져야 해요.
          </p>
        </div>
      </footer>
    </main>
  );
}
