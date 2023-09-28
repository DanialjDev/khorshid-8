import Box from "@/components/main/Box/Box";
import AuthInput from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import React, { ReactNode } from "react";

const RegisterForm = ({
  title,
  children,
  isRequired,
}: {
  title: string;
  children: ReactNode;
  isRequired?: boolean;
}) => {
  return (
    <div className="flex flex-col mb-8">
      <div className="w-fit relative text-dark flex justify-start items-center mb-3">
        <p className="text-[16px]">{title}</p>
        {isRequired && (
          <div className="absolute top-0 left-[-15px] font-bold text-[#FF0606]">
            *
          </div>
        )}
      </div>
      <Box border="border-2 border-[#1A1A1A0D]" padding="px-5 pb-5">
        {children}
      </Box>
    </div>
  );
};

export default RegisterForm;
