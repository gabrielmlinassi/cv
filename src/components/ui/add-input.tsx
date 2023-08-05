import React from "react"

type AddInputProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function AddInput(props: AddInputProps) {
  return (
    <button
      {...props}
      className="ml-1 inline-flex w-7 items-center justify-center rounded bg-slate-600 text-sm text-white"
    >
      +
    </button>
  )
}
