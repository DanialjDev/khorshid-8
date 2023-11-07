"use client";

import { getTitle } from "@/utills/getTitle";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");
  const searchParams = useSearchParams();
  console.log(pathname.split("/"));
  return (
    <div className="bg-[#FCFCFC] flex items-center py-14 text-[#979797]">
      <div className="flex items-center text-[12px]">
        <Link href={"/"} className="flex items-center hover:text-primary">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.86791 15.5786V13.2785C5.8679 12.6935 6.34484 12.2181 6.93576 12.2142H9.10032C9.69406 12.2142 10.1754 12.6907 10.1754 13.2785V13.2785V15.5857C10.1752 16.0824 10.5757 16.4884 11.0773 16.5H12.5203C13.9588 16.5 15.125 15.3455 15.125 13.9214V13.9214V7.37838C15.1173 6.81812 14.8516 6.29201 14.4035 5.94977L9.46829 2.01398C8.6037 1.32867 7.37465 1.32867 6.51006 2.01398L1.59652 5.95692C1.14669 6.29777 0.88054 6.82475 0.875 7.38552V13.9214C0.875 15.3455 2.04116 16.5 3.47968 16.5H4.92272C5.43677 16.5 5.85348 16.0875 5.85348 15.5786V15.5786"
              stroke="#979797"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mr-3">خانه</p>
        </Link>
        <div className="mr-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.333 12.6666L5.66634 7.99998L10.333 3.33331"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center mr-3">
          {/* @ts-ignore */}
          <p className="text-dark">{getTitle(splitedPathname[1])}</p>
        </div>
        <>
          {splitedPathname[2] ? (
            <>
              <div className="mr-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.333 12.6666L5.66634 7.99998L10.333 3.33331"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-center items-center mr-3">
                <p className="text-dark">
                  {searchParams.get("name") && searchParams.get("name")}
                </p>
              </div>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
};

export default Breadcrumb;
