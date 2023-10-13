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
    <div className="w-full flex">
      <SingleUserDevice />
    </div>
  );
};

export default UpdateUserDevice;
