import { ComponentProps, ReactNode } from "react";
import NextLink from "next/link";
import { VariantProps, tv } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";

const headerItem = tv({
  base: "md:px-3 px-10 w-full md:w-auto py-3 md:py-2 duration-150 font-bold flex items-center md:gap-2 gap-1 text-sm md:text-base rounded-lg group",
  variants: {
    align: { end: "ml-auto" },
    unstyled: {
      true: `bg-transparent`,
      false: `bg-transparent dark:border-[#2c2c2c] border-[#ddd] dark:text-gray-200/95 text-gray-700 dark:hover:bg-white/5 hover:bg-blue-200/50`,
    },
    hiddenSm: {
      true: "hidden md:flex bggra1",
    },
    rounded: {
      true: "rounded-full",
    },
    contrast: {
      true: "dark:bg-[#252525] bg-[#f6f6f6] dark:hover:border-[#666] hover:border-[#bbb]",
    },
    active: { true: "" },
  },
  compoundVariants: [
    { unstyled: true, active: true, className: "" },
    { unstyled: false, active: true, className: "dark:bg-gray-200/5 bg-[#f6f6f6]" },
  ],
  defaultVariants: {
    unstyled: false,
  },
});

type HeaderItemProps = {
  children: ReactNode;
  asChild?: boolean;
} & Partial<ComponentProps<typeof NextLink>> &
  VariantProps<typeof headerItem>;

export const HeaderItem = (props: HeaderItemProps) => {
  const {
    children,
    align,
    unstyled,
    hiddenSm,
    rounded,
    contrast,
    active,
    className,
    color,
    asChild,
    ...restProps
  } = props;

  let Comp;

  if (asChild) {
    Comp = Slot;
  } else {
    Comp = !!restProps?.href
      ? restProps?.href?.toString()?.startsWith("http")
        ? "a"
        : NextLink
      : "button";
  }

  return (
    // @ts-ignore
    <Comp
      className={headerItem({
        align,
        unstyled,
        hiddenSm,
        rounded,
        contrast,
        active,
        className,
      })}
      {...restProps}
    >
      {children}
    </Comp>
  );
};
