export const GithubLink = () => {
  return (
    <a
      className="font-medium dark:bg-gray-8 bg-gray-05 rounded-lg self-start flex items-center justify-center min-h-11 min-w-11 p-2 rounded-1.5 no-underline transition-colors text-secondary-txt bg-transparent leading-none focus:text-[#1471a9] focus:dark:text-[#1da1f2] focus:bg-[#e8f6fe] dark:focus:bg-[#093049]"
      title="GitHub"
      data-umami-event="Social link"
      data-umami-event-site="GitHub"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/gabrielmlinassi"
    >
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        className="size-6 fill-inherit transition-colors delay-[-100ms]"
        aria-hidden="true"
      >
        <path
          className="fill-current"
          d="M12 2C6.3 2 1.8 6.6 1.8 12.2c0 4.5 2.9 8.4 7 9.7.5.1.7-.2.7-.5v-1.7c-2.9.7-3.5-1.3-3.5-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.2-.4-.5-1.5 0-2.8 0 0 .9-.3 2.8 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7.7.7 1.1 1.6 1.1 2.8 0 3.9-2.4 4.8-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4.1-1.4 7-5.2 7-9.7C22.2 6.6 17.7 2 12 2z"
        ></path>
      </svg>
    </a>
  );
};
