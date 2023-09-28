import MedicalEquipmentsListSection from "@/components/pages/medical-equipments-list/MedicalEquipmentList";
import { getTitle } from "@/utills/getTitle";
import React from "react";

const MedicalEquipmentsList = async () => {
  return (
    <>
      <MedicalEquipmentsListSection />
    </>
  );
};

export default MedicalEquipmentsList;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-list"),
  };
};
