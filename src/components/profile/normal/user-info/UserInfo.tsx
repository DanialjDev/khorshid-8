"use client";

import FormButton from "@/components/main/button/FormButton";
import AuthInput from "@/components/main/input/AuthInput";
import { getProfileCompanyData } from "@/services/profile/user";
import {
  InitialValues,
  ValidationSchemaType,
} from "@/utills/validation/auth/types";
import useValidation from "@/utills/validation/auth/validation";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const UserInfo = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [initialValues, setInitialValues] = useState<InitialValues>({
    companyName: "",
    companyManagerFullName: "",
    faxNumber: "",
    website: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const [resMessage, setResMessage] = useState("");

  let [_, validationSchema] = useValidation("profile-company-data") as [
    initialVlaues: InitialValues,
    validationSchema: ValidationSchemaType
  ];
  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values: InitialValues) => console.log(values),
    });

  useEffect(() => {
    getProfileCompanyData().then((res) => {
      if (res?.userInfo) {
        setInitialValues(res?.userInfo);
      }
    });
  }, []);
  console.log(initialValues);

  return (
    <div className="w-full flex justify-center items-center pb-7">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
        enableReinitialize
      >
        {({
          errors,
          values,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
        }) => (
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
                isRequired
                // value={
                //   // @ts-ignore
                //   values.companyName ? values.companyName : ""
                // }
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
                isRequired
                // value={
                //   // @ts-ignore
                //   values.companyManagerFullName
                //     ? // @ts-ignore

                //       values.companyManagerFullName
                //     : ""
                // }
              />
            </div>
            <div className="lg:col-span-1 md:col-span-2 col-span-4">
              <AuthInput
                errors={errors}
                handleBlur={handleBlur}
                touched={touched}
                name="faxNumber"
                onChange={handleChange}
                label="فکس"
                isRequired
                // @ts-ignore
                // value={values.faxNumber ? values.faxNumber : ""}
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
                isRequired
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
                isRequired
                // value={
                //   // @ts-ignore
                //   values.mobileNumber ? values.mobileNumber : ""
                // }
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
                isRequired
                // @ts-ignore
                // value={values.email ? values.email : ""}
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
                isRequired
                type={showIcon ? "text" : "password"}
                // @ts-ignore
                // value={values.password ? values.password : ""}
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
                isRequired
                type={showIcon ? "text" : "password"}
                // @ts-ignore
                // value={values.confirmPassword ? values.confirmPassword : ""}
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
                isRequired
                // @ts-ignore
                // value={values.address ? values.address : ""}
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
        )}
      </Formik>
    </div>
  );
};

export default UserInfo;
