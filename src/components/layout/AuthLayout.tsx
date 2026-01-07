import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="bg-background-light min-h-screen flex justify-center">
      <div className="relative w-full max-w-md min-h-screen px-7 pt-10 pb-8 flex flex-col justify-between overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-secondary/30 rounded-full blur-[80px]" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />

        <div className="z-10">{children}</div>
      </div>
    </div>
  )
}
