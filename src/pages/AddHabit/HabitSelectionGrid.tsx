import React from "react";
import { HABIT_TYPES, HabitKey } from "./habitConstants";

interface HabitSelectionGridProps {
  onSelect: (key: HabitKey) => void;
}

export function HabitSelectionGrid({ onSelect }: HabitSelectionGridProps) {
  return (
    <div className="flex-1 px-6 pt-4 pb-8 overflow-y-auto no-scrollbar">
      <div className="grid grid-cols-2 gap-4">
        {(Object.keys(HABIT_TYPES) as HabitKey[]).map((key) => {
          const habit = HABIT_TYPES[key];
          return (
            <button
              key={habit.id}
              onClick={() => onSelect(key)}
              className={`
                flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all active:scale-95 aspect-square
                ${habit.styles.bg} ${habit.styles.border}
              `}
            >
              <div
                className={`
                w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm
                ${habit.styles.iconBg} ${habit.styles.icon}
              `}
              >
                <span className="material-symbols-outlined text-3xl">
                  {habit.icon}
                </span>
              </div>
              <span className={`font-bold text-lg ${habit.styles.text}`}>
                {habit.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
