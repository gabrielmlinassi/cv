export const EmailLink = () => {
  return (
    <a
      className="font-medium dark:hover:bg-[#252525] hover:bg-[#f6f6f6] rounded-lg self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt bg-transparent hocus:text-[#356AC4] hocus:dark:text-[#5591f5] hocus:bg-[#ecf3fe] dark:hocus:bg-[#142849]"
      title="Email"
      data-umami-event="Social link"
      data-umami-event-site="Email"
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:gabrielm.linassi@gmail.com?subject=Hi%20Gabriel!"
    >
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        className="size-6 fill-inherit transition-colors delay-[-100ms]"
        aria-hidden="true"
      >
        <path
          className="fill-current"
          d="m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
        ></path>
      </svg>
    </a>
  );
};
