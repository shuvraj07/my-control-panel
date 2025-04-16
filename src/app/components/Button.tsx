import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  bgColor?: string; // Add a prop for background color
}
function handleReset() {}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  bgColor = "bg-blue-500",
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-4 mt-4 ml-4 text-white size-2 ${bgColor} ${className}`}
    ></button>
  );
};

export default Button;
