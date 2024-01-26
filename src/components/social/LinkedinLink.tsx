export const LinkedinLink = () => {
  return (
    <a
      className="font-medium dark:bg-[#252525] bg-[#f6f6f6] rounded-lg self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt bg-transparent hocus:text-[#0C66C2] hocus:dark:text-[#5494d4] hocus:bg-[#e7f0f9] dark:hocus:bg-[#031f3a]"
      title="LinkedIn"
      data-umami-event="Social link"
      data-umami-event-site="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/gabrielmlinassi/"
    >
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        className="size-6 fill-inherit transition-colors delay-[-100ms]"
        aria-hidden="true"
      >
        <path
          className="fill-current"
          d="M21 21v-7.2c0-2.4-2-4.4-4.4-4.4-1.1 0-2.5.7-3.1 1.8V9.7H9.7V21h3.8v-6.7c0-1 .8-1.9 1.9-1.9 1 0 1.9.8 1.9 1.9V21H21M5.3 7.6c1.3 0 2.3-1 2.3-2.3C7.6 4 6.5 3 5.3 3 4 3 3 4 3 5.3c0 1.2 1 2.3 2.3 2.3M7.2 21V9.7H3.4V21h3.8z"
        ></path>
      </svg>
    </a>
  );
};
