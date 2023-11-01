import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getDeviceCategories } from "@/services/common";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const Companies = async () => {
  const devices = await getMedicalEquipments(
    "GetCompanies",
    1,
    cookies().get("token")?.value
  );

  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetCompanies"
        url="GetCompanies"
        postUrl="PostCompanies"
        removeUrl="RemoveCompanies"
        title="نام و تلفن شرکت های تجهیزات پزشکی ایران"
        desc="شما می توانید نام و تلفن شرکت های تجهیزات پزشکی ایران ( کتاب ) را در اینجا مشاهده کنید."
      />
    </div>
  );
};

export default Companies;
