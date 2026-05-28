// 리스크체크 메인 랜딩페이지
import Link from "next/link";

const empathyItems = [
  "손절을 미뤄야 할지, 지금 정리해야 할지 모르겠어요.",
  "물타기를 해도 되는 건지 확신이 없어요.",
  "버텨야 할지 정리해야 할지, 기준이 없어요.",
];

const statusTags = [
  "손절을 미루고 있음",
  "물타기 고민 중",
  "버텨야 할지 모르겠음",
  "기준 없이 대응 중",
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
      <section className="bg-[#F7F8FF]">
        <div className="max-w-lg mx-auto px-6 pt-10 pb-10">

          {/* 브랜드 라벨 */}
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.14em] mb-5">
            투자 리스크 진단
          </p>

          {/* 카피 블록 */}
          <div className="mb-5">
            <p className="text-slate-500 text-base font-normal leading-normal mb-1.5">
              지금 판단이 흔들린다면,
            </p>
            <h1 className="text-slate-900 text-[2.25rem] font-bold leading-[1.2] tracking-tight">
              먼저 내 상태부터<br />정리해보세요.
            </h1>
          </div>

          {/* 공감 블록 */}
          <div className="mb-5">
            <p className="text-slate-500 text-xs font-medium mb-3">혹시 지금 이런 마음인가요?</p>
            <div className="space-y-2.5">
              {empathyItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                  <span className="text-slate-600 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 상태 태그 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {statusTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1.5 leading-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/diagnosis/investment-risk"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-[15px] rounded-2xl text-center transition-colors shadow-[0_4px_14px_rgba(79,70,229,0.25)]"
          >
            내 투자 상태 먼저 정리하기
          </Link>
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
