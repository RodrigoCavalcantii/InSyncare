import React from "react";

const habitConfig = {
  water: {
    icon: "water_drop",
    styles: {
      container:
        "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-100 dark:border-cyan-800",
      iconBox: "bg-cyan-100 text-cyan-600 dark:bg-cyan-800 dark:text-cyan-200",
      title: "text-cyan-900 dark:text-cyan-50",
    },
  },
  food: {
    icon: "restaurant",
    styles: {
      container:
        "bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800",
      iconBox:
        "bg-orange-100 text-orange-600 dark:bg-orange-800 dark:text-orange-200",
      title: "text-orange-900 dark:text-orange-50",
    },
  },
  activity: {
    icon: "directions_run",
    styles: {
      container:
        "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800",
      iconBox:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-800 dark:text-emerald-200",
      title: "text-emerald-900 dark:text-emerald-50",
    },
  },
  sleep: {
    icon: "bedtime",
    styles: {
      container:
        "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800",
      iconBox:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-200",
      title: "text-indigo-900 dark:text-indigo-50",
    },
  },
};

export function HabitCard({ title, description, type }) {
  const config = habitConfig[type] || habitConfig.water;

  return (
    <div
      className={`group relative flex items-center p-4 rounded-3xl border shadow-sm transition-all active:scale-[0.98] mb-3 
      ${config.styles.container}`}
    >
      <div
        className={`relative flex items-center justify-center size-12 rounded-2xl mr-4 shrink-0 
        ${config.styles.iconBox}`}
      >
        <span className="material-symbols-outlined">{config.icon}</span>
      </div>

      <div className="relative flex-1">
        <h4
          className={`text-base font-bold decoration-2 ${config.styles.title}`}
        >
          {title}
        </h4>
        <p className="text-xs text-text-body dark:text-gray-400 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}
