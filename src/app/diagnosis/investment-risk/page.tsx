'use client';
// 투자 리스크 진단 질문 플로우 페이지

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "@/data/questions";
import { encodeAnswers, type DiagnosisAnswers } from "@/lib/risk-calculator";

export default function DiagnosisPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswers>({});

  // 스텝 전환 시 항상 최상단에서 시작
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const question = questions[currentStep];
  const totalSteps = questions.length;
  const isLast = currentStep === totalSteps - 1;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;
  const selected = answers[question.id] ?? null;

  function handleSelect(optionId: string) {
    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (isLast) {
        router.push(`/diagnosis/investment-risk/result?answers=${encodeAnswers(newAnswers)}`);
      } else {
        setCurrentStep((s) => s + 1);
      }
    }, 280);
  }

  function handleBack() {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* 헤더 + 진행 바 */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-5 py-3.5 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
            ← 홈으로
          </Link>
          <span className="text-slate-400 text-xs tabular-nums">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
        <div className="h-0.5 bg-slate-100">
          <div
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* 질문 + 선택지 — key로 리마운트해 step-enter 애니메이션 트리거 */}
      <div
        key={currentStep}
        className="step-enter flex-1 max-w-lg mx-auto w-full px-5 pt-10 pb-6"
      >
        <p className="text-indigo-500 text-xs font-semibold mb-4 tracking-wide">
          질문 {question.step}
        </p>
        <h1 className="text-slate-900 text-xl font-bold leading-snug mb-2">
          {question.question}
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-7">
          {question.description}
        </p>

        {/* 선택지 */}
        <div className="space-y-2.5 mb-8">
          {question.options.map((option) => {
            const isActive = selected === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full min-h-[72px] touch-manipulation text-left px-4 py-4 rounded-xl border text-sm leading-relaxed transition-all active:scale-[0.99] ${
                  isActive
                    ? "border-indigo-400 bg-indigo-50 text-indigo-800 font-medium"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* 이전 버튼 */}
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="w-full py-3.5 rounded-xl border border-slate-200 text-slate-500 text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            이전
          </button>
        )}

        <p className="text-slate-400 text-xs mt-6 text-center">
          투자 조언이 아니라, 현재 상황을 차분히 정리해보기 위한 도구예요.
        </p>
      </div>
    </main>
  );
}
