"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const InsertBox = ({
  boxNumber,
  children,
}: {
  boxNumber: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <div className="rounded-[12px] bg-menuBg border shadow-adminFormBox border-adminFormBorder2 p-5">
      <div className="text-[22px]">
        <p className="text-posterTitleColor">
          {pathname.includes("insert-news")
            ? `کارت خبر ${boxNumber}`
            : `کارت همایش ${boxNumber}`}
        </p>
      </div>
      {children}
    </div>
  );
};

export default InsertBox;
