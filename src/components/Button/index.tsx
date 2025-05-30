import React from "react";

type ButtonVariant = "primary" | "secondary" | "small";

interface CustomButtonProps {
  label: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<CustomButtonProps> = ({
  label,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) => {
  const baseClasses =
    "transition duration-300 ease-in-out rounded-md font-semibold cursor-pointer";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-[#0288D1] text-white hover:bg-[#01579B] py-3 px-5",
    secondary:
      "bg-[#81D4FA] text-[#01579B] hover:bg-[#4FC3F7] py-2.5 px-[18px] border border-[#0288D1]",
    small:
      "bg-[#0288D1] text-white hover:bg-[#01579B] py-2 px-4 text-sm font-medium",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
