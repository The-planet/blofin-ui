import React, { ButtonHTMLAttributes, FC } from "react";
import { Base } from "../../types/component";
import { cn } from "../../utils/utils";
import buttonVariants from "./styles";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";
import useTheme from "../../provider/useTheme";
import Loading from "./Loading";

export interface ButtonProps extends Base, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button type
   */
  variant?: ButtonVariant;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button state
   */
  disabled?: boolean;
  /**
   * Element placed before the children
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children
   */
  endIcon?: React.ReactNode;

  icon?: React.ReactNode;

  size: ButtonSize;

  shape?: ButtonShape;

  children?: React.ReactNode;

  loading?: boolean;
}

export const Button = ({
  size = "large",
  disabled = false,
  variant = "primary",
  children,
  startIcon,
  endIcon,
  icon,
  onClick,
  shape = "normal",
  className = "",
  theme: mode,
  loading,
  ...props
}: ButtonProps) => {
  const handleClick = () => {
    if (loading) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  const { theme } = useTheme();

  const buttonProps = {
    variant: loading ? "tertiary" : variant,
    size,
    theme: mode ? mode : theme,
    shape,
    disabled: loading ? true : disabled
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${cn(buttonVariants(buttonProps))} ${className}`}
      disabled={disabled}
      {...props}>
      {loading ? (
        <Loading size={size} />
      ) : (
        <>
          {startIcon && <span className="bu-mr-[9px]">{startIcon}</span>}
          {children}
          {endIcon && <span className="bu-ml-[9px] bu-flex bu-items-center">{endIcon}</span>}
          {icon}
        </>
      )}
    </button>
  );
};

const WhiteButton: FC<ButtonProps> = (props) => {
  const { theme } = useTheme();
  return (
    <Button
      {...props}
      variant="ghost"
      className={`bu-border-light-background bu-text-light-background ${
        theme === "light" ? "hover:!bu-text-light-primary" : "hover:!bu-text-dark-primary"
      }  bu-font-medium hover:!bu-bg-light-background`}></Button>
  );
};

Button.WhiteButton = WhiteButton;
