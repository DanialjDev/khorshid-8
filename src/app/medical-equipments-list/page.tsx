import MedicalSection from "@/components/pages/medical-equipments-list/Mel-sections/MedicalSectionContainer";
import SelectBox from "@/components/pages/medical-equipments-list/SelectBox";
import { getTitle } from "@/utills/getTitle";
import React from "react";

const MedicalEquipmentsList = async () => {
  return (
    <>
      <div className="w-full flex flex-col">
        <SelectBox />
        <MedicalSection />
      </div>
    </>
  );
};

export default MedicalEquipmentsList;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-list"),
  };
};
