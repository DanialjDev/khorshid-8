"use client";

import Pagination from "@/components/main/pagination/Pagination";
import CustomeTable from "@/components/main/table/CustomeTable";
import { RegisteredDeviceObj } from "@/services/profile/admin/registered-devices/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import { getRegisteredDevices } from "@/services/profile/admin/registered-devices";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import PageTitle from "@/components/main/pageTitle/PageTitle";
import Button from "@/components/main/button/Button";
import { useRouter } from "next/navigation";

const RegisteredDataTable = ({ data }: { data: RegisteredDeviceObj }) => {
  const { push } = useRouter();
  const [items, setItems] = useState<RegisteredDeviceObj>(data);
  const [loading, setLoading] = useState(false);
  const tableHeaders = generateHeaders("GetUserAcceptedDevices");

  const paginateHandler = async (pageNumber: number) => {
    const regesteredDevices = await getRegisteredDevices(
      Cookies.get("token")!,
      pageNumber
    );

    if (regesteredDevices?.data) {
      setItems(regesteredDevices.data);
    }
  };
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <PageTitle
          title="محصولات ثبت شده"
          text="شما می توانید محصولات ثبت شده  را در اینجا مشاهده و در صورت نیاز اقدام به حذف آن ها کنید."
        />
        <Button
          loading={loading}
          onClick={() => {
            push("/panel/registered-devices/add");
            setLoading(true);
          }}
          text="افزودن دستی"
          rounded="rounded-[6px]"
          color="text-white"
          icon={
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="white"
                stroke-opacity="0.95"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </div>
      <div className="w-full mt-6">
        <CustomeTable
          headers={tableHeaders!}
          text="دستگاهی برای نمایش وجود ندارد"
        >
          {data &&
            items.data &&
            items.data.map((item, index) => (
              <tr key={item.deviceId}>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.name}
                </td>
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
                  {item.orderedByFullName}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.orderedByMobileNumber}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  <Link
                    href={`/panel/registered-devices/${item.deviceId}`}
                    className="py-1 px-3 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
                  >
                    مشاهده
                  </Link>
                </td>
              </tr>
            ))}
        </CustomeTable>
      </div>
      <div className="w-full flex justify-center mt-7">
        <Pagination
          onClick={paginateHandler}
          totalPagesCount={items?.totalPagesCount!}
        />
      </div>
    </>
  );
};

export default RegisteredDataTable;
