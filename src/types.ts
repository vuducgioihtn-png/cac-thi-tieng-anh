export type TenseId =
  | 'present_simple'
  | 'present_continuous'
  | 'present_perfect'
  | 'present_perfect_continuous'
  | 'past_simple'
  | 'past_continuous'
  | 'past_perfect'
  | 'past_perfect_continuous'
  | 'future_simple'
  | 'near_future'
  | 'future_continuous'
  | 'future_perfect'
  | 'future_perfect_continuous'
  | 'mixed';

export type TenseCategory = 'present' | 'past' | 'future' | 'mixed';

export interface Exercise {
  id: number;
  tenseId: TenseId;
  category: TenseCategory;
  tenseNameEn: string;
  tenseNameVi: string;
  promptSentence: string;
  fullSentence: string;
  targetAnswer: string;
  acceptedAnswers: string[];
  ipa: string;
  translationVi: string;
  explanationVi: string;
  signalWords: string[];
  verbPrompt: string;
  options: string[];
}

export interface TenseInfo {
  id: TenseId;
  nameEn: string;
  nameVi: string;
  category: TenseCategory;
  formula: {
    affirmative: string;
    negative: string;
    question: string;
    whQuestion?: string;
    whQuestionExample?: string;
    whSubjectException?: string;
  };
  conceptVi: string;
  signalWords: string[];
  visualTheme: {
    iconName: string;
    colorBg: string;
    colorText: string;
    borderColor: string;
  };
  coreTip: string;
  exampleSentence: string;
  exampleTranslation: string;
}

export interface UserStats {
  streakDays: number;
  lastPracticeDate: string;
  totalAnswered: number;
  totalCorrect: number;
  masteredTenses: Record<string, { correct: number; total: number }>;
  bookmarkedIds: number[];
  mistakeIds: number[];
}
