import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-600",
    danger: "bg-red-600 text-white",
  };

  return (
    <button
      className={`rounded px-4 py-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
