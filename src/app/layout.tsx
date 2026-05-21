// 전체 앱 루트 레이아웃 — 메타데이터·폰트·공통 래퍼 정의
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "리스크체크 by 금융리스크랩",
  description:
    "지금 판단이 어려운 순간, 몇 가지 질문으로 현재 투자 리스크와 먼저 확인해야 할 기준을 차분하게 정리해드려요.",
  keywords:
    "투자 리스크 진단, 손절 기준, 물타기, 반대매매, 레버리지 위험, 주식 손실",
  openGraph: {
    title: "리스크체크 by 금융리스크랩",
    description:
      "지금 판단이 어려운 순간, 몇 가지 질문으로 현재 투자 리스크와 먼저 확인해야 할 기준을 차분하게 정리해드려요.",
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
