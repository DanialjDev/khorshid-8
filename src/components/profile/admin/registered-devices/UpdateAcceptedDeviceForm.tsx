import AuthInput from "@/components/main/input/AuthInput";
import React from "react";

const UpdateAcceptedDeviceForm = () => {
  return (
    <div className="w-full bg-menuBg p-5 rounded-[12px] border border-adminFormBorder2 shadow-adminFormBox">
      <div className="w-full grid grid-cols-4 gap-5">
        <div className="col-span-2">
          <AuthInput name="DeviceId" label="نام کامل شرکت" />
        </div>
      </div>
    </div>
  );
};

export default UpdateAcceptedDeviceForm;
