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

      {/* ── 첫 장면 패널 ── */}
      <section className="bg-[#F7F8FF]">

        {/* 히어로 */}
        <div className="flex flex-col items-center text-center max-w-lg mx-auto px-6 pt-14 pb-10">

          {/* 제품 뱃지 — 브랜드 앵커 */}
          <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-indigo-600 text-xs font-semibold tracking-wide">투자 리스크 진단</span>
          </div>

          {/* 메인 카피 — h1 + 보조 카피를 한 단위로 묶음 */}
          <h1 className="text-slate-900 text-[1.75rem] font-extrabold leading-tight tracking-tight mb-3">
            지금 판단이 흔들린다면,<br />
            먼저 내 상태부터 정리해보세요.
          </h1>

          <p className="text-slate-400 text-[0.8125rem] leading-relaxed mb-7">
            몇 가지 질문으로 지금 상태를 차분히 정리해드려요.
          </p>

          {/* CTA */}
          <Link
            href="/diagnosis/investment-risk"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-4 rounded-2xl text-center transition-colors shadow-[0_4px_16px_rgba(79,70,229,0.26)]"
          >
            내 투자 리스크 진단하기
          </Link>

          <p className="text-slate-400 text-xs mt-3">
            투자 조언이 아니라, 현재 상태를 차분히 정리해보기 위한 도구예요.
          </p>
        </div>

        {/* 공감 패널 — 히어로 연장선, 좌측 선 강조 */}
        <div className="max-w-lg mx-auto px-6 pt-5 pb-10 border-t border-slate-200/40">
          <p className="text-slate-400 text-xs mb-4">혹시 지금 이런 마음인가요?</p>
          <div className="space-y-3.5">
            {empathyItems.map((item, i) => (
              <p
                key={i}
                className="text-slate-500 text-[0.8125rem] leading-relaxed pl-3.5 border-l border-slate-300/50"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3단계 흐름 */}
      <section className="border-t border-slate-100 bg-white">
        <div className="max-w-lg mx-auto px-5 pt-8 pb-7">
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
