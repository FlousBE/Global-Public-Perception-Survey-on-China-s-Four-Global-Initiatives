import React from 'react';
import { Question, OptionType, ComplexOption } from '../types';

interface SingleChoiceProps {
  question: Question;
  value: any;
  onChange: (val: any) => void;
  langStrings: any;
}

export const SingleChoice: React.FC<SingleChoiceProps> = ({ question, value, onChange, langStrings }) => {
  const isSelect = question.选项 && question.选项.some((opt: any) => opt.分组);
  
  // Handling Grouped Select (Nationality)
  if (isSelect) {
    return (
      <div className="mt-2">
        <select
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm p-2.5 border"
          value={value as string || ""}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{langStrings.selectPlaceholder}</option>
          {question.选项?.map((group: any, idx) => (
            <optgroup key={idx} label={`Group ${group.分组}`}>
              {group.选项.map((country: string) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>
    );
  }

  // Standard Radio Buttons
  return (
    <div className="space-y-3 mt-2">
      {question.选项?.map((opt: OptionType, idx) => {
        const optLabel = typeof opt === 'string' ? opt : (opt as ComplexOption).选项;
        const isSelected = typeof value === 'object' ? value?.choice === optLabel : value === optLabel;
        const hasSupplement = typeof opt === 'object' && (opt as ComplexOption).补充;

        return (
          <label 
            key={idx} 
            className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors ${
              isSelected ? 'bg-brand-50 border-brand-200 ring-1 ring-brand-200' : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center h-5">
              <input
                type="radio"
                name={question.编号}
                className="h-4 w-4 text-brand-600 border-gray-300 focus:ring-brand-500"
                checked={isSelected}
                onChange={() => {
                   if (hasSupplement) {
                       onChange({ choice: optLabel, supplement: '' });
                   } else {
                       onChange(optLabel);
                   }
                }}
              />
            </div>
            <div className="ml-3 text-sm flex-1">
              <span className="font-medium text-gray-900">{optLabel}</span>
              {hasSupplement && isSelected && (
                <div className="mt-2">
                   <input 
                      type={(typeof (opt as ComplexOption).补充 === 'string' && 
                            ((opt as ComplexOption).补充 as string).match(/email|mail|邮箱|邮件/i)) 
                            ? "email" 
                            : "text"}
                      className="w-full border-b border-gray-300 focus:border-brand-500 focus:ring-0 text-sm py-1 px-0 bg-transparent placeholder-gray-400"
                      placeholder={typeof (opt as ComplexOption).补充 === 'string' ? (opt as ComplexOption).补充 as string : langStrings.otherPlaceholder}
                      value={typeof value === 'object' ? value.supplement : ''}
                      onChange={(e) => onChange({ choice: optLabel, supplement: e.target.value })}
                      onClick={(e) => e.stopPropagation()}
                   />
                </div>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
};
