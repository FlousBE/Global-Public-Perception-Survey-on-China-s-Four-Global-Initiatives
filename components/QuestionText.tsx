import React from 'react';

interface QuestionTextProps {
  text: string;
  required?: boolean;
  note?: string;
}

export const QuestionText: React.FC<QuestionTextProps> = ({ text, required, note }) => (
  <div className="mb-3">
    <h3 className="text-base font-semibold text-gray-900">
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </h3>
    {note && <p className="text-sm text-gray-500 mt-1">{note}</p>}
  </div>
);
