"use client";

import React, { useEffect, useState } from "react";
import UserInfo from "./user-info/UserInfo";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { authToggler } from "@/redux/features/auth/authSlice";
import { UserInfoType } from "@/services/auth/types";
import { InitialValues } from "@/utills/validation/auth/types";

const NormalProfile = ({ userInfo }: { userInfo: InitialValues }) => {
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
        duration: 3000,
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
        </div>
        {selectedTab === "userInfo" ? <UserInfo userInfo={userInfo} /> : null}
      </div>
    </div>
  );
};

export default NormalProfile;
