"use client";

import Button from "@/components/main/button/Button";
import AuthInput from "@/components/main/input/AuthInput";
import { updatePhoneNumber } from "@/services/profile/admin/statistics";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { isMobile } from "@/utills/formatHelper";

const UpdatePhoneNumber = ({
  phoneNumber,
}: {
  phoneNumber: string | undefined;
}) => {
  const [loading, setLoading] = useState(false);
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: {
        phoneNumber: phoneNumber ? phoneNumber : "",
      },
      validationSchema: Yup.object().shape({
        phoneNumber: Yup.string()
          .required("پرکردن این فیلد الزامی است.")
          .test("isMobile", "شماره موبایل وارد شده نا معتبر است", (value) =>
            isMobile(value)
          ),
      }),
      onSubmit: async (values) => {
        setLoading(true);
        const updatePhoneNumberRes = await updatePhoneNumber(
          {
            // @ts-ignore
            phoneNumber: values.phoneNumber,
          },
          Cookies.get("token")!
        );

        if (updatePhoneNumberRes?.status === 200) {
          setLoading(false);
          toast.success(updatePhoneNumberRes.message);
          return;
        }
        toast.error(updatePhoneNumberRes?.message);
      },
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex mt-5 flex-col justify-between items-center"
    >
      <div className="w-full mb-12">
        <AuthInput
          onChange={handleChange}
          handleBlur={handleBlur}
          touched={touched}
          errors={errors}
          //@ts-ignore
          value={values.phoneNumber}
          name="phoneNumber"
          mt="mt-0"
        />
      </div>
      <div className="w-full flex justify-center my-7">
        <Button
          width="w-[87%]"
          text="ذخیره شماره تماس"
          bg="bg-primaryDark6"
          color="text-white"
          type="submit"
          loading={loading}
        />
      </div>
    </form>
  );
};

export default UpdatePhoneNumber;
