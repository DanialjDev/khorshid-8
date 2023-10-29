import MedicalMarket from "@/components/pages/medical-equipments-market/MedicalMarket";
import { getDeviceCategories, postPageView } from "@/services/common";
import { getDevices } from "@/services/shop";
import { getTitle } from "@/utills/getTitle";
import { headers } from "next/headers";
import React from "react";

const MedicalEquipmentsMarket = async () => {
  await postPageView(headers().get("x-invoke-path")!);
  const deviceCategories = await getDeviceCategories();
  const devices = await getDevices();
  return (
    <>
      <MedicalMarket
        devices={devices?.data ? devices.data : null}
        deviceCategories={deviceCategories?.data}
      />
    </>
  );
};

export default MedicalEquipmentsMarket;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-market"),
  };
};
