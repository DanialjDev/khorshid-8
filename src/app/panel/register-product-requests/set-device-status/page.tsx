import PageTitle from "@/components/main/pageTitle/PageTitle";
import SetDeviceStatusForm from "@/components/profile/admin/register-product-requests/SetDeviceStatusForm";
import { getSingleDeviceData } from "@/services/profile/admin/register-product-requests";
import { cookies } from "next/headers";
import React from "react";
import { toast } from "react-toastify";

const SetDeviceStatus = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { deviceId: string | undefined };
}) => {
  const token = cookies().get("token")?.value;
  const singleData = await getSingleDeviceData(searchParams?.deviceId!, token!);

  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="درخواست های ثبت محصول"
        text="شما می توانید درخواست های ثبت محصول  را در اینجا مشاهده و در صورت نیاز تایید یا عدم تایید کنید."
      />
      <SetDeviceStatusForm
        deviceInitialValues={
          singleData?.initialValues ? singleData.initialValues : null
        }
      />
    </div>
  );
};

export default SetDeviceStatus;
