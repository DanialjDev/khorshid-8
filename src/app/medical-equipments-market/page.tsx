import ProductItem from "@/components/pages/home-page/ProductItem";
import FilterSection from "@/components/pages/medical-equipments-market/FilterSection";
import MedicalMarket from "@/components/pages/medical-equipments-market/MedicalMarket";
import { getDeviceCategories } from "@/services/common";
import { getDevices } from "@/services/shop";
import { Device } from "@/services/shop/types";
import { getTitle } from "@/utills/getTitle";
import React from "react";

const MedicalEquipmentsMarket = async () => {
  // let devices: Device[];
  const deviceCategories = await getDeviceCategories();
  return (
    <div className="w-full grid grid-cols-8 gap-4">
      <MedicalMarket deviceCategories={deviceCategories?.data} />
    </div>
  );
};

export default MedicalEquipmentsMarket;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-market"),
  };
};
