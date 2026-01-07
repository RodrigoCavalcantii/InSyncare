import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="w-full h-14 rounded-2xl bg-primary hover:bg-primary-hover active:scale-[0.98] text-white font-bold text-lg shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
    >
      {children}
    </button>
  )
}
