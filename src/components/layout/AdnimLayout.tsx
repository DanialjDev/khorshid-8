import React, { ReactNode } from "react";
import AdminMenu from "../profile/admin/menu/AdminMenu";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AdminMenu />
      <div className="w-[calc(100%-270px)] flex flex-col h-screen py-5 px-10">
        <div className="w-full flex items-center py-2 pb-4 justify-end border-b border-menuHeaderBorder">
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
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
