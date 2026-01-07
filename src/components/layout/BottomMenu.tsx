import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface BottomMenuProps {
  onAddClick: () => void;
}

export function BottomMenu({ onAddClick }: BottomMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getItemClass = (path: string) => {
    return isActive(path)
      ? "text-primary"
      : "text-text-sub-light hover:text-primary dark:hover:text-text-main-dark";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-secondary/20 dark:border-gray-800 px-6 py-4 z-20">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate("/today")}
          className={`flex flex-col items-center gap-1 transition-colors ${getItemClass(
            "/today"
          )}`}
        >
          <span className="material-symbols-outlined text-2xl">home</span>

          {isActive("/today") && (
            <span className="size-1.5 bg-primary rounded-full mt-0.5 animate-fade-in"></span>
          )}
        </button>

        <button
          onClick={() => navigate("/groups")}
          className={`flex flex-col items-center gap-1 transition-colors ${getItemClass(
            "/groups"
          )}`}
        >
          <span className="material-symbols-outlined text-2xl">groups</span>
          {isActive("/groups") && (
            <span className="size-1.5 bg-primary rounded-full mt-0.5 animate-fade-in"></span>
          )}
        </button>

        <button
          onClick={onAddClick}
          className="flex flex-col items-center gap-1 -mt-8 size-14 rounded-full bg-primary text-surface-light shadow-lg shadow-primary/30 justify-center transition-transform hover:scale-105 active:scale-95 border-4 border-background-light dark:border-background-dark"
        >
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>

        <button
          onClick={() => navigate("/stats")}
          className={`flex flex-col items-center gap-1 transition-colors ${getItemClass(
            "/stats"
          )}`}
        >
          <span className="material-symbols-outlined text-2xl">bar_chart</span>
          {isActive("/stats") && (
            <span className="size-1.5 bg-primary rounded-full mt-0.5 animate-fade-in"></span>
          )}
        </button>

        <button
          onClick={() => navigate("/profile")}
          className={`flex flex-col items-center gap-1 transition-colors ${getItemClass(
            "/profile"
          )}`}
        >
          <span className="material-symbols-outlined text-2xl">person</span>
          {isActive("/profile") && (
            <span className="size-1.5 bg-primary rounded-full mt-0.5 animate-fade-in"></span>
          )}
        </button>
      </div>
    </div>
  );
}
