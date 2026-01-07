import React, { useState } from "react";
import { getWeekDays, capitalize } from "../../../utils/dateUtils";

export function WeekCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const weekDays = getWeekDays();

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    );
  };

  return (
    <div className="w-full overflow-x-auto no-scrollbar px-6 py-4">
      <div className="flex gap-3 min-w-max">
        {weekDays.map((date, index) => {
          const isSelected = isSameDay(date, selectedDate);

          const dayNumber = date.getDate();
          const weekDayShort = capitalize(
            date
              .toLocaleDateString("pt-BR", { weekday: "short" })
              .replace(".", "")
          );

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`
                flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-2xl transition-all duration-200
                ${
                  isSelected
                    ? "bg-primary text-white shadow-lg shadow-primary/20 transform scale-105"
                    : "bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 text-text-muted hover:bg-gray-50 dark:hover:bg-gray-800"
                }
              `}
            >
              <span
                className={`text-xs font-medium mb-1 ${
                  isSelected ? "text-secondary font-bold" : ""
                }`}
              >
                {weekDayShort}
              </span>
              <span
                className={`text-base ${
                  isSelected
                    ? "font-extrabold text-lg"
                    : "font-bold text-text-body dark:text-gray-300"
                }`}
              >
                {dayNumber}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
