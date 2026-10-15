import { UserStats } from '../types';

const STORAGE_KEY = 'tensereflex_user_stats_v1';

export const getDefaultStats = (): UserStats => {
  const today = new Date().toISOString().split('T')[0];
  return {
    streakDays: 1,
    lastPracticeDate: today,
    totalAnswered: 0,
    totalCorrect: 0,
    masteredTenses: {},
    bookmarkedIds: [],
    mistakeIds: []
  };
};

export const loadUserStats = (): UserStats => {
  if (typeof window === 'undefined') return getDefaultStats();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultStats();
    const parsed = JSON.parse(raw) as UserStats;
    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastPracticeDate !== today) {
      const last = new Date(parsed.lastPracticeDate).getTime();
      const current = new Date(today).getTime();
      const diffDays = Math.round((current - last) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        parsed.streakDays += 1;
        parsed.lastPracticeDate = today;
      } else if (diffDays > 1) {
        parsed.streakDays = 1;
        parsed.lastPracticeDate = today;
      }
    }
    return parsed;
  } catch {
    return getDefaultStats();
  }
};

export const saveUserStats = (stats: UserStats) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.error('Error saving user stats:', err);
  }
};
