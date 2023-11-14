"use client";

import Box from "@/components/main/Box/Box";
import Button from "@/components/main/button/Button";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import { updateCounselor } from "@/services/profile/admin/consulation";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import usePanelValidation from "@/utills/validation/panel/validation";
import { FormikErrors, FormikTouched, useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const UpdateCounselorForm = () => {
  const [initialValues, validationSchema] =
    usePanelValidation("updateCounselor")!;

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();

      // @ts-ignore
      formData.append("Comment", values.Comment);
      // @ts-ignore
      formData.append("FullName", values.FullName);
      // @ts-ignore
      formData.append("Position", values.Position);
      // @ts-ignore
      formData.append("Image", values.Image);
      // @ts-ignore
      formData.append("PhoneNumber", values.PhoneNumber);
      // @ts-ignore
      formData.append("IsImageChangedOrDeleted", values.Image ? true : false);

      const response = await updateCounselor(formData);
      if (response?.status === 200) {
        toast.success(response.message);
        resetForm();
      } else {
        toast.error(response?.message);
      }
    },
  });
  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-4 gap-8 sm:p-3 p-0"
      >
        <div className="sm:col-span-2 col-span-4">
          <AuthInput
            label="نام مشاوره دهنده"
            placeholder="بین 8 تا 40 کارکتر بدون @_#..."
            name="FullName"
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors as FormikErrors<PanelInitialValues>}
            touched={touched as FormikTouched<PanelInitialValues>}
            // @ts-ignore
            value={values.FullName}
          />
        </div>
        <div className="sm:col-span-2 col-span-4">
          <AuthInput
            label="جایگاه مشاوره دهنده"
            placeholder="کارشناس خرید تجهیزات پزشکی"
            name="Position"
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors as FormikErrors<PanelInitialValues>}
            touched={touched as FormikTouched<PanelInitialValues>}
            // @ts-ignore
            value={values.Position}
          />
        </div>
        <div className="col-span-4">
          <Textarea
            label="متن درباره مشاوره دهنده"
            placeholder="برای معرفی بیشتر فرد مشاوره دهنده یک متن وارد کنید."
            name="Comment"
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors as FormikErrors<PanelInitialValues>}
            touched={touched as FormikTouched<PanelInitialValues>}
            // @ts-ignore
            value={values.Comment}
          />
        </div>
        <div className="md:col-span-2 col-span-4">
          <AuthInput
            label="شماره تماس مشاوره دهنده"
            placeholder="...  ... - ۰۲۱"
            name="PhoneNumber"
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors as FormikErrors<PanelInitialValues>}
            touched={touched as FormikTouched<PanelInitialValues>}
            // @ts-ignore
            value={values.PhoneNumber}
          />
        </div>
        <div className="xl:col-span-2 md:col-span-3 col-span-4">
          <ImageInput
            title="بارگذاری تصویر تصویر مشاوره دهنده"
            desc="در ابعاد 270 × 200 پیکسل ، حجم کمتر از 1 مگابایت ."
            name="Image"
            setFieldValue={setFieldValue}
            // @ts-ignore
            value={values.Image}
            handleBlur={handleBlur}
            // @ts-ignore
            touched={touched.Image}
            // @ts-ignore
            errors={errors.Image}
          />
        </div>
        <div className="col-span-4">
          <Button
            width="w-fit"
            padding="py-2 px-12"
            color="text-white"
            text="ذخیره اطلاعات"
            type="submit"
          />
        </div>
      </form>
    </Box>
  );
};

export default UpdateCounselorForm;
