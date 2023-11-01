import SingelVicePresidnetForm from "@/components/profile/admin/medical-equipments-list/forms/SingelVicePresidnetForm";
import { getSingleVicePresidentOfTreatments } from "@/services/profile/admin/medical-equipments-list/vice-president";
import { cookies } from "next/headers";
import React from "react";

const SingleVicePresidentOfTreatments = async ({
  params,
}: {
  params: { id: string };
}) => {
  const getSingleVicePresident = await getSingleVicePresidentOfTreatments(
    params.id,
    cookies().get("token")?.value!
  );

  return (
    <SingelVicePresidnetForm
      title="تلفن و نام معاونت درمانی دانشگاه های علوم پزشکی"
      desc="شما می توانید تلفن و نام معاونت درمانی دانشگاه های علوم پزشکی ( کتاب ) را در اینجا به صورت دستی اصلاح یا حذف کنید."
      data={
        getSingleVicePresident?.payload ? getSingleVicePresident.payload : null
      }
    />
  );
};

export default SingleVicePresidentOfTreatments;
