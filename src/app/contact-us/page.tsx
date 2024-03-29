import Box from "@/components/main/Box/Box";
import Input from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import Image from "next/image";
import React from "react";

import MapLogo from "../../../public/assets/images/contact-us/map.png";
import { getTitle } from "@/utills/getTitle";
import ContactForm from "@/components/pages/contact-us/ContactForm";
import Map from "@/components/pages/contact-us/Map";

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
                  خیابان شریعتی؛بالاتر از طالقانی؛پلاک 183 واحد 9
                </p>
              </div>
              <div className="flex flex-col mt-5">
                <p className="text-xl text-dark">شماره تماس:</p>
                <div className="w-full flex justify-between items-center mt-5 text-left text-[#4E4E4E] text-lg">
                  <p
                    style={{
                      direction: "ltr",
                    }}
                    className=""
                  >
                    021 - 77653700
                  </p>
                  <p
                    style={{
                      direction: "ltr",
                    }}
                    className=""
                  >
                    021 - 77653701
                  </p>
                  <p
                    style={{
                      direction: "ltr",
                    }}
                    className=""
                  >
                    021 - 77653702
                  </p>
                </div>
              </div>
              <div className="w-full shadow-xs rounded-lg mt-5 overflow-hidden border border-[#CBCBCB]">
                <Map />
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
