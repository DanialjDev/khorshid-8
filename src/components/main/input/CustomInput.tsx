import { InitialValues } from "@/utills/validation/auth/types";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent, ReactNode } from "react";

interface CustomInputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  width?: string;
  icon?: ReactNode;
  onClick?: any;
  isDisabled?: boolean;
  onChange?: (e: ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any, Element>) => void;
  errors?: FormikErrors<PanelInitialValues | InitialValues>;
  touched?: FormikTouched<PanelInitialValues | InitialValues>;
}

const CustomInput = ({
  label,
  placeholder,
  type,
  width = "w-full",
  icon,
  onClick,
  isDisabled,
}: CustomInputProps) => {
  return (
    <div className="relative">
      <input
        disabled
        className={`${width} disabled:opacity-60 disabled:cursor-not-allowed placeholder:text-inputLabelColor xl:!text-[14px] text-[12px] border-2 border-inputBorderColor text-dark outline-none p-3 bg-white rounded-[5px]`}
        type={type}
        placeholder={placeholder}
      />
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`absolute left-4 xl:top-[14px] lg:top-[10px] top-[12px] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        {icon}
      </button>
    </div>
  );
};

export default CustomInput;
