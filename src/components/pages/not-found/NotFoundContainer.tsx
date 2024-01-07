"use client";

import Image from "next/image";
import React, { useState } from "react";

import NotFoundLogo from "../../../../public/assets/images/not-found.svg";
import Button from "@/components/main/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
const NotFoundContainer = () => {
  const { push, back, refresh } = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <Image
          src={NotFoundLogo}
          alt="صفحه مورد نظر پیدا نشد"
          width={500}
          height={500}
        />
      </div>
      <div className="text-[20px] text-center mt-[40px]">
        <p className="text-dark text-bold">متاسفیم</p>
        <p className="text-dark text-[18px] font-normal mt-8">
          صفحه مورد نظر یافت نشد
        </p>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <div>
          <Button
            text="صفحه اصلی"
            bg="bg-primary"
            color="text-white"
            rounded="rounded-[5px]"
            loading={loading}
            onClick={() => {
              setLoading(true);
              push("/");
              refresh();
            }}
          />
        </div>
        <div className="mr-5">
          <Button
            text="بازگشت به صفحه قبل"
            bg="bg-white"
            color="text-primary"
            border="border border-priamry"
            rounded="rounded-[5px]"
            onClick={() => back()}
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-[50px]">
        <Link
          onClick={() => refresh()}
          href={"/"}
          className="w-fit px-10 border-r border-l-0 border-notFoundItemBorder text-gray hover:text-primary transition-all duration-300"
        >
          خانه
        </Link>
        <Link
          href={"/contact-us"}
          className="w-fit px-10 border-r border-l-0 border-notFoundItemBorder text-gray hover:text-primary transition-all duration-300"
        >
          تماس با ما
        </Link>
        <Link
          href={"/about-us"}
          className="w-fit px-10 border-r border-l-0 border-notFoundItemBorder text-gray hover:text-primary transition-all duration-300"
        >
          درباره ما
        </Link>
        <Link
          href={"/medical-equipments-list?name=GetDevices"}
          className="w-fit px-10 border-r border-l border-notFoundItemBorder text-gray hover:text-primary transition-all duration-300"
        >
          لیست تجهیزات پزشکی
        </Link>
      </div>
    </>
  );
};

export default NotFoundContainer;
