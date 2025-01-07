import { Button as ChakraButton } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

const variants = {
  solid: {
    variant: "solid",
    bg: "primary",
    color: "primaryAccent",
    _hover: {
      opacity: "0.9",
    },
  },
  outline: {
    variant: "outline",
    bg: "white",
    color: "primary",
  },
};

export type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variants;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  variant = "solid",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      {...variants[variant]}
      type={type}
      variant={variant}
    >
      {children}
    </ChakraButton>
  );
};
