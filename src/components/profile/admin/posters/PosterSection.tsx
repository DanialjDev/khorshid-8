import {
  HomeSideBanners,
  MedicalEquipmentBanners,
  Gallery,
} from "@/services/profile/admin/posters/types";
import React from "react";
import PosterBox from "./PosterBox";

type Data = (HomeSideBanners & MedicalEquipmentBanners & Gallery)[];

const PosterSection = ({ title, data }: { title: string; data: Data }) => {
  return (
    <div
      className={`w-full flex flex-col pb-5 border-b border-profileBorderBottom justify-start mt-8`}
    >
      <div className="w-full text-start">
        <p className="text-primary font-bold">{title}</p>
      </div>
      <div className="w-full mt-3 content-center justify-self-stretch grid grid-cols-6 gap-x-10 gap-y-3">
        {data &&
          data.map((item, index) => {
            // @ts-ignore
            return (
              <PosterBox
                fontSize={
                  item.name
                    ? "sm:text-[13px] text-[12px]"
                    : "sm:text-[14px] text-[13px]"
                }
                posterData={item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PosterSection;
