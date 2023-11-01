import MedicalEquipmentsDevices from "@/components/profile/admin/medical-equipments-list/forms/MedicalEquipmentsDevices";
import SignleCompany from "@/components/profile/admin/medical-equipments-list/forms/SignleCompany";
import { getSingleDevice } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const UpdateOrSetForm = async ({ params }: { params: { id: string } }) => {
  const getSingleDeviceRes = await getSingleDevice(
    params.id!,
    cookies().get("token")?.value!,
    "GetSingleCompany"
  );
  return (
    <SignleCompany
      singleCompany={
        getSingleDeviceRes?.payload ? getSingleDeviceRes.payload : null
      }
    />
  );
};

export default UpdateOrSetForm;
