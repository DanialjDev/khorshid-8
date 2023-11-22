import MedicalSection from "@/components/pages/medical-equipments-list/Mel-sections/MedicalSectionContainer";
import SelectBox from "@/components/pages/medical-equipments-list/SelectBox";
import { getSectionsData } from "@/services/medical-equipment";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { generateHeaders } from "@/utills/generateTableHeaders";
import { getTitle } from "@/utills/getTitle";
import React from "react";

const MedicalEquipmentsList = async ({
  searchParams,
}: {
  searchParams: { name: string };
}) => {
  // @ts-ignore
  const tableHeaders = generateHeaders(searchParams.name);
  return (
    <>
      <div className="w-full flex flex-col">
        <SelectBox />
        <MedicalSection tableHeaders={tableHeaders} />
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
