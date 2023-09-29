import React, { ReactNode } from "react";

import WhiteSquare from "../../../../public/assets/images/home-page/white-square.svg";
import Image from "next/image";
import Button from "../../main/button/Button";

interface SectionBoxProps {
  title: ReactNode;
  children?: ReactNode;
  SquareLogo: ReactNode;
  btnBgColor?: string;
  margin?: string;
  hasBtn?: boolean;
  btnHover?: string;
  href?: string;
}
const SectionBox = ({
  children,
  title,
  SquareLogo,
  btnBgColor,
  margin,
  hasBtn,
  btnHover,
  href,
}: SectionBoxProps) => {
  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full flex justify-center items-center">
        <div className="flex absolute right-[-120px]">
          <Image className="z-30" src={WhiteSquare} alt="" />
          {SquareLogo}
        </div>
        <span className="w-full border border-dashed border-[#E6E6E6] absolute"></span>
        {title}
      </div>
      <div className="w-full">
        {children}
        {hasBtn && (
          <div
            className={` w-full flex justify-center ${margin ? margin : ""}`}
          >
            <Button
              hover={btnHover}
              bg={btnBgColor}
              href={href}
              dir="rtl"
              color={"text-white"}
              icon={
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.09167 7.14665L12.3125 7.14665"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clip-rule="evenodd"
                    d="M7.09155 4.22937L2.46164 7.14662L7.09155 10.0639L7.09155 4.22937Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              text="مشاهده بیشتر"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionBox;
