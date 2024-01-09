"use client";

import Image from "next/image";
import React from "react";
import Button from "../../main/button/Button";
import Link from "next/link";

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
  return (
    <Link
      href={`/medical-equipments-market/singleProduct?name=${name}&id=${deviceId}`}
      className="w-full flex flex-col p-3 bg-white shadow-xs rounded-[10px] cursor-pointer"
    >
      <div className="w-full h-[220px] overflow-hidden flex justify-center items-center">
        {imageUrl ? (
          <Image
            width={200}
            height={200}
            objectFit="cover"
            src={imageUrl}
            alt={name}
            unoptimized
          />
        ) : (
          <svg
            width="76"
            height="76"
            viewBox="0 0 76 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M64.7902 11.21L11.2102 64.79C8.0435 61.6233 6.3335 57.0317 6.3335 51.2683V24.7317C6.3335 13.205 13.2052 6.33334 24.7318 6.33334H51.2685C57.0318 6.33334 61.6235 8.04334 64.7902 11.21Z"
              fill="#2C9CF0"
            />
            <path
              opacity="0.4"
              d="M69.6667 24.7317V44.0167L64.5051 39.5833C62.0351 37.4617 58.0451 37.4617 55.5751 39.5833L42.4017 50.8883C40.1534 52.82 36.6067 53.01 34.1367 51.3633L68.4317 17.0683C68.8751 18.2717 69.1917 19.5383 69.3817 20.9C69.5717 22.1033 69.6667 23.4017 69.6667 24.7317Z"
              fill="#2C9CF0"
            />
            <path
              d="M69.6667 44.0167V51.2683C69.6667 62.795 62.795 69.6667 51.2684 69.6667H24.7317C23.4017 69.6667 22.1034 69.5717 20.9 69.3817C19.5384 69.1917 18.2717 68.875 17.0684 68.4317L34.1367 51.3633C36.6067 53.01 40.1534 52.82 42.4017 50.8883L55.575 39.5833C58.045 37.4617 62.035 37.4617 64.505 39.5833L69.6667 44.0167Z"
              fill="#2C9CF0"
            />
            <path
              d="M68.9383 7.06167C67.9883 6.11167 66.4366 6.11167 65.4866 7.06167L7.06162 65.5183C6.11162 66.4683 6.11162 68.02 7.06162 68.97C7.53662 69.4133 8.13829 69.6667 8.77162 69.6667C9.40495 69.6667 10.0066 69.4133 10.4816 68.9383L68.9383 10.4817C69.92 9.53167 69.92 8.01167 68.9383 7.06167Z"
              fill="#2C9CF0"
            />
            <path
              d="M25.3333 32.87C29.4957 32.87 32.87 29.4957 32.87 25.3333C32.87 21.1709 29.4957 17.7967 25.3333 17.7967C21.1709 17.7967 17.7966 21.1709 17.7966 25.3333C17.7966 29.4957 21.1709 32.87 25.3333 32.87Z"
              fill="#2C9CF0"
            />
          </svg>
        )}
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
    </Link>
  );
};

export default ProductItem;
