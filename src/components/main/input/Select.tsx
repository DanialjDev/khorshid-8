import React from "react";

const Select = ({
  options,
  label,
  width = "w-full",
  placeholder,
}: {
  options: string[];
  label?: string;
  width?: string;
  placeholder?: string;
}) => {
  return (
    <div className="relative">
      <select
        placeholder={placeholder}
        className={`${width} xl:!text-[14px] text-[12px] border-2 border-inputBorderColor p-3 bg-white rounded-[5px] text-dark outline-none appearance-none relative`}
      >
        <option className="text-inputLabelColor text-[16px]" value={""}>
          {label}
        </option>
        {/* @ts-ignore */}
        {options.map((item, index) => (
          <option key={index} className="text-inputLabelColor" value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="absolute left-5 top-5">
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#060607"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
