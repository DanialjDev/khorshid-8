import NormalProfile from "@/components/profile/normal/NormalProfile";
import React from "react";
import { cookies } from "next/headers";
import { useProfileValidation } from "@/utills/validation/profile/validation";
import {
  getProfileCompanyData,
  getUserRegisteredDevices,
} from "@/services/profile/user";

const ProfilePage = async () => {
  console.log("user cookie", cookies().get("token")?.value);
  const response = await getProfileCompanyData(cookies().get("token")?.value!);
  const userDevices = await getUserRegisteredDevices(
    cookies().get("token")?.value!
  );
  console.log(response?.initialValues);
  return (
    <>
      <NormalProfile
        userDevices={userDevices?.data?.data}
        userInfo={response?.initialValues}
        totalPageContain={userDevices?.totalPageContain}
      />
    </>
  );
};

export default ProfilePage;
