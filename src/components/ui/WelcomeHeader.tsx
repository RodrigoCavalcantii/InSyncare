import React from "react";
import { useAuth } from "../../hooks/useAuth";

export function WelcomeHeader() {
  const { user } = useAuth();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex items-center gap-3">
      <div className="relative group cursor-pointer">
        <div
          className="flex items-center justify-center bg-secondary/20 rounded-full size-12 border-2 border-white dark:border-background-dark shadow-md overflow-hidden"
        >
          {user?.avatar_url ? (
            <img 
              src={user.avatar_url} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-secondary font-bold text-sm">
              {user?.name ? getInitials(user.name) : "?"}
            </span>
          )}
        </div>
        
        <div className="absolute bottom-0 right-0 size-3 bg-secondary rounded-full border-2 border-white dark:border-background-dark shadow-sm"></div>
      </div>

      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-accent uppercase tracking-[0.15em] mb-0.5">
          Bem-vindo
        </span>
        <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight">
          {user?.name || "Carregando..."}
        </h2>
      </div>
    </div>
  );
}