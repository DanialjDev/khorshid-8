import React from "react";
import Image from "next/image";
import Box from "@/components/main/Box/Box";
import { getTitle } from "@/utills/getTitle";

import { getCounselorData } from "@/services/counselor";
import PurchasingExpertContainer from "@/components/pages/medical-equipments-purchasing-expert/PurchasingExpertContainer";
import { postPageView } from "@/services/common";
import { headers } from "next/headers";

const MedicalEquipmentsPurchasingExpert = async () => {
  await postPageView(headers().get("x-invoke-path")!);
  const counselorData = await getCounselorData();
  if (counselorData?.message) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-lg text-gray">
        {counselorData.message}
      </div>
    );
  }
  return (
    <PurchasingExpertContainer>
      <div className="w-full">
        <Box>
          <div className="grid grid-cols-12 p-3">
            {counselorData?.object && (
              <Image
                src={counselorData.object.imageUrl}
                alt={counselorData.object.fullName}
                width={300}
                height={200}
                className="m-auto md:col-span-2 sm:col-span-3 col-span-12"
                style={{
                  width: "300px",
                  height: "200px",
                }}
                unoptimized
              />
            )}
            <div className="flex md:col-span-10 sm:col-span-9 col-span-12 flex-col text-[16px] justify-between text-dark h-full px-4">
              <p className="text-[16px]">{counselorData?.object?.fullName}</p>
              <p className="my-4 text-[16px]">
                جایگاه:{" "}
                <span className="text-primary">
                  {counselorData?.object?.position}
                </span>
              </p>
              <p className="text-base my-4 text-[#707070] text-[14px]">
                {counselorData?.object?.comment}
              </p>
              <div className="flex justify-start mt-4">
                <div className="w-[174px] flex justify-between items-center px-6 py-2 rounded-md text-primary border-2 border-primary bg-primaryLight2                                                                            ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="9" fill="#2C9CF0" />
                    <path
                      d="M16.5469 11.1641C16.5469 7.88487 13.8886 5.22656 10.6094 5.22656C7.33018 5.22656 4.67188 7.88487 4.67188 11.1641C4.67188 12.2457 4.96113 13.2599 5.4665 14.1333L4.67187 17.1016L7.64025 16.307C8.51366 16.8123 9.52774 17.1016 10.6094 17.1016C11.2573 17.1016 11.8811 16.9978 12.4648 16.8059"
                      stroke="white"
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5156 14.875C19.5156 15.5511 19.3348 16.1849 19.019 16.7308L19.1445 18.2148L17.6603 18.0894C17.1144 18.4052 16.4807 18.5859 15.8047 18.5859C13.7552 18.5859 12.0938 16.9245 12.0938 14.875C12.0938 12.8255 13.7552 11.1641 15.8047 11.1641C17.8542 11.1641 19.5156 12.8255 19.5156 14.875Z"
                      stroke="white"
                      stroke-width="1.125"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <a
                    href={`tel:${counselorData?.object?.phoneNumber}`}
                    className="text-[14px]"
                  >
                    {counselorData?.object?.phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </PurchasingExpertContainer>
  );
};

export default MedicalEquipmentsPurchasingExpert;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-purchasing-expert"),
  };
};
