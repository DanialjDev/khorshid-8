import React, { ReactNode } from "react";

const ContactInput = ({
  icon,
  placeholder,
  type,
  margin,
}: {
  icon: ReactNode;
  placeholder: string;
  type?: string;
  margin?: string;
}) => {
  return (
    <div
      className={`w-full flex relative items-center rounded-md border border-[#E6E6E6] p-2 ${
        margin ? margin : ""
      }`}
    >
      <div className="absolute">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="outline-none w-full text-[14px] mr-6 bg-transparent placeholder:text-[#707070]"
      />
    </div>
  );
};

export default ContactInput;
