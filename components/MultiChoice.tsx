import React from 'react';
import { Question, OptionType, ComplexOption } from '../types';

interface MultiChoiceProps {
  question: Question;
  value: string[];
  onChange: (val: string[]) => void;
  langStrings: any;
}

export const MultiChoice: React.FC<MultiChoiceProps> = ({ question, value = [], onChange, langStrings }) => {
  const handleToggle = (optionLabel: string, exclusive: boolean) => {
    let newValue = [...value];
    
    if (exclusive) {
      // If choosing "None", clear others. If "None" is chosen and toggle again, clear it.
      newValue = newValue.includes(optionLabel) ? [] : [optionLabel];
    } else {
      // Remove exclusive options if normal option selected
      // Find "None" option if it exists
      const noneOption = question.选项?.find((o: any) => o === "无" || o.选项 === "无");
      const noneLabel = typeof noneOption === 'string' ? noneOption : (noneOption as any)?.选项;
      
      if (noneLabel && newValue.includes(noneLabel)) {
         newValue = newValue.filter(v => v !== noneLabel);
      }

      if (newValue.includes(optionLabel)) {
        newValue = newValue.filter(v => v !== optionLabel);
      } else {
        newValue.push(optionLabel);
      }
    }
    onChange(newValue);
  };

  return (
    <div className="space-y-3 mt-2">
      {question.选项?.map((opt: OptionType, idx) => {
        const optLabel = typeof opt === 'string' ? opt : (opt as ComplexOption).选项;
        const isSelected = value.includes(optLabel);
        const isExclusive = optLabel === "无"; // Logic for "None"

        return (
          <label 
            key={idx} 
            className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors ${
              isSelected ? 'bg-brand-50 border-brand-200 ring-1 ring-brand-200' : 'bg-white border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                className="h-4 w-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
                checked={isSelected}
                onChange={() => handleToggle(optLabel, isExclusive)}
              />
            </div>
            <div className="ml-3 text-sm">
              <span className="font-medium text-gray-900">{optLabel}</span>
            </div>
          </label>
        );
      })}
    </div>
  );
};
