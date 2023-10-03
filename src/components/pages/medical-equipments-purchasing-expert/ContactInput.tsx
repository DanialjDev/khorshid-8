import { InitialValues } from "@/utills/validation/auth/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent, ReactNode } from "react";

const ContactInput = ({
  icon,
  placeholder,
  type,
  margin,
  isTextarea,
  rows,
  name,
  errors,
  handleBlur,
  onChange,
  touched,
}: {
  icon: ReactNode;
  placeholder: string;
  type?: string;
  margin?: string;
  rows?: number;
  isTextarea?: boolean;
  name?: string;
  onChange: (e: ChangeEvent<any>) => void;
  handleBlur: (e: React.FocusEvent<any, Element>) => void;
  errors: FormikErrors<InitialValues>;
  touched: FormikTouched<InitialValues>;
}) => {
  // @ts-ignore
  const error = errors[name];
  // @ts-ignore
  const touchedInput = touched[name];
  return (
    <>
      <div
        className={`w-full flex relative hover:shadow-inputHover transition duration-200 items-center rounded-md border border-[#E6E6E6] p-2 ${
          margin ? margin : ""
        } ${error && touchedInput ? "border border-borderError" : ""}`}
      >
        <div className={`absolute ${isTextarea ? "top-[10px]" : ""}`}>
          {icon}
        </div>
        {isTextarea ? (
          <textarea
            onChange={onChange}
            onBlur={handleBlur}
            rows={rows}
            className={`outline-none w-full text-[14px] mr-6 bg-transparent placeholder:text-[#707070] ${
              error && touchedInput ? "border-borderError" : ""
            }`}
            name={name}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            type={type}
            onChange={onChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`outline-none w-full text-[14px] mr-6 bg-transparent placeholder:text-[#707070] ${
              error && touchedInput ? "border-borderError" : ""
            }`}
          />
        )}
      </div>
      {error && touchedInput && <p className="text-borderError">{error}</p>}
    </>
  );
};

export default ContactInput;
