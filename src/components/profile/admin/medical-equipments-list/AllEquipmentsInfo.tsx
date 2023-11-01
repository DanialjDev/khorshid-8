"use client";

import Button from "@/components/main/button/Button";
import PageTitle from "@/components/main/pageTitle/PageTitle";
import {
  deleteItems,
  getMedicalEquipments,
} from "@/services/profile/admin/medical-equipments-list";
import {
  EndPoints,
  TableDateType,
} from "@/services/profile/admin/medical-equipments-list/types";
import { jalaaliToGregorianISO, nonBreakingSpace } from "@/utills/formatHelper";
import { generateHeaders } from "@/utills/generateTableHeaders";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Pagination from "@/components/main/pagination/Pagination";
import AuthInput from "@/components/main/input/AuthInput";
import { Category } from "@/services/medical-equipment";
import GetDevicesTable from "./tables/GetDevicesTable";
import CustomSelect from "@/components/main/input/CustomSelect";
import GetCompanies from "./tables/GetCompanies";
import { toast } from "react-toastify";
import GetLabs from "./tables/GetLabs";
import { useRouter } from "next/navigation";
import DeansOfUni from "./tables/DeansOfUni";
import Hospitals from "./tables/Hospitals";
import GetEvents from "./tables/GetEvents";
import Universities from "./tables/Universities";
import VicePresidentOfTreatments from "./tables/VicePresidentOfTreatments";

const AllEquipmentsInfo = ({
  deviceInfo,
  headerType,
  url,
  postUrl,
  removeUrl,
  desc,
  title,
}: {
  deviceInfo: TableDateType | null;
  headerType: Category;
  url: EndPoints;
  postUrl: string;
  removeUrl: string;
  title: string;
  desc: string;
}) => {
  const { refresh } = useRouter();
  const tableHeaders = generateHeaders(headerType);
  const [payload, setPayload] = useState<TableDateType | null>(
    deviceInfo ? deviceInfo : null
  );
  const [selected, setSelected] = useState(
    tableHeaders ? tableHeaders[0] : null
  );
  const [rows, setRows] = useState<number[]>([]);
  const [isDelete, setIsDelete] = useState(false);
  const [searchValue, setSearchValue] = useState<string | null>("");

  const filterDataHandler = async () => {
    let filterData = searchValue;
    if (searchValue) {
      if (url === "GetEvents") {
        filterData = jalaaliToGregorianISO(searchValue);
      }
      const filteredValues = await getMedicalEquipments(
        url,
        null,
        Cookies.get("token"),
        `&${selected?.value}=${filterData}`
      );

      if (filteredValues?.payload) {
        setPayload(filteredValues.payload);
      } else {
        toast.warning(filteredValues?.message);
      }
    } else {
      toast.warning("لطفا کلمه مورد نظر را وارد کنید");
    }
  };

  const paginationHandler = async (pageNumer: number) => {
    const paginatedValues = await getMedicalEquipments(
      url,
      pageNumer,
      Cookies.get("token"),
      searchValue ? `&${selected?.value}=${searchValue}` : undefined
    );

    if (paginatedValues?.payload) {
      setPayload(paginatedValues.payload);
    }
  };

  const deleteItemsHanlder = async () => {
    const deleteItemsRes = await deleteItems(
      rows,
      Cookies.get("token")!,
      removeUrl
    );

    if (deleteItemsRes?.status === 200) {
      toast.success(deleteItemsRes.message);
      const updatedData = await getMedicalEquipments(
        url,
        null,
        Cookies.get("token"),
        undefined
      );

      if (updatedData?.payload) {
        setPayload(updatedData.payload);
        setIsDelete(false);
      }
    } else {
      toast.error(deleteItemsRes?.message);
    }
  };

  return (
    <div className="w-full flex-col">
      <div className="w-full flex justify-between items-center">
        <PageTitle title={title} text={desc} />
        <div className="flex flex-row-reverse items-center">
          <Button
            onClick={() => {
              setIsDelete(true);
              if (isDelete) {
                deleteItemsHanlder();
              }
            }}
            border="border border-redColor"
            bg="bg-redColorLight"
            padding="px-6 py-2"
            rounded="rounded-[6px]"
            icon={
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.5 6.97689C20.615 6.59189 16.7067 6.39355 12.81 6.39355C10.5 6.39355 8.19 6.51022 5.88 6.74355L3.5 6.97689"
                  stroke="#C92626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.91667 5.79801L10.1733 4.26967C10.36 3.16134 10.5 2.33301 12.4717 2.33301H15.5283C17.5 2.33301 17.6517 3.20801 17.8267 4.28134L18.0833 5.79801"
                  stroke="#C92626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
                  stroke="#C92626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0517 19.25H15.9367"
                  stroke="#C92626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0833 14.583H16.9167"
                  stroke="#C92626"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          {isDelete && (
            <div className="ml-5">
              <Button
                onClick={() => {
                  setIsDelete((prevState) => !prevState);
                  setRows([]);
                }}
                border="border border-redColor"
                bg="bg-redColorLight"
                padding="px-6 py-2"
                rounded="rounded-[6px]"
                text="بازگشت به حالت اولیه"
                color="text-redColor"
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7L11 11L15 7ZM11 11L7 15L11 11ZM11 11L7 7L11 11ZM11 11L15 15L11 11Z"
                      fill="#E21414"
                      fill-opacity="0.15"
                    />
                    <path
                      d="M15 7L11 11M11 11L7 15M11 11L7 7M11 11L15 15"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                      fill="#E21414"
                      fill-opacity="0.15"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-x-3 items-center mt-5">
        <div className="w-full col-span-2 items-center grid grid-cols-7 gap-x-5">
          <div className="col-span-3 relative h-[49px]">
            <CustomSelect
              selected={selected!}
              // @ts-ignore
              setSelected={setSelected}
              items={tableHeaders ? tableHeaders : []}
            />
          </div>
          <div className="col-span-4 h-full">
            <AuthInput
              name="searchValue"
              value={searchValue ? searchValue : ""}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              mt="mt-0"
              placeholder="کلمه مورد نظر خود را تایپ کنید."
              dir="ltr"
              icon={
                <div onClick={filterDataHandler}>
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
                </div>
              }
            />
          </div>
        </div>
        <div className="w-full col-span-2 items-center gap-x-3 grid grid-cols-6">
          <div className="col-span-2">
            <Button
              text="خروجی اکسل"
              bg="bg-primaryDark7"
              width="w-full"
              border="border-[1.5px] border-primary"
              rounded="rounded-[6px]"
              icon={
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_392_5492)">
                    <path
                      d="M23.75 3.75003H14V1.50003C14 1.27653 13.901 1.06503 13.7285 0.922534C13.5575 0.780034 13.328 0.718534 13.112 0.763534L1.112 3.01353C0.939951 3.04532 0.784493 3.13643 0.672674 3.27099C0.560854 3.40556 0.499753 3.57507 0.500001 3.75003V20.25C0.500001 20.61 0.756501 20.9205 1.112 20.9865L13.112 23.2365C13.157 23.2455 13.2035 23.25 13.25 23.25C13.424 23.25 13.5935 23.19 13.7285 23.0775C13.8134 23.0072 13.8818 22.9189 13.9287 22.8191C13.9756 22.7193 14 22.6103 14 22.5V20.25H23.75C24.164 20.25 24.5 19.914 24.5 19.5V4.50003C24.5 4.08603 24.164 3.75003 23.75 3.75003ZM10.814 14.5065C11.087 14.817 11.0555 15.291 10.7435 15.564C10.6071 15.6839 10.4316 15.7501 10.25 15.75C10.1431 15.7501 10.0375 15.7272 9.94018 15.683C9.84289 15.6387 9.75622 15.5741 9.686 15.4935L7.505 13.002L5.5925 15.462C5.522 15.5518 5.43204 15.6243 5.3294 15.6742C5.22676 15.7241 5.11412 15.75 5 15.75C4.8395 15.75 4.6775 15.699 4.5395 15.5925C4.2125 15.3375 4.154 14.8665 4.4075 14.5395L6.4985 11.8515L4.436 9.49354C4.163 9.18303 4.1945 8.70903 4.5065 8.43603C4.817 8.16303 5.2895 8.19303 5.5655 8.50653L7.4375 10.6455L9.659 7.78953C9.914 7.46403 10.385 7.40403 10.712 7.65903C11.039 7.91253 11.0975 8.38353 10.8425 8.71203L8.4425 11.796L10.814 14.5065ZM23 18.75H14V17.25H16.25C16.664 17.25 17 16.914 17 16.5C17 16.086 16.664 15.75 16.25 15.75H14V14.25H16.25C16.664 14.25 17 13.914 17 13.5C17 13.086 16.664 12.75 16.25 12.75H14V11.25H16.25C16.664 11.25 17 10.914 17 10.5C17 10.086 16.664 9.75004 16.25 9.75004H14V8.25003H16.25C16.664 8.25003 17 7.91403 17 7.50003C17 7.08603 16.664 6.75003 16.25 6.75003H14V5.25003H23V18.75Z"
                      fill="#2C9CF0"
                    />
                    <path
                      d="M20.75 6.75H19.25C18.836 6.75 18.5 7.086 18.5 7.5C18.5 7.914 18.836 8.25 19.25 8.25H20.75C21.164 8.25 21.5 7.914 21.5 7.5C21.5 7.086 21.164 6.75 20.75 6.75ZM20.75 9.75H19.25C18.836 9.75 18.5 10.086 18.5 10.5C18.5 10.914 18.836 11.25 19.25 11.25H20.75C21.164 11.25 21.5 10.914 21.5 10.5C21.5 10.086 21.164 9.75 20.75 9.75ZM20.75 12.75H19.25C18.836 12.75 18.5 13.086 18.5 13.5C18.5 13.914 18.836 14.25 19.25 14.25H20.75C21.164 14.25 21.5 13.914 21.5 13.5C21.5 13.086 21.164 12.75 20.75 12.75ZM20.75 15.75H19.25C18.836 15.75 18.5 16.086 18.5 16.5C18.5 16.914 18.836 17.25 19.25 17.25H20.75C21.164 17.25 21.5 16.914 21.5 16.5C21.5 16.086 21.164 15.75 20.75 15.75Z"
                      fill="#2C9CF0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_392_5492">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </div>
          <div className="col-span-2">
            <Button
              text="افزودن دستی"
              color="text-white"
              bg="bg-primary"
              border="border-[1.5px] border-primary"
              rounded="rounded-[6px]"
              width="w-full"
              href={`/panel/medical-equipments-list/${postUrl}/add`}
              icon={
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13M1 7H13"
                    stroke="white"
                    stroke-opacity="0.95"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
          <div className="col-span-2">
            <Button
              width="w-full"
              text={nonBreakingSpace("وارد کردن از اکسل")}
              color="text-primary"
              bg="bg-primaryDark7"
              border="border-[1.5px] border-primary"
              rounded="rounded-[6px]"
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_351_10248)">
                    <path
                      d="M23.25 3.75003H13.5V1.50003C13.5 1.27653 13.401 1.06503 13.2285 0.922534C13.0575 0.780034 12.828 0.718534 12.612 0.763534L0.612001 3.01353C0.439951 3.04532 0.284493 3.13643 0.172674 3.27099C0.0608545 3.40556 -0.000246856 3.57507 7.49592e-07 3.75003V20.25C7.49592e-07 20.61 0.256501 20.9205 0.612001 20.9865L12.612 23.2365C12.657 23.2455 12.7035 23.25 12.75 23.25C12.924 23.25 13.0935 23.19 13.2285 23.0775C13.3134 23.0072 13.3818 22.9189 13.4287 22.8191C13.4756 22.7193 13.5 22.6103 13.5 22.5V20.25H23.25C23.664 20.25 24 19.914 24 19.5V4.50003C24 4.08603 23.664 3.75003 23.25 3.75003ZM10.314 14.5065C10.587 14.817 10.5555 15.291 10.2435 15.564C10.1071 15.6839 9.93164 15.7501 9.75 15.75C9.64312 15.7501 9.53747 15.7272 9.44018 15.683C9.34289 15.6387 9.25622 15.5741 9.186 15.4935L7.005 13.002L5.0925 15.462C5.022 15.5518 4.93204 15.6243 4.8294 15.6742C4.72676 15.7241 4.61412 15.75 4.5 15.75C4.3395 15.75 4.1775 15.699 4.0395 15.5925C3.7125 15.3375 3.654 14.8665 3.9075 14.5395L5.9985 11.8515L3.936 9.49354C3.663 9.18303 3.6945 8.70903 4.0065 8.43603C4.317 8.16303 4.7895 8.19303 5.0655 8.50653L6.9375 10.6455L9.159 7.78953C9.414 7.46403 9.885 7.40403 10.212 7.65903C10.539 7.91253 10.5975 8.38353 10.3425 8.71203L7.9425 11.796L10.314 14.5065ZM22.5 18.75H13.5V17.25H15.75C16.164 17.25 16.5 16.914 16.5 16.5C16.5 16.086 16.164 15.75 15.75 15.75H13.5V14.25H15.75C16.164 14.25 16.5 13.914 16.5 13.5C16.5 13.086 16.164 12.75 15.75 12.75H13.5V11.25H15.75C16.164 11.25 16.5 10.914 16.5 10.5C16.5 10.086 16.164 9.75004 15.75 9.75004H13.5V8.25003H15.75C16.164 8.25003 16.5 7.91403 16.5 7.50003C16.5 7.08603 16.164 6.75003 15.75 6.75003H13.5V5.25003H22.5V18.75Z"
                      fill="#2C9CF0"
                    />
                    <path
                      d="M20.25 6.75H18.75C18.336 6.75 18 7.086 18 7.5C18 7.914 18.336 8.25 18.75 8.25H20.25C20.664 8.25 21 7.914 21 7.5C21 7.086 20.664 6.75 20.25 6.75ZM20.25 9.75H18.75C18.336 9.75 18 10.086 18 10.5C18 10.914 18.336 11.25 18.75 11.25H20.25C20.664 11.25 21 10.914 21 10.5C21 10.086 20.664 9.75 20.25 9.75ZM20.25 12.75H18.75C18.336 12.75 18 13.086 18 13.5C18 13.914 18.336 14.25 18.75 14.25H20.25C20.664 14.25 21 13.914 21 13.5C21 13.086 20.664 12.75 20.25 12.75ZM20.25 15.75H18.75C18.336 15.75 18 16.086 18 16.5C18 16.914 18.336 17.25 18.75 17.25H20.25C20.664 17.25 21 16.914 21 16.5C21 16.086 20.664 15.75 20.25 15.75Z"
                      fill="#2C9CF0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_351_10248">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col">
        {payload && (
          <>
            {url === "GetDevices" ? (
              <GetDevicesTable
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetCompanies" ? (
              <GetCompanies
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetLabs" ? (
              <GetLabs
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetDeansOfUniversities" ? (
              <DeansOfUni
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetHospitals" ? (
              <Hospitals
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetEvents" ? (
              <GetEvents
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetUniversities" ? (
              <Universities
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : url === "GetVicePresidentsOfTreatment" ? (
              <VicePresidentOfTreatments
                headers={tableHeaders ? tableHeaders : []}
                data={payload}
                rows={rows}
                setRows={setRows}
                isDelete={isDelete}
              />
            ) : null}
            <div className="w-full mt-6 flex justify-center items-center">
              <Pagination
                onClick={paginationHandler}
                totalPagesCount={payload.totalPagesCount!}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllEquipmentsInfo;
