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
}) => {
  return (
    <div className="w-full grid grid-cols-5 mt-5 gap-5">
      <div className="col-span-2 rounded-xl overflow-hidden">{img}</div>
      <div className="col-span-3 flex flex-col h-[90%]">
        {title}
        <p className="text-gray w-[80%] text-[16px] my-10">{text}</p>
        <div className="mt-4">
          <Button
            bg={btnBgColor}
            dir={dir}
            opacity={btnOpacity ? btnBgColor : "opacity-40"}
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
