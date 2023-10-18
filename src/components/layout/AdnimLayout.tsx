"use client";

import React, { ReactNode, useEffect, useState } from "react";
import AdminMenu from "../profile/admin/menu/AdminMenu";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [nav, setNav] = useState(false);
  const { back } = useRouter();
  const userToken = Cookies.get("token");

  useEffect(() => {
    if (!userToken) {
      back();
      toast.warning("تنها کاربر ادمین به این مسیر دسترسی دارد");
    }
  }, []);
  return (
    <div className="w-full h-full flex">
      <AdminMenu setNav={setNav} nav={nav} />
      <div
        className={`w-full h-screen bg-[#e6e6e686] absolute ${
          nav ? "flex" : "hidden"
        } z-40`}
      ></div>

      <div className="lg:w-[calc(100%-270px)] w-full !h-screen overflow-scroll relative flex flex-col py-5 sm:px-10 px-6 mr-auto">
        <div className="w-full flex items-center py-2 pb-4 lg:justify-end justify-between border-b border-menuHeaderBorder">
          <button className="lg:hidden flex" onClick={() => setNav(true)}>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 12C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H1C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H19ZM19 0C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H19Z"
                fill="#292D32"
              />
            </svg>
          </button>
          <div className="flex flex-row-reverse items-center">
            <div className="flex justify-center items-center mr-14">
              <p className="text-[14px] text-primaryDark3">Admin</p>
            </div>
            <div className="flex justify-center items-center">
              <svg
                width="21"
                height="27"
                viewBox="0 0 21 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0571 26.0313C8.66932 26.0245 7.54401 24.9061 7.53028 23.5199H12.5589C12.5615 23.8557 12.4974 24.1886 12.3703 24.4994C12.0405 25.2553 11.3668 25.8066 10.56 25.9811H10.5537H10.5349H10.5122H10.5009C10.3549 26.0114 10.2063 26.0282 10.0571 26.0313ZM20.1143 22.2643H0V19.753L2.51429 18.4973V11.5911C2.44806 9.81953 2.8486 8.06161 3.67589 6.49312C4.49936 5.03845 5.90693 4.0055 7.54286 3.65532V0.917969H12.5714V3.65532C15.8136 4.4263 17.6 7.24401 17.6 11.5911V18.4973L20.1143 19.753V22.2643Z"
                  fill="#B0C3CC"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full justify-center relative flex m-auto h-full mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
