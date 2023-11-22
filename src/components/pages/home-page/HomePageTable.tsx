"use client";

import CustomeTable from "@/components/main/table/CustomeTable";
import Image from "next/image";
import React from "react";
import SectionBox from "./SectionBox";

import BlueSquare from "../../../../public/assets/images/home-page/blue-square.svg";
import { HomeDevice } from "@/services/homePage/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePageTable = ({ data }: { data: HomeDevice[] | null }) => {
  const { push } = useRouter();
  return (
    <div className="w-full my-[8em]">
      <SectionBox
        href="/medical-equipments-list?name=GetDevices"
        btnHover="hover:bg-btnPrimaryHover"
        hasBtn
        SquareLogo={
          <Image
            className="absolute right-8 z-40"
            src={BlueSquare}
            alt=""
            unoptimized
          />
        }
        btnBgColor="bg-primary"
        title={
          <p className="text-primary md:text-xl text-lg z-40 p-2 bg-white-gray">
            گروه های تخصصی تجهیزات پزشکی
          </p>
        }
      >
        <CustomeTable
          headers={[
            { name: "نام دستگاه", value: "" },
            { name: "مارک دستگاه", value: "" },
            { name: "کشور سازنده", value: "" },
            { name: "شرکت نمایندگی", value: "" },
            { name: "شماره تماس", value: "" },
            { name: "لینک سایت", value: "" },
            { name: "تصویر", value: "" },
          ]}
          text="در حال حاضر دستگاهی برای نمایش وجود ندارد"
        >
          {data?.map((item, index) => (
            <tr
              key={item.deviceId}
              onClick={() =>
                push(
                  `/medical-equipments-market/singleProduct?name=${item.name}&id=${item.deviceId}`
                )
              }
              className="cursor-pointer"
            >
              <td className="whitespace-nowrap p-4 text-[14px]">{index + 1}</td>
              <td className="whitespace-nowrap p-4 text-[14px]">{item.name}</td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.brand}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.country}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.companyName}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.orderedByMobileNumber}
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                <Link
                  className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                  href={
                    item.companyWebsite.startsWith("https")
                      ? item.companyWebsite
                      : `https://${item.companyWebsite}`
                  }
                >
                  مشاهده
                </Link>
              </td>
              <td className="whitespace-nowrap p-4 text-[14px]">
                {item.imageUrl ? (
                  <Link
                    className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                    // target="_blank"
                    href={item.imageUrl || "/"}
                  >
                    مشاهده تصویر
                  </Link>
                ) : (
                  <p className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full">
                    تصویری برای دستگاه ثبت نشده است
                  </p>
                )}
              </td>
            </tr>
          ))}
        </CustomeTable>
      </SectionBox>
    </div>
  );
};

export default HomePageTable;
