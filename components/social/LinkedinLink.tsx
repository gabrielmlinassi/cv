export const LinkedinLink = () => {
  return (
    <a
      className="font-medium dark:bg-[hsl(220,43%,11%)] bg-gray-05 rounded-lg self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt leading-none focus:text-[#1471a9] focus:dark:text-[#1da1f2] focus:bg-[#e8f6fe] dark:focus:bg-[#093049]"
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
        className="size-6 fill-inherit transition-colors delay-100"
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
