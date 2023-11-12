import NormalProfile from "@/components/profile/normal/NormalProfile";
import React from "react";
import { cookies } from "next/headers";
import {
  getProfileCompanyData,
  getUserRegisteredDevices,
  getUserRemainingDevices,
} from "@/services/profile/user";

const ProfilePage = async () => {
  const response = await getProfileCompanyData(cookies().get("token")?.value!);
  const userDevices = await getUserRegisteredDevices(
    cookies().get("token")?.value!
  );

  const remainDeviceNumber = await getUserRemainingDevices(
    cookies().get("token")?.value!
  );
  return (
    <>
      <NormalProfile
        userDevices={userDevices?.data?.data}
        userInfo={response?.initialValues}
        totalPageContain={userDevices?.totalPageContain}
        remainingDevices={
          remainDeviceNumber?.remainingDevices
            ? remainDeviceNumber.remainingDevices
            : null
        }
      />
    </>
  );
};

export default ProfilePage;

export const generateMetadata = async () => {
  return {
    title: "پروفایل",
  };
};
