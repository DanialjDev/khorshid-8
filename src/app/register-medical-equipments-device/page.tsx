import RegisterMedicalDevice from "@/components/pages/register-medical-device/RegisterMedicalDevice";
import { getDeviceCategories } from "@/services/common";
import { getProfileCompanyData } from "@/services/profile/user";
import { getTitle } from "@/utills/getTitle";
import { cookies } from "next/headers";
import React from "react";
import { toast } from "react-hot-toast";

const RegisterMedicalDevicePage = async () => {
  const response = await getDeviceCategories();
  if (response?.message) {
    toast.error(response.message, { duration: 3000 });
  }

  const managerInfo = await getProfileCompanyData(
    cookies().get("token")?.value!,
    "registerDevice"
  );
  console.log("managerInfo", managerInfo);
  return (
    <RegisterMedicalDevice
      userInfo={managerInfo?.initialValues!}
      devices={response?.data}
    />
  );
};

export default RegisterMedicalDevicePage;

export const generateMetadata = async () => {
  return {
    title: getTitle("register-medical-equipments-device"),
  };
};
