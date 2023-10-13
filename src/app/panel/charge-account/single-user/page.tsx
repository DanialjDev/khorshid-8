import Button from "@/components/main/button/Button";
import PageTitle from "@/components/main/pageTitle/PageTitle";
import SingleUserData from "@/components/profile/admin/charge-accoun/SingleUserData";
import {
  getSingleUserDevices,
  getSingleUserInfo,
} from "@/services/profile/admin/charge-account";
import { cookies } from "next/headers";
import React from "react";

const SingleUserAccount = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { userId: string | undefined };
}) => {
  const token = cookies().get("token")?.value;
  const userInfo = await getSingleUserInfo(searchParams?.userId!, token!);
  const userDevices = await getSingleUserDevices(searchParams?.userId!, token!);
  console.log(userInfo);
  return (
    <div className="w-full flex flex-col">
      <SingleUserData
        userDevices={userDevices?.data ? userDevices.data : undefined}
        userData={userInfo?.data ? userInfo.data : undefined}
      />
    </div>
  );
};

export default SingleUserAccount;
