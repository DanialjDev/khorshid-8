"use client";

import React, { SetStateAction, useEffect } from "react";
import { Device, TableData } from "@/services/shop/types";
import ProductItem from "../home-page/ProductItem";
import CustomRadio from "./CustomRadio";
import { useState } from "react";
import { DeviceName } from "@/services/common/types";
import { filterDevices, getDevices } from "@/services/shop";
import { toast } from "react-toastify";
import Button from "@/components/main/button/Button";

const NoDeviceFound = () => (
  <div className="lg:col-span-6 sm:col-span-5 col-span-8 h-full flex justify-center items-start sm:pt-[200px] p-0">
    <p className="lg:text-xl text-lg text-radioBorderColor">
      محصولی برای نمایش وجود ندارد
    </p>
  </div>
);

const MedicalMarket = ({
  deviceCategories,
  devices,
  currentPageNumber,
}: {
  deviceCategories: DeviceName[] | undefined;
  devices: TableData | null;
  currentPageNumber: number;
}) => {
  const [clientDevices, setClientDevices] = useState<TableData | undefined>(
    // @ts-ignore
    devices
  );
  const [currentPage, setCurrentPage] = useState(currentPageNumber);
  const [search, setSearch] = useState("");
  const [deviceCategoriesID, setDeviceCategoriesID] = useState<string[]>([]);
  const [showFilterSection, setShowFilterSection] = useState(false);
  let categoryBasedUrl = "";

  const filterSearch = async () => {
    deviceCategoriesID?.forEach((item) => {
      categoryBasedUrl += `CategoryIDs=${item}&`;
    });
    const filteredDevices = await filterDevices(search, categoryBasedUrl);
    if (filteredDevices) {
      setClientDevices(filteredDevices.data);
    }
    setShowFilterSection(false);
    setSearch("");
  };

  const onChangeDeviceFilter = async () => {
    deviceCategoriesID?.forEach((item) => {
      categoryBasedUrl += `CategoryIDs=${item}&`;
    });
    console.log(categoryBasedUrl);
    const filteredDevices = await filterDevices(undefined, categoryBasedUrl);
    if (filteredDevices && filteredDevices?.status === 200) {
      setClientDevices(filteredDevices.data);
    } else {
      toast.error(filteredDevices?.message);
    }
  };

  const devicePagingNext = async (action: string) => {
    const devices = await getDevices(String(currentPage + 1));
    if (devices?.status === 200) {
      setClientDevices(devices.data);
    }
  };
  const devicePagingPrev = async (action: string) => {
    const devices = await getDevices(String(currentPage - 1));
    if (devices?.status === 200) {
      setClientDevices(devices.data);
    }
  };

  useEffect(() => {
    onChangeDeviceFilter();
  }, [deviceCategoriesID]);
  return (
    <div className={`w-full grid grid-cols-8 gap-4 p-0 sm2:px-8 sm:p-0`}>
      <button
        onClick={() => setShowFilterSection((prevState) => !prevState)}
        className="fixed bottom-4 left-4 w-[120px] p-2 shadow-2xl text-white flex sm:hidden justify-center items-center bg-primary rounded-lg z-[120]"
      >
        <p> فیلترها</p>
      </button>
      <div
        className={`sm:hidden ${
          showFilterSection ? "flex z-50" : "hidden"
        } fixed top-[-100px] transition right-0 w-[120vw] h-[150vh] bg-[#d9d9d980]`}
      ></div>
      <div
        className={`w-full overflow-y-auto sm:translate-x-0 sm:right-0 -right-[50%] -translate-x-[50%] transition-all duration-200 ${
          showFilterSection ? "bottom-0 z-[100]" : "bottom-[-100vh]"
        } h-fit sm:bg-transparent bg-white sm:p-0 p-3 lg:col-span-2 sm:shadow-none shadow-2xl sm:rounded-none rounded-tr-xl rounded-tl-xl col-span-3 grid grid-cols-2 sm:relative sm:top-0 fixed`}
      >
        <div className="!w-full col-span-2 sm:h-full h-[400px] grid grid-cols-2 gap-3">
          <div className="col-span-2 w-full flex justify-between items-center p-4 bg-white shadow-xs rounded-lg">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-[120px] outline-none text-[16px] bg-transparent placeholder:text-[14px]"
              placeholder="جستجو محصول"
            />
            <div onClick={filterSearch} className="cursor-pointer">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-[0.8]"
              >
                <path
                  d="M20.2993 18.5757L15.7051 13.9814C16.8112 12.509 17.4083 10.7166 17.4062 8.875C17.4062 4.1709 13.5791 0.34375 8.875 0.34375C4.1709 0.34375 0.34375 4.1709 0.34375 8.875C0.34375 13.5791 4.1709 17.4062 8.875 17.4062C10.7166 17.4083 12.509 16.8112 13.9814 15.7051L18.5757 20.2993C18.8082 20.5072 19.1116 20.6182 19.4234 20.6094C19.7352 20.6007 20.0318 20.473 20.2524 20.2524C20.473 20.0318 20.6007 19.7352 20.6094 19.4234C20.6182 19.1116 20.5072 18.8082 20.2993 18.5757ZM2.78125 8.875C2.78125 7.66977 3.13864 6.4916 3.80823 5.48949C4.47782 4.48738 5.42953 3.70633 6.54302 3.24511C7.65651 2.78389 8.88176 2.66321 10.0638 2.89834C11.2459 3.13347 12.3317 3.71384 13.1839 4.56607C14.0362 5.41829 14.6165 6.50409 14.8517 7.68616C15.0868 8.86824 14.9661 10.0935 14.5049 11.207C14.0437 12.3205 13.2626 13.2722 12.2605 13.9418C11.2584 14.6114 10.0802 14.9687 8.875 14.9687C7.25943 14.9668 5.71059 14.3242 4.56821 13.1818C3.42583 12.0394 2.78319 10.4906 2.78125 8.875Z"
                  fill="#2C9CF0"
                />
              </svg>
            </div>
          </div>
          <div className="w-full p-2 col-span-2 overflow-scroll flex flex-col bg-white shadow-xs rounded-lg">
            <div className="w-full flex justify-between items-center border-b border-menuBorderColor py-2 text-[16px]">
              <p className="text-[14px]">فیلتر ها</p>
              <button
                className="text-primaryDark font-semibold text-[14px]"
                onClick={() => {
                  // @ts-ignore
                  setClientDevices(devices);
                  setDeviceCategoriesID([]);
                  setSearch("");
                  setShowFilterSection(false);
                }}
              >
                حذف فیلترها
              </button>
            </div>
            <form className="w-full flex flex-col mt-4">
              {deviceCategories &&
                deviceCategories.map((item) => (
                  <CustomRadio
                    onChange={async (
                      e: React.ChangeEvent<HTMLInputElement>
                    ) => {
                      if (e.target.checked) {
                        setDeviceCategoriesID([
                          ...deviceCategoriesID,
                          String(item.id),
                        ]);
                      } else {
                        setDeviceCategoriesID((deviceIDs) => {
                          return deviceIDs.filter(
                            (deviceId) => deviceId !== String(item.id)
                          );
                        });
                      }
                    }}
                    deviceCategoriesID={deviceCategoriesID}
                    key={item.id}
                    id={String(item.id)}
                    title={item.categoryName}
                  />
                ))}
            </form>
          </div>
        </div>
      </div>
      {clientDevices && clientDevices.data.length !== 0 ? (
        <>
          <div className="w-full grid lg:col-span-6 sm:col-span-5 col-span-8 items-start grid-cols-6 gap-8 content-baseline">
            {clientDevices.data.map(
              ({
                companyName,
                deviceId,
                deviceName,
                imageUrl,
                orderedByMobileNumber,
              }) => (
                <div
                  key={deviceId}
                  className="xl:col-span-2 lg:col-span-3 col-span-6"
                >
                  <ProductItem
                    deviceId={String(deviceId)}
                    companyName={companyName}
                    name={deviceName}
                    imageUrl={imageUrl ? imageUrl : ""}
                    orderedByMobileNumber={orderedByMobileNumber}
                  />
                </div>
              )
            )}
            {!(clientDevices.totalItemsCount === clientDevices.pageContain) && (
              <div className="mt-6 col-span-5 h-full flex justify-center items-center">
                <Button
                  border="border border-primary"
                  text="بعدی"
                  bg="bg-transparent"
                  color="text-primary"
                  // hover="hover:bg-primary hover:text-white"
                  onClick={() => {
                    setCurrentPage((prevPageNumber) => prevPageNumber + 1);
                    devicePagingNext("next");
                  }}
                />
                <div className="bg-white shadow-lg rounded-md mx-3 py-3 px-4">
                  {currentPage}
                </div>
                <Button
                  border="border border-primary"
                  text="قبلی"
                  bg="bg-transparent"
                  color="text-primary"
                  // hover="hover:bg-primary hover:text-white"
                  onClick={() => {
                    setCurrentPage((prevPageNumber) => prevPageNumber - 1);
                    devicePagingPrev("prev");
                  }}
                  disabled={currentPage === 1}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <NoDeviceFound />
      )}
    </div>
  );
};

export default MedicalMarket;
