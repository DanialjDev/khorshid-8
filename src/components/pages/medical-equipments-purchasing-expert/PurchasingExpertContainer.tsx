"use client";

import Box from "@/components/main/Box/Box";
import { CounselorObject } from "@/services/counselor/types";
import Image from "next/image";
import React from "react";
import ContactInput from "./ContactInput";
import Button from "@/components/main/button/Button";
import SectionBox from "../home-page/SectionBox";

import BlueSquare from "../../../../public/assets/images/home-page/blue-square.svg";
import MedicalExpert from "../../../../public/assets/images/medical-expert/medical-expert.svg";

import AccordionContainer from "./accordion/AccordionContainer";
import { useFormik } from "formik";
import useValidation from "@/utills/validation/auth/validation";
import { contactUsPost } from "@/services/contact-us";
import { toast } from "react-toastify";
import {
  InitialValues,
  ValidationSchemaType,
} from "@/utills/validation/auth/types";

const PurchasingExpertContainer = ({
  counselorData,
}: {
  counselorData: CounselorObject;
}) => {
  const [initialValues, validationSchema] = useValidation("contact-us") as [
    InitialValues,
    ValidationSchemaType
  ];

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        console.log(values);
        const response = await contactUsPost(values);
        console.log(response);
        if (response?.message) {
          if (response.status === 200 && response.message) {
            toast.success(response.message, {
              autoClose: 2500,
              style: {
                width: "max-content",
              },
            });
          } else {
            toast.error(response.message, {
              autoClose: 2500,
              style: {
                width: "max-content",
              },
            });
          }
        }
      },
    }
  );
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="w-full">
          <Box>
            <div className="w-full grid grid-cols-12 p-3 h-full">
              {counselorData?.imageUrl && (
                <Image
                  src={counselorData.imageUrl}
                  alt={counselorData.fullName}
                  width={200}
                  height={100}
                  className="m-auto cos-span-3"
                />
              )}
              <div className="flex col-span-9 flex-col text-[16px] justify-between text-dark h-full px-4">
                <p className="text-[16px]">{counselorData?.fullName}</p>
                <p className="my-4 text-[16px]">
                  جایگاه:{" "}
                  <span className="text-primary">
                    {counselorData?.position}
                  </span>
                </p>
                <p className="text-base my-4 text-[#707070] text-[14px]">
                  {counselorData?.comment}
                </p>
                <div className="flex justify-start mt-4">
                  <div className="w-[174px] flex justify-between items-center px-6 py-2 rounded-md text-primary border-2 border-primary bg-primaryLight2                                                                            ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" rx="9" fill="#2C9CF0" />
                      <path
                        d="M16.5469 11.1641C16.5469 7.88487 13.8886 5.22656 10.6094 5.22656C7.33018 5.22656 4.67188 7.88487 4.67188 11.1641C4.67188 12.2457 4.96113 13.2599 5.4665 14.1333L4.67187 17.1016L7.64025 16.307C8.51366 16.8123 9.52774 17.1016 10.6094 17.1016C11.2573 17.1016 11.8811 16.9978 12.4648 16.8059"
                        stroke="white"
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.5156 14.875C19.5156 15.5511 19.3348 16.1849 19.019 16.7308L19.1445 18.2148L17.6603 18.0894C17.1144 18.4052 16.4807 18.5859 15.8047 18.5859C13.7552 18.5859 12.0938 16.9245 12.0938 14.875C12.0938 12.8255 13.7552 11.1641 15.8047 11.1641C17.8542 11.1641 19.5156 12.8255 19.5156 14.875Z"
                        stroke="white"
                        stroke-width="1.125"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p className="text-[14px]">{counselorData?.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <div className="w-full justify-center mt-5">
          <Box>
            <div className="flex flex-col justify-center items-center p-2">
              <div className="flex w-full justify-start">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    stroke="#2C9CF0"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
                    stroke="#2C9CF0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 9C22 5.13 18.87 2 15 2"
                    stroke="#2C9CF0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mr-3 text-dark text-right text-[16px]">
                  ارتباط با کارشناس
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full grid grid-cols-3 gap-5 items-start mt-5"
              >
                <div className="md:col-span-1 col-span-3">
                  <ContactInput
                    errors={errors}
                    handleBlur={handleBlur}
                    onChange={handleChange}
                    touched={touched}
                    name="firstName"
                    placeholder="نام"
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.11992 8.1525C9.04492 8.145 8.95492 8.145 8.87242 8.1525C7.08742 8.0925 5.66992 6.63 5.66992 4.83C5.66992 2.9925 7.15492 1.5 8.99992 1.5C10.8374 1.5 12.3299 2.9925 12.3299 4.83C12.3224 6.63 10.9049 8.0925 9.11992 8.1525Z"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.37004 10.92C3.55504 12.135 3.55504 14.115 5.37004 15.3225C7.43254 16.7025 10.815 16.7025 12.8775 15.3225C14.6925 14.1075 14.6925 12.1275 12.8775 10.92C10.8225 9.5475 7.44004 9.5475 5.37004 10.92Z"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>
                <div className="md:col-span-1 col-span-3">
                  <ContactInput
                    errors={errors}
                    handleBlur={handleBlur}
                    onChange={handleChange}
                    touched={touched}
                    name="lastName"
                    placeholder="نام خانوادگی"
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.55 8.86895C14.4875 7.35644 13.9313 6.0752 12.8813 5.0252C11.8313 3.9752 10.55 3.41895 9.0375 3.35645V2.23145C9.9375 2.25645 10.7844 2.44707 11.5781 2.80332C12.3719 3.15957 13.0688 3.6377 13.6688 4.2377C14.2688 4.8377 14.7469 5.53457 15.1031 6.32832C15.4594 7.12207 15.65 7.96895 15.675 8.86895H14.55ZM11.3813 8.86895C11.3188 8.24395 11.0688 7.71582 10.6313 7.28457C10.1938 6.85332 9.6625 6.60644 9.0375 6.54394V5.41895C9.975 5.48145 10.7719 5.8377 11.4281 6.4877C12.0844 7.13769 12.4438 7.93145 12.5063 8.86895H11.3813ZM14.9063 15.7502C13.3813 15.7502 11.8656 15.3752 10.3594 14.6252C8.85313 13.8752 7.5 12.9002 6.3 11.7002C5.1 10.5002 4.125 9.14707 3.375 7.64082C2.625 6.13457 2.25 4.61895 2.25 3.09395C2.25 2.85287 2.33036 2.65198 2.49107 2.49126C2.65178 2.33055 2.85268 2.2502 3.09375 2.2502H5.71875C5.88889 2.2502 6.0408 2.30957 6.17449 2.42832C6.30816 2.54707 6.39375 2.70645 6.43125 2.90645L6.9375 5.26895C6.9625 5.44395 6.95938 5.60332 6.92813 5.74707C6.89688 5.89082 6.83125 6.0127 6.73125 6.11269L4.85625 8.00644C5.55625 9.16894 6.34063 10.1814 7.20938 11.0439C8.07812 11.9064 9.0625 12.6377 10.1625 13.2377L11.9438 11.4002C12.0688 11.2627 12.2125 11.1658 12.375 11.1096C12.5375 11.0533 12.7 11.0439 12.8625 11.0814L15.0938 11.5689C15.2852 11.6111 15.4424 11.7061 15.5654 11.8537C15.6885 12.0014 15.75 12.1752 15.75 12.3752V14.9064C15.75 15.1475 15.6696 15.3484 15.5089 15.5091C15.3482 15.6698 15.1473 15.7502 14.9063 15.7502ZM4.29375 6.97519L5.8125 5.4377L5.38125 3.3752H3.375C3.375 3.8627 3.45 4.39707 3.6 4.97832C3.75 5.55957 3.98125 6.2252 4.29375 6.97519ZM11.2125 13.7814C11.725 14.0189 12.2812 14.2127 12.8813 14.3627C13.4813 14.5127 14.0625 14.6002 14.625 14.6252V12.6189L12.6938 12.2252L11.2125 13.7814Z"
                          fill="#2C9CF0"
                        />
                      </svg>
                    }
                  />
                </div>
                <div className="md:col-span-1 col-span-3">
                  <ContactInput
                    errors={errors}
                    handleBlur={handleBlur}
                    onChange={handleChange}
                    touched={touched}
                    name="phoneNumber"
                    placeholder="شماره تماس"
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5001 5.37C13.4551 5.3625 13.4026 5.3625 13.3576 5.37C12.3226 5.3325 11.4976 4.485 11.4976 3.435C11.4976 2.3625 12.3601 1.5 13.4326 1.5C14.5051 1.5 15.3676 2.37 15.3676 3.435C15.3601 4.485 14.5351 5.3325 13.5001 5.37Z"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.7276 10.8301C13.7551 11.0026 14.8876 10.8226 15.6826 10.2901C16.7401 9.58512 16.7401 8.43012 15.6826 7.72512C14.8801 7.19262 13.7326 7.01262 12.7051 7.19262"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.47761 5.37C4.52261 5.3625 4.57511 5.3625 4.62011 5.37C5.65511 5.3325 6.48011 4.485 6.48011 3.435C6.48011 2.3625 5.61761 1.5 4.54511 1.5C3.47261 1.5 2.61011 2.37 2.61011 3.435C2.61761 4.485 3.44261 5.3325 4.47761 5.37Z"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.25008 10.8301C4.22258 11.0026 3.09008 10.8226 2.29508 10.2901C1.23758 9.58512 1.23758 8.43012 2.29508 7.72512C3.09758 7.19262 4.24508 7.01262 5.27258 7.19262"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.00006 10.9725C8.95506 10.965 8.90256 10.965 8.85756 10.9725C7.82256 10.935 6.99756 10.0875 6.99756 9.03754C6.99756 7.96504 7.86006 7.10254 8.93256 7.10254C10.0051 7.10254 10.8676 7.97254 10.8676 9.03754C10.8601 10.0875 10.0351 10.9425 9.00006 10.9725Z"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.81754 13.335C5.76004 14.04 5.76004 15.195 6.81754 15.9C8.01754 16.7025 9.98254 16.7025 11.1825 15.9C12.24 15.195 12.24 14.04 11.1825 13.335C9.99004 12.54 8.01754 12.54 6.81754 13.335Z"
                          stroke="#2C9CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>
                <div className="col-span-3">
                  <ContactInput
                    errors={errors}
                    handleBlur={handleBlur}
                    onChange={handleChange}
                    touched={touched}
                    name="comment"
                    placeholder="متن پیام"
                    rows={5}
                    isTextarea
                    icon={
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5001 5.37C13.4551 5.3625 13.4026 5.3625 13.3576 5.37C12.3226 5.3325 11.4976 4.485 11.4976 3.435C11.4976 2.3625 12.3601 1.5 13.4326 1.5C14.5051 1.5 15.3676 2.37 15.3676 3.435C15.3601 4.485 14.5351 5.3325 13.5001 5.37Z"
                          stroke="#2C9CF0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.7276 10.8301C13.7551 11.0026 14.8876 10.8226 15.6826 10.2901C16.7401 9.58512 16.7401 8.43012 15.6826 7.72512C14.8801 7.19262 13.7326 7.01262 12.7051 7.19262"
                          stroke="#2C9CF0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.47736 5.37C4.52236 5.3625 4.57486 5.3625 4.61986 5.37C5.65486 5.3325 6.47986 4.485 6.47986 3.435C6.47986 2.3625 5.61736 1.5 4.54486 1.5C3.47236 1.5 2.60986 2.37 2.60986 3.435C2.61736 4.485 3.44236 5.3325 4.47736 5.37Z"
                          stroke="#2C9CF0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.25008 10.8301C4.22258 11.0026 3.09008 10.8226 2.29508 10.2901C1.23758 9.58512 1.23758 8.43012 2.29508 7.72512C3.09758 7.19262 4.24508 7.01262 5.27258 7.19262"
                          stroke="#2C9CF0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.00006 10.9725C8.95506 10.965 8.90256 10.965 8.85756 10.9725C7.82256 10.935 6.99756 10.0875 6.99756 9.03754C6.99756 7.96504 7.86006 7.10254 8.93256 7.10254C10.0051 7.10254 10.8676 7.97254 10.8676 9.03754C10.8601 10.0875 10.0351 10.9425 9.00006 10.9725Z"
                          stroke="#2C9CF0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.81754 13.335C5.76004 14.04 5.76004 15.195 6.81754 15.9C8.01754 16.7025 9.98254 16.7025 11.1825 15.9C12.24 15.195 12.24 14.04 11.1825 13.335C9.99004 12.54 8.01754 12.54 6.81754 13.335Z"
                          stroke="#2C9CF0"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>
                <Button
                  type="submit"
                  text="ثبت درخواست"
                  color="text-white"
                  width="w-[180px]"
                  hover="hover:bg-btnPrimaryHover"
                />
              </form>
            </div>
          </Box>
        </div>
      </div>
      <div className="w-full mt-20">
        <SectionBox
          SquareLogo={
            <Image
              className="absolute right-8 z-40 top-1"
              src={BlueSquare}
              alt=""
            />
          }
          title={
            <p className="text-primary text-[26px] p-2 bg-white-gray z-30">
              سوالات متداول
            </p>
          }
        >
          <div className="w-full items-center justify-between gap-3 grid grid-cols-11 mt-10">
            <div className="w-full md:col-span-6 col-span-11">
              <AccordionContainer />
            </div>
            <div className="w-full col-span-4">
              <Image
                width={400}
                height={400}
                src={MedicalExpert}
                className="mr-auto ml-4 md:flex hidden"
                alt=""
              />
            </div>
          </div>
        </SectionBox>
      </div>
    </div>
  );
};

export default PurchasingExpertContainer;
