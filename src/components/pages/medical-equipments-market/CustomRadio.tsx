"use client";

import React, { useState } from "react";
import "./radio.css";
import { filterDevices } from "@/services/shop";
import { Device } from "@/services/shop/types";

const CustomRadio = ({
  id,
  title,
  deviceCategoriesID,
  onChange,
}: {
  id: string;
  title: string;
  deviceCategoriesID: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}) => {
  return (
    <div className="flex items-center my-3">
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
