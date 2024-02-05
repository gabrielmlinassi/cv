import Link from "next/link";

type BackButtonProps = React.ComponentProps<typeof Link>;

export const BackButton = (props: BackButtonProps) => {
  return (
    <Link {...props}>
      <span className="hover:underline underline-offset-2 decoration-2 dark:text-gray-4 dark:hover:text-gray-3 duration-100 p-1 -mx-1">
        {props.children}
      </span>
    </Link>
  );
};
