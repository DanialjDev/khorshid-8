import { InitialValues } from "@/utills/validation/auth/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent } from "react";

const Textarea = ({
  label,
  placeholder,
  name,
  isRequired,
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
  onChange?: (e: ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any, Element>) => void;
  errors?: FormikErrors<InitialValues>;
  touched?: FormikTouched<InitialValues>;
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
    <div className="w-full flex flex-col mt-7">
      <div className="w-fit relative">
        {label && (
          <label className="text-[#2D3748] mr-[2px]" id={name}>
            {label}
          </label>
        )}
        {isRequired && (
          <div className="absolute top-0 left-[-15px] font-bold text-[#FF0606]">
            *
          </div>
        )}
      </div>
      <textarea
        disabled={disabled}
        value={value}
        name={name}
        id={name}
        className={`border border-[#E2E8F0] disabled:opacity-60 rounded-lg p-[15px]
        ${
          !disabled
            ? "hover:shadow-inputHover hover:border-inputHoverBorder"
            : ""
        }
        bg-transparent outline-none mt-1 h-[8rem] ${
          error && touchedInput ? "border-[#FF0606]" : ""
        }`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {error && touchedInput && <p className=" text-[#FF0606]">{error}</p>}
    </div>
  );
};

export default Textarea;
