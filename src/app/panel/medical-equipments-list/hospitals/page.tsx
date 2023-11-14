import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getStates } from "@/services/common";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const Hospitals = async () => {
  const devices = await getMedicalEquipments(
    "GetHospitals",
    1,
    cookies().get("token")?.value
  );

  const iranStates = await getStates();

  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetHospotals"
        url="GetHospitals"
        postUrl="/hospitals"
        removeUrl="RemoveHospitals"
        title=" مشخصات بیمارستان های سراسر کشور"
        desc="شما می توانید مشخصات بیمارستان های سراسر کشور  ( کتاب ) را در اینجا مشاهده کنید."
        states={iranStates?.data ? iranStates.data : null}
        postListUrl="PostListHospitals"
      />
    </div>
  );
};

export default Hospitals;

export const generateMetadata = async () => {
  return {
    title: "مشخصات بیمارستان های سراسر کشور",
  };
};
