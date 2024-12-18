import { cva } from "class-variance-authority";

export const paginationVariants = cva(
  "bu-min-w-[24px] bu-cursor-pointer bu-rounded-[4px] bu-px-[4px] bu-py-[2px] bu-text-center bu-text-md bu-leading-[20px] bu-transition-colors",
  {
    variants: {
      theme: {
        dark: "bu-text-dark-label data-[current='true']:bu-bg-dark-primary data-[current='true']:bu-text-light-second",
        light:
          "bu-text-light-label data-[current='true']:bu-bg-light-primary data-[current='true']:bu-text-dark-second"
      }
    }
  }
);

export const arrowVariants = cva(
  "bu-h-[24px] bu-cursor-pointer data-[disabled='true']:bu-cursor-not-allowed",
  {
    variants: {
      theme: {
        dark: "bu-text-dark-label data-[disabled='true']:bu-text-dark-label-40",
        light: "bu-text-light-label data-[disabled='true']:bu-text-light-label-40"
      }
    }
  }
);
