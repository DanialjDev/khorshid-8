import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const Labs = async () => {
  const devices = await getMedicalEquipments(
    "GetLabs",
    1,
    cookies().get("token")?.value
  );

  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetLabs"
        url="GetLabs"
        postUrl="/labs"
        removeUrl="RemoveLabs"
        title=" اداره امور آزمایشگاه ها"
        desc="شما می توانید اداره امور آزمایشگاه ها ( کتاب ) را در اینجا مشاهده کنید."
        postListUrl="PostLabs"
      />
    </div>
  );
};

export default Labs;

export const generateMetadata = async () => {
  return {
    title: "اداره امور آزمایشگاه ها",
  };
};
