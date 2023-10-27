"use client";

import Button from "@/components/main/button/Button";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import {
  deleteNews,
  updateNews,
  updateSingleNews,
} from "@/services/profile/admin/statistics";
import { News } from "@/services/profile/admin/statistics/types";
import { isUrl } from "@/utills/formatHelper";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const NewsUpdateForm = ({ singleNews }: { singleNews: News }) => {
  const { refresh, push } = useRouter();
  const [isImageChanged, setIsImageChanged] = useState(false);

  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: singleNews.title,
      description: singleNews.description,
      image: singleNews.imageUrl,
      link: singleNews.link,
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("پرکردن این فیلد الزامی است."),
      description: Yup.string()
        .required("پرکردن این فیلد الزامی است.")
        .max(16, "زیر متن خبر نمیتواند بیشتر از ۱۶ کارکتر باشد"),
      image: Yup.mixed().required("انتخاب تصویر الزامی است"),
      link: Yup.string()
        .required("پرکردن این فیلد الزامی است.")
        .test(
          "isUrl",
          "آردس وارد شده نامعتبر است",

          (value) => {
            if (value && value.length !== 0) {
              return Boolean(isUrl(value));
            }
          }
        ),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      // @ts-ignore
      formData.append("NewsId", singleNews.newsId);
      formData.append("Title", values.title);
      formData.append("Description", values.description);
      formData.append("Link", values.link);
      // @ts-ignore
      formData.append("IsImageChangedOrDeleted", isImageChanged);
      formData.append("Image", values.image);

      const updatedNewsRes = await updateSingleNews(
        formData,
        Cookies.get("token")!
      );

      if (updatedNewsRes?.status === 200) {
        toast.success(updatedNewsRes.message);
        refresh();
        push("/panel/statistics");
      } else {
        toast.error(updatedNewsRes?.message);
      }
    },
  });

  const deleteSingleNewsHanlder = async () => {
    const deleteNewsRes = await deleteNews(
      {
        newsID: singleNews.newsId.toString(),
      },
      Cookies.get("token")!
    );

    if (deleteNewsRes?.status === 200) {
      toast.success(deleteNewsRes.message);
      refresh();
      push("/panel/statistics");
    } else {
      toast.error(deleteNewsRes?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mt-5 grid grid-cols-4 gap-x-7 gap-y-0"
    >
      <div className="w-full sm:col-span-2 col-span-4">
        <AuthInput
          touched={touched}
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          name="title"
          label="تیتر خبر"
          placeholder="تا ۸ کلمه"
          value={values.title}
        />
      </div>
      <div className="w-full sm:col-span-2 col-span-4">
        <AuthInput
          touched={touched}
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          name="link"
          label="لینک قسمت خبر در سایت خبر مورد نظر "
          placeholder="URL"
          value={values.link}
        />
      </div>
      <div className="w-full md:col-span-2 col-span-4">
        <AuthInput
          touched={touched}
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          name="description"
          label="زیر متن خبر"
          placeholder="تا ۱۶ کلمه"
          value={values.description}
        />
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-2 mt-6 gap-x-7">
          <div className="md:col-span-1 col-span-2">
            <ImageInput
              title="بارگذاری تصویر خبر"
              desc="در ابعاد ۱۷۲ × 282 پیکسل ، حجم کمتر از 1 مگابایت ."
              bg="bg-white-gray"
              border="border border-adminFormBorder2"
              name="image"
              touched={touched["image"]}
              onChange={handleChange}
              handleBlur={handleBlur}
              errors={errors["image"]}
              // @ts-ignore
              value={values.image}
              setFieldValue={setFieldValue}
              setIsImgChanged={setIsImageChanged}
            />
          </div>
          <div className="lg:col-span-1 col-span-2 lg:justify-end mt-5 lg:mt-0 flex sm:flex-row flex-col items-center">
            <div className="flex sm:w-fit w-full">
              <Button
                type="submit"
                text="ذخیره خبر"
                bg="bg-primaryDark6"
                padding="px-20 py-[11px]"
                rounded="rounded-[8px]"
                color="text-white"
                width="sm:w-fit w-full"
              />
            </div>
            <div className="flex sm:mr-8 mt-5 sm:mt-0 sm:w-fit w-full">
              <Button
                text="حذف خبر"
                bg="bg-redColorLight"
                padding="px-4 py-2"
                border="border border-redColor"
                rounded="rounded-[8px]"
                color="text-redColor"
                onClick={deleteSingleNewsHanlder}
                width="sm:w-fit w-full"
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
