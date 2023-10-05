import NormalProfile from "@/components/profile/normal/NormalProfile";
import React from "react";
import { cookies } from "next/headers";
import { useProfileValidation } from "@/utills/validation/profile/validation";
import { getProfileCompanyData } from "@/services/profile/user";

const ProfilePage = async () => {
  console.log("user cookie", cookies().get("token")?.value);
  // if (cookies().get("token")?.value) {
  const response = await getProfileCompanyData(cookies().get("token")?.value!);
  // console.log("user InFo", await useProfileValidation());

  console.log("response", response);
  // }
  return (
    <>
      <NormalProfile userInfo={response?.initialValues} />
    </>
  );
};

export default ProfilePage;
