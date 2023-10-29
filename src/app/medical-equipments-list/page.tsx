import MedicalEquipmentsListSection from "@/components/pages/medical-equipments-list/MedicalEquipmentList";
import MedicalSection from "@/components/pages/medical-equipments-list/Mel-sections/MedicalSectionContainer";
import SelectBox from "@/components/pages/medical-equipments-list/SelectBox";
import {
  Category,
  getDeviceBanner,
  getSectionsData,
} from "@/services/medical-equipment";
import { getTitle } from "@/utills/getTitle";
import Image from "next/image";
import React from "react";

const MedicalEquipmentsList = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { name: Category | undefined };
}) => {
  const medicalEquipmentData = await getSectionsData(searchParams?.name!);
  const bannerData = await getDeviceBanner(searchParams?.name!);

  return (
    <>
      <div className="w-full flex flex-col">
        <SelectBox />
        <>
          {bannerData?.banner && bannerData.banner ? (
            <div className="my-5 w-full md:h-[450px] sm2:h-[300px] h-[250px] rounded-lg overflow-hidden relative z-20">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100% !important",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={bannerData.banner.imageUrl}
                alt={bannerData.banner.description || ""}
                className="!rounded-lg absolute inset-0"
                // objectFit="cover"
              />
            </div>
          ) : null}
        </>
        <MedicalSection
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
    </>
  );
};

export default MedicalEquipmentsList;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-list"),
  };
};
