import React from "react";
import Image from "next/image";
import Box from "@/components/main/Box/Box";
import SectionBox from "@/components/pages/home-page/SectionBox";
import ContactInput from "@/components/pages/medical-equipments-purchasing-expert/ContactInput";
import { getTitle } from "@/utills/getTitle";
import AccordionContainer from "@/components/pages/medical-equipments-purchasing-expert/accordion/AccordionContainer";

import BlueSquare from "../../../public/assets/images/home-page/blue-square.svg";
import MedicalExpert from "../../../public/assets/images/medical-expert/medical-expert.svg";
import { getCounselorData } from "@/services/counselor";
import { toast } from "react-hot-toast";
import Button from "@/components/main/button/Button";
import PurchasingExpertContainer from "@/components/pages/medical-equipments-purchasing-expert/PurchasingExpertContainer";

const MedicalEquipmentsPurchasingExpert = async () => {
  const counselorData = await getCounselorData();
  if (counselorData?.message) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-lg text-gray">
        {counselorData.message}
      </div>
    );
  }
  return <PurchasingExpertContainer counselorData={counselorData?.object!} />;
};

export default MedicalEquipmentsPurchasingExpert;

export const generateMetadata = async () => {
  return {
    title: getTitle("medical-equipments-purchasing-expert"),
  };
};
