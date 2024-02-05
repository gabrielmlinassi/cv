import { ComponentProps, ReactNode } from "react";
import NextLink from "next/link";
import { VariantProps, tv } from "tailwind-variants";

const headerItem = tv({
  base: "md:px-3 px-2 py-1 md:py-2 flex items-center md:gap-2 gap-1 border text-sm md:text-base rounded-lg bg-transparent dark:border-[#2c2c2c] border-[#ddd] dark:text-[#bbb] text-[#252525] dark:hover:bg-[#252525] hover:bg-gray-05",
  variants: {
    align: { end: "ml-auto" },
    hiddenSm: { true: "hidden md:flex bggra1" },
    rounded: { true: "rounded-full" },
    contrast: {
      true: "dark:bg-[#252525] bg-[#f6f6f6] dark:hover:border-[#666] hover:border-[#bbb]",
    },
    active: { true: "dark:bg-[#252525] bg-[#f6f6f6]" },
  },
});

type HeaderItemProps = { children: ReactNode } & Partial<
  ComponentProps<typeof NextLink>
> &
  VariantProps<typeof headerItem>;

export const HeaderItem = (props: HeaderItemProps) => {
  const {
    children,
    align,
    hiddenSm,
    rounded,
    contrast,
    active,
    className,
    ...restProps
  } = props;

  const Comp = restProps?.href
    ? restProps?.href.toString()?.startsWith("http")
      ? "a"
      : NextLink
    : "button";

  return (
    // @ts-ignore
    <Comp
      className={headerItem({ align, hiddenSm, rounded, contrast, active, className })}
      {...restProps}
    >
      {children}
    </Comp>
  );
};
