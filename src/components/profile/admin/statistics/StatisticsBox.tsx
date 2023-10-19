import React, { ReactNode } from "react";

const StatisticsBox = ({
  children,
  hasTitleIcon,
  icon,
  title,
}: {
  children: ReactNode;
  hasTitleIcon: boolean;
  title?: string;
  icon?: ReactNode;
}) => {
  return (
    <div className="w-full h-full p-[14px] bg-white shadow-statisticsBox rounded-[10px]">
      {hasTitleIcon && title ? (
        <>
          <div className="w-full flex items-center">
            <div className="p-2 rounded-[12px] bg-primary">{icon}</div>
            <p className="font-bold text-primary md:text-[18px] text-[16px] mr-3">
              {title}
            </p>
          </div>
          <> {children}</>
        </>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export default StatisticsBox;
