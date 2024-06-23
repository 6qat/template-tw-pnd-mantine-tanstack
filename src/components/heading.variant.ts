import { cva } from "class-variance-authority";

const headingVariant = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export { headingVariant };
