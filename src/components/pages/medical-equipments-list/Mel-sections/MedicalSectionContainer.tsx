"use client";

import React, { useMemo, useState } from "react";
import SectionLayout from "./SectionLayout";
import Select from "@/components/main/input/Select";
import CustomInput from "@/components/main/input/CustomInput";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks/hooks";
import { generateHeaders } from "@/utills/generateTableHeaders";
import TableBodyData from "../TableBodyData";
import {
  DeviceBannerObject,
  DeviceBannerProps,
  OperationNames,
  TableData,
} from "@/services/medical-equipment/types";
import { DeviceName } from "@/services/common/types";
import { Category } from "@/services/medical-equipment";
import Pagination from "@/components/main/pagination/Pagination";

const MedicalSection = async ({
  data,
  banner,
  deviceCategory,
  tableHeaders,
  operationName,
  totalPageCount,
}: {
  data: TableData;
  banner: DeviceBannerObject | undefined;
  deviceCategory: DeviceName[];
  tableHeaders: string[];
  operationName: OperationNames;
  totalPageCount?: number;
}) => {
  const [isRowSelected, setIsRowSelected] = useState(false);

  return (
    <>
      {banner && banner ? (
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={banner.imageUrl}
          alt={banner.description || ""}
          className="my-5 sm:!h-auto !h-[300px]"
          objectFit="cover"
        />
      ) : null}
      <SectionLayout
        data={data}
        operationName={operationName}
        tableHeaders={tableHeaders}
        totalPageCount={totalPageCount}
      >
        <div className="w-full grid gap-8 grid-cols-2">
          {/* <div className="xl:col-span-1 lg:col-span-1">
            <Select
              label="لطفا کاربری دستگاه خود را در گروه های زیر انتخاب کنید."
              options={
                deviceCategory &&
                deviceCategory.map((item) => item.categoryName)
              }
            />
            <div
              onClick={() => {
                setShowCategories((prevState) => !prevState);
                console.log("sdfsdf");
              }}
              className="w-full flex justify-between relative items-center h-full rounded-[5px] border-inputBorderColor text-dark bg-white border-2 cursor-pointer"
            >
              <div className="flex w-fit p-2">
                <p className="text-[14px]">
                  لطفا کاربری دستگاه خود را در گروه های زیر انتخاب کنید.
                </p>
              </div>
              <div className="flex justify-center items-center p-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6L9 12L15 6"
                    stroke="#060607"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`w-full absolute overflow-y-auto ${
                  showCategories ? "flex flex-col" : "hidden"
                } border h-[250px] top-11 z-30`}
              >
                {deviceCategory.map((item, index) => (
                  <div key={item.id} className="w-full flex">
                    {item.categoryName}
                  </div>
                ))}
              </div>
            </div>
          </div> */}
          <div className="md:col-span-1 col-span-2">
            <Select label="ردیف" options={tableHeaders} />
          </div>
          <div className="md:col-span-1 col-span-2">
            <CustomInput
              isDisabled
              placeholder="کلمه مورد نظر خود را تایپ کنید."
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                    stroke="#060607"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 16.5L15 15"
                    stroke="#060607"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default MedicalSection;
