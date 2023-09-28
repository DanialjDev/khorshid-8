import NormalProfile from "@/components/profile/normal/NormalProfile";
import React from "react";
import { cookies } from "next/headers";

const ProfilePage = () => {
  console.log("user cookie", cookies().get("user")?.value);
  return (
    <>
      <NormalProfile />
    </>
  );
};

export default ProfilePage;
