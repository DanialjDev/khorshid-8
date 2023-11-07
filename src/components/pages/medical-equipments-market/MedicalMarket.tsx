"use client";

import React, { useState } from "react";
import { TableData } from "@/services/shop/types";
import ProductItem from "../home-page/ProductItem";
import CustomRadio from "./CustomRadio";
import { DeviceName } from "@/services/common/types";
import { filterDevices, getDevices } from "@/services/shop";
import Pagination from "@/components/main/pagination/Pagination";

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
}: {
  deviceCategories: DeviceName[] | undefined;
  devices: TableData | null;
}) => {
  const [clientDevices, setClientDevices] = useState<TableData | undefined>(
    // @ts-ignore
    devices
  );
  const [totalPagesCount, setTotalPagesCount] = useState(
    devices?.totalPagesCount
  );
  const [search, setSearch] = useState("");
  const [deviceCategoriesID, setDeviceCategoriesID] = useState<string[]>([]);
  const [showFilterSection, setShowFilterSection] = useState(false);
  let categoryBasedUrl = "";

  const filterSearch = async () => {
    deviceCategoriesID?.forEach((item) => {
      categoryBasedUrl += `CategoryIDs=${item}&`;
    });
    const filteredDevices = await filterDevices(search, categoryBasedUrl);
    if (filteredDevices?.status === 200) {
      setClientDevices(filteredDevices.data);
      setTotalPagesCount(filteredDevices.data?.totalPagesCount);
    }
    console.log(filteredDevices);
    setShowFilterSection(false);
    setSearch("");
  };

  const updateDevice = async (pageNumber: number) => {
    const updatedDeviceList = await getDevices(pageNumber.toString());
    if (updatedDeviceList?.status === 200 && updatedDeviceList.data) {
      setClientDevices(updatedDeviceList.data);
      setTotalPagesCount(updatedDeviceList.data.totalPagesCount);
    }
  };
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
              <p className="text-primaryDark text-[14px] font-semibold">
                اعمال فیلتر
              </p>
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
                  setTotalPagesCount(devices?.totalPagesCount);
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
            {totalPagesCount && (
              <div className="mt-6 col-span-5 h-full flex justify-center items-center">
                <Pagination
                  onClick={updateDevice}
                  totalPagesCount={totalPagesCount}
                  currentPageNumber={clientDevices.currentPageNumber! - 1}
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
