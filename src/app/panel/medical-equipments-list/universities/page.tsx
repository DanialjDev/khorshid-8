import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const Universities = async () => {
  const devices = await getMedicalEquipments(
    "GetUniversities",
    1,
    cookies().get("token")?.value
  );
  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetUniversities"
        url="GetUniversities"
        postUrl="/universities"
        removeUrl="RemoveUniversities"
        title=" سایت دانشگاه های علوم پزشکی"
        desc="شما می توانید مشخصات سایت دانشگاه های علوم پزشکی  ( کتاب ) را در اینجا مشاهده کنید."
        postListUrl="PostUniversities"
      />
    </div>
  );
};

export default Universities;
