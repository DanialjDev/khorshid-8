import {
  HomeSideBanners,
  MedicalEquipmentBanners,
  Gallery,
} from "@/services/profile/admin/posters/types";
import React, { ReactNode } from "react";
import Button from "@/components/main/button/Button";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { authToggler, setLinkRequired } from "@/redux/features/auth/authSlice";

const PosterSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={`w-full flex flex-col pb-5 border-b border-profileBorderBottom justify-start mt-8`}
    >
      <div className="w-full text-start justify-between flex">
        <p className="text-primary font-bold">{title}</p>
        {title === "گالری تصاویر" && (
          <Button
            text="افزودن کارت تصویر"
            color="text-white"
            rounded="rounded-[6px]"
            onClick={() => {
              dispatch(setLinkRequired(false));
              dispatch(authToggler("updatePoster"));
            }}
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1V13M1 7H13"
                  stroke="white"
                  stroke-opacity="0.95"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        )}
      </div>
      <div className="w-full mt-3 content-center justify-self-stretch grid grid-cols-6 gap-x-10 gap-y-3">
        {children}
      </div>
    </div>
  );
};

export default PosterSection;
