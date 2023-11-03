import Button from "@/components/main/button/Button";
import PageTitle from "@/components/main/pageTitle/PageTitle";
import Pagination from "@/components/main/pagination/Pagination";
import CustomeTable from "@/components/main/table/CustomeTable";
import RegisteredDataTable from "@/components/profile/admin/registered-devices/RegisteredDataTable";
import { getRegisteredDevices } from "@/services/profile/admin/registered-devices";
import { generateHeaders } from "@/utills/generateTableHeaders";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const RegisteredDevices = async () => {
  const regesteredDevices = await getRegisteredDevices(
    cookies().get("token")?.value!
  );
  console.log(regesteredDevices?.data);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between items-center">
        <PageTitle
          title="محصولات ثبت شده"
          text="شما می توانید محصولات ثبت شده  را در اینجا مشاهده و در صورت نیاز اقدام به حذف آن ها کنید."
        />
        <Button
          text="افزودن دستی"
          rounded="rounded-[6px]"
          color="text-white"
          href="/panel/registered-devices/add"
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
      <RegisteredDataTable data={regesteredDevices?.data!} />
    </div>
  );
};

export default RegisteredDevices;
