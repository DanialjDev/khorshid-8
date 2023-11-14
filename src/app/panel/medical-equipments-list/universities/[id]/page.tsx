import SingleUniversity from "@/components/profile/admin/medical-equipments-list/forms/SingleUniversity";
import { getSingleUniversity } from "@/services/profile/admin/medical-equipments-list/universities";
import { cookies } from "next/headers";
import React from "react";

const SingleUniversityPage = async ({ params }: { params: { id: string } }) => {
  const singleUniversity = await getSingleUniversity(
    params.id,
    cookies().get("token")?.value!
  );

  return (
    <SingleUniversity
      title="سایت دانشگاه های علوم پزشکی"
      desc={
        singleUniversity?.payload !== null
          ? "شما می توانید سایت دانشگاه های علوم پزشکی ( کتاب ) را در اینجا به صورت دستی اصلاح با حذف  کنید."
          : "شما می توانید سایت دانشگاه های علوم پزشکی ( کتاب ) را در اینجا به صورت دستی وارد کنید."
      }
      data={singleUniversity?.payload ? singleUniversity.payload : null}
    />
  );
};

export default SingleUniversityPage;

export const generateMetadata = async () => {
  return {
    title: "سایت دانشگاه های علوم پزشکی",
  };
};
