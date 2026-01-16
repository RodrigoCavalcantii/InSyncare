import React, { useState } from "react";
import { HabitConfig } from "./habitConstants";

interface HabitConfirmationFormProps {
  habitConfig: HabitConfig;
  onClose: () => void;
  onSave: (description: string) => void;
  isSaving?: boolean;
}

export function HabitConfirmationForm({
  habitConfig,
  onClose,
  onSave,
  isSaving,
}: HabitConfirmationFormProps) {
  const [description, setDescription] = useState("");

  const getPlaceholder = (id: string) => {
    switch (id) {
      case "water": return "Ex: 500ml";
      case "activity": return "Ex: 30min corrida";
      case "food": return "Ex: Almoço";
      case "sleep": return "Ex: Dormi às 23h";
      default: return "Digite aqui...";
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex flex-col justify-center items-center bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm p-4">
      
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>

      <div className="w-full max-w-sm bg-surface-light dark:bg-surface-dark rounded-[32px] p-8 shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300">
        
        <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-6 opacity-40"></div>

        <div className="text-center mb-8">
          <div className={`
            w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg
            ${habitConfig.styles.iconBg} ${habitConfig.styles.icon}
          `}>
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
              className="block w-full px-4 py-4 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-gray-700 rounded-2xl text-slate-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              autoFocus
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => onSave(description)}
            disabled={!description.trim() || isSaving}
            className="w-full h-14 text-white text-base font-bold rounded-2xl transition-all flex items-center justify-center shadow-lg active:scale-[0.98] bg-primary hover:brightness-110 disabled:opacity-50"
          >
            {isSaving ? "Salvando..." : "Registrar Hábito"}
          </button>
          
          <button 
            onClick={onClose}
            className="w-full py-2 text-sm font-medium text-secondary-grey hover:text-primary transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}