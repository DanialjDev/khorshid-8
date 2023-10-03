import React, { ReactNode } from "react";

const FooterBox = ({
  title,
  children,
  width,
}: {
  title: string;
  children: ReactNode;
  width?: string;
}) => {
  return (
    <div
      className={`w-full xl:col-span-1 md:col-span-2 col-span-4 flex flex-col items-center md:border-none border-b border-gray md:pb-0 pb-5`}
    >
      <div className="w-full">
        <p className="text-white text-[19px]">{title}</p>
      </div>
      <div className="w-full mt-4">{children}</div>
    </div>
  );
};

export default FooterBox;
