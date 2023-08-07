import { VariantProps } from "class-variance-authority";
import React from "react";

import { tv } from "tailwind-variants";

type ActionButtonProps = VariantProps<typeof actionButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const actionButton = tv({
  base: "inline-flex items-center justify-center rounded px-1 text-sm text-slate-600",
  variants: {
    style: {
      outline: "border border-slate-500 text-slate-500",
    },
    state: {
      active: "",
    },
  },
});

const ActionButton = ({ children, style, ...props }: ActionButtonProps) => {
  return (
    <button {...props} className={actionButton({ style })}>
      {children}
    </button>
  );
};

export { ActionButton };
