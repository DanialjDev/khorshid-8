import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
import { getStates } from "@/services/common";
import { getMedicalEquipments } from "@/services/profile/admin/medical-equipments-list";
import { cookies } from "next/headers";
import React from "react";

const DeansOfUniversities = async () => {
  const getDeansOfUni = await getMedicalEquipments(
    "GetDeansOfUniversities",
    null,
    cookies().get("token")?.value!,
    undefined
  );
  const states = await getStates();
  return (
    <AllEquipmentsInfo
      deviceInfo={getDeansOfUni?.payload ? getDeansOfUni.payload : null}
      headerType="GetDeansOfUniversities"
      url="GetDeansOfUniversities"
      postUrl="deans-of-universities"
      removeUrl="RemoveDeanOfUniversities"
      title=" نام و تلفن ریاست دانشگاه های علوم پزشکی "
      desc="شما می توانید نام و تلفن ریاست دانشگاه های علوم پزشکی  ( کتاب ) را در اینجا مشاهده کنید."
      states={states ? states.data : null}
      postListUrl="PostListDeanOfUniversities"
    />
  );
};

export default DeansOfUniversities;

export const generateMetadata = async () => {
  return {
    title: "نام و تلفن ریاست دانشگاه های علوم پزشکی",
  };
};
