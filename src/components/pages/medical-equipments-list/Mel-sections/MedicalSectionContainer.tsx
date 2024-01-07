"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { DeviceBannerObject } from "@/services/medical-equipment/types";
import AuthInput from "@/components/main/input/AuthInput";
import Box from "@/components/main/Box/Box";
import Button from "@/components/main/button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { getDeviceBanner, getSectionsData } from "@/services/medical-equipment";
import TableBodyData from "../TableBodyData";
import CustomeTable from "@/components/main/table/CustomeTable";
import Pagination from "@/components/main/pagination/Pagination";
import CustomSelect from "@/components/main/input/CustomSelect";
import { toast } from "react-toastify";
import { jalaaliToGregorianISO } from "@/utills/formatHelper";
import Image from "next/image";
const MedicalSection = ({
  tableHeaders,
}: {
  tableHeaders: { name: string; value: string }[] | undefined;
}) => {
  const sectionName = useSearchParams().get("name")!;

  const [getItemsLoading, setGetItemsLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const { refresh, push } = useRouter();
  const [tableData, setTableData] = useState<ReactNode | null>(null);
  const [selected, setSelected] = useState(tableHeaders && tableHeaders[0]);
  const [searchValue, setSearchValue] = useState<string | null>("");
  const [banner, setBanner] = useState<DeviceBannerObject | null>(null);
  const [totalPageCount, setTotalPageContain] = useState(0);

  const updateTableData = async (pageNumber: number) => {
    const nextTableData = await getSectionsData(
      // @ts-ignore
      sectionName,
      pageNumber
    );
    if (nextTableData?.data) {
      const Data = TableBodyData({
        // @ts-ignore
        data: nextTableData.data,
        // @ts-ignore
        operationName: sectionName,
      });
      setTableData(Data);
    }
  };

  const filterTableData = async () => {
    let filterValue = searchValue;
    if (sectionName === "GetEvents") {
      filterValue = jalaaliToGregorianISO(searchValue!);
    }
    const filteredData = await getSectionsData(
      // @ts-ignore
      sectionName,
      null,
      selected!.value ? selected?.value : null,
      filterValue !== null ? filterValue : searchValue
    );
    if (filteredData?.data) {
      const Data = TableBodyData({
        data: filteredData.data,
        // @ts-ignore
        operationName: sectionName,
      });
      setSearchLoading(false);
      setTableData(Data);
    } else {
      toast.error(filteredData?.message);
    }
  };

  const fetchData = async () => {
    // @ts-ignore
    const bannerData = await getDeviceBanner(sectionName!);
    if (bannerData?.banner) {
      setBanner(bannerData.banner);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    setTableData(null);
    setSearchValue("");
    refresh();
    setSelected(
      // @ts-ignore
      tableHeaders.filter(
        (item) => item.value !== "CityID" && item.value !== "CityId"
      )[0]
    );
  }, [sectionName]);
  return (
    <>
      {banner && banner ? (
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
            src={banner.imageUrl}
            alt={banner.description || ""}
            className="!rounded-lg absolute inset-0"
            // objectFit="cover"
            unoptimized
          />
        </div>
      ) : null}
      <>
        <div className="w-full flex flex-col">
          <Box>
            <div className="w-full flex gap-y-4 flex-col">
              <div className="w-full grid gap-8 grid-cols-3">
                <div className="w-full lg:col-span-1 col-span-3">
                  <p className="text-[14px]">
                    لطفا برای جستجوی بهتر باکس های زیر را پر کنید.
                  </p>
                </div>
              </div>
              <div className="w-full grid md:gap-8 gap-4 items-stretch grid-cols-2">
                <div className="md:col-span-1 col-span-2 pt-1 md:h-full h-[60px] relative z-40">
                  <CustomSelect
                    selected={selected!}
                    // @ts-ignore
                    setSelected={setSelected!}
                    // @ts-ignore
                    items={
                      tableHeaders &&
                      tableHeaders.filter(
                        (item) =>
                          item.value !== "CityID" && item.value !== "CityId"
                      )
                    }
                  />
                </div>
                <div className="md:col-span-1 col-span-2 h-full">
                  <AuthInput
                    dir="ltr"
                    placeholder="کلمه مورد نظر خود را تایپ کنید."
                    value={searchValue!}
                    onChange={(e) => setSearchValue(e.target.value)}
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="z-10"
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
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                    name="searchValue"
                    mt="mt-0"
                  />
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-3">
                <div className="md:col-span-1 col-span-2">
                  <Button
                    onClick={async () => {
                      setGetItemsLoading(true);
                      const medicalEquipmentData = await getSectionsData(
                        // @ts-ignore
                        sectionName
                      );
                      const Data = TableBodyData({
                        // @ts-ignore
                        data: medicalEquipmentData?.data,
                        // @ts-ignore
                        operationName: sectionName,
                      });
                      if (Data) {
                        setTableData(Data);
                        setGetItemsLoading(false);
                      }
                      refresh();
                    }}
                    loading={getItemsLoading}
                    text="نمایش کل لیست جاری"
                    bg="bg-primaryLight"
                    border="border border-primary"
                    dir="rtl"
                    width="w-full"
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_60_593"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="18"
                          height="18"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 0H18V18H0V0Z"
                            fill="white"
                          />{" "}
                        </mask>
                        <g mask="url(#mask0_60_593)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.64446 4.032L2.57246 3.88744C2.53966 3.82109 2.49397 3.76194 2.43805 3.71346C2.38213 3.66498 2.3171 3.62812 2.24677 3.60506C2.17676 3.58149 2.10276 3.57209 2.02907 3.5774C1.95539 3.58271 1.8835 3.60263 1.81759 3.636C1.75079 3.66801 1.69127 3.71337 1.6427 3.7693C1.59413 3.82522 1.55755 3.89051 1.53521 3.96112C1.51081 4.03099 1.50097 4.10511 1.50629 4.17892C1.51161 4.25273 1.53198 4.32467 1.56615 4.39031L2.30865 5.87644C2.34145 5.94279 2.38714 6.00193 2.44306 6.05042C2.49898 6.0989 2.56401 6.13575 2.63434 6.15881C2.71548 6.18617 2.80184 6.19446 2.88671 6.18305C2.97158 6.17163 3.05268 6.14082 3.12371 6.093L6.49871 3.843C6.5605 3.80231 6.61357 3.74972 6.65481 3.6883C6.69605 3.62687 6.72464 3.55785 6.7389 3.48525C6.75357 3.41288 6.75371 3.33832 6.73932 3.2659C6.72493 3.19348 6.6963 3.12464 6.65509 3.06337C6.61504 3.00102 6.56263 2.94753 6.50109 2.90622C6.43956 2.86491 6.37022 2.83665 6.29734 2.82319C6.22502 2.80764 6.15029 2.80706 6.07773 2.82148C6.00518 2.83589 5.93635 2.86499 5.87546 2.907L4.7814 3.63544L3.03034 4.80375L2.64446 4.032ZM8.99959 3.375C8.84434 3.375 8.71159 3.43012 8.6019 3.53981C8.49221 3.6495 8.43709 3.78169 8.43709 3.9375C8.43709 4.09331 8.49221 4.2255 8.6019 4.33519C8.65342 4.38835 8.71529 4.4304 8.78369 4.45875C8.85208 4.48709 8.92556 4.50113 8.99959 4.5H16.8746C16.9486 4.50113 17.0221 4.48709 17.0905 4.45875C17.1589 4.4304 17.2207 4.38835 17.2723 4.33519C17.382 4.2255 17.4371 4.09331 17.4371 3.9375C17.4371 3.78169 17.382 3.6495 17.2723 3.53981C17.1626 3.43012 17.0304 3.375 16.8746 3.375H8.99959ZM2.65627 8.532L2.58371 8.38744C2.55161 8.32077 2.50621 8.26137 2.4503 8.2129C2.39438 8.16444 2.32914 8.12793 2.25859 8.10563C2.18877 8.0811 2.11466 8.07115 2.04085 8.07637C1.96703 8.0816 1.89507 8.10189 1.8294 8.136C1.76311 8.16873 1.70399 8.21434 1.65551 8.27016C1.60703 8.32598 1.57015 8.3909 1.54702 8.46113C1.52346 8.53114 1.51405 8.60514 1.51936 8.67883C1.52468 8.75251 1.5446 8.8244 1.57796 8.89031L2.32046 10.3764C2.35253 10.4433 2.39799 10.5028 2.45401 10.5514C2.51003 10.6 2.57543 10.6365 2.64615 10.6588C2.72711 10.6874 2.81369 10.6963 2.89876 10.6848C2.98384 10.6734 3.06499 10.6419 3.13552 10.593L6.51052 8.343C6.57278 8.30289 6.62616 8.25046 6.66737 8.18893C6.70858 8.1274 6.73675 8.05808 6.75015 7.98525C6.76577 7.91297 6.76645 7.83826 6.75213 7.76571C6.73781 7.69316 6.70881 7.6243 6.6669 7.56338C6.62687 7.50099 6.57447 7.44749 6.51294 7.40618C6.4514 7.36486 6.38204 7.33662 6.30915 7.32319C6.23683 7.30764 6.1621 7.30706 6.08955 7.32148C6.01699 7.33589 5.94816 7.36499 5.88727 7.407L3.04159 9.30375L2.65627 8.532ZM8.99959 8.4375C8.84434 8.4375 8.71159 8.49263 8.6019 8.60231C8.49221 8.712 8.43709 8.84419 8.43709 9C8.43709 9.15581 8.49221 9.288 8.6019 9.39769C8.71159 9.50738 8.84377 9.5625 8.99959 9.5625H16.8746C17.0298 9.5625 17.1626 9.50738 17.2723 9.39769C17.382 9.288 17.4371 9.15581 17.4371 9C17.4371 8.84419 17.382 8.712 17.2723 8.60231C17.1626 8.49263 17.0304 8.4375 16.8746 8.4375H8.99959ZM2.65627 13.032L2.58371 12.8874C2.55164 12.8207 2.50625 12.7613 2.45033 12.7129C2.39441 12.6644 2.32916 12.6279 2.25859 12.6056C2.18877 12.5811 2.11466 12.5711 2.04085 12.5764C1.96703 12.5816 1.89507 12.6019 1.8294 12.636C1.76311 12.6687 1.70399 12.7143 1.65551 12.7702C1.60703 12.826 1.57015 12.8909 1.54702 12.9611C1.52346 13.0311 1.51405 13.1051 1.51936 13.1788C1.52468 13.2525 1.5446 13.3244 1.57796 13.3903L2.32046 14.8764C2.35253 14.9433 2.39799 15.0028 2.45401 15.0514C2.51003 15.1 2.57543 15.1365 2.64615 15.1588C2.72711 15.1874 2.81369 15.1963 2.89876 15.1848C2.98384 15.1734 3.06499 15.1419 3.13552 15.093L6.51052 12.843C6.57221 12.8023 6.62517 12.7496 6.66631 12.6882C6.70745 12.6268 6.73595 12.5578 6.75015 12.4852C6.7649 12.4129 6.76513 12.3384 6.75084 12.266C6.73655 12.1935 6.70802 12.1247 6.6669 12.0634C6.62687 12.001 6.57447 11.9475 6.51294 11.9062C6.4514 11.8649 6.38204 11.8366 6.30915 11.8232C6.23683 11.8076 6.1621 11.8071 6.08955 11.8215C6.01699 11.8359 5.94816 11.865 5.88727 11.907L4.79377 12.6354L3.04215 13.8038L2.65627 13.032ZM8.99959 13.5C8.84434 13.5 8.71159 13.5551 8.6019 13.6648C8.49221 13.7745 8.43709 13.9067 8.43709 14.0625C8.43709 14.2183 8.49221 14.3505 8.6019 14.4602C8.71159 14.5699 8.84377 14.625 8.99959 14.625H16.8746C17.0298 14.625 17.1626 14.5699 17.2723 14.4602C17.382 14.3505 17.4371 14.2183 17.4371 14.0625C17.4371 13.9067 17.382 13.7745 17.2723 13.6648C17.1626 13.5551 17.0304 13.5 16.8746 13.5H8.99959Z"
                            fill="#2C9CF0"
                          />
                        </g>
                      </svg>
                    }
                  />
                </div>
                <div className="md:col-span-1 col-span-2">
                  <Button
                    // type="submit"
                    text="جست جو"
                    bg="bg-primary"
                    hover="hover:bg-btnPrimaryHover"
                    dir="rtl"
                    color="text-white"
                    width="w-full"
                    onClick={() => {
                      if (searchValue !== "") {
                        setSearchLoading(true);
                        filterTableData();
                      } else {
                        toast.warning("لطفا کلمه مورد نظر خود را وارد کنید");
                      }
                    }}
                    loading={searchLoading}
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
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 16.5L15 15"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>
          </Box>
          <div className="w-full mt-5">
            <CustomeTable headers={tableHeaders ? tableHeaders : []}>
              {tableData}
            </CustomeTable>
          </div>
          {tableData !== null && (
            <div className="w-full mt-10 flex justify-center">
              <Pagination
                totalPagesCount={totalPageCount!}
                onClick={updateTableData}
              />
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default MedicalSection;
