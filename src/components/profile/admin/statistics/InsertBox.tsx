"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

const InsertBox = ({
  boxNumber,
  children,
}: {
  boxNumber?: string;
  children: ReactNode;
}) => {
  const id = useSearchParams().get("newsId");
  const pathname = usePathname();
  return (
    <div className="rounded-[12px] bg-menuBg border shadow-adminFormBox border-adminFormBorder2 p-5">
      <div className="text-[22px]">
        <p className="text-posterTitleColor">
          {pathname.includes("insert-news")
            ? `کارت خبر ${id}`
            : `کارت همایش ${boxNumber}`}
        </p>
      </div>
      {children}
    </div>
  );
};

export default InsertBox;
