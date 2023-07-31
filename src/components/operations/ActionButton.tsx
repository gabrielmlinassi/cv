import React from "react";

import { tv } from "tailwind-variants";

type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const actionButton = tv({
  base: "inline-flex items-center justify-center rounded px-1 text-sm text-slate-600",
  variants: {
    state: {
      active: "",
    },
  },
});

const ActionButton = ({ children, ...props }: ActionButtonProps) => {
  return (
    <button {...props} className={actionButton()}>
      {children}
    </button>
  );
};

export { ActionButton };
