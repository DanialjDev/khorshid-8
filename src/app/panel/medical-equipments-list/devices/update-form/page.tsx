import MedicalEquipmentsDevices from "@/components/profile/admin/medical-equipments-list/forms/MedicalEquipmentsDevices";
import { getSingleDevice } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const UpdateOrSetForm = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { deviceId: string | undefined };
}) => {
  const getSingleDeviceRes = await getSingleDevice(
    searchParams?.deviceId!,
    cookies().get("token")?.value!
  );
  return (
    <MedicalEquipmentsDevices
      singleDeviceData={
        getSingleDeviceRes?.payload ? getSingleDeviceRes.payload : null
      }
    />
  );
};

export default UpdateOrSetForm;
