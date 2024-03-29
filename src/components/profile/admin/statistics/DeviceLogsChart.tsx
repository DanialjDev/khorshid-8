"use client";

import { generateItemsDevicedBySix } from "@/utills/formatHelper";
import React from "react";

export const DeviceLogsChart = ({
  devicesLogsData,
}: {
  devicesLogsData: {
    monthTitles: string[] | null;
    acceptedCounts: number[] | null;
  } | null;
}) => {
  console.log(devicesLogsData?.acceptedCounts);
  const maxAmount =
    devicesLogsData?.acceptedCounts &&
    Math.max(...devicesLogsData?.acceptedCounts!);
  const chartSideTexts = devicesLogsData?.acceptedCounts
    ? generateItemsDevicedBySix(maxAmount ? maxAmount : 0)
    : null;
  return (
    <div className="w-full flex flex-col h-full justify-between items-center">
      <div className="w-full flex flex-col justify-start">
        <p className="text-inputLabelColor font-bold text-[18px]">
          آمار بازدید
        </p>
        <div className="w-full flex items-center mt-3">
          <span className="w-[12px] h-[12px] rounded-full bg-primary"></span>
          <p className="text-lightBlue text-[14px] mr-2">بازدید کنندگان</p>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full flex gap-x-2 h-[75%] items-end">
        <div className="w-[93%] h-full relative pt-1 pb-3">
          <div className="w-full h-full flex flex-col justify-between absolute pb-4">
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
            <div className="w-full border-b border-dashed border-inputBorder borde-t-0 border-r-0 border-l-0"></div>
          </div>
          <div className="w-full h-full grid items-end grid-cols-7 gap-x-7">
            {devicesLogsData?.acceptedCounts &&
              chartSideTexts &&
              devicesLogsData.acceptedCounts.map((item, index) => {
                return (
                  <div
                    style={{
                      height: `${String((item / chartSideTexts[5]) * 100)}%`,
                    }}
                    key={index}
                    className="w-[15px] z-30 relative flex items-end cursor-pointer bg-primary rounded-tr-[4px] rounded-tl-[4px] col-span-1"
                  >
                    <div className="w-full h-full peer cursor-pointer"></div>
                    <div className="w-[70px] h-[50px] flex justify-center items-center transition-all duration-300  opacity-0 peer-hover:opacity-100 bg-primary rounded-md absolute -top-14 right-[50%] translate-x-[50%]">
                      <p className="text-white">{item}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-[7%] flex justify-between h-full text-lightBlue flex-col-reverse items-center">
          <span>0</span>
          {chartSideTexts &&
            chartSideTexts.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
        </div>
      </div>
      <div className="w-[93%] grid ml-auto grid-cols-7 items-center">
        {devicesLogsData?.monthTitles &&
          devicesLogsData.monthTitles.map((item, index) => (
            <span key={index} className="col-span-1">
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};
