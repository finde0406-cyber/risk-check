// 전체 앱 루트 레이아웃 — 메타데이터·폰트·공통 래퍼 정의
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "리스크체크 | 투자 리스크 진단 · 손절 · 물타기 판단 정리",
  description:
    "손절해야 할지 모르겠거나 물타기, 레버리지, 반대매매가 걱정될 때 몇 가지 질문으로 현재 투자 리스크와 먼저 확인해야 할 기준을 차분히 정리해드려요.",
  keywords:
    "투자 리스크 진단, 손절 기준, 물타기, 반대매매, 레버리지 위험, 주식 손실",
  openGraph: {
    title: "리스크체크 | 투자 리스크 진단 · 손절 · 물타기 판단 정리",
    description:
      "손절해야 할지 모르겠거나 물타기, 레버리지, 반대매매가 걱정될 때 몇 가지 질문으로 현재 투자 리스크와 먼저 확인해야 할 기준을 차분히 정리해드려요.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
