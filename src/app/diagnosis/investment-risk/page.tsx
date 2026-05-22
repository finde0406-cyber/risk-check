'use client';
// 투자 리스크 진단 질문 플로우 페이지

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "@/data/questions";
import { encodeAnswers, type DiagnosisAnswers } from "@/lib/risk-calculator";

export default function DiagnosisPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswers>({});

  const question = questions[currentStep];
  const totalSteps = questions.length;
  const isLast = currentStep === totalSteps - 1;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;
  const selected = answers[question.id] ?? null;

  function handleSelect(optionId: string) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionId }));
  }

  function handleNext() {
    if (!selected) return;

    if (isLast) {
      const encoded = encodeAnswers(answers);
      router.push(`/diagnosis/investment-risk/result?answers=${encoded}`);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  }

  function handleBack() {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
            ← 홈으로
          </Link>
          <span className="text-slate-500 text-sm">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
        {/* 진행 바 */}
        <div className="h-1 bg-slate-100">
          <div
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-10 md:py-14">
        {/* 질문 번호 */}
        <p className="text-indigo-500 text-sm font-semibold mb-3">
          Q{question.step}
        </p>

        {/* 질문 */}
        <h1 className="text-slate-900 text-xl md:text-2xl font-bold leading-snug mb-3">
          {question.question}
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          {question.description}
        </p>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">
          한 문항씩 천천히 골라주시면, 지금 가장 먼저 확인해야 할 기준을 정리해드릴게요.
        </p>

        {/* 선택지 */}
        <div className="space-y-3 mb-10">
          {question.options.map((option) => {
            const isActive = selected === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full text-left px-5 py-4 rounded-xl border text-sm leading-relaxed transition-all ${
                  isActive
                    ? "border-indigo-500 bg-indigo-50 text-indigo-800 font-medium"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-3">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="flex-1 py-4 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              이전
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!selected}
            className={`flex-[2] py-4 rounded-xl text-sm font-semibold transition-colors ${
              selected
                ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }`}
          >
            {isLast ? "결과 확인하기" : "다음"}
          </button>
        </div>

        {/* 주의 문구 */}
        <p className="text-slate-400 text-xs mt-8 text-center leading-relaxed">
          이 진단은 투자 조언이 아니에요. 현재 상황을 차분히 정리해보기 위한 도구예요.
        </p>
      </div>
    </main>
  );
}
