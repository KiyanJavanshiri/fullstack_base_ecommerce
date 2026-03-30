import { ButtonHTMLAttributes, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  name?: string;
  value?: string;
};

const Button = (props: TButtonProps) => {
  const {
    children,
    type = "button",
    disabled = false,
    className = "",
    onClick,
    name,
    value,
  } = props;

  return (
    <button
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
