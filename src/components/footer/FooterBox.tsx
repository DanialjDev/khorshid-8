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
    <div className={`${width ? width : "w-[90%]"} grid mr-10`}>
      <div className="w-full">
        <p className="text-white text-[20px]">{title}</p>
      </div>
      <div className="w-full mt-4">{children}</div>
    </div>
  );
};

export default FooterBox;
