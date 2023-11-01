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
}) => {
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
      <select
        onChange={onChange}
        className={`border text-dark focus:border-primary bg-white autofill:!bg-white border-inputBorder rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1 ${
          !disabled
            ? "hover:shadow-inputHover hover:border-inputHoverBorder"
            : "cursor-not-allowed"
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
    </div>
  );
};

export default AuthSelect;
