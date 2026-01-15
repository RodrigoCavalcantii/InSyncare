import React, { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useAuth } from "../hooks/useAuth";

import { DateHeader } from "../components/ui/Today/DateHeader";
import { WeekCalendar } from "../components/ui/Today/WeekCalendar";
import { HabitCard } from "../components/ui/Today/HabitCard";
import { WelcomeHeader } from "../components/ui/WelcomeHeader";

interface Habit {
  id: string;
  description: string;
  category_id: number;
  habit_categories: {
    name: string;
    icon: string;
    color: string;
  };
}

export default function Today() {
  const { user } = useAuth();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const todayDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    async function fetchHabits() {
      if (!user) return;

      setLoading(true);
      
      const { data, error } = await supabase
        .from('habits')
        .select(`
          id,
          description,
          category_id,
          habit_categories (
            name,
            icon,
            color
          )
        `)
        .eq('user_id', user.id)
        .eq('date_reference', todayDate)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Erro ao buscar hábitos:", error.message);
      } else {
        setHabits(data as unknown as Habit[]);
      }
      setLoading(false);
    }

    fetchHabits();
  }, [user, todayDate]);

  const getCardType = (categoryId: number) => {
    const types: Record<number, string> = {
      1: "water",
      2: "food",
      3: "activity",
      4: "sleep"
    };
    return types[categoryId] || "water";
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto pb-6 bg-background-light dark:bg-background-dark">
      <header className="px-6 pt-6 pb-2 sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <WelcomeHeader /> 
        </div>
        <DateHeader />
      </header>

      <WeekCalendar />

      <div className="flex-1 px-6 flex flex-col gap-4 pb-24">
        <h3 className="text-text-main dark:text-white text-lg font-bold px-1">
          Seus hábitos
        </h3>

        {loading ? (
          <p className="text-center text-gray-500 pt-10">Carregando seus hábitos...</p>
        ) : habits.length > 0 ? (
          habits.map((habit) => (
            <HabitCard 
              key={habit.id}
              type={getCardType(habit.category_id)} 
              title={habit.habit_categories.name} 
              description={habit.description} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center pt-10 opacity-60">
            <span className="material-symbols-outlined text-4xl mb-2">spa</span>
            <p className="text-center text-sm">Nenhum hábito registrado para hoje.<br/>Que tal começar agora?</p>
          </div>
        )}
      </div>
    </div>
  );
}