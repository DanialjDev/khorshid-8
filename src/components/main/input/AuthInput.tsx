"use client";

import { InitialValues } from "@/utills/validation/auth/types";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent, ReactNode } from "react";

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
  mt,
  helperText,
  icon,
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
  mt?: string;
  helperText?: string;
  icon?: ReactNode;
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
    <div
      className={`w-full ${
        disabled ? "cursor-not-allowed" : ""
      } h-full flex flex-col ${mt ? mt : "mt-7"} relative`}
    >
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
      {helperText === undefined ? (
        <>
          <input
            disabled={disabled}
            type={type}
            name={name}
            id={name}
            className={`border text-dark focus:border-primary bg-white autofill:!bg-white border-inputBorder rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1 ${
              !disabled
                ? "hover:shadow-inputHover hover:border-inputHoverBorder"
                : "cursor-not-allowed"
            } transition duration-200 placeholder:text-[13px] ${
              error && touchedInput ? "!border-borderError" : ""
            }`}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={handleBlur}
            value={value}
          />
        </>
      ) : (
        <>
          <input
            disabled={disabled}
            type={type}
            name={name}
            id={name}
            className={`border focus:border-primary autofill:!bg-white border-inputBorder rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1 ${
              !disabled
                ? "hover:shadow-inputHover hover:border-inputHoverBorder"
                : ""
            } transition duration-200  placeholder:text-[13px] ${
              helperText !== undefined ? "!border-redColor" : ""
            }`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </>
      )}
      {icon && <div className="absolute left-3 top-5">{icon}</div>}
      {error && touchedInput ? (
        <p className=" text-borderError">{error}</p>
      ) : (
        <p className=" text-borderError">{helperText}</p>
      )}
    </div>
  );
};

export default AuthInput;
