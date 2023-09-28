import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { Url } from "url";

interface ButtonProps {
  text: string;
  icon: ReactNode;
  bg?: string;
  opacity?: string;
  dir?: "rtl" | "ltr";
  color?: string;
  border?: string;
  padding?: string;
  href?: string;
}

const Button = ({
  text,
  icon,
  bg,
  opacity,
  dir = "ltr",
  color = "text-primary",
  border,
  padding,
  href = "/",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`w-fit flex items-center ${border ? border : ""} ${color} ${
        dir === "rtl" ? "flex-row-reverse" : "flex-row"
      } ${bg ? `${bg}` : "bg-primary"} ${
        padding ? padding : "px-[30px] py-[10px]"
      } rounded-xl ${opacity ? `${opacity}` : "opacity-100`"}`}
    >
      {icon}
      <p className={`text-[16px] ${dir === "rtl" ? "ml-3" : "mr-3"}`}>{text}</p>
    </Link>
  );
};

export default Button;
