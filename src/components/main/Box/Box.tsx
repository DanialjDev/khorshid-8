import React, { ReactNode } from "react";

const Box = ({
  title,
  children,
  padding = "p-4",
  border,
}: {
  title?: string;
  children: ReactNode;
  padding?: string;
  border?: string;
}) => {
  return (
    <div
      className={`w-[100%] flex flex-col bg-white shadow-xs ${padding} ${
        border ? border : ""
      } rounded-[10px] h-full`}
    >
      {title && (
        <div className="flex justify-start">
          <p className="text-[14px]">{title}</p>
        </div>
      )}
      {children}
    </div>
  );
};

export default Box;
