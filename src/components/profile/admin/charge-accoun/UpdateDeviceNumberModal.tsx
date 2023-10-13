"use client";

import AuthInput from "@/components/main/input/AuthInput";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import React from "react";
import { useAppSelector } from "@/redux/hooks/hooks";
import FormButton from "@/components/main/button/FormButton";
import { useRouter, useSearchParams } from "next/navigation";
import { updateUserDeviceNumber } from "@/services/profile/admin/charge-account";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const UpdateDeviceNumberModal = () => {
  const { refresh } = useRouter();
  const token = Cookies.get("token");
  const userID = useSearchParams().get("userId");
  const { currentDeviceNumber } = useAppSelector((state) => state.user);
  const [initialValues, validationSchema] =
    usePanelValidation("updateDeviceNumber")!;
  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const data = {
          userID: Number(userID),
          // @ts-ignore
          maxDeviceNumber: Number(values.maxDeviceNumber),
        };

        const response = await updateUserDeviceNumber(data, token!);
        if (response?.status === 200) {
          toast.success(response.message);
          refresh();
        } else {
          toast.error(response?.message);
        }
      },
    });
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col">
      <div className="w-full flex">
        <AuthInput
          name="currentCapacity"
          disabled
          value={String(currentDeviceNumber)}
          label="تعداد ظرفیت فعلی"
        />
      </div>
      <div className="w-full flex">
        <AuthInput
          name="maxDeviceNumber"
          //   @ts-ignore
          value={values.maxDeviceNumber}
          label="ظرفیت جدید ثبت دستگاه"
          placeholder="ظرفیت جدید خود را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          touched={touched}
        />
      </div>
      <div className="w-full mt-4 mb-16">
        <FormButton text="ذخیره ظرفیت جدید" />
      </div>
    </form>
  );
};

export default UpdateDeviceNumberModal;
