import PageTitle from "@/components/main/pageTitle/PageTitle";
import SingleUserDevice from "@/components/profile/admin/charge-accoun/SingleUserDevice";
import { getUserAcceptedSingleDevice } from "@/services/profile/admin/charge-account";
import { cookies } from "next/headers";
import React from "react";

const UpdateUserDevice = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { deviceId: string | undefined };
}) => {
  const token = cookies().get("token")?.value;
  const userAcceptedDevice = await getUserAcceptedSingleDevice(
    searchParams?.deviceId!,
    token!
  );
  console.log("device", userAcceptedDevice?.data);
  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title={`اطلاعات دستگاه ${userAcceptedDevice?.data?.deviceName}`}
        text="شما می توانید به صورت دستی یک دستگاه را در اینجا اصلاح یا حذف  کنید."
      />
      <SingleUserDevice
        deviceInitialValues={
          userAcceptedDevice?.data ? userAcceptedDevice.data : undefined
        }
      />
    </div>
  );
};

export default UpdateUserDevice;
