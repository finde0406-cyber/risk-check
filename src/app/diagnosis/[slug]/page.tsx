// SEO 유입용 진단 랜딩페이지를 slug별로 렌더링하는 동적 라우트
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  seoDiagnosisPages,
  seoDiagnosisSlugList,
  type SeoDiagnosisSlug,
} from "@/data/seo-diagnosis-pages";

const BASE_URL = "https://check.financialrisklab.com";

function getPageData(slug: string) {
  if (!(slug in seoDiagnosisPages)) {
    notFound();
  }

  return seoDiagnosisPages[slug as SeoDiagnosisSlug];
}

export async function generateStaticParams() {
  return seoDiagnosisSlugList.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageData(slug);
  const canonical = `${BASE_URL}/diagnosis/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url: canonical,
    },
  };
}

export default async function SeoDiagnosisPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPageData(slug);
  const relatedPages = page.relatedSlugs.map((relatedSlug) => seoDiagnosisPages[relatedSlug]);

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-white border-b border-slate-200/70">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center">
          <Link href="/" className="text-slate-900 font-bold text-sm tracking-tight">
            리스크체크
          </Link>
          <span className="text-slate-300 mx-2.5 text-sm" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-400 text-xs">금융리스크랩</span>
        </div>
      </header>

      <section className="bg-[#F7F8FF] border-b border-slate-100">
        <div className="max-w-lg mx-auto px-6 pt-14 pb-12">
          <p className="text-indigo-600 text-xs font-semibold tracking-[0.14em] mb-7">
            {page.heroEyebrow}
          </p>
          <h1 className="text-slate-900 text-[2.15rem] font-bold leading-[1.18] tracking-tight mb-5">
            {page.heroTitle}
          </h1>
          <div className="space-y-3 mb-8">
            {page.heroDescription.map((line) => (
              <p key={line} className="text-slate-600 text-base leading-relaxed">
                {line}
              </p>
            ))}
          </div>
          <Link
            href="/diagnosis/investment-risk"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-[15px] rounded-2xl text-center transition-colors shadow-[0_4px_14px_rgba(79,70,229,0.25)]"
          >
            {page.primaryCtaLabel}
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-lg mx-auto px-5 py-8 space-y-4">
          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 px-5 py-6">
            <p className="text-slate-500 text-xs font-medium tracking-wide mb-4">
              {page.empathyTitle}
            </p>
            <div className="space-y-3">
              {page.empathyItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-300 shrink-0" />
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white px-5 py-6 shadow-sm">
            <h2 className="text-slate-900 text-lg font-semibold leading-snug mb-4">
              {page.interpretationTitle}
            </h2>
            <div className="space-y-4">
              {page.interpretationItems.map((item) => (
                <p key={item} className="text-slate-600 text-sm leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/70 px-5 py-6">
            <h2 className="text-slate-900 text-lg font-semibold leading-snug mb-4">
              {page.checklistTitle}
            </h2>
            <div className="space-y-3">
              {page.checklistItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 rounded-lg bg-white text-indigo-600 text-[11px] font-bold px-2 py-1 shrink-0">
                    체크
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white px-5 py-6 shadow-sm">
            <p className="text-slate-900 text-base font-semibold mb-2">
              지금 상태를 더 구체적으로 정리해보고 싶다면.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              몇 가지 질문으로 현재 투자 리스크와 먼저 확인해야 할 기준을 차분히 정리해드려요.
            </p>
            <Link
              href="/diagnosis/investment-risk"
              className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm py-[15px] rounded-2xl text-center transition-colors shadow-[0_4px_14px_rgba(79,70,229,0.25)]"
            >
              {page.primaryCtaLabel}
            </Link>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50 px-5 py-6">
            <h2 className="text-slate-900 text-base font-semibold mb-4">관련 진단도 이어서 볼 수 있어요.</h2>
            <div className="space-y-3">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={`/diagnosis/${relatedPage.slug}`}
                  className="block rounded-2xl border border-slate-100 bg-white px-4 py-4 hover:border-slate-200 transition-colors"
                >
                  <p className="text-slate-900 text-sm font-semibold leading-snug mb-1">
                    {relatedPage.heroEyebrow}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">{relatedPage.heroTitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-lg mx-auto px-5 py-7 space-y-4">
          <div className="bg-slate-800 rounded-2xl px-5 py-5">
            <p className="text-white text-sm font-semibold mb-2 leading-snug">
              내 투자 상태를 확인했다면, 지금 시장에서 돈과 관심이 몰리는 섹터도 함께 확인해보세요.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              돈이 몰리는 곳에는 과열, 레버리지, 청산 리스크도 함께 커질 수 있습니다.
            </p>
            <a
              href="https://moneyflowradar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-slate-100 text-slate-900 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              머니플로우 레이더 보기
            </a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white px-5 py-5 shadow-sm">
            <p className="text-slate-900 text-sm font-semibold mb-2 leading-snug">
              더 깊은 금융 리스크 해설은 금융리스크랩에서 확인할 수 있습니다.
            </p>
            <a
              href="https://financialrisklab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              금융리스크랩 글 보기
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100">
        <div className="max-w-lg mx-auto px-5 py-5">
          <p className="text-slate-400 text-xs leading-relaxed">
            이 페이지는 투자 추천, 매수·매도 신호, 수익 보장을 제공하지 않아요. 모든 투자 판단은 본인 책임 하에 이루어져야 하며, 이 진단은 현재 리스크와 판단 기준을 정리해보기 위한 참고용 도구예요.
          </p>
        </div>
      </footer>
    </main>
  );
}
