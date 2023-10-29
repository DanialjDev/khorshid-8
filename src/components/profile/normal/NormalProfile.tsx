"use client";

import React, { useState } from "react";
import UserInfo from "./user-info/UserInfo";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { InitialValues } from "@/utills/validation/auth/types";
import Button from "@/components/main/button/Button";
import { UserProfileDevice } from "@/services/profile/user/types";
import { decrypt } from "@/utills/crypto";
import {
  getUserRegisteredDevices,
  removeUserDevice,
} from "@/services/profile/user";
import Pagination from "@/components/main/pagination/Pagination";
import Link from "next/link";
import CustomeTable from "@/components/main/table/CustomeTable";
import { generateHeaders } from "@/utills/generateTableHeaders";

const NormalProfile = ({
  userInfo,
  userDevices,
  totalPageContain,
}: {
  userInfo: InitialValues | undefined;
  userDevices: UserProfileDevice[] | undefined;
  totalPageContain?: number | null;
}) => {
  const { push, refresh } = useRouter();
  const [selectedTab, setSelectedTab] = useState<"userInfo" | "devices">(
    "userInfo"
  );

  const [deviceId, setDeviceId] = useState<number | null>(null);

  const [tableData, setTableData] = useState<UserProfileDevice[] | undefined>(
    userDevices
  );

  const tableHeaders = generateHeaders("ProfileDevices");

  const user = Cookies.get("userInfo")
    ? JSON.parse(decrypt(Cookies.get("userInfo")))
    : null;

  const removeUserDeviceHandler = async (deviceID: number) => {
    const removeDeviceRes = await removeUserDevice(
      {
        deviceID,
      },
      Cookies.get("token")!
    );

    if (removeDeviceRes?.status === 200) {
      toast.success(removeDeviceRes.message);
      const userDevices = await getUserRegisteredDevices(Cookies.get("token")!);
      if (userDevices?.data) {
        setTableData(userDevices.data.data);
      }
    } else {
      toast.error(removeDeviceRes?.message);
    }
  };

  const updateTableData = async (pageNumber: number) => {
    const newTableData = await getUserRegisteredDevices(
      Cookies.get("token")!,
      pageNumber
    );

    if (newTableData?.data) {
      setTableData(newTableData.data.data);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {selectedTab === "devices" && (
        <div className="w-full mb-7 flex items-center bg-tableHeadColor border border-menuBorderColor rounded-[12px] p-3">
          <div className="flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V14"
                stroke="#2C9CF0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0001 21.41H5.94005C2.47005 21.41 1.02005 18.93 2.70005 15.9L5.82006 10.28L8.76006 5.00003C10.5401 1.79003 13.4601 1.79003 15.2401 5.00003L18.1801 10.29L21.3001 15.91C22.9801 18.94 21.5201 21.42 18.0601 21.42H12.0001V21.41Z"
                stroke="#2C9CF0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9945 17H12.0035"
                stroke="#2C9CF0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex mr-4">
            <p className="text-[15px]">
              شما مجاز به ثبت{" "}
              <span className="text-primary underline">
                {user.maxDeviceNumber}
              </span>{" "}
              عدد دستگاه به صورت رایگان هستید .!
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col shadow-xs border border-profileBorderColor rounded-[12px]">
        {/* Tabs */}
        <div className="w-full flex-col md:flex-row bg-tableHeadColor border-b p-3 rounded-tr-[12px] rounded-tl-[12px] border-profileBorderBottom flex justify-between items-center">
          <div className="flex sm2:flex-row flex-col sm:justify-center justify-between sm:w-fit w-full items-center">
            <button
              onClick={() => setSelectedTab("userInfo")}
              className={`p-2 relative text-lg ${
                selectedTab === "userInfo" ? "text-primary" : ""
              }`}
            >
              <p>اطلاعات کاربری</p>
              <span
                className={`w-full right-0 absolute h-[2px] bg-primary ${
                  selectedTab === "userInfo" ? "flex" : "hidden"
                }`}
              ></span>
            </button>
            <button
              onClick={() => setSelectedTab("devices")}
              className={`p-2 relative text-lg sm:mr-7 ${
                selectedTab === "devices" ? "text-primary" : ""
              }`}
            >
              <p>دستگاه های ثبت شده</p>
              <span
                className={`w-full right-0 absolute h-[2px] bg-primary ${
                  selectedTab === "devices" ? "flex" : "hidden"
                }`}
              ></span>
            </button>
          </div>
          {selectedTab === "devices" ? (
            <div className="flex sm:flex-row flex-col items-center sm:m-0 mt-3">
              <div className="">
                <Button
                  href="/register-medical-equipments-device"
                  text="اضافه نمودن دستگاه جدید"
                  color="text-white"
                  bg="bg-primary"
                  hover="hover:bg-btnPrimaryHover"
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
              <div className="sm:mr-5 sm:mt-0 mt-3">
                <Button
                  text="حذف درخواست"
                  color="text-redColor"
                  bg="bg-redColorLight"
                  border="border border-redColor"
                  onClick={() =>
                    deviceId !== null
                      ? removeUserDeviceHandler(deviceId)
                      : toast.warning(
                          "لطفا دستگاه مورد نظر خود را از جدول زیر انتخاب کنید"
                        )
                  }
                  icon={
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5 6.97738C20.615 6.59238 16.7067 6.39404 12.81 6.39404C10.5 6.39404 8.19 6.51071 5.88 6.74404L3.5 6.97738"
                        stroke="#C92626"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.91667 5.7985L10.1733 4.27016C10.36 3.16183 10.5 2.3335 12.4717 2.3335H15.5283C17.5 2.3335 17.6517 3.2085 17.8267 4.28183L18.0833 5.7985"
                        stroke="#C92626"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
                        stroke="#C92626"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0517 19.25H15.9367"
                        stroke="#C92626"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.0833 14.5835H16.9167"
                        stroke="#C92626"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                />
              </div>
            </div>
          ) : (
            <div className="sm:m-0 mt-3">
              <Button
                text="خروج از حساب کاربری"
                bg="bg-redColorLight"
                color="text-redColor"
                border="border border-redColor"
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("userInfo");

                  push("/");
                }}
                icon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1001 7.56023C14.7901 3.96023 12.9401 2.49023 8.8901 2.49023H8.7601C4.2901 2.49023 2.5001 4.28023 2.5001 8.75023V15.2702C2.5001 19.7402 4.2901 21.5302 8.7601 21.5302H8.8901C12.9101 21.5302 14.7601 20.0802 15.0901 16.5402"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.99988 12H20.3799"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.15 8.6499L21.5 11.9999L18.15 15.3499"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          )}
        </div>
        {selectedTab === "userInfo" ? (
          <UserInfo userInfo={userInfo} />
        ) : (
          <div className="w-full flex flex-col">
            <CustomeTable headers={tableHeaders ? tableHeaders : []}>
              {tableData &&
                tableData.map((item, index) => (
                  <tr
                    key={item.deviceId}
                    className={` ${
                      deviceId === item.deviceId ? "!bg-primaryLight" : ""
                    } cursor-pointer`}
                    onClick={() => setDeviceId(item.deviceId)}
                  >
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
                      <span className="py-1 px-3 text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight">
                        {item.orderedByMobileNumber}
                      </span>
                    </td>
                    <td className="whitespace-nowrap p-4 text-[14px]">
                      <Link
                        className="w-fit bg-primaryLight text-primaryDark px-2 py-1 rounded-full underline"
                        target="_blank"
                        href={item.imageUrl || ""}
                      >
                        مشاهده تصویر
                      </Link>
                    </td>
                    <td className="whitespace-nowrap p-4 text-[14px]">
                      {item.stateCode ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#1DC9A0"
                            fill-opacity="0.15"
                            stroke="#1DC9A0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                            stroke="#1DC9A0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
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
                      )}
                    </td>
                  </tr>
                ))}
            </CustomeTable>
            <div className="w-full flex justify-center my-6">
              <Pagination
                totalPagesCount={totalPageContain!}
                onClick={updateTableData}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NormalProfile;
