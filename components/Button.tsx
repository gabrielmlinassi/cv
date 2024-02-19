import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  asChild?: boolean;
} & ComponentProps<"button">;

export const Button = ({ children, className, asChild, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    // @ts-ignore
    <Comp
      {...props}
      className="dark:bg-blue-300 dark:text-gray-700 flex items-center gap-1 bg-gray-1 border border-transparent dark:hover:border-gray-6 hover:border-gray-3 duration-100 px-4 py-3 leading-none rounded-lg font-medium"
    >
      {children}
    </Comp>
  );
};
