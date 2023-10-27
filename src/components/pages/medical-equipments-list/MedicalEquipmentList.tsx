"use client";

import React, { ReactNode, useState } from "react";
import SelectBox from "./SelectBox";
import MedicalSection from "./Mel-sections/MedicalSectionContainer";
import { getDeviceBanner, getSectionsData } from "@/services/medical-equipment";
import { useAppSelector } from "@/redux/hooks/hooks";

const MedicalEquipmentsListSection = async () => {
  // const medicalEquipmentData = await getSectionsData(sectionName);
  // const bannerData = await getDeviceBanner(sectionName);
  // console.log(bannerData);
  // if (!bannerData || !medicalEquipmentData) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="w-full flex flex-col">
      <SelectBox />

      {/* <MedicalSection
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
      /> */}
    </div>
  );
};

export default MedicalEquipmentsListSection;
