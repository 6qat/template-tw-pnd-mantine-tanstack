import { VariantProps } from "class-variance-authority";
import { headingVariant } from "./heading.variant";
import { cn } from "@/lib/utils";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariant> {}

function Heading({ className, variant = "h1", ...props }: HeadingProps) {
  const ret =
    variant === "h1" ? (
      <h1 className={cn(headingVariant({ variant }), className)} {...props} />
    ) : variant === "h2" ? (
      <h2 className={cn(headingVariant({ variant }), className)} {...props} />
    ) : (
      <h3 className={cn(headingVariant({ variant }), className)} {...props} />
    );
  return ret;
}

export { Heading, type HeadingProps };
