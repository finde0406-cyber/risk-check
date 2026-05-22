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

      {/* 헤더 — font-bold + 중점 구분자로 브랜드 위계 강화 */}
      <header className="bg-white border-b border-slate-200/70">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center">
          <span className="text-slate-900 font-bold text-sm tracking-tight">리스크체크</span>
          <span className="text-slate-300 mx-2.5 text-sm" aria-hidden="true">·</span>
          <span className="text-slate-400 text-xs">금융리스크랩</span>
        </div>
      </header>

      {/* ── 첫 장면 패널 ── */}
      <section className="bg-[#F7F8FF]">

        {/* 히어로 */}
        <div className="flex flex-col items-center text-center max-w-lg mx-auto px-6 pt-14 pb-9">

          {/* 에디토리얼 아이브로 라벨 — 더 작고 트래킹 넓게, 카피를 소개하는 조용한 앵커 */}
          <p className="text-indigo-600 text-sm font-bold tracking-[0.1em] mb-5">
            투자 리스크 진단
          </p>

          {/* 메인 카피 — 키커(조건절) slate-400 normal로 후퇴 + 헤드라인(결과절) 32px extrabold, 대비 강화 */}
          <h1 className="mb-4">
            <span className="block text-slate-400 text-base font-normal leading-snug mb-2">
              지금 판단이 흔들린다면,
            </span>
            <span className="block text-slate-900 text-[2rem] font-extrabold leading-[1.15] tracking-tight">
              먼저 내 상태부터<br />정리해보세요.
            </span>
          </h1>

          {/* 보조 카피 */}
          <p className="text-slate-400 text-[0.8125rem] leading-relaxed mb-5">
            몇 가지 질문으로 지금 상태를 차분히 정리해드려요.
          </p>

          {/* CTA — 그림자 아주 소폭 정제, 디스클레이머와 간격 정교화 */}
          <Link
            href="/diagnosis/investment-risk"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm py-4 rounded-2xl text-center transition-colors shadow-[0_4px_14px_rgba(79,70,229,0.22)]"
          >
            내 투자 리스크 진단하기
          </Link>

          <p className="text-slate-400 text-xs mt-3.5">
            투자 조언이 아니라, 현재 상태를 차분히 정리해보기 위한 도구예요.
          </p>
        </div>

        {/* 공감 패널 — 배경 불투명도·여백·border 두께 소폭 강화로 존재감 회복 */}
        <div className="max-w-lg mx-auto px-6 pt-5 pb-10 border-t border-slate-200/60">
          <p className="text-slate-400 text-xs mb-3">혹시 지금 이런 마음인가요?</p>
          <div className="bg-white/60 rounded-2xl px-5 py-5 space-y-4 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            {empathyItems.map((item, i) => (
              <p
                key={i}
                className="text-slate-600 text-sm leading-relaxed pl-3.5 border-l-2 border-indigo-200/70"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 3단계 흐름 — 라벨 톤 강화 + 뱃지 인디고 소폭 올려 히어로 흐름 연결 */}
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
