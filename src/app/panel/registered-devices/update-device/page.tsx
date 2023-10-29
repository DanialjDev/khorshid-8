import PageTitle from "@/components/main/pageTitle/PageTitle";
import UpdateAcceptedDeviceForm from "@/components/profile/admin/registered-devices/UpdateAcceptedDeviceForm";
import { getCompanies } from "@/services/common";
import { getSingleAcceptedDevice } from "@/services/profile/admin/registered-devices";
import { cookies } from "next/headers";
import React from "react";

const UpdateRegisteredDevice = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { deviceId: string | undefined };
}) => {
  const singleDeviceRes = await getSingleAcceptedDevice(
    Number(searchParams?.deviceId),
    cookies().get("token")?.value!
  );
  const simpleCompanies = await getCompanies();
  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="افزودن دستی به محصولات"
        text="شما می توانید محصولات ثبت شده  را در اینجا مشاهده و در صورت اقدام به حذف آن ها کنید."
      />
      <div className="w-full mt-8">
        <UpdateAcceptedDeviceForm
          companyList={
            simpleCompanies?.companyList ? simpleCompanies.companyList : null
          }
        />
      </div>
    </div>
  );
};

export default UpdateRegisteredDevice;
