"use client";

import React from "react";
import "./radio.css";

const CustomRadio = ({ id, title }: { id: string; title: string }) => {
  return (
    <div className="flex items-center my-3">
      <input type="radio" className="hidden" name="custom_radio" id={id} />
      <label
        className="flex items-center cursor-pointer text-[16px]"
        htmlFor={id}
      >
        <span className="w-4 h-4 bg-transparent rounded-full p-2 border border-radioBorderColor"></span>
        <p className="mr-2">{title}</p>
      </label>
    </div>
  );
};

export default CustomRadio;
