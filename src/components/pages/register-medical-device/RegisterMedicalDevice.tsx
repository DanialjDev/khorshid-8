"use client";

import React, { useState } from "react";
import RegisterForm from "@/components/pages/register-medical-device/RegisterForm";
import useValidation from "@/utills/validation/auth/validation";
import {
  InitialValues,
  ValidationSchemaType,
} from "@/utills/validation/auth/types";
import { ErrorMessage, useField, useFormik } from "formik";
import AuthInput from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import { DeviceName } from "@/services/common/types";
import DeviceCategory from "./DeviceCategory";
import { imageValidation } from "@/utills/imageValidation";
import { postProfileDevice } from "@/services/profile/user";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const RegisterMedicalDevice = ({
  devices,
  userInfo,
}: {
  devices: DeviceName[] | undefined;
  userInfo: InitialValues;
}) => {
  const [initialValues, validationSchema] = useValidation(
    "register-medical-device"
  ) as [InitialValues, ValidationSchemaType];
  const [checked, setChecked] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [deviceIds, setDeviceIds] = useState<string[]>([]);
  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const formData = new FormData();

        // @ts-ignore
        formData.append("Name", values.companyName);
        // @ts-ignore
        formData.append("Brand", values.companyManagerFullName);
        // @ts-ignore
        formData.append("Country", values.country);
        // @ts-ignore
        formData.append("Image", file);
        // @ts-ignore
        formData.append("OrderedByName", values.OrderedByName);
        // @ts-ignore
        formData.append("OrderedByLastName", values.OrderedByLastName);
        // @ts-ignore
        formData.append("OrderedByMobileNumber", values.OrderedByMobileNumber);
        deviceIds.map((id) => formData.append("CategoryIDs", id));
        const response = await postProfileDevice(
          formData,
          Cookies.get("token")!
        );

        if (response?.status === 200) {
          toast.success(response.message, {
            autoClose: 2500,
            style: {
              width: "max-content",
            },
          });
        } else {
          toast.error(response?.message, {
            autoClose: 2500,
            style: {
              width: "max-content",
            },
          });
        }
        console.log(response);
      },
    });

  console.log(deviceIds);

  return (
    <div className="w-full flex flex-col bg-[#FCFCFC]">
      <RegisterForm title="لطفا برای ثبت شرکت خود فرم زیر را تکمیل کنید.">
        <div className="w-full grid grid-cols-4 gap-5">
          <div className="xl:col-span-1 md:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.companyName ? userInfo.companyName : ""}
              disabled
              label="نام کامل شرکت"
              name="companyName"
            />
          </div>
          <div className="xl:col-span-1 md:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={
                // @ts-ignore
                userInfo.companyManagerFullName
                  ? // @ts-ignore
                    userInfo.companyManagerFullName
                  : ""
              }
              // errors={errors}
              // handleBlur={handleBlur}
              // onChange={handleChange}
              // touched={touched}
              disabled
              label="نام و نام خانوادگی مدیر عامل"
              name="companyManagerFullName"
            />
          </div>
          <div className="xl:col-span-1 md:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.faxNumber ? userInfo.faxNumber : ""}
              // errors={errors}
              // handleBlur={handleBlur}
              // onChange={handleChange}
              // touched={touched}
              disabled
              label="فکس"
              name="faxNumber"
            />
          </div>
          <div className="xl:col-span-1 md:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.website ? userInfo.website : ""}
              // errors={errors}
              // handleBlur={handleBlur}
              // onChange={handleChange}
              // touched={touched}
              disabled
              label="وب سایت"
              name="website"
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.mobileNumber ? userInfo.mobileNumber : ""}
              // errors={errors}
              // handleBlur={handleBlur}
              // onChange={handleChange}
              // touched={touched}
              disabled
              label="شماره تماس"
              name="mobileNumber"
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.email ? userInfo.email : ""}
              // errors={errors}
              // handleBlur={handleBlur}
              // onChange={handleChange}
              // touched={touched}
              disabled
              label="ایمیل"
              name="email"
            />
          </div>
          <div className="col-span-4">
            <Textarea
              // errors={errors}
              // handleBlur={handleBlur}
              // onChange={handleChange}
              // touched={touched}
              disabled
              label="آدرس شرکت"
              name="address"
              // @ts-ignore
              value={userInfo.address ? userInfo.address : ""}
            />
          </div>
        </div>
      </RegisterForm>

      {/* Register Device Type */}
      <form onSubmit={handleSubmit}>
        <RegisterForm
          isRequired
          title="لطفا برای ثبت نوع دستگاه خود  را انتخاب کنید."
        >
          <div className="w-full flex p-3 flex-col">
            <div className="w-full flex-wrap flex-grow flex items-center">
              {devices &&
                devices.map(({ categoryName, id }) => (
                  <DeviceCategory
                    deviceIds={deviceIds}
                    setDeviceIds={setDeviceIds}
                    id={id}
                    key={id}
                    text={categoryName}
                  />
                ))}
            </div>
          </div>
        </RegisterForm>

        {/* Device Information */}
        <RegisterForm title="مشخصات دستگاه">
          <div className="grid grid-cols-3 gap-5 lg:px-8 px-0 pb-2">
            <div className="xl:col-span-1 col-span-3">
              <AuthInput
                // @ts-ignore
                value={values.name}
                errors={errors}
                handleBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                label="نام دستگاه"
                name="name"
                isRequired
              />
            </div>
            <div className="xl:col-span-1 col-span-3">
              <AuthInput
                // @ts-ignore
                value={values.brand}
                errors={errors}
                handleBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                label="مارک دستگاه"
                name="brand"
                isRequired
              />
            </div>
            <div className="xl:col-span-1 col-span-3">
              <AuthInput
                // @ts-ignore

                value={values.country}
                errors={errors}
                handleBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                label="کشور سازنده"
                name="country"
                isRequired
              />
            </div>
            <div className="2xl:col-span-1 xl:col-span-2 col-span-3 h-full">
              <div
                className={`grid grid-cols-9 gap-5 w-full ${
                  // @ts-ignore
                  errors["Image"] && touched["Image"]
                    ? "border border-borderError"
                    : ""
                } shadow-xs rounded-lg p-4 h-[120px]`}
              >
                <div className="flex flex-col md:col-span-7 col-span-6 justify-between h-full">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex ">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.7369 0.761748H5.08489C3.00489 0.753748 1.30089 2.41075 1.25089 4.49075V15.2277C1.20589 17.3297 2.87389 19.0697 4.97489 19.1147C5.01189 19.1147 5.04889 19.1157 5.08489 19.1147H13.0729C15.1629 19.0407 16.8149 17.3187 16.8029 15.2277V6.03775L11.7369 0.761748Z"
                          stroke="#060607"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.4746 0.75V3.659C11.4746 5.079 12.6236 6.23 14.0436 6.234H16.7976"
                          stroke="#060607"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.64062 7.90869V13.9497"
                          stroke="#060607"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.9869 10.2642L8.64188 7.90918L6.29688 10.2642"
                          stroke="#060607"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mr-2 text-dark lg:text-[16px] md:text-[14px]">
                        بارگذاری تصویر دستگاه
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="flex justify-center items-center md:p-2 p-1 border border-[#E21414] rounded-md bg-[#f6e1e1]"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.5 6.97738C20.615 6.59238 16.7067 6.39404 12.81 6.39404C10.5 6.39404 8.19 6.51071 5.88 6.74404L3.5 6.97738"
                          stroke="#E21414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.91699 5.7985L10.1737 4.27016C10.3603 3.16183 10.5003 2.3335 12.472 2.3335H15.5287C17.5003 2.3335 17.652 3.2085 17.827 4.28183L18.0837 5.7985"
                          stroke="#E21414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
                          stroke="#E21414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.0518 19.25H15.9368"
                          stroke="#E21414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.083 14.5835H16.9163"
                          stroke="#E21414"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full text-[#979797] lg:text-base text-sm">
                    {!file ? (
                      <p>در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت .</p>
                    ) : (
                      <p className="text-secondary">تصویر بارگذاری شد</p>
                    )}
                  </div>
                </div>
                <div className="md:col-span-2 col-span-3 h-full cursor-pointer">
                  <label
                    htmlFor="inputFile"
                    className={`w-full rounded-md cursor-pointer flex justify-center items-center border-2 ${
                      file
                        ? "bg-[#F0F0F0] border-secondary"
                        : "bg-[#eceff6] border-primary"
                    }  border-dashed h-full `}
                  >
                    {/* @ts-ignore */}
                    {!file ? (
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 13.5V22.5M22.5 18H13.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                          stroke="#0044FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.9993 29.3332C23.3327 29.3332 29.3327 23.3332 29.3327 15.9998C29.3327 8.6665 23.3327 2.6665 15.9993 2.6665C8.66602 2.6665 2.66602 8.6665 2.66602 15.9998C2.66602 23.3332 8.66602 29.3332 15.9993 29.3332Z"
                          fill="white"
                          fill-opacity="0.15"
                          stroke="#54E346"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.334 15.9999L14.1073 19.7732L21.6673 12.2266"
                          stroke="#54E346"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    )}
                    <input
                      accept=".png"
                      type="file"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        if (e.target.files) {
                          setFile(e.target.files[0]);
                        }
                        console.log(e.target.value);
                        handleChange(e);
                        imageValidation(e);
                      }}
                      className="hidden"
                      name="Image"
                      id="inputFile"
                    />
                  </label>
                </div>
              </div>
              {/* @ts-ignore */}
              {!file ? (
                // @ts-ignore
                <p className="text-borderError mt-2">{errors["Image"]}</p>
              ) : null}
            </div>
          </div>
        </RegisterForm>
        {/* Customer Informatoin */}
        <RegisterForm title="اطلاعات سفارش دهنده">
          <div className="w-full grid grid-cols-3 gap-5 px-8">
            <div className="col-span-1">
              <AuthInput
                // @ts-ignore
                value={values.OrderedByName}
                errors={errors}
                handleBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                label="نام سفارش دهنده"
                isRequired
                name="OrderedByName"
              />
            </div>
            <div className="col-span-1">
              <AuthInput
                // @ts-ignore
                value={values.OrderedByLastName}
                errors={errors}
                handleBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                label="نام خانوادگی سفارش دهنده"
                isRequired
                name="OrderedByLastName"
              />
            </div>
            <div className="col-span-1">
              <AuthInput
                // @ts-ignore
                value={values.OrderedByMobileNumber}
                errors={errors}
                handleBlur={handleBlur}
                onChange={handleChange}
                touched={touched}
                label="شماره تماس سفارش دهنده"
                isRequired
                name="OrderedByMobileNumber"
              />
            </div>
          </div>
        </RegisterForm>
        <div className="w-full flex justify-start relative">
          <div dir="ltr" className="relative">
            <input
              id="registerDeviceCheckbox"
              name="registerDeviceCheckbox"
              type="checkbox"
              className="checkbox-accent checkbox cursor-pointer bg-none"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </div>
          <label
            htmlFor="registerDeviceCheckbox"
            className="mr-2 cursor-pointer"
          >
            مسئولیت ثبت سفارش محصول به عهده شخص یا شرکت ثبت کننده می باشد.
          </label>
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <div className="w-[350px] py-2">
            <button
              disabled={!checked}
              type="submit"
              className="w-full text-lg py-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-md bg-primary flex justify-center text-white"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  fill="white"
                  fill-opacity="0.15"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="mr-2">ارسال فرم</p>
            </button>
          </div>
        </div>
      </form>

      <div className="w-full border-t border-[#CBCBCB] mt-5 pt-4">
        <div className="w-full flex justify-start items-center">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z"
              fill="#E21414"
              fill-opacity="0.1"
              stroke="#E21414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 8.5V13.5"
              stroke="#E21414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9941 16.5H12.0031"
              stroke="#E21414"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="mr-2 text-dark">
            برای ثبت دستگاه در سایت منتظر تایید ما باشید.
          </p>
        </div>
      </div>
    </div>
  );

  // return <div>sdfsdf</div>;
};

export default RegisterMedicalDevice;
