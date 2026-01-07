import { useState } from "react";
import { Outlet } from "react-router-dom";
import { BottomMenu } from "./BottomMenu";
import { AddHabitScreen } from "../../pages/AddHabit/AddHabitScreen";

export function PrivateLayout() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen relative bg-background-light dark:bg-background-dark">
      <div className="pb-24">
        <Outlet />
      </div>

      <BottomMenu onAddClick={() => setIsAddModalOpen(true)} />

      <AddHabitScreen
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
