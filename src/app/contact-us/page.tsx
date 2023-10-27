import Box from "@/components/main/Box/Box";
import Input from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import Image from "next/image";
import React from "react";

import MapLogo from "../../../public/assets/images/contact-us/map.png";
import { getTitle } from "@/utills/getTitle";
import ContactForm from "@/components/pages/contact-us/ContactForm";

const ContactUs = async () => {
  return (
    <div className="w-full flex h-full flex-col">
      <div className="flex justify-start my-3">
        <p className="text-dark text-[16px]">
          برای ارتباط با ما می توانید فرم زیر را پر کنید.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="w-full lg:col-span-1 col-span-2 h-full">
          <Box border="border border-[#1A1A1A0D]" padding="px-5 pb-6">
            <ContactForm />
          </Box>
        </div>
        <div className="w-full lg:col-span-1 col-span-2">
          <Box border="border border-[#1A1A1A0D]">
            <div className="w-full flex flex-col px-4 py-2 h-full">
              <div className="w-full flex flex-col">
                <p className="text-xl text-dark">آدرس:</p>
                <p className="md:w-[80%] w-full text-[#4E4E4E] text-[16px] mt-5">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها ...
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <p className="text-xl text-dark">شماره تماس:</p>
                <p className="w-full mt-5 text-left text-[#4E4E4E] text-lg">
                  +1202-555-0487
                </p>
              </div>
              <div className="w-full shadow-xs rounded-lg mt-5 overflow-hidden border border-[#CBCBCB]">
                <Image src={MapLogo} alt="آدرس" />
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

export const generateMetadata = async () => {
  return {
    title: getTitle("contact-us"),
  };
};
