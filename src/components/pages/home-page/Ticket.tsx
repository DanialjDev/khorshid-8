import React, { ReactNode } from "react";
import Image from "next/image";
import Button from "../../main/button/Button";

const Ticket = ({
  title,
  text,
  img,
  icon,
  btnText,
  btnBgColor,
  dir,
  color,
  btnOpacity,
  border,
  isDisabled,
  href,
}: {
  title: ReactNode;
  text: string;
  img: ReactNode;
  icon: ReactNode;
  btnText: string;
  btnBgColor?: string;
  dir?: "ltr" | "rtl";
  color?: string;
  btnOpacity?: string;
  border?: string;
  isDisabled?: boolean;
  href?: string;
}) => {
  return (
    <div className="w-full grid grid-cols-5 items-stretch mt-5 gap-5 justify-center">
      <div className="lg:col-span-2 col-span-5 rounded-xl overflow-hidden lg:w-full md:w-[70%] w-full">
        {img}
      </div>
      <div className="lg:col-span-3 col-span-5 flex flex-col h-[90%]">
        {title}
        <p className="text-gray md:w-[80%] w-full text-[15px] my-10">{text}</p>
        <div className="mt-4">
          <Button
            bg={btnBgColor}
            disabled={isDisabled}
            href={href ? href : undefined}
            dir={dir}
            // opacity={btnBgColor}
            text={btnText}
            icon={icon}
            color={color}
            border={border}
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
