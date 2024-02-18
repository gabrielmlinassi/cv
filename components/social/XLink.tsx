export const XLink = () => {
  return (
    <a
      className="font-medium dark:bg-[hsl(220,43%,11%)] bg-gray-05 rounded-lg self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt leading-none focus:text-[#1471a9] focus:dark:text-[#1da1f2] focus:bg-[#e8f6fe] dark:focus:bg-[#093049]"
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
