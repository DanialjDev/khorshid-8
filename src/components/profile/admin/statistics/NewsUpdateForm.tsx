"use client";

import Button from "@/components/main/button/Button";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import { updateNews } from "@/services/profile/admin/statistics";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const NewsUpdateForm = () => {
  const newsId = useSearchParams().get("newsId");
  const [initialValues, validationSchema] = usePanelValidation("UpdateNews")!;

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
    onSubmit: async (values) => {
      // const updatedNewsRes = await updateNews({
      //     NewsId: newsId,
      //     Title: values.newsTitle,
      //     Description: values.newsDesc,
      //     Image: values.Image,
      //     IsImageChangedOrDeleted: values.Image ?
      // })
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-5 grid grid-cols-4 gap-x-7 gap-y-0"
    >
      <div className="w-full col-span-2">
        <AuthInput
          touched={touched}
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          name="newsTitle"
          label="تیتر خبر"
          placeholder="تا ۸ کلمه"
        />
      </div>
      <div className="w-full col-span-2">
        <AuthInput
          touched={touched}
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          name="newsLink"
          label="لینک قسمت خبر در سایت خبر مورد نظر "
          placeholder="URL"
        />
      </div>
      <div className="w-full col-span-2">
        <AuthInput
          touched={touched}
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          name="newsDesc"
          label="زیر متن خبر"
          placeholder="تا ۱۶ کلمه"
        />
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-2 mt-6 gap-x-7">
          <div className="col-span-1">
            <ImageInput
              title="بارگذاری تصویر خبر"
              desc="در ابعاد ۱۷۲ × 282 پیکسل ، حجم کمتر از 1 مگابایت ."
              bg="bg-white-gray"
              border="border border-adminFormBorder2"
              name="newsImage"
              //@ts-ignore
              touched={touched["newsImage"]}
              //@ts-ignore
              onChange={handleChange}
              handleBlur={handleBlur}
              //@ts-ignore
              errors={errors["newsImage"]}
              //@ts-ignore
              value={values.Image}
              setFieldValue={setFieldValue}
            />
          </div>
          <div className="col-span-1 justify-end flex items-center">
            <div className="flex">
              <Button
                type="submit"
                text="ذخیره خبر"
                bg="bg-primaryDark6"
                padding="px-20 py-[11px]"
                rounded="rounded-[8px]"
                color="text-white"
              />
            </div>
            <div className="flex mr-8">
              <Button
                text="حذف خبر"
                bg="bg-redColorLight"
                padding="px-4 py-2"
                border="border border-redColor"
                rounded="rounded-[8px]"
                color="text-redColor"
                icon={
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-90"
                  >
                    <path
                      d="M24.5 6.97689C20.615 6.59189 16.7067 6.39355 12.81 6.39355C10.5 6.39355 8.19 6.51022 5.88 6.74355L3.5 6.97689"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.9165 5.79801L10.1732 4.26967C10.3598 3.16134 10.4998 2.33301 12.4715 2.33301H15.5282C17.4998 2.33301 17.6515 3.20801 17.8265 4.28134L18.0832 5.79801"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0518 19.25H15.9368"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0835 14.583H16.9168"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewsUpdateForm;
