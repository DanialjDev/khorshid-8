"use client";

import React, { useState } from "react";
import "./radio.css";
import { filterDevices } from "@/services/shop";
import { Device } from "@/services/shop/types";

const CustomRadio = ({
  id,
  title,
  deviceCategoriesID,
  // setDeviceCategoriesID,
  // setClientDevices,
  onChange,
}: // onClick,
{
  id: string;
  title: string;
  deviceCategoriesID: string[];
  // setDeviceCategoriesID: React.Dispatch<React.SetStateAction<string[]>>;
  // setClientDevices: React.Dispatch<
  //   React.SetStateAction<Device[] | null | undefined>
  // >;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  // onClick: () => void;
}) => {
  return (
    <div
      className="flex items-center my-3"
      // onClick={() => console.log(deviceCategoriesID)}
    >
      <input
        id={id}
        name={id}
        type="checkbox"
        checked={deviceCategoriesID.some((deviceId) => deviceId === id)}
        className="checkbox-accent checkbox scale-75 cursor-pointer bg-none"
        onChange={onChange}
      />
      <label
        className="flex items-center cursor-pointer text-[14px]"
        htmlFor={id}
      >
        <p className="mr-1">{title}</p>
      </label>
    </div>
  );
};

export default CustomRadio;
