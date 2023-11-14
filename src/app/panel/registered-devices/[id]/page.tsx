import PageTitle from "@/components/main/pageTitle/PageTitle";
import UpdateAcceptedDeviceForm from "@/components/profile/admin/registered-devices/UpdateAcceptedDeviceForm";
import { getCompanies, getDeviceCategories } from "@/services/common";
import { getSingleAcceptedDevice } from "@/services/profile/admin/registered-devices";
import { cookies } from "next/headers";
import React from "react";

const UpdateRegisteredDevice = async ({
  params,
}: {
  params: { id: string };
}) => {
  const singleDeviceRes = await getSingleAcceptedDevice(
    Number(params?.id),
    cookies().get("token")?.value!
  );
  const simpleCompanies = await getCompanies();
  const devicCategories = await getDeviceCategories();

  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="افزودن دستی به محصولات"
        text="شما می توانید محصولات ثبت شده  را در اینجا مشاهده و در صورت اقدام به حذف آن ها کنید."
      />
      <div className="w-full mt-8">
        <UpdateAcceptedDeviceForm
          companies={
            simpleCompanies?.companyList ? simpleCompanies.companyList : null
          }
          deviceCategories={devicCategories?.data ? devicCategories.data : null}
          singleDeviceData={singleDeviceRes?.data ? singleDeviceRes.data : null}
        />
      </div>
    </div>
  );
};

export default UpdateRegisteredDevice;

export const generateMetadata = async () => {
  return {
    title: "محصولات ثبت شده",
  };
};
