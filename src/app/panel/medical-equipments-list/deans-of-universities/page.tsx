import AllEquipmentsInfo from "@/components/profile/admin/medical-equipments-list/AllEquipmentsInfo";
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
  return (
    <AllEquipmentsInfo
      deviceInfo={getDeansOfUni?.payload ? getDeansOfUni.payload : null}
      headerType="GetDeansOfUniversities"
      url="GetDeansOfUniversities"
      postUrl="deans-of-universities"
      removeUrl="RemoveDeanOfUniversities"
      title=" نام و تلفن ریاست دانشگاه های علوم پزشکی "
      desc="شما می توانید نام و تلفن ریاست دانشگاه های علوم پزشکی  ( کتاب ) را در اینجا مشاهده کنید."
    />
  );
};

export default DeansOfUniversities;
