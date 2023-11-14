"use client";

import { Conference } from "@/services/homePage/types";
import React, { useEffect, useState } from "react";
import PosterBox from "../posters/PosterBox";
import Button from "@/components/main/button/Button";
import AuthInput from "@/components/main/input/AuthInput";
import { useFormik } from "formik";
import usePanelValidation from "@/utills/validation/panel/validation";
import ImageInput from "@/components/main/image-input/ImageInput";
import StatisticsUpdateForm from "./StatisticsUpdateForm";
import {
  deleteSingleConfrence,
  getSingleConfrenceHandler,
  updateSingleConfrence,
} from "@/services/profile/admin/statistics";
import Cookies from "js-cookie";
import * as Yup from "yup";
import { isUrl } from "@/utills/formatHelper";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ConfrencesContainer = ({
  confrences,
}: {
  confrences: Conference[] | undefined;
}) => {
  const { refresh, push } = useRouter();
  const [singleConfrence, setSingleConfrence] = useState<Conference | null>(
    null
  );

  const [selectedConfrence, setSelectedConfrence] = useState<number | null>(
    null
  );

  const [isImageChanged, setIsImageChanged] = useState(false);

  const getSingleConfrece = async (conferenceId: number) => {
    setSelectedConfrence(conferenceId);
    const singleConfrenceRes = await getSingleConfrenceHandler(
      conferenceId,
      Cookies.get("token")!
    );
    if (singleConfrenceRes?.confrence) {
      setSingleConfrence(singleConfrenceRes.confrence);
    }
  };
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
      name: singleConfrence?.name ? singleConfrence.name : "",
      link: singleConfrence?.link ? singleConfrence.link : "",
      imageUrl: singleConfrence?.imageUrl ? singleConfrence.imageUrl : "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("پرکردن این فیلد الزامی است."),
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
      imageUrl: Yup.mixed().required("انتخاب تصویر الزامی است"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      // @ts-ignore
      formData.append("ConferenceId", selectedConfrence);
      formData.append("Name", values.name);
      formData.append("Link", values.link);
      // @ts-ignore
      formData.append("IsImageChangedOrDeleted", isImageChanged);
      formData.append("Image", values.imageUrl);

      if (Cookies.get("token")) {
        const updatedConfrenceRes = await updateSingleConfrence(
          formData,
          Cookies.get("token")!
        );
        if (updatedConfrenceRes?.status === 200) {
          toast.success(updatedConfrenceRes.message);
        } else {
          toast.error(updatedConfrenceRes?.message);
        }
      }
    },
    enableReinitialize: true,
  });

  const deleteSingleConfrenceHandler = async () => {
    const deleteConfrenceRes = await deleteSingleConfrence(
      {
        conferenceID: singleConfrence?.conferenceId!,
      },
      Cookies.get("token")!
    );

    if (deleteConfrenceRes?.status === 200) {
      toast.success(deleteConfrenceRes.message);
      refresh();
      push("/panel/statistics");
    } else {
      toast.error(deleteConfrenceRes?.message);
    }
  };
  return (
    <div className="w-full flex flex-col mt-5">
      <div className="w-full grid grid-cols-3 gap-8">
        {confrences?.map((item) => (
          <div
            className="sm:col-span-1 col-span-3"
            onClick={() => {
              getSingleConfrece(item.conferenceId);
            }}
            key={item.conferenceId}
          >
            <PosterBox
              imageUrl={item.imageUrl}
              id={item.conferenceId}
              title={`کارت همایش ${String(item.conferenceId)}`}
              // @ts-ignore
              isSelected={selectedConfrence}
            />
          </div>
        ))}
      </div>
      {singleConfrence?.conferenceId ? (
        <StatisticsUpdateForm
          title={`کارت همایش ${selectedConfrence}`}
          handleSubmit={handleSubmit}
        >
          <div className="w-full sm:col-span-2 col-span-4">
            <AuthInput
              touched={touched}
              onChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              name="name"
              label="نام همایش"
              value={values.name}
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
              value={values?.link}
            />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 mt-6 gap-x-7">
              <div className="col-span-4 sm:col-span-3 md2:col-span-2">
                <ImageInput
                  title="بارگذاری تصویر همایش"
                  desc="در ابعاد ۱۷۲ × 282 پیکسل ، حجم کمتر از 1 مگابایت ."
                  bg="bg-white-gray"
                  border="border border-adminFormBorder2"
                  name="imageUrl"
                  touched={touched["imageUrl"]}
                  onChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors["imageUrl"]}
                  //@ts-ignore
                  value={values.imageUrl}
                  setIsImgChanged={setIsImageChanged}
                  setFieldValue={setFieldValue}
                />
              </div>
              <div className="col-span-4 xl:col-span-2 xl:justify-end mt-7 xl:m-0 flex sm:flex-row flex-col items-center">
                <div className="flex sm:w-fit w-full">
                  <Button
                    type="submit"
                    text="ذخیره همایش"
                    bg="bg-primaryDark6"
                    padding="px-20 py-[11px]"
                    rounded="rounded-[8px]"
                    color="text-white"
                    width="sm:w-fit w-full"
                  />
                </div>
                <div className="flex sm:mr-8 mt-5 sm:mt-0 sm:w-fit w-full">
                  <Button
                    text="حذف همایش"
                    bg="bg-redColorLight"
                    padding="px-4 py-2"
                    border="border border-redColor"
                    rounded="rounded-[8px]"
                    color="text-redColor"
                    width="sm:w-fit w-full"
                    onClick={deleteSingleConfrenceHandler}
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
        </StatisticsUpdateForm>
      ) : null}
    </div>
  );
};

export default ConfrencesContainer;
