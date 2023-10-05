"use client";

import { InitialValues } from "@/utills/validation/auth/types";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent } from "react";

const AuthInput = ({
  label,
  placeholder,
  name,
  isRequired,
  type = "text",
  onChange,
  handleBlur,
  errors,
  touched,
  value,
}: {
  label?: string;
  placeholder?: string;
  name: string;
  isRequired?: boolean;
  type?: string;
  onChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
  value: string;
}) => {
  // @ts-ignore
  const error = errors[name];
  // @ts-ignore
  const touchedInput = touched[name];
  return (
    <div className="w-full flex flex-col mt-7 relative">
      <div className="w-fit relative">
        {label && (
          <label
            htmlFor={name}
            className="text-[#2D3748] text-[16px] mr-[2px]"
            id={name}
          >
            {label}
          </label>
        )}
        {isRequired && (
          <div className="absolute top-0 left-[-15px] font-bold text-borderError">
            *
          </div>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        className={`border border-[#E2E8F0] rounded-lg p-[12px] bg-transparent outline-none mt-1 hover:shadow-inputHover hover:border-inputHoverBorder transition duration-200 ${
          error && touchedInput ? "border-borderError" : ""
        }`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && touchedInput && <p className=" text-borderError">{error}</p>}
    </div>
  );
};

export default AuthInput;
