import { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";

type HeadingLevels = "h1" | "h2";

type HeadingProps = {
  level: HeadingLevels;
  children: ReactNode;
} & ComponentProps<"h1">;

function getComponent(level: HeadingLevels) {
  switch (level) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
  }
}

const heading = tv({
  variants: {
    level: {
      h1: "",
      h2: "py-8 font-medium text-[27px] md:text-[32px] md:font-bold",
    },
  },
});

export const Heading = ({ level, children, ...restProps }: HeadingProps) => {
  const Comp = getComponent(level);
  const classes = heading({ level, className: restProps?.className });

  return (
    <Comp {...restProps} className={classes}>
      {children}
    </Comp>
  );
};
