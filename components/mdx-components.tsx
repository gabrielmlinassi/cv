import Link from "next/link";
import { tv } from "tailwind-variants";

/**
 *
 * HEADINGS
 */
type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = { as: Headings } & React.ComponentProps<Headings>;

export const Heading = ({ as: As, id, children, ...props }: HeadingProps) => {
  return (
    <As id={id} {...props}>
      <Link href={`#${id}`}>{children}</Link>
    </As>
  );
};

const headingsVariant = tv({
  base: "font-bold my-2",
  slots: {
    h1: "text-2xl",
    h2: "text-xl",
    h3: "text-lg",
  },
});

export const H1 = (props: React.ComponentProps<"h1">) => (
  <Heading as="h1" className={headingsVariant().h1()} {...props} />
);

export const H2 = (props: React.ComponentProps<"h2">) => (
  <Heading as="h2" className={headingsVariant().h2()} {...props} />
);

export const H3 = (props: React.ComponentProps<"h3">) => (
  <Heading as="h3" className={headingsVariant().h3()} {...props} />
);

/**
 *
 *
 */
