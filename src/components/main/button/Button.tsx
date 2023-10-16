"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  bg?: string;
  dir?: "rtl" | "ltr";
  color?: string;
  border?: string;
  padding?: string;
  href?: string;
  hover?: string;
  disabled?: boolean;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
  fontSize?: string;
  onClick?: () => void;
}

const Button = ({
  text,
  icon,
  bg,
  dir = "ltr",
  color = "text-primary",
  border,
  padding,
  href,
  hover,
  disabled,
  width = "w-fit",
  type,
  fontSize,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {href && !disabled ? (
        <Link
          href={href}
          className={`${width} transition duration-200 ease-in-out justify-center flex items-center ${
            hover ? hover : ""
          } ${border ? border : ""} ${color} ${
            dir === "rtl" ? "flex-row-reverse" : "flex-row"
          } ${bg ? `${bg}` : "bg-primary"} ${
            padding ? padding : "px-[30px] py-[10px]"
          } rounded-xl`}
        >
          {icon && icon}
          {text && (
            <p
              className={`${fontSize ? fontSize : "text-[14px]"} ${
                dir === "rtl" ? "ml-3" : "mr-3"
              } ${!icon && "!mx-0"}`}
            >
              {text}
            </p>
          )}
        </Link>
      ) : (
        <button
          onClick={onClick}
          type={type ? type : "button"}
          disabled={disabled}
          className={`${width} transition duration-200 ease-in-out flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed ${
            hover ? hover : ""
          } ${border ? border : ""} ${color} ${
            dir === "rtl" ? "flex-row-reverse" : "flex-row"
          } ${bg ? `${bg}` : "bg-primary"} ${
            padding ? padding : "px-[30px] py-[10px]"
          } rounded-xl`}
        >
          {icon && icon}
          {text && (
            <p
              className={`${fontSize ? fontSize : "text-[14px]"} ${
                dir === "rtl" ? "ml-3" : "mr-3"
              } ${!icon && "!mx-0"}`}
            >
              {text}
            </p>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
