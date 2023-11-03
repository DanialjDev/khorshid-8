import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const MedicalEvents = async () => {
  const devices = await getMedicalEquipments(
    "GetEvents",
    1,
    cookies().get("token")?.value
  );
  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetEvents"
        url="GetEvents"
        postUrl="/events"
        removeUrl="RemoveEvents"
        title=" مناسبت های پزشکی"
        desc="شما می توانید مشخصات بیمارستان های سراسر کشور  ( کتاب ) را در اینجا مشاهده کنید."
        postListUrl='PostEvents'
      />
    </div>
  );
};

export default MedicalEvents;
