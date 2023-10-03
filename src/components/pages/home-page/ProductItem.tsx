"use client";

import Image from "next/image";
import React from "react";
import Button from "../../main/button/Button";
import { useRouter } from "next/navigation";

interface ProductProps {
  companyName: string;
  imageUrl: string;
  name: string;
  orderedByMobileNumber: string;
  deviceId: string;
}

const ProductItem = ({
  companyName,
  imageUrl,
  name,
  orderedByMobileNumber,
  deviceId,
}: ProductProps) => {
  const { push } = useRouter();
  return (
    <div
      onClick={() =>
        push(
          `/medical-equipments-market/singleProduct?name=${name}&id=${deviceId}`
        )
      }
      className="w-full flex flex-col p-3 bg-white shadow-xs rounded-[10px] cursor-pointer"
    >
      <div className="w-full flex justify-center items-center">
        <Image width={300} height={300} src={imageUrl} alt="water splash" />
      </div>
      <div className="flex flex-col justify-start w-full p-2 bg-[#F9F9F9] rounded-md my-5">
        <p className="text-[14px]">{name}</p>
        <ul className="list-disc marker:text-secondary p-0 mr-4 text-[12px] text-[#707070]">
          <li className="my-3">
            نام شرکت: <span className="text-[#979797]">{companyName}</span>
          </li>
          <li>
            تلفن شرکت:{" "}
            <span className="text-[#979797]">{orderedByMobileNumber}</span>
          </li>
        </ul>
        <div className="flex justify-start mt-4">
          <Button
            href={`/medical-equipments-market/singleProduct?name=${name}`}
            padding="py-2"
            text="خرید محصول"
            color="text-secondary"
            bg={"bg-transparent"}
            dir="rtl"
            icon={
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.59167 7.64665L11.8125 7.64665"
                  stroke="#54E346"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.59155 4.72937L1.96164 7.64662L6.59155 10.5639L6.59155 4.72937Z"
                  stroke="#54E346"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
