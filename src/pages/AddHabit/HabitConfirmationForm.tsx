import React, { useState } from "react";
import { HabitConfig } from "./habitConstants";

interface HabitConfirmationFormProps {
  habitConfig: HabitConfig;
  onClose: () => void;
  onSave: (description: string) => void;
}

export function HabitConfirmationForm({
  habitConfig,
  onClose,
  onSave,
}: HabitConfirmationFormProps) {
  const [description, setDescription] = useState("");

  const getPlaceholder = (id: string) => {
    switch (id) {
      case "water":
        return "Ex: 500ml";
      case "activity":
        return "Ex: 30min corrida";
      case "food":
        return "Ex: Almoço";
      case "sleep":
        return "Ex: Dormi às 23h";
      default:
        return "Digite aqui...";
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-slate-900/20 dark:bg-black/40 backdrop-blur-[2px]">
      <div className="flex-1" onClick={onClose}></div>

      <div className="w-full bg-surface-light dark:bg-surface-dark rounded-t-[32px] p-8 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] border-t border-white/40 dark:border-white/5 animate-slideUp">
        <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-6 opacity-60"></div>

        <div className="text-center mb-8">
          <div
            className={`
            w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg
            ${habitConfig.styles.iconBg} ${habitConfig.styles.icon}
          `}
          >
            <span className="material-symbols-outlined text-[40px]">
              {habitConfig.icon}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-1">
            {habitConfig.label}
          </h3>
          <p className="text-sm text-text-secondary dark:text-gray-400">
            Adicione os detalhes
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 ml-1">
            Descrição / Quantidade
          </label>
          <div className="relative">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={getPlaceholder(habitConfig.id)}
              className="block w-full px-4 py-4 bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-2xl text-slate-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all"
              autoFocus
            />
          </div>
        </div>

        <button
          onClick={() => onSave(description)}
          disabled={!description.trim()}
          className={`
            w-full h-14 text-white text-base font-bold rounded-2xl transition-all flex items-center justify-center shadow-lg active:scale-[0.98]
            bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          Registrar Hábito
        </button>

        <div className="h-2"></div>
      </div>
    </div>
  );
}
