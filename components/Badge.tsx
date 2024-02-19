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
  base: "flex items-center gap-[6px] px-3 py-2 rounded-lg text-sm text-gray-100 leading-none border dark:border-gray-7 cursor-default bg-[rgba(34,62,128,.1)]",
});

export const Badge = ({ children, Icon, className }: BadgeProps) => {
  return (
    <span className={badge({ className })}>
      {Icon && <Icon className="" />}
      {children}
    </span>
  );
};
