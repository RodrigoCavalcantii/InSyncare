export const HABIT_TYPES = {
  water: {
    id: "water",
    label: "Hidratação",
    icon: "water_drop",
    styles: {
      bg: "bg-cyan-50 dark:bg-cyan-900/20",
      border: "border-cyan-100 dark:border-cyan-800",
      text: "text-cyan-900 dark:text-cyan-50",
      icon: "text-cyan-600 dark:text-cyan-200",
      iconBg: "bg-cyan-100 dark:bg-cyan-800",
    },
  },
  food: {
    id: "food",
    label: "Alimentação",
    icon: "restaurant",
    styles: {
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-100 dark:border-orange-800",
      text: "text-orange-900 dark:text-orange-50",
      icon: "text-orange-600 dark:text-orange-200",
      iconBg: "bg-orange-100 dark:bg-orange-800",
    },
  },
  activity: {
    id: "activity",
    label: "Exercício",
    icon: "directions_run",
    styles: {
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-100 dark:border-emerald-800",
      text: "text-emerald-900 dark:text-emerald-50",
      icon: "text-emerald-600 dark:text-emerald-200",
      iconBg: "bg-emerald-100 dark:bg-emerald-800",
    },
  },
  sleep: {
    id: "sleep",
    label: "Sono",
    icon: "bedtime",
    styles: {
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      border: "border-indigo-100 dark:border-indigo-800",
      text: "text-indigo-900 dark:text-indigo-50",
      icon: "text-indigo-600 dark:text-indigo-200",
      iconBg: "bg-indigo-100 dark:bg-indigo-800",
    },
  },
};

export type HabitKey = keyof typeof HABIT_TYPES;
export type HabitConfig = (typeof HABIT_TYPES)[HabitKey];
