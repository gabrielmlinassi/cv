import { tv, VariantProps } from "tailwind-variants";

const xLink = tv({
  base: `font-medium rounded-lg self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt leading-none`,
  variants: {
    unstyled: {
      true: "",
      false: `dark:bg-[hsl(220,43%,11%)] bg-gray-05 focus:text-[#1471a9] focus:dark:text-[#1da1f2] focus:bg-[#e8f6fe] dark:focus:bg-[#093049]`,
    },
  },
});

type XLinkProps = {} & VariantProps<typeof xLink>;

export const XLink = (props: XLinkProps) => {
  return (
    <a
      className={xLink({ unstyled: true })}
      title="𝕏 (formerly Twitter)"
      aria-label="𝕏 (formerly Twitter)"
      data-umami-event="Social link"
      data-umami-event-site="𝕏 (formerly Twitter)"
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/gabrielmlinassi"
    >
      <span className="font-manrope font-semibold size-[22px] select-none flex items-center justify-center text-xl text-center">
        𝕏
      </span>
    </a>
  );
};
