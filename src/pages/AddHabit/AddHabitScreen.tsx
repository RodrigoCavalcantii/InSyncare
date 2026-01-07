import React, { useState, useEffect } from "react";
import { HABIT_TYPES, HabitKey } from "./habitConstants";
import { HabitSelectionGrid } from "./HabitSelectionGrid";
import { HabitConfirmationForm } from "./HabitConfirmationForm";

interface AddHabitScreenProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddHabitScreen({ isOpen, onClose }: AddHabitScreenProps) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedHabitKey, setSelectedHabitKey] = useState<HabitKey | null>(
    null
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setShowConfirmModal(false);
        setSelectedHabitKey(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleHabitSelect = (key: HabitKey) => {
    setSelectedHabitKey(key);
    setShowConfirmModal(true);
  };

  const handleSaveHabit = (description: string) => {
    if (!selectedHabitKey) return;

    console.log("Salvando hábito:", {
      type: selectedHabitKey,
      description: description,
    });

    onClose();
  };

  const currentHabitConfig = selectedHabitKey
    ? HABIT_TYPES[selectedHabitKey]
    : null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <div
        className={`absolute inset-0 bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`
          relative w-full max-w-md mx-auto h-[85vh] bg-background-light dark:bg-background-dark 
          rounded-t-[32px] shadow-2xl overflow-hidden flex flex-col transition-transform duration-300 ease-out
          ${isOpen ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div
          className="w-full flex justify-center pt-4 pb-2 cursor-pointer"
          onClick={onClose}
        >
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60"></div>
        </div>

        <header className="px-6 pb-4 pt-2 text-center">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">
            Novo Hábito
          </h1>
          <p className="text-sm text-text-secondary dark:text-gray-400">
            O que você fez hoje?
          </p>
        </header>

        <HabitSelectionGrid onSelect={handleHabitSelect} />

        {showConfirmModal && currentHabitConfig && (
          <HabitConfirmationForm
            habitConfig={currentHabitConfig}
            onClose={() => setShowConfirmModal(false)}
            onSave={handleSaveHabit}
          />
        )}
      </div>
    </div>
  );
}
