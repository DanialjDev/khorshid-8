import MedicalEquipmentsDevices from "@/components/profile/admin/medical-equipments-list/forms/MedicalEquipmentsDevices";
import { getSingleDevice } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const UpdateOrSetForm = async ({ params }: { params: { id: string } }) => {
  const getSingleDeviceRes = await getSingleDevice(
    params.id!,
    cookies().get("token")?.value!,
    "GetSingleDevice"
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
