import MedicalSection from "@/components/pages/medical-equipments-list/Mel-sections/MedicalSectionContainer";
import SelectBox from "@/components/pages/medical-equipments-list/SelectBox";
import { getSectionsData } from "@/services/medical-equipment";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { generateHeaders } from "@/utills/generateTableHeaders";
import { getTitle } from "@/utills/getTitle";
import React from "react";
import {getDeviceCategories, getStates} from "@/services/common";

const MedicalEquipmentsList = async ({
  searchParams,
}: {
  searchParams: { name: string };
}) => {
  // @ts-ignore
  const tableHeaders = generateHeaders(searchParams.name!);
  const deviceCategories = await getDeviceCategories();
  const states = await getStates();
  return (
    <>
      <div className="w-full flex flex-col">
        <SelectBox />
        <MedicalSection states={states?.data ? states.data : []} deviceCategories={deviceCategories?.data ? deviceCategories.data : []} tableHeaders={tableHeaders} />
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
