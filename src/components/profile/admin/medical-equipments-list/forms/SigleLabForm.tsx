"use client";

import React, { useState } from "react";
import MedicalEquipmentsForm from "../MedicalEquipmentsForm";
import { SingleLab } from "@/services/profile/admin/medical-equipments-list/labs/types";
import AuthInput from "@/components/main/input/AuthInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/main/button/Button";
import {
  postSingleLab,
  updateSingleLab,
} from "@/services/profile/admin/medical-equipments-list/labs";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteItems } from "@/services/profile/admin/medical-equipments-list";
import { isNumeric } from "@/utills/formatHelper";

const SigleLabForm = ({
  singleLab,
  title,
  desc,
}: {
  singleLab?: SingleLab | null;
  title: string;
  desc: string;
}) => {
  const { push, refresh } = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        universityName:
          singleLab && singleLab.universityName ? singleLab.universityName : "",
        headOfLaboratory:
          singleLab && singleLab.headOfLaboratory
            ? singleLab.headOfLaboratory
            : "",
        address: singleLab && singleLab.address ? singleLab.address : "",
        telephone: singleLab && singleLab.telephone ? singleLab.telephone : "",
      },
      validationSchema: Yup.object().shape({
        universityName: Yup.string().required("پر کردن این فیلد الزامی است"),
        headOfLaboratory: Yup.string().required("پر کردن این فیلد الزامی است"),
        address: Yup.string().required("پر کردن این فیلد الزامی است"),
        telephone: Yup.string()
          .required("پر کردن این فیلد الزامی است")
          .test("isNumeric", "شماره تلقن وارد شده نادرست است", (value) => {
            if (value && value.length > 0) {
              return isNumeric(value);
            }
          }),
      }),
      onSubmit: async (values) => {
        setSubmitLoading(true);
        if (singleLab) {
          const data = {
            id: singleLab?.id,
            ...values,
          };
          const updateLab = await updateSingleLab(data, Cookies.get("token")!);

          if (updateLab?.message) {
            if (updateLab?.status === 200) {
              setSubmitLoading(false);
              toast.success(updateLab.message);
              push("/panel/medical-equipments-list/labs/");
              refresh();
            } else {
              toast.error(updateLab.message);
            }
          }
        } else {
          const postLab = await postSingleLab(
            [{ ...values }],
            Cookies.get("token")!
          );
          if (postLab) {
            if (postLab.status === 200) {
              setSubmitLoading(false);
              toast.success(postLab.message);
              push("/panel/medical-equipments-list/labs/");
              refresh();
            } else {
              toast.error(postLab.message);
            }
          }
        }
      },
    });

  const deleteLabHandler = async () => {
    setDeleteLoading(true);
    const deleteLabRes = await deleteItems(
      // @ts-ignore
      [singleLab?.id],
      Cookies.get("token")!,
      "RemoveLabs",
      true
    );

    if (deleteLabRes?.status === 200) {
      setDeleteLoading(false);
      toast.success(deleteLabRes.message);
      push("/panel/medical-equipments-list/labs/");
      refresh();
    } else {
      toast.error(deleteLabRes?.message);
    }
  };
  return (
    <MedicalEquipmentsForm
      title={title}
      desc={desc}
      handleSubmit={handleSubmit}
    >
      <div className="col-span-2">
        <AuthInput
          name="universityName"
          label="نام دانشگاه"
          placeholder="نام دانشگاه را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          value={values.universityName}
          touched={touched}
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="headOfLaboratory"
          label="مسئول امور آزمایشگاه"
          placeholder="نام مسئول امور آزمایشگاه را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          value={values.headOfLaboratory}
          touched={touched}
        />
      </div>
      <div className="col-span-4">
        <AuthInput
          name="address"
          label="آدرس"
          placeholder="آدرس را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          value={values.address}
          touched={touched}
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="telephone"
          label="شماره تماس "
          placeholder="شماره تماس را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          value={values.telephone}
          touched={touched}
        />
      </div>
      <div className="col-span-4 mt-5 sm:w-[40%] w-full flex sm:justify-normal justify-between items-center">
        <Button
          text="ذخیره اطلاعات"
          color="text-white"
          bg="bg-primaryDark6"
          padding="py-[13px] px-10"
          type="submit"
          loading={submitLoading}
        />
        {singleLab && (
          <div className="sm:mr-5 mr-0">
            <Button
              isDanger
              loading={deleteLoading}
              onClick={deleteLabHandler}
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
    </MedicalEquipmentsForm>
  );
};

export default SigleLabForm;
