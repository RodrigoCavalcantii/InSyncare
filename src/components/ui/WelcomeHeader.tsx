import React from "react";
import { useAuth } from "../../hooks/useAuth";

export function WelcomeHeader() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-3">
      <div className="relative group cursor-pointer">
        <div
          className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-white dark:border-background-dark shadow-md"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAblzBNmRJqDrCe_S_7vyJiBk9aMSjNYf3sTzKaUF8vH1cqKekxwYR9l-PitCt67pIk9kvnhOqhEeuLHkP8i3oeNauTW08QSzyy4UGPpk-CE0xALmDmbO7odkMEoPLmuoaW8a1oWxhT8-xKEfhVUhHhvyLlm_woQyH6nZtrWC-1me2MeCOsqg5i3uPKc1RwXRZiyzJZksMfAsv5XQiYvXzQsMTlHrEvS8f3xwGGkdaOoCOqGdttB2bXWtmu3qNWO8jwdCZxtdM8Mw")',
          }}
        ></div>
        <div className="absolute bottom-0 right-0 size-3 bg-secondary rounded-full border-2 border-white dark:border-background-dark"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-accent uppercase tracking-wider">
          Bem-vindo
        </span>
        <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight">
          {user?.name || "Visitante"}
        </h2>
      </div>
    </div>
  );
}
