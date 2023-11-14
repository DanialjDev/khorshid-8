import PageTitle from "@/components/main/pageTitle/PageTitle";
import PosterBox from "@/components/profile/admin/posters/PosterBox";
import { getPanelPosters } from "@/services/profile/admin/posters";
import { getMedicalEquipmentsRoutes } from "@/utills/formatHelper";
import { cookies } from "next/headers";
import React from "react";

const MedicalEquipmentsList = async () => {
  const response = await getPanelPosters(cookies().get("token")?.value!);
  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="لیست تجهیزات پزشکی"
        text="شما می توانید لیست تجهیزات پزشکی ( کتاب ) را در اینجا مشاهده کنید."
      />
      <div className="w-full grid grid-cols-6 gap-8 mt-5">
        {response &&
          response.medicalEquipmentBanners &&
          response.medicalEquipmentBanners.map((item) => (
            <div className="w-full col-span-2" key={item.bannerId}>
              <PosterBox
                href={getMedicalEquipmentsRoutes(item.bannerId)}
                id={item.bannerId}
                title={item.name}
                icon={
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_349_9761)">
                      <path
                        d="M33.3272 14.7033C31.4785 7.33865 24.0097 2.86711 16.6451 4.71581C10.8898 6.16057 6.71076 11.1348 6.28018 17.053C2.19368 17.7269 -0.572818 21.5859 0.101093 25.6724C0.700168 29.3054 3.8481 31.966 7.53005 31.9513H13.7794V29.4516H7.53005C4.76894 29.4516 2.53059 27.2133 2.53059 24.4522C2.53059 21.6911 4.76894 19.4527 7.53005 19.4527C8.22036 19.4527 8.77991 18.8932 8.77991 18.2028C8.77366 11.9903 13.8049 6.949 20.0174 6.94283C25.3953 6.93744 30.0247 10.7394 31.065 16.0156C31.115 16.2725 31.2445 16.5072 31.4351 16.6866C31.6257 16.866 31.8679 16.9811 32.1274 17.0155C35.5443 17.5021 37.9198 20.6665 37.4333 24.0834C36.9964 27.1516 34.3766 29.4362 31.2774 29.4516H26.278V31.9513H31.2774C36.1094 31.9367 40.0146 28.0078 39.9999 23.1758C39.9877 19.1536 37.2346 15.6578 33.3272 14.7033Z"
                        fill="#1A1A1A"
                        fill-opacity="0.8"
                      />
                      <path
                        d="M19.1411 19.8156L14.1416 24.8151L15.9039 26.5774L18.7786 23.7152V35.7014H21.2783V23.7152L24.1405 26.5774L25.9028 24.8151L20.9034 19.8156C20.4158 19.331 19.6286 19.331 19.1411 19.8156Z"
                        fill="#1A1A1A"
                        fill-opacity="0.8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_349_9761">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MedicalEquipmentsList;

export const generateMetadata = async () => {
  return {
    title: "لیست تجهیزات پزشکی",
  };
};
