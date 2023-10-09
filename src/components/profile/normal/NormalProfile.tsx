"use client";

import React, { useEffect, useState } from "react";
import UserInfo from "./user-info/UserInfo";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { authToggler } from "@/redux/features/auth/authSlice";
import { UserInfoType } from "@/services/auth/types";
import { InitialValues } from "@/utills/validation/auth/types";
import RegisteredDevices from "./registered-devices/RegisteredDevices";
import Button from "@/components/main/button/Button";

const NormalProfile = ({
  userInfo,
}: {
  userInfo: InitialValues | undefined;
}) => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState<"userInfo" | "devices">(
    "userInfo"
  );
  const user = Cookies.get("userInfo");
  console.log(userInfo);

  useEffect(() => {
    if (!user) {
      push("/");
      toast.error("برای دسترسی به صفحه پروفایل ابتدا وارد سایت شوید", {
        autoClose: 3000,
      });
      dispatch(authToggler("login"));
    }
  }, []);

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
              شما مجاز به ثبت <span className="text-primary underline">۳۰</span>{" "}
              عدد دستگاه به صورت رایگان هستید .!
            </p>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col shadow-xs border border-profileBorderColor rounded-[12px]">
        {/* Tabs */}
        <div className="w-full bg-tableHeadColor border-b p-3 rounded-tr-[12px] rounded-tl-[12px] border-profileBorderBottom flex justify-between items-center">
          <div className="flex items-center">
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
              className={`p-2 relative text-lg mr-12 ${
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
          {selectedTab === "devices" && (
            <div className="flex items-center">
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
              <div className="mr-5">
                <Button
                  text="حذف درخواست"
                  color="text-redColor"
                  bg="bg-redColorLight"
                  border="border border-redColor"
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
          )}
        </div>
        {selectedTab === "userInfo" ? (
          <UserInfo userInfo={userInfo} />
        ) : (
          <RegisteredDevices />
        )}
      </div>
    </div>
  );
};

export default NormalProfile;
