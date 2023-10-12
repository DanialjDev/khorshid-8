import PostersContainer from "@/components/profile/admin/posters/PostersContainer";
import { getPanelPosters } from "@/services/profile/admin/posters";
import {
  Gallery,
  HomeSideBanners,
  MedicalEquipmentBanners,
} from "@/services/profile/admin/posters/types";
import { cookies } from "next/headers";
import React from "react";

const Posters = async () => {
  const response = await getPanelPosters(cookies().get("token")?.value!);
  return (
    <div className="max-w-[1500px] flex flex-col">
      <PostersContainer
        homeSideBanners={response?.homeSideBanners}
        medicalEquipmentBanners={response?.medicalEquipmentBanners}
        gallery={response?.gallery}
      />
    </div>
  );
};

export default Posters;
