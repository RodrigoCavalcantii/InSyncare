import React from "react";
import { DateHeader } from "../components/ui/Today/DateHeader";
import { WeekCalendar } from "../components/ui/Today/WeekCalendar";
import { HabitCard } from "../components/ui/Today/HabitCard";
import { WelcomeHeader } from "../components/ui/WelcomeHeader";

export default function Today() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto pb-6 bg-background-light dark:bg-background-dark">
      <header className="px-6 pt-6 pb-2 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <WelcomeHeader />
          {/* <button className="relative flex items-center justify-center p-2 rounded-full bg-white dark:bg-surface-dark shadow-sm hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-text-main dark:text-white text-2xl">
              notifications
            </span>
            <span className="absolute top-2 right-2 size-2.5 bg-accent rounded-full border-2 border-white dark:border-surface-dark"></span>
          </button> */}
        </div>
        <DateHeader />
      </header>

      <WeekCalendar />

      {/* <div className="px-6 pb-6 pt-2">
        <div className="bg-gradient-to-br from-primary to-[#2C8A94] p-6 rounded-3xl shadow-soft text-white relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-end mb-4 relative z-10">
            <div>
              <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-1">
                Sua Rotina
              </p>
              <h3 className="text-xl font-bold text-white">
                Excelente começo! ✨
              </h3>
            </div>
            <span className="text-3xl font-bold text-secondary">60%</span>
          </div>
          <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden relative z-10">
            <div
              className="h-full bg-secondary rounded-full shadow-[0_0_10px_rgba(166,205,181,0.5)]"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
      </div> */}

      <div className="flex-1 px-6 flex flex-col gap-4 pb-24">
        <h3 className="text-text-main dark:text-white text-lg font-bold px-1">
          Seus hábitos
        </h3>
        <HabitCard 
          type="water" 
          title="Hidratação" 
          description="500ml" 
        />

        <HabitCard
          type="food"
          title="Alimentação"
          description="Almoco: File a parmegiana"
        />

        <HabitCard
          type="activity"
          title="Atividade Física"
          description="30 min caminhada"
        />

        <HabitCard
          type="sleep"
          title="Sono"
          description="Sai do celular as 00:00"
        />
      </div>
    </div>
  );
}
