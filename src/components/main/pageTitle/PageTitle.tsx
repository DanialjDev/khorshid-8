import React from "react";

const PageTitle = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-fit flex flex-col">
      <div className="w-full flex justify-start items-center">
        <h2 className="text-[16px] text-primary font-bold">{title}</h2>
      </div>
      <div className="w-full flex justify-start items-center mt-2">
        <p className="text-gray text-[14px]">{text}</p>
      </div>
    </div>
  );
};

export default PageTitle;
