import PageTitle from "@/components/main/pageTitle/PageTitle";
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
  console.log(devices);
  return (
    <div className="w-full flex flex-col">
      <AllEquipmentsInfo
        deviceInfo={devices?.payload ? devices.payload : null}
      />
    </div>
  );
};

export default Devices;
