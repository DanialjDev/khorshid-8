import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const Devices = async () => {
  const devices = await getMedicalEquipments(
    "GetDevices",
    1,
    cookies().get("token")?.value
  );

  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
        headerType="GetDevices"
        url="GetDevices"
        postUrl="devices"
        removeUrl="RemoveDevices"
        desc="شما می توانید لیست تجهیزات پزشکی ( کتاب ) را در اینجا مشاهده کنید."
        title="لیست گروه ها و شرکت های تجهیزات پزشکی"
        postListUrl="PostListDevices"
      />
    </div>
  );
};

export default Devices;

export const generateMetadata = async () => {
  return {
    title: "لیست گروه ها و شرکت های تجهیزات پزشکی",
  };
};
