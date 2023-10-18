"use client";

import Button from "@/components/main/button/Button";
import CustomeTable from "@/components/main/table/CustomeTable";
import {
  confirmDeviceHandler,
  declineDeviceHandler,
} from "@/services/profile/admin/register-product-requests";
import { RequestedProductsObj } from "@/services/profile/admin/register-product-requests/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AllProducts = ({
  productsData,
}: {
  productsData: RequestedProductsObj | null;
}) => {
  const { refresh } = useRouter();
  const confirmDevice = async (deviceID: number) => {
    if (Cookies.get("token")) {
      const confirmDeviceRes = await confirmDeviceHandler(
        {
          deviceID,
          removeImage: false,
        },
        Cookies.get("token")!
      );

      if (confirmDeviceRes?.status === 200) {
        toast.success(confirmDeviceRes.message);
        refresh();
      } else {
        toast.error(confirmDeviceRes?.message);
      }
    }
  };

  // const declineDevice = async (deviceID: number) => {
  //   if (Cookies.get("token")) {
  //     const declineDeviceRes = await declineDeviceHandler(
  //       {
  //         deviceID,
  //         declinedStateMessage,
  //       },
  //       Cookies.get("token")!
  //     );

  //     if (declineDeviceRes?.status === 200) {
  //       toast.success(declineDeviceRes.message);
  //       push("/panel/register-product-requests/");
  //       refresh();
  //     } else {
  //       toast.error(declineDeviceRes?.message);
  //     }
  //     setOpenModal(false);
  //   }
  // };

  const tableHeaders = generateHeaders("GetRequestedDevices");
  return (
    <div className="w-full flex flex-col">
      <div className="w-full my-3">
        <CustomeTable headers={tableHeaders ? tableHeaders : []}>
          {productsData && productsData.data
            ? productsData.data.map((item, index) => (
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
                    <Link
                      href={`/panel/register-product-requests/set-device-status?deviceId=${item.deviceId}`}
                      className="py-1 px-3 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
                    >
                      مشاهده
                    </Link>
                  </td>
                  <td className="whitespace-nowrap flex gap-x-4 p-4 text-[14px]">
                    <Button
                      onClick={() => confirmDevice(item.deviceId)}
                      rounded="rounded-[5px]"
                      bg="bg-confirmBtnBg"
                      border="border-posterBoxActiveBorder border"
                      padding="px-2 py-1"
                      text="تایید"
                      icon={
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z"
                            fill="#1DC9A0"
                            fill-opacity="0.15"
                            stroke="#1DC9A0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.75 12.4999L10.58 15.3299L16.25 9.66992"
                            stroke="#1DC9A0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                    />
                    <Button
                      rounded="rounded-[5px]"
                      bg="bg-denyBtnBg"
                      border="border-redColor border"
                      padding="pl-4 pr-3 py-1"
                      text="رد"
                      icon={
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 7L11 11L15 7ZM11 11L7 15L11 11ZM11 11L7 7L11 11ZM11 11L15 15L11 11Z"
                            fill="#E21414"
                            fill-opacity="0.15"
                          />
                          <path
                            d="M15 7L11 11M11 11L7 15M11 11L7 7M11 11L15 15"
                            stroke="#E21414"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            fill="#E21414"
                            fill-opacity="0.15"
                            stroke="#E21414"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      }
                      color="text-redColor"
                    />
                  </td>
                </tr>
              ))
            : null}
        </CustomeTable>
      </div>
    </div>
  );
};

export default AllProducts;
