"use client";

import React from "react";
import SelectBox from "./SelectBox";
import MedicalSection from "./Mel-sections/MedicalSectionContainer";
import { getDeviceBanner, getSectionsData } from "@/services/medical-equipment";
import { useAppSelector } from "@/redux/hooks/hooks";
import { getDeviceCategories } from "@/services/common";
import Pagination from "@/components/main/pagination/Pagination";

// type MedicalEquipmentDevices = {
//   data?: TableData;
//   banner?: DeviceBannerProps;
//   tableHeaders?: string[] | undefined;
//   message?: string | undefined;
//   operationName?: OperationNames;
// };

const MedicalEquipmentsListSection = async () => {
  const { sectionName } = useAppSelector((state) => state.medicalSection);
  const response = await getDeviceCategories();
  const medicalEquipmentData = await getSectionsData(sectionName);
  const bannerData = await getDeviceBanner(sectionName);

  return (
    <div className="w-full flex flex-col">
      {/* Choose Section */}
      <SelectBox />

      {/* Filter Section */}
      <MedicalSection
        deviceCategory={response?.data ? response.data : []}
        data={medicalEquipmentData?.data ? medicalEquipmentData.data : []}
        banner={bannerData?.banner}
        tableHeaders={
          medicalEquipmentData?.tableHeaders
            ? medicalEquipmentData.tableHeaders
            : []
        }
        operationName={
          medicalEquipmentData?.operationName
            ? medicalEquipmentData.operationName
            : "GetMedicalEquipmentDevices"
        }
        totalPageCount={medicalEquipmentData?.totalPageCount}
      />
    </div>
  );
};

export default MedicalEquipmentsListSection;
