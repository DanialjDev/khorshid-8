"use client";

import React from "react";
import { Oval } from "react-loader-spinner";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Oval color="#2C9CF0" width={50} height={50} visible />
    </div>
  );
};

export default loading;
