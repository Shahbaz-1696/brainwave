import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  className: string;
  href: string;
  children: React.ReactNode;
  px?: string;
  white?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  href,
  children,
  px,
  onClick,
  white,
}: ButtonProps) => {
  const classes = `button relative inline-flex items-center h-11 justify-center transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = `relative z-10`;

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
