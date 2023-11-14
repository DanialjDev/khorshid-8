import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const VicePresidentOfTreatments = async () => {
  const devices = await getMedicalEquipments(
    "GetVicePresidentsOfTreatment",
    1,
    cookies().get("token")?.value
  );
  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetVicePresidentsOfTreatment"
        url="GetVicePresidentsOfTreatment"
        postUrl="/vice-president-of-treatments"
        removeUrl="RemoveVicePresidentsOfTreatments"
        title=" تلفن و نام معاونت درمانی دانشگاه های علوم پزشکی"
        desc="شما می توانید مشخصات تلفن و نام معاونت درمانی دانشگاه های علوم پزشکی  ( کتاب ) را در اینجا مشاهده کنید."
        postListUrl="PostVicePresidentsOfTreatments"
      />
    </div>
  );
};

export default VicePresidentOfTreatments;

export const generateMetadata = async () => {
  return {
    title: "تلفن و نام معاونت درمانی دانشگاه های علوم پزشکی",
  };
};
