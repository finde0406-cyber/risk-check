// 리스크체크 메인 랜딩페이지
import Link from "next/link";

const empathyItems = [
  "손절해야 할지, 더 버텨야 할지 모르겠어요.",
  "물타기를 해도 되는 건지 확신이 없어요.",
  "누가 기준만 좀 정리해줬으면 좋겠어요.",
];

const steps = [
  { step: "01", label: "지금 상황과 마음 상태를 선택해요." },
  { step: "02", label: "손실 수준과 대응 여력을 확인해요." },
  { step: "03", label: "리스크 구간과 먼저 볼 기준을 정리해드려요." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center">
          <span className="text-slate-900 font-semibold text-sm tracking-tight">리스크체크</span>
          <span className="text-slate-400 text-xs ml-2">by 금융리스크랩</span>
        </div>
      </header>

      {/* 히어로 */}
      <section className="max-w-2xl mx-auto px-5 pt-14 pb-12">
        <p className="text-indigo-600 text-xs font-semibold tracking-wide mb-5 uppercase">
          투자 리스크 진단
        </p>
        <h1 className="text-slate-900 text-[1.75rem] md:text-4xl font-bold leading-snug mb-4"
          style={{ textWrap: "balance" } as React.CSSProperties}>
          지금 판단이 어려운 건, 정보가 부족해서만은 아닐 수 있어요.
        </h1>
        <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
          몇 가지 질문에 답하면, 현재 리스크 상태와 지금 먼저 확인해야 할 기준을 차분하게 정리해드려요.
        </p>
        <Link
          href="/diagnosis/investment-risk"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-colors"
        >
          내 투자 리스크 진단하기
        </Link>
        <p className="text-slate-400 text-xs mt-4 leading-relaxed max-w-sm">
          투자 조언이 아니라, 현재 상황을 차분히 정리해보기 위한 도구예요.
        </p>
      </section>

      {/* 공감 포인트 */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-5 py-10">
          <p className="text-slate-500 text-xs font-medium mb-4">혹시 지금 이런 마음인가요?</p>
          <ul className="space-y-2.5">
            {empathyItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 작동 방식 */}
      <section className="border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-5 py-10">
          <p className="text-slate-500 text-xs font-medium mb-5">이렇게 진행돼요.</p>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-center gap-4">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <span className="text-slate-700 text-sm leading-relaxed">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 머니플로우레이더 연결 */}
      <section className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-2xl mx-auto px-5 py-10">
          <div className="bg-slate-800 rounded-2xl px-6 py-6">
            <p className="text-white text-sm font-semibold mb-2 leading-snug">
              내 상황을 정리했다면, 시장 흐름도 함께 보는 게 좋아요.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-5">
              주요 테마와 자금 흐름은 머니플로우레이더에서 이어서 확인해보세요.
            </p>
            <a
              href="https://moneyflowradar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              머니플로우레이더 보기
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-5 py-6">
          <p className="text-slate-400 text-xs leading-relaxed">
            이 서비스는 투자 조언이나 투자 권유를 목적으로 하지 않아요. 모든 투자 결정은 본인 판단과 책임 하에 이루어져야 해요.
          </p>
        </div>
      </footer>
    </main>
  );
}
