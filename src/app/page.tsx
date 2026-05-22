// 리스크체크 메인 랜딩페이지
import Link from "next/link";

const empathyItems = [
  "손절해야 할지, 더 버텨야 할지 모르겠어요.",
  "물타기를 해도 되는 건지 확신이 없어요.",
  "누가 기준만 좀 정리해줬으면 좋겠어요.",
];

const steps = [
  { n: "01", label: "지금 상황과 마음 상태를 선택해요." },
  { n: "02", label: "손실 수준과 대응 여력을 확인해요." },
  { n: "03", label: "리스크 구간과 먼저 볼 기준을 정리해드려요." },
];

const DOTS = ["bg-emerald-400", "bg-amber-400", "bg-orange-400", "bg-red-400"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* 헤더 */}
      <header className="bg-white border-b border-slate-100">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center">
          <span className="text-slate-900 font-semibold text-sm tracking-tight">리스크체크</span>
          <span className="text-slate-400 text-xs ml-2">by 금융리스크랩</span>
        </div>
      </header>

      {/* ── 첫 장면 패널: 히어로 + 공감 ── */}
      <section className="bg-[#F7F8FF]">

        {/* 히어로 — 중앙 정렬로 장면감 형성 */}
        <div className="flex flex-col items-center text-center max-w-lg mx-auto px-5 pt-16 pb-10">

          {/* 브랜드 오브제: 4단계 리스크 레벨 점선 */}
          <div className="flex items-center mb-10">
            {DOTS.map((color, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <div className="w-10 h-px bg-slate-200" />}
                <div className={`w-4 h-4 rounded-full ${color} opacity-75`} />
              </div>
            ))}
          </div>

          <h1
            className="text-slate-900 text-[1.75rem] font-extrabold leading-tight tracking-tight mb-4"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            지금 판단이 흔들린다면,<br />
            먼저 내 상태부터 정리해볼 수 있어요.
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed mb-9 max-w-xs">
            몇 가지 질문만으로 현재 리스크와 먼저 확인해야 할 기준을 차분히 정리해드려요.
          </p>

          <Link
            href="/diagnosis/investment-risk"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-4 rounded-xl text-center transition-colors shadow-[0_4px_14px_rgba(79,70,229,0.25)]"
          >
            내 투자 리스크 진단하기
          </Link>
          <p className="text-slate-400 text-xs mt-3.5">
            투자 조언이 아니라, 현재 상태를 차분히 정리해보기 위한 리스크 체크예요.
          </p>
        </div>

        {/* 공감 포인트 — 히어로와 같은 패널, 얇은 구분선으로 연결 */}
        <div className="max-w-lg mx-auto px-5 pt-6 pb-9 border-t border-slate-200/50">
          <p className="text-slate-400 text-xs mb-3">혹시 지금 이런 마음인가요?</p>
          <ul className="space-y-2">
            {empathyItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <span className="shrink-0 w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-slate-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3단계 흐름 */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-lg mx-auto px-5 py-7">
          <p className="text-slate-400 text-xs mb-4">이렇게 진행돼요.</p>
          <div className="space-y-3">
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-3">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-indigo-50 text-indigo-500 text-xs font-bold flex items-center justify-center">
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
