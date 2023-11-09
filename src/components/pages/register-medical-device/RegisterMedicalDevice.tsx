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
import ImageInput from "@/components/main/image-input/ImageInput";

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

  const [deviceIds, setDeviceIds] = useState<string[]>([]);
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      // @ts-ignore
      formData.append("Name", values.name);
      // @ts-ignore
      formData.append("Brand", values.brand);
      // @ts-ignore
      formData.append("Country", values.country);
      // @ts-ignore
      formData.append("Image", values.Image);
      // @ts-ignore
      formData.append("OrderedByName", values.OrderedByName);
      // @ts-ignore
      formData.append("OrderedByLastName", values.OrderedByLastName);
      // @ts-ignore
      formData.append("OrderedByMobileNumber", values.OrderedByMobileNumber);
      deviceIds.map((id) => formData.append("CategoryIDs", id));
      const response = await postProfileDevice(formData, Cookies.get("token")!);

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
    },
  });

  return (
    <div className="w-full flex flex-col bg-[#FCFCFC]">
      {!userInfo && (
        <div className="w-full p-3 bg-tableHeadColor rounded-[5px]">
          <p className="text-black">
            کاربر گرامی لطفا برای ثبت دستگاه خود ابتدا وارد پروفایل کاربری شوید
            و سپس اطلاعات کاربری خود را کامل نمایید
          </p>
        </div>
      )}
      <RegisterForm>
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
              disabled
              label="نام و نام خانوادگی مدیر عامل"
              name="companyManagerFullName"
            />
          </div>
          <div className="xl:col-span-1 md:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.faxNumber ? userInfo.faxNumber : ""}
              disabled
              label="فکس"
              name="faxNumber"
            />
          </div>
          <div className="xl:col-span-1 md:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.website ? userInfo.website : ""}
              disabled
              label="وب سایت"
              name="website"
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.mobileNumber ? userInfo.mobileNumber : ""}
              disabled
              label="شماره تماس"
              name="mobileNumber"
            />
          </div>
          <div className="lg:col-span-2 col-span-4">
            <AuthInput
              // @ts-ignore
              value={userInfo.email ? userInfo.email : ""}
              disabled
              label="ایمیل"
              name="email"
            />
          </div>
          <div className="col-span-4">
            <Textarea
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
            <div className="xl:col-span-1 col-span-3">
              <ImageInput
                title="بارگذاری تصویر دستگاه"
                desc="در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت ."
                // @ts-ignore
                setFieldValue={setFieldValue}
                name="Image"
                //@ts-ignore
                touched={touched["Image"]}
                //@ts-ignore
                onChange={handleChange}
                handleBlur={handleBlur}
                //@ts-ignore
                errors={errors["Image"]}
                //@ts-ignore
                value={values.Image}
              />
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
