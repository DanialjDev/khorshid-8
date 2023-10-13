"use client";

import CustomeTable from "@/components/main/table/CustomeTable";
import TableBodyData from "@/components/pages/medical-equipments-list/TableBodyData";
import { getUsersAccounts } from "@/services/profile/admin/charge-account";
import { User } from "@/services/profile/admin/charge-account/types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const AllAccounts = ({ userAccounts }: { userAccounts: User[] }) => {
  const token = Cookies.get("token");
  const [userData, setUserData] = useState<User[]>([]);
  const [searchInput, setSeachInput] = useState("");

  const tableHeaders = generateHeaders("charge_account");
  const TableBody = TableBodyData({
    // @ts-ignore
    data: userData,
    operationName: "GetUsers",
  });

  const filterHandler = async () => {
    if (token) {
      const filteredData = await getUsersAccounts(token, searchInput);
      if (filteredData?.data) {
        setUserData(filteredData.data);
        return;
      } else {
        toast.error(filteredData?.message);
      }
    }
  };

  useEffect(() => {
    setUserData(userAccounts);
  }, []);

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
          headers={tableHeaders ? tableHeaders : []}
          items={TableBody}
        />
      </div>
    </div>
  );
};

export default AllAccounts;
