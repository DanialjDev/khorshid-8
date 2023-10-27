"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setSection } from "@/redux/features/medical-sections/medicalSectionSlice";
import Box from "@/components/main/Box/Box";
import { OperationNames } from "@/services/medical-equipment/types";
import { Category } from "@/services/medical-equipment";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface GroupBtnProps {
  text: string;
  flexBasis: string;
  value: Category;
}

const GroupButton = ({ text, flexBasis, value }: GroupBtnProps) => {
  const searchParams = useSearchParams();
  return (
    <Link
      href={`/medical-equipments-list?name=${value}`}
      className={`flex-1 justify-center mx-auto py-2 px-4 border-2 rounded-lg ${flexBasis} text-[16px] ${
        searchParams.get("name") === value
          ? "text-primary border-primary bg-primaryLight"
          : "text-[#707070] border-[#E6E6E6] bg-[#F9F9F9]"
      }`}
    >
      <p className="text-center">{text}</p>
    </Link>
  );
};

const SelectBox = () => {
  return (
    <Box title="لطفا دسته بندی مربوطه خود را انتخاب کنید.">
      <div className="w-full flex mt-4 p-1 gap-3 flex-wrap justify-between">
        <GroupButton
          value="GetDevices"
          flexBasis="basis-6/12 lg:basis-5/12 xl:basis-2/12"
          text="لیست دستگاه های تجهیزات پزشکی"
        />
        <GroupButton
          value="GetCompanies"
          flexBasis="basis-6/12 lg:basis-5/12 xl:basis-3/12"
          text="تلفن و نام شرکت های تجهیزات پزشکی"
        />
        <GroupButton
          value="GetDeansOfUniversities"
          flexBasis="basis-6/12 lg:basis-6/12 xl:basis-3/12"
          text="نام و تلفن ریاست دانشگاه علوم پزشکی"
        />
        <GroupButton
          value="GetEvents"
          flexBasis="basis-2/4 md:basis-6/12 lg:basis-4/12 xl:basis-2/12"
          text="مناسبت های پزشکی"
        />
        <GroupButton
          value="GetHospotals"
          flexBasis="basis-6/12 md:basis-5/12 lg:basis-4/12 xl:basis-3/12"
          text="مشخصات بیمارستان های سراسر کشور"
        />
        <GroupButton
          value="GetLabs"
          flexBasis="basis-6/12 xl:basis-2/12"
          text="اداره امور آزمایشگاه ها"
        />
        <GroupButton
          value="GetVicePresidentsOfTreatment"
          flexBasis="basis-6/12 lg:basis-5/12 xl:basis-4/12"
          text="تلفن و نام معاونت درمان دانشگاه های علوم پزشکی"
        />
        <GroupButton
          value="GetUniversities"
          flexBasis="basis-6/12 lg:basis-4/12 xl:basis-2/12"
          text="سایت های دانشگاه علوم پزشکی"
        />
      </div>
    </Box>
  );
};

export default SelectBox;
