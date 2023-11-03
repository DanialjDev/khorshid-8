import React, { ChangeEvent } from "react";

const AuthSelect = ({
  disabled,
  mt,
  isRequired,
  label,
  name,
  value,
  placeholder,
  selectOptions,
  onChange,
  error,
  touched,
}: {
  disabled?: boolean;
  mt?: string;
  label?: string;
  isRequired?: boolean;
  name: string;
  value?: string;
  placeholder: string;
  selectOptions: { name: string; value: string; id?: number }[];
  onChange?: (e: ChangeEvent<any>) => void;
  error?: string;
  touched?: boolean;
}) => {
  return (
    <div
      className={`w-full relative ${
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
      <select
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        className={`border text-dark focus:border-primary bg-white autofill:!bg-white border-inputBorder rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1 ${
          !disabled
            ? "hover:shadow-inputHover hover:border-inputHoverBorder"
            : "cursor-not-allowed"
        } ${
          error && touched ? "border-redColor" : ""
        } transition duration-200 placeholder:text-[13px]`}
      >
        <option value={""}>{placeholder}</option>
        {selectOptions &&
          selectOptions.length !== 0 &&
          selectOptions.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
      <div className="absolute top-10 left-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.07992 8.95035L10.5999 15.4704C11.3699 16.2404 12.6299 16.2404 13.3999 15.4704L19.9199 8.95035"
            stroke="#292929"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {error && touched && (
        <p className=" text-borderError text-right">{error}</p>
      )}
    </div>
  );
};

export default AuthSelect;
