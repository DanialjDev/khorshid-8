import PostersContainer from "@/components/profile/admin/posters/PostersContainer";
import { getPanelPosters } from "@/services/profile/admin/posters";
import { cookies } from "next/headers";
import React from "react";

const Posters = async () => {
  const response = await getPanelPosters(cookies().get("token")?.value!);
  return (
    <div className="w-full flex flex-col">
      <PostersContainer
        homeSideBanners={response?.homeSideBanners}
        medicalEquipmentBanners={response?.medicalEquipmentBanners}
        gallery={response?.gallery}
      />
    </div>
  );
};

export default Posters;

export const generateMetadata = async () => {
  return {
    title: "تصاویر و پوستر ها",
  };
};
