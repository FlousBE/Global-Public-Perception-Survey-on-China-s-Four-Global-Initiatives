import React from 'react';
import { Question, MatrixRow } from '../types';

interface MatrixProps {
  question: Question;
  value: { [key: string]: number };
  onChange: (val: { [key: string]: number }) => void;
}

export const Matrix: React.FC<MatrixProps> = ({ question, value = {}, onChange }) => {
  const rows = question.选项 as unknown as MatrixRow[]; // Type casting based on known structure

  const handleRate = (rowKey: string, score: number) => {
    onChange({ ...value, [rowKey]: score });
  };

  return (
    <div className="mt-4 overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Header Row */}
        <div className="flex items-center pb-2 border-b border-gray-200 mb-2">
          <div className="w-1/4 font-medium text-sm text-gray-500">信源</div>
          <div className="w-3/4 flex justify-between px-2">
             <span className="text-xs text-gray-400">非常不信任 (1)</span>
             <span className="text-xs text-gray-400">非常信任 (10)</span>
          </div>
        </div>
        
        {rows.map((row, idx) => (
          <div key={idx} className="flex items-center py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50">
            <div className="w-1/4 text-sm font-medium text-gray-900 pr-4">{row.信源}</div>
            <div className="w-3/4 flex justify-between items-center px-2">
              {row.评分.map((score) => (
                <button
                  key={score}
                  type="button"
                  onClick={() => handleRate(row.信源, score)}
                  className={`w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center transition-all ${
                    value[row.信源] === score 
                      ? 'bg-brand-600 text-white shadow-md scale-110' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
