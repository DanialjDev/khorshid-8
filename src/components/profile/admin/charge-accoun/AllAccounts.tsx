"use client";

import CustomeTable from "@/components/main/table/CustomeTable";
import TableBodyData from "@/components/pages/medical-equipments-list/TableBodyData";
import { getUsersAccounts } from "@/services/profile/admin/charge-account";
import { User, UsersObj } from "@/services/profile/admin/charge-account/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import Link from "next/link";
import Pagination from "@/components/main/pagination/Pagination";

const AllAccounts = ({ userAccounts }: { userAccounts: UsersObj | null }) => {
  const token = Cookies.get("token");
  const [userData, setUserData] = useState<UsersObj | null>(userAccounts);
  const [searchInput, setSeachInput] = useState("");

  const tableHeaders = generateHeaders("charge_account");
  const filterHandler = async () => {
    if (token) {
      const filteredData = await getUsersAccounts(token, searchInput);
      if (filteredData?.data) {
        setUserData(filteredData.data);
        return;
      } else {
        if (filteredData?.status === 500) {
          setUserData(null);
          toast.error(filteredData?.message);
        }
      }
    }
  };

  const paginationHandler = async (pageNumber: number) => {
    const updatedData = await getUsersAccounts(
      Cookies.get("token")!,
      searchInput ? searchInput : null,
      pageNumber
    );
    console.log(updatedData?.status);
    if (updatedData?.data) {
      console.log(updatedData?.data?.data);
      setUserData(updatedData.data!);
    }
  };

  return (
    <div className="w-full flex flex-col justify-start mt-10">
      <div className="w-full flex justify-start items-center">
        <div className="w-[370px] h-[40px] flex justify-between px-2 items-center bg-white border border-inputBorderColor rounded-[4px]">
          <input
            value={searchInput}
            onChange={(e) => setSeachInput(e.target.value)}
            type="text"
            className="bg-transparent w-[260px] outline-none placeholder:text-[13px]"
            placeholder="حساب کاربری مورد نظر خود را تایپ کنید."
          />
          <button
            onClick={filterHandler}
            className="flex justify-center items-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                stroke="#060607"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 16.5L15 15"
                stroke="#060607"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full mt-2">
        <CustomeTable
          text="اطلاعاتی برای نمایش وجود ندارد"
          headers={tableHeaders ? tableHeaders : []}
        >
          {userData &&
            userData.data &&
            userData.data.map((item, index) => (
              <tr key={item.userId}>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.fullName}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.companyName}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.managerFullName}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.maxDeviceNumber}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  {item.remainDeviceNumber}
                </td>
                <td className="whitespace-nowrap p-4 text-[14px]">
                  <Link
                    href={`/panel/charge-account/single-user?userId=${item.userId}`}
                    className="py-1 px-3 cursor-pointer text-primaryDark underline w-fit flex justify-center items-center rounded-full bg-primaryLight"
                  >
                    مشاهده
                  </Link>
                </td>
              </tr>
            ))}
        </CustomeTable>
      </div>
      <div className="w-full flex justify-center my-10">
        <Pagination
          onClick={paginationHandler}
          totalPagesCount={userData?.totalPagesCount!}
        />
      </div>
    </div>
  );
};

export default AllAccounts;
