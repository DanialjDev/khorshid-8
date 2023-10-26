import React, { ReactNode } from "react";

const MedicalEquipmentsForm = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full my-10 bg-menuBg border border-adminFormBorder2 shadow-adminFormBox p-5 grid grid-cols-4 rounded-[12px]">
      {children}
    </div>
  );
};

export default MedicalEquipmentsForm;
