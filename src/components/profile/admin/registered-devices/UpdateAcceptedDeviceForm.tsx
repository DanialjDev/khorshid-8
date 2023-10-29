"use client";

import AuthInput from "@/components/main/input/AuthInput";
import CustomSelect from "@/components/main/input/CustomSelect";
import React, { useState } from "react";

const UpdateAcceptedDeviceForm = ({
  companyList,
}: {
  companyList: { name: string; value: string }[] | null;
}) => {
  const [selected, setSelected] = useState(companyList![0]);
  return (
    <div className="w-full bg-menuBg p-5 rounded-[12px] border border-adminFormBorder2 shadow-adminFormBox">
      <div className="w-full grid grid-cols-4 gap-5">
        <div className="col-span-2">
          <CustomSelect
            selected={selected}
            setSelected={setSelected}
            items={companyList!}
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            name="managerFullName"
            label="نام و نام خانوادگی مدیر عامل"
            mt="mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateAcceptedDeviceForm;
