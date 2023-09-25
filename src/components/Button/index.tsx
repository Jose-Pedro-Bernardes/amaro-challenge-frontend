import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  text: string;
}

export default function Button({
  className = "",
  onClick = () => {},
  type = "button",
  text = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {text}
    </button>
  );
}
