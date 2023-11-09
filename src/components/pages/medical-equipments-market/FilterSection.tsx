"use client";

import React from "react";
import CustomRadio from "./CustomRadio";
import { getDevices } from "@/services/shop";

const FilterSection = () => {
  const onSearch = async (searchString: string) => {
    setTimeout(async () => {
      const res = await getDevices(searchString);
    }, 1000);
  };
  return (
    <>
      <div className="col-span-2 flex justify-between items-center p-4 bg-white shadow-xs rounded-lg">
        <input
          type="text"
          className="outline-none text-[16px] bg-transparent placeholder:text-[16px]"
          placeholder="جستجو محصول"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2993 18.5757L15.7051 13.9814C16.8112 12.509 17.4083 10.7166 17.4062 8.875C17.4062 4.1709 13.5791 0.34375 8.875 0.34375C4.1709 0.34375 0.34375 4.1709 0.34375 8.875C0.34375 13.5791 4.1709 17.4062 8.875 17.4062C10.7166 17.4083 12.509 16.8112 13.9814 15.7051L18.5757 20.2993C18.8082 20.5072 19.1116 20.6182 19.4234 20.6094C19.7352 20.6007 20.0318 20.473 20.2524 20.2524C20.473 20.0318 20.6007 19.7352 20.6094 19.4234C20.6182 19.1116 20.5072 18.8082 20.2993 18.5757ZM2.78125 8.875C2.78125 7.66977 3.13864 6.4916 3.80823 5.48949C4.47782 4.48738 5.42953 3.70633 6.54302 3.24511C7.65651 2.78389 8.88176 2.66321 10.0638 2.89834C11.2459 3.13347 12.3317 3.71384 13.1839 4.56607C14.0362 5.41829 14.6165 6.50409 14.8517 7.68616C15.0868 8.86824 14.9661 10.0935 14.5049 11.207C14.0437 12.3205 13.2626 13.2722 12.2605 13.9418C11.2584 14.6114 10.0802 14.9687 8.875 14.9687C7.25943 14.9668 5.71059 14.3242 4.56821 13.1818C3.42583 12.0394 2.78319 10.4906 2.78125 8.875Z"
              fill="#2C9CF0"
            />
          </svg>
        </div>
      </div>
      <div className="w-full p-2 col-span-2 flex flex-col bg-white shadow-xs rounded-lg">
        <div className="w-full flex justify-between items-center border-b border-menuBorderColor py-2 text-[16px]">
          <p className="">فیلتر ها</p>
          <button className="text-primaryDark font-semibold">
            حذف فیلترها
          </button>
        </div>
        {/* <form className="w-full flex flex-col mt-4">
          <CustomRadio  id="radio1" title="ارتوپدی" />
          <CustomRadio id="radio2" title="اورژانس" />
        </form> */}
      </div>
    </>
  );
};

export default FilterSection;
