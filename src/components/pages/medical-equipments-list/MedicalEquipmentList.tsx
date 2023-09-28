"use client";

import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import Image from "next/image";
import MedicalSection from "./Mel-sections/MedicalSectionContainer";
import {
  DeviceBannerObject,
  DeviceBannerProps,
  OperationNames,
  TableData,
} from "@/services/medical-equipment/types";
import { getDeviceBanner, getSectionsData } from "@/services/medical-equipment";
import { useAppSelector } from "@/redux/hooks/hooks";
import { getDeviceCategories } from "@/services/common";
import { DeviceName } from "@/services/common/types";

type MedicalEquipmentDevices = {
  data?: TableData;
  banner?: DeviceBannerProps;
  tableHeaders?: string[] | undefined;
  message?: string | undefined;
  operationName?: OperationNames;
};

const MedicalEquipmentsListSection = async () => {
  const { sectionName } = useAppSelector((state) => state.medicalSection);
  const response = await getDeviceCategories();
  const medicalEquipmentData = await getSectionsData(sectionName);
  const bannerData = await getDeviceBanner(sectionName);
  console.log("sdfsdf");
  return (
    <div className="w-full flex flex-col">
      {/* Choose Section */}
      <SelectBox />

      {/* Filter Section */}
      <MedicalSection
        deviceCategory={response?.data ? response.data : []}
        data={medicalEquipmentData?.data || []}
        banner={bannerData?.banner}
        tableHeaders={medicalEquipmentData?.tableHeaders || []}
        operationName={
          medicalEquipmentData?.operationName
            ? medicalEquipmentData.operationName
            : "GetMedicalEquipmentDevices"
        }
      />
    </div>
  );
};

export default MedicalEquipmentsListSection;
