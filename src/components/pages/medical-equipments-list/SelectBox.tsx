"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setSection } from "@/redux/features/medical-sections/medicalSectionSlice";
import Box from "@/components/main/Box/Box";
import { OperationNames } from "@/services/medical-equipment/types";
import { Category } from "@/services/medical-equipment";

interface GroupBtnProps {
  text: string;
  sectionName: string | null;
  flexBasis: string;
  value: Category;
}

const GroupButton = ({
  text,
  sectionName,
  flexBasis,
  value,
}: GroupBtnProps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setSection(value));
        console.log("clicked");
      }}
      className={`flex-1 py-2 px-4 border-2 rounded-lg ${flexBasis} text-[16px] ${
        sectionName === value
          ? "text-primary border-primary bg-primaryLight"
          : "text-[#707070] border-[#E6E6E6] bg-[#F9F9F9]"
      }`}
    >
      {text}
    </button>
  );
};

const SelectBox = () => {
  const { sectionName } = useAppSelector((state) => state.medicalSection);
  return (
    <Box title="لطفا دسته بندی مربوطه خود را انتخاب کنید.">
      <div className="w-full flex mt-4 p-1 gap-3 flex-wrap justify-between">
        <GroupButton
          value="GetDevices"
          flexBasis="basis-6/12 lg:basis-5/12 xl:basis-2/12"
          text="لیست دستگاه های تجهیزات پزشکی"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetCompanies"
          flexBasis="basis-6/12 lg:basis-5/12 xl:basis-3/12"
          text="تلفن و نام شرکت های تجهیزات پزشکی"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetDeansOfUniversities"
          flexBasis="basis-6/12 lg:basis-6/12 xl:basis-3/12"
          text="نام و تلفن ریاست دانشگاه علوم پزشکی"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetEvents"
          flexBasis="basis-2/4 md:basis-6/12 lg:basis-4/12 xl:basis-2/12"
          text="مناسبت های پزشکی"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetHospotals"
          flexBasis="basis-6/12 md:basis-5/12 lg:basis-4/12 xl:basis-3/12"
          text="مشخصات بیمارستان های سراسر کشور"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetLabs"
          flexBasis="basis-6/12 xl:basis-2/12"
          text="اداره امور آزمایشگاه ها"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetVicePresidentsOfTreatment"
          flexBasis="basis-6/12 lg:basis-5/12 xl:basis-4/12"
          text="تلفن و نام معاونت درمان دانشگاه های علوم پزشکی"
          sectionName={sectionName}
        />
        <GroupButton
          value="GetUniversities"
          flexBasis="basis-6/12 lg:basis-4/12 xl:basis-2/12"
          text="سایت های دانشگاه علوم پزشکی"
          sectionName={sectionName}
        />
      </div>
    </Box>
  );
};

export default SelectBox;
