"use client";

import React, { ReactNode, useState } from "react";
import Image from "next/image";
import Button from "../../main/button/Button";
import { useRouter } from "next/navigation";

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
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full grid grid-cols-5 items-stretch mt-5 gap-5 justify-center">
      <div className="lg:col-span-2 col-span-5 rounded-xl overflow-hidden w-fit">
        {img}
      </div>
      <div className="lg:col-span-3 col-span-5 flex flex-col h-[90%]">
        {title}
        <p className="text-gray md:w-[80%] w-full text-[15px] my-10">{text}</p>
        <div className="">
          <Button
            bg={btnBgColor}
            isConfirm
            disabled={isDisabled}
            onClick={() => {
              setLoading(true);
              if (href) {
                push(href);
              }
            }}
            loading={loading}
            dir={dir}
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
