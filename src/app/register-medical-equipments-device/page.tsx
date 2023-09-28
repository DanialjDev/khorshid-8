import RegisterMedicalDevice from "@/components/pages/register-medical-device/RegisterMedicalDevice";
import { getDeviceCategories } from "@/services/common";
import { getTitle } from "@/utills/getTitle";
import React from "react";
import { toast } from "react-hot-toast";

const RegisterMedicalDevicePage = async () => {
  const response = await getDeviceCategories();
  if (response?.message) {
    toast.error(response.message, { duration: 3000 });
  }
  return <RegisterMedicalDevice devices={response?.data} />;
};

export default RegisterMedicalDevicePage;

export const generateMetadata = async () => {
  return {
    title: getTitle("register-medical-equipments-device"),
  };
};
