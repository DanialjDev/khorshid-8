import PageTitle from "@/components/main/pageTitle/PageTitle";
import React, { ReactNode } from "react";

const MedicalEquipmentsForm = ({
  children,
  handleSubmit,
  title,
  desc,
}: {
  children: ReactNode;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-full flex flex-col">
      <PageTitle text={desc} title={title} />
      <form
        onSubmit={handleSubmit}
        className="w-full my-10 bg-menuBg border border-adminFormBorder2 shadow-adminFormBox p-5 grid gap-x-5 grid-cols-4 rounded-[12px]"
      >
        {children}
      </form>
    </div>
  );
};

export default MedicalEquipmentsForm;
