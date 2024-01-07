"use client";

import FormButton from "@/components/main/button/FormButton";
import AuthInput from "@/components/main/input/AuthInput";
import { updateProfileCompanyData } from "@/services/profile/user";
import { InitialValues } from "@/utills/validation/auth/types";
import { useFormik } from "formik";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup";
import { isMobile, isNumeric, isUrl } from "@/utills/formatHelper";

const UserInfo = ({ userInfo }: { userInfo: InitialValues | undefined }) => {
  const [showIcon, setShowIcon] = useState(false);

  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: userInfo
        ? userInfo
        : {
            companyName: "",
            companyManagerFullName: "",
            address: "",
            website: "",
            email: "",
            faxNumber: "",
            mobileNumber: "",
            password: "",
            confirmPassword: "",
          },
      validationSchema: Yup.object().shape({
        companyName: Yup.string().required("پرکردن این فیلد الزامی میباشد"),
        companyManagerFullName: Yup.string().required(
          "پرکردن این فیلد الزامی میباشد"
        ),
        faxNumber: Yup.string()
          .required("پرکردن این فیلد الزامی میباشد")
          .test("isNumeric", "شماره فکس وارد شده نامعتبر است", (value) => {
            if (value && value.length > 0) {
              return isNumeric(value);
            }
          }),
        website: Yup.string()
          .required("پرکردن این فیلد الزامی میباشد")
          .test("isUrl", "آدرس سایت وارد شده نامعتبر است", (value) => {
            if (value && value.length > 0) {
              return Boolean(isUrl(value));
            }
          }),
        mobileNumber: Yup.string()
          .required("پرکردن این فیلد الزامی میباشد")
          .test("isMobile", "شماره تلفن وارد شده نادرست است", (value) => {
            if (value && value.length > 0) {
              return isMobile(value);
            }
          }),
        email: Yup.string()
          .required("پرکردن این فیلد الزامی میباشد")
          .email("ایمیل وارد شده معتبر نمی باشد."),
        password: Yup.string()
          // .required("پرکردن این فیلد الزامی میباشد")
          .min(6, "رمز عبور نمیتواند کمتر از ۶ کارکتر باشد."),
        confirmPassword: Yup.string()
          // .required("پرکردن این فیلد الزامی میباشد")
          .oneOf(
            // @ts-ignore
            [Yup.ref("password"), null],
            "رمز عبورها با هم برابر نیستند."
          ),
        address: Yup.string().required("پرکردن این فیلد الزامی میباشد"),
      }),
      onSubmit: async (values: InitialValues) => {
        const data = {
          // @ts-ignore
          companyName: values.companyName,
          // @ts-ignore
          companyManagerFullName: values.companyManagerFullName,
          // @ts-ignore
          faxNumber: values.faxNumber,
          // @ts-ignore
          website: values.website,
          // @ts-ignore
          mobileNumber: values.mobileNumber,
          // @ts-ignore
          email: values.email,
          // @ts-ignore
          password: values.password ? values.password : "",
          // @ts-ignore
          address: values.address,
        };
        const response = await updateProfileCompanyData(data);
        if (response?.message) {
          if (response?.status === 200) {
            toast.success(response.message);
          } else {
            toast.error(response.message, { autoClose: 2500 });
          }
        }
      },
    });

  return (
    <div className="w-full flex justify-center items-center pb-7">
      <form
        onSubmit={handleSubmit}
        className="w-[97%] grid grid-cols-4 gap-x-4"
      >
        <div className="lg:col-span-1 md:col-span-2 col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="companyName"
            onChange={handleChange}
            label="نام کامل شرکت"
            value={
              // @ts-ignore
              values.companyName ? values.companyName : ""
            }
          />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="companyManagerFullName"
            onChange={handleChange}
            label="نام و نام خانوادگی مدیر عامل"
            value={
              // @ts-ignore
              values.companyManagerFullName
                ? // @ts-ignore
                  values.companyManagerFullName
                : ""
            }
          />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="faxNumber"
            onChange={handleChange}
            label="شماره شرکت"
            // @ts-ignore
            value={values.faxNumber ? values.faxNumber : ""}
          />
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="website"
            onChange={handleChange}
            label="وب سایت"
            // @ts-ignore
            value={values.website ? values.website : ""}
          />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="mobileNumber"
            onChange={handleChange}
            label="شماره تماس"
            value={
              // @ts-ignore
              values.mobileNumber ? values.mobileNumber : ""
            }
          />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="email"
            onChange={handleChange}
            label="ایمیل"
            // @ts-ignore
            value={values.email ? values.email : ""}
          />
        </div>
        <div className="sm:col-span-2 col-span-4 relative">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="password"
            onChange={handleChange}
            label="رمز عبور جدید"
            type={showIcon ? "text" : "password"}
            // @ts-ignore
            value={values.password ? values.password : ""}
          />
          <div
            className="absolute top-[70px] cursor-pointer left-4"
            onClick={() => setShowIcon((prevState) => !prevState)}
          >
            {showIcon ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </div>
        </div>
        <div className="sm:col-span-2 col-span-4 relative">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="confirmPassword"
            onChange={handleChange}
            label="تکرار رمز عبور جدید"
            type={showIcon ? "text" : "password"}
            // @ts-ignore
            value={values.confirmPassword ? values.confirmPassword : ""}
          />
          <div
            className="absolute top-[70px] cursor-pointer left-4"
            onClick={() => setShowIcon((prevState) => !prevState)}
          >
            {showIcon ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
          </div>
        </div>
        <div className="col-span-4">
          <AuthInput
            errors={errors}
            handleBlur={handleBlur}
            touched={touched}
            name="address"
            onChange={handleChange}
            label="آدرس شرکت"
            // @ts-ignore
            value={values.address ? values.address : ""}
          />
        </div>
        <div className="col-span-4 mt-10">
          <FormButton
            rounded="rounded-md"
            padding="p-3"
            width="w-fit"
            text="ذخیره تغییرات"
          />
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
