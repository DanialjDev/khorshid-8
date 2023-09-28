import React, { ReactNode } from "react";

const FooterIcons = ({ icon, border }: { icon: ReactNode; border: string }) => {
  return (
    <div
      className={`rounded-full ${
        border ? border : ""
      } p-3 flex justify-center items-center`}
    >
      {icon}
    </div>
  );
};

export default FooterIcons;
