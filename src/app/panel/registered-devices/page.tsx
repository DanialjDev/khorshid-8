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

  return (
    <div className="w-full flex flex-col">
      <RegisteredDataTable data={regesteredDevices?.data!} />
    </div>
  );
};

export default RegisteredDevices;

export const generateMetadata = async () => {
  return {
    title: "محصولات ثبت شده",
  };
};
