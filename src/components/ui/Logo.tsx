import React from "react";

export function Logo() {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="/logo_insyncare.png"
        alt="InSyncare Logo"
        className="w-36 h-36 mb-4"
      />

      <h1 className="text-4xl font-extrabold tracking-tight mb-2">
        <span className="text-primary">In</span>
        <span className="text-accent">Syncare</span>
      </h1>

      <p className="text-text-secondary text-base max-w-[240px]">
        Cuidando da vida, em sintonia
      </p>
    </div>
  );
}
