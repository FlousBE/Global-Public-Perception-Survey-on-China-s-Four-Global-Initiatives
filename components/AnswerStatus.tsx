import React, { useState } from 'react';
import { Question, AnswerState } from '../types';

interface AnswerStatusProps {
  pages: { title: string; questions: Question[] }[];
  answers: AnswerState;
  currentStep: number;
  onJumpToStep: (step: number) => void;
  langStrings: any;
}

export const AnswerStatus: React.FC<AnswerStatusProps> = ({ 
  pages, 
  answers, 
  currentStep, 
  onJumpToStep,
  langStrings 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Flatten questions to get total count and index
  const allQuestions = pages.flatMap((page, pageIdx) => 
    page.questions.map(q => ({ ...q, pageIdx }))
  );

  const isAnswered = (q: Question) => {
    const ans = answers[q.编号];
    if (!ans) return false;
    if (Array.isArray(ans) && ans.length === 0) return false;
    // Matrix check
    if (q.类型 === '矩阵') {
       // Ideally check if all rows are answered, but simple check for now
       return Object.keys(ans as object).length > 0; 
    }
    return true;
  };

  const answeredCount = allQuestions.filter(q => isAnswered(q)).length;
  const progress = Math.round((answeredCount / allQuestions.length) * 100);

  return (
    <>
      {/* Mobile Toggle Button (Fixed) */}
      <button
        className="fixed top-20 right-4 z-40 bg-white p-2 rounded-full shadow-md md:hidden text-brand-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {answeredCount}
        </span>
      </button>

      {/* Desktop / Expanded Mobile Card */}
      <div className={`fixed top-24 left-4 z-30 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transform transition-transform duration-300 max-h-[80vh] overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      } md:block`}>
        <div className="p-4 border-b border-gray-100 bg-brand-50 flex justify-between items-center sticky top-0 bg-opacity-95 backdrop-blur">
          <div>
            <h3 className="font-bold text-gray-800 text-sm">{langStrings.progress || 'Progress'}</h3>
            <div className="text-xs text-gray-500">{answeredCount} / {allQuestions.length} Completed</div>
          </div>
          <button className="md:hidden text-gray-400" onClick={() => setIsOpen(false)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-4 grid grid-cols-5 gap-2">
          {allQuestions.map((q, idx) => {
            const answered = isAnswered(q);
            const isCurrent = q.pageIdx === currentStep;
            
            return (
              <button
                key={q.编号}
                onClick={() => {
                    onJumpToStep(q.pageIdx);
                    if (window.innerWidth < 768) setIsOpen(false);
                }}
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-colors ${
                  isCurrent 
                    ? 'ring-2 ring-brand-500 ring-offset-1 border-brand-500' 
                    : ''
                } ${
                  answered
                    ? 'bg-brand-100 text-brand-700 border border-brand-200'
                    : 'bg-gray-50 text-gray-400 border border-gray-200 hover:bg-gray-100'
                }`}
                title={q.题目}
              >
                {q.编号.replace('Q', '')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Overlay for mobile when open */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black bg-opacity-25 z-20 md:hidden"
            onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
