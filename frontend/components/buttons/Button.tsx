import { ButtonHTMLAttributes, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button = (props: TButtonProps) => {
  const {
    children,
    type = "button",
    disabled = false,
    className = "",
    onClick,
  } = props;

  return (
    <button
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
