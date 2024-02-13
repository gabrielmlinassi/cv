import { cn } from "@/lib";
import Link from "next/link";

type BackButtonProps = React.ComponentProps<typeof Link>;

export const BackButton = (props: BackButtonProps) => {
  return (
    <Link
      {...props}
      className={cn(
        props.className,
        "hover:underline underline-offset-2 decoration-2 dark:text-gray-4 inline-block dark:hover:text-gray-3 duration-100 py-1 mb-2",
      )}
      title="Go back to blog posts list"
    >
      {props.children}
    </Link>
  );
};
