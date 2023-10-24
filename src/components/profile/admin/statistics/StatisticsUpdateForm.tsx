import React, { ReactNode } from "react";

const StatisticsUpdateForm = ({
  title,
  children,
  handleSubmit,
}: {
  title: string;
  children: ReactNode;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-5 grid grid-cols-4 gap-x-7 gap-y-0 bg-menuBg border-adminFormBorder2 border p-5 rounded-[12px]"
    >
      <div className="w-full col-span-4">
        <p className="text-dark text-[22px]">{title}</p>
      </div>
      {children}
    </form>
  );
};

export default StatisticsUpdateForm;
