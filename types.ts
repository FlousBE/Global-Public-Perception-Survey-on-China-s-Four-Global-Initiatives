export type Language = 'zh' | 'en' | 'fr' | 'es' | 'ru' | 'ar';

export interface ComplexOption {
  选项: string;
  补充?: boolean | string; // If string, it's the placeholder or label for input
  分组?: string; // For Q1 grouping
}

export interface MatrixRow {
  信源: string;
  评分: number[];
}

export type OptionType = string | ComplexOption | { 分组: string; 选项: string[] } | MatrixRow;

export interface Question {
  编号: string;
  类型: '单选' | '多选' | '矩阵' | '单选+补充' | '评分';
  题目: string;
  选项?: OptionType[];
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
  补充说明?: string;
  子类别?: string; // For nested structure
}

export interface QuestionGroup {
  类别?: string;
  子类别?: string;
  问题: (Question | QuestionGroup)[]; // Recursive to handle the nested structure in "四大倡议认知测量"
}

export interface SurveyInfo {
  标题: string;
  说明: string;
  保密声明: string;
  预计时间: string;
  完成奖励: string;
}

export interface SurveyData {
  问卷信息: SurveyInfo;
  问题列表: QuestionGroup[];
}

export interface AnswerState {
  [questionId: string]: string | string[] | { [rowKey: string]: number } | { choice: string; supplement?: string };
}

export interface UIStrings {
  start: string;
  next: string;
  back: string;
  submit: string;
  required: string;
  selectPlaceholder: string;
  otherPlaceholder: string;
  progress: string;
  thankYouTitle: string;
  thankYouMessage: string;
}
