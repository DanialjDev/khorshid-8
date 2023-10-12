"use client";

import { InitialValues } from "@/utills/validation/auth/types";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import { FormikErrors, FormikTouched } from "formik";
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
  disabled,
}: {
  label?: string;
  placeholder?: string;
  name: string;
  isRequired?: boolean;
  type?: string;
  onChange?: (e: ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any, Element>) => void;
  errors?: FormikErrors<PanelInitialValues | InitialValues>;
  touched?: FormikTouched<PanelInitialValues | InitialValues>;
  value?: string;
  disabled?: boolean;
}) => {
  let error: any;
  let touchedInput: any;
  if (errors || touched) {
    // @ts-ignore
    error = errors[name];
    // @ts-ignore
    touchedInput = touched[name];
  }
  return (
    <div className="w-full flex flex-col mt-7 relative">
      <div className="w-fit relative">
        {label && (
          <label
            htmlFor={name}
            className="text-inputLabelColor text-[14px] mr-[2px]"
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
        disabled={disabled}
        type={type}
        name={name}
        id={name}
        className={`border border-[#E2E8F0] rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1 ${
          !disabled
            ? "hover:shadow-inputHover hover:border-inputHoverBorder"
            : ""
        } transition duration-200 placeholder:text-[13px] ${
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
