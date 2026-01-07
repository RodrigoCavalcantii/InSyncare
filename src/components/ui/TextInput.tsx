import React from "react"

type Props = {
  label: string
  icon: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function TextInput({ label, icon, ...props }: Props) {
  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-text-secondary text-sm font-semibold pl-1 group-focus-within:text-primary">
        {label}
      </label>

      <div className="relative flex items-center">
        <span className="absolute left-5 material-symbols-outlined text-text-secondary/70 group-focus-within:text-primary">
          {icon}
        </span>

        <input
          {...props}
          className="w-full h-[3.75rem] rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-slate-800 font-medium shadow-input focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
        />
      </div>
    </div>
  )
}
