import React from "react";
import Button from "@mui/joy/Button";
import { useRouter } from "next/router";

// Define the prop types for the custom button component
interface CustomButtonProps {
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "tertiary" | "custom";
  children: React.ReactNode;
  className?: string; // Optional className prop
  buttonClassName?: string;
  href?: string;
  hasBorder?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  variant,
  children,
  hasBorder = true,
  href = "#",
  className = "",
  buttonClassName = "",
}) => {
  // Determine the background and text colors based on the variant
  let backgroundColor, textColor;
  switch (variant) {
    case "primary":
      backgroundColor =
        "bg-green-200 !text-green-700 !border-green-300 hover:!border-green-700 hover:bg-green-600 hover:!text-white";
      textColor = "text-green-800";
      break;
    case "secondary":
      backgroundColor =
        "!bg-orange-200 !text-orange-700 !border-orange-300 hover:!border-orange-700 hover:!bg-orange-600 hover:!text-white";
      textColor = "text-orange-800";
      break;
    case "tertiary":
      backgroundColor =
        "bg-stone-200 !text-stone-700 !border-stone-300 hover:!border-stone-700 hover:bg-stone-600 hover:!text-white";
      textColor = "text-stone-800";
      break;
    case "custom":
      backgroundColor = "";
      textColor = "";
      break;
    default:
      backgroundColor =
        "bg-green-200 !text-green-700 !border-green-300 hover:!border-green-700 hover:bg-green-600 !hover:text-white";
      textColor = "text-green-800";
      break;
  }

  // Size styles based on the 'size' prop
  let fontSize, padding;
  switch (size) {
    case "sm":
      fontSize = "text-sm";
      padding = "py-1 px-2";
      break;
    case "md":
      fontSize = "text-md";
      padding = "py-2 px-3";
      break;
    case "lg":
      fontSize = "text-lg";
      padding = "py-3 px-4";
      break;
    default:
      fontSize = "text-md";
      padding = "py-2 px-3";
      break;
  }

  const borderStyles = hasBorder ? "border" : "";

  const router = useRouter();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <div className={`w-fit ${className}`}>
      <a href={href} onClick={handleClick} className={`w-fit`}>
        <button
          className={`${backgroundColor} ${textColor} ${borderStyles} ${backgroundColor} !rounded-md hover:text-white transition duration-100 ${buttonClassName} ${fontSize} ${padding}`}
        >
          {children}
        </button>
      </a>
    </div>
  );
};

export default CustomButton;
