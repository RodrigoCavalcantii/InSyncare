import React from "react";
import { formatDateHeader } from "../../../utils/dateUtils";

export function DateHeader() {
  const today = new Date();

  return (
    <div className="flex items-end justify-between px-1">
      <div>
        <h1 className="text-3xl font-extrabold text-primary dark:text-white tracking-tight">
          Hoje
        </h1>
        <p className="text-text-body dark:text-gray-400 text-sm font-medium mt-1">
          {formatDateHeader(today)}
        </p>
      </div>
      <div className="flex items-center gap-1 opacity-80">
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          all_inclusive
        </span>
      </div>
    </div>
  );
}
