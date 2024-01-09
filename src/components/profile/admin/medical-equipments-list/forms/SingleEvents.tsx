"use client";

import React, { useState } from "react";
import MedicalEquipmentsForm from "../MedicalEquipmentsForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "@/components/main/input/AuthInput";
import {
  gregorianIsoToJalaali,
  jalaaliToGregorianISO,
} from "@/utills/formatHelper";
import Button from "@/components/main/button/Button";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteItems } from "@/services/profile/admin/medical-equipments-list";
import { SingleEventData } from "@/services/profile/admin/medical-equipments-list/events/types";
import {
  postSingleEvent,
  updateSingleEvent,
} from "@/services/profile/admin/medical-equipments-list/events";

const SingleEvents = ({
  data,
  desc,
  title,
}: {
  data: SingleEventData | null;
  title: string;
  desc: string;
}) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { push, refresh } = useRouter();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        eventName: data && data.eventName ? data.eventName : "",
        eventDate: data && data.eventDate ? data.eventDate : "",
      },
      validationSchema: Yup.object().shape({
        eventName: Yup.string().required("پر کردن این فیلد الزامی است"),
        eventDate: Yup.string().required("پر کردن این فیلد الزامی است"),
      }),
      onSubmit: async (values) => {
        setSubmitLoading(true);
        if (data) {
          const payloadObj = {
            id: data.id,
            eventDate: jalaaliToGregorianISO(values.eventDate!)!,
            eventName: values.eventName,
          };
          const res = await updateSingleEvent(
            payloadObj,
            Cookies.get("token")!
          );

          if (res?.status === 200) {
            setSubmitLoading(false);
            toast.success(res.message);
            push("/panel/medical-equipments-list/events");
            refresh();
          } else {
            setSubmitLoading(false);
            toast.error(res?.message);
          }
        } else {
          const payloadObj = {
            eventDate: jalaaliToGregorianISO(values.eventDate!)!,
            eventName: values.eventName,
          };
          const res = await postSingleEvent(
            [payloadObj],
            Cookies.get("token")!
          );

          if (res?.status === 200) {
            setSubmitLoading(false);
            toast.success(res.message);
            push("/panel/medical-equipments-list/events");
            refresh();
          } else {
            setSubmitLoading(false);
            toast.error(res?.message);
          }
        }
      },
    });

  const deleteSingleEvent = async () => {
    setDeleteLoading(true);
    const deleteLabRes = await deleteItems(
      [data?.id!],
      Cookies.get("token")!,
      "RemoveEvents",
      true
    );

    if (deleteLabRes?.status === 200) {
      setDeleteLoading(false);
      toast.success(deleteLabRes.message);
      push("/panel/medical-equipments-list/events/");
      refresh();
    } else {
      setDeleteLoading(false);
      toast.error(deleteLabRes?.message);
    }
  };
  return (
    <MedicalEquipmentsForm
      desc={desc}
      title={title}
      handleSubmit={handleSubmit}
    >
      <div className="col-span-2">
        <AuthInput
          name="eventName"
          label="نام روز"
          placeholder="مناسبت مورد نظر را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          value={values.eventName}
          // @ts-ignore
          errors={errors}
          // @ts-ignore
          touched={touched}
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="eventDate"
          label="تاریخ"
          placeholder="تاریخ مورد نظر را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          // @ts-ignore
          errors={errors}
          value={values.eventDate!}
          // @ts-ignore
          touched={touched}
        />
      </div>
      <div className="col-span-4 mt-5 w-full  sm:justify-end justify-between items-center">
        <div className="items-center flex flex-row-reverse">
          <Button
            text="ذخیره اطلاعات"
            color="text-white"
            bg="bg-primaryDark6"
            padding="py-[13px] px-14"
            type="submit"
            loading={submitLoading}
          />
          {data && (
            <div className="sm:ml-5 mr-0">
              <Button
                loading={deleteLoading}
                isDanger
                onClick={deleteSingleEvent}
                text="حذف"
                color="text-redColor"
                border="border border-redColor"
                bg="bg-redColorLight"
                icon={
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5 6.97786C20.615 6.59286 16.7067 6.39453 12.81 6.39453C10.5 6.39453 8.19 6.5112 5.88 6.74453L3.5 6.97786"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.91675 5.79898L10.1734 4.27065C10.3601 3.16232 10.5001 2.33398 12.4717 2.33398H15.5284C17.5001 2.33398 17.6517 3.20898 17.8267 4.28232L18.0834 5.79898"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.9921 10.6621L21.2338 22.4104C21.1055 24.2421 21.0005 25.6654 17.7455 25.6654H10.2555C7.00046 25.6654 6.89546 24.2421 6.76712 22.4104L6.00879 10.6621"
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
                      d="M11.0833 14.584H16.9166"
                      stroke="#C92626"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          )}
        </div>
      </div>
    </MedicalEquipmentsForm>
  );
};

export default SingleEvents;
