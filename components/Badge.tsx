import { ComponentType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

type IconProps = {
  className?: string;
};

type BadgeProps = {
  children: ReactNode;
  className?: string;
  Icon?: ComponentType<IconProps>;
} & VariantProps<typeof badge>;

const badge = tv({
  base: "bg-transparent flex items-center gap-[6px] px-3 py-2 rounded-lg text-base leading-none border dark:border-gray-7 cursor-default",
});

export const Badge = ({ children, Icon, className }: BadgeProps) => {
  return (
    <span className={badge({ className })}>
      {Icon && <Icon className="" />}
      {children}
    </span>
  );
};
