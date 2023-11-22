"use client";

import React, { useEffect, useState } from "react";
import MedicalEquipmentsForm from "../MedicalEquipmentsForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthInput from "@/components/main/input/AuthInput";
import Button from "@/components/main/button/Button";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteItems } from "@/services/profile/admin/medical-equipments-list";
import { SingleDeansOfUniData } from "@/services/profile/admin/medical-equipments-list/deans-of-uni/types";
import AuthSelect from "@/components/main/input/AuthSelect";
import { StateType } from "@/services/common/types";
import { getCitiesById } from "@/services/common";
import { citiesFormat } from "@/utills/filterHelper";
import {
  postSingleDeanOfUni,
  updateSingleDeanOfUni,
} from "@/services/profile/admin/medical-equipments-list/deans-of-uni";

const SingleDeansOfUniForm = ({
  data,
  desc,
  title,
  states,
}: {
  data: SingleDeansOfUniData | null;
  title: string;
  desc: string;
  states: StateType[] | null;
}) => {
  const { push, refresh } = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [stateItems, setStateItems] = useState<
    { name: string; value: string }[]
  >(
    states! &&
      states.map((item) => ({
        name: item.stateName,
        value: item.id.toString(),
      }))
  );
  const [cityItems, setCityItems] = useState<{ name: string; value: string }[]>(
    [
      {
        name: data ? data?.cityName : "",
        value: "",
      },
    ]
  );
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState(data?.cityName);
  const [cityId, setCityId] = useState(0);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        deanOfUniFullName:
          data && data.deanOfUniFullName ? data.deanOfUniFullName : "",
        address: data && data.address ? data.address : "",
        telephone: data && data.telephone ? data.telephone : "",
        stateName: selectedState,
        cityName: data ? selectedCity : "",
      },
      validationSchema: Yup.object().shape({
        deanOfUniFullName: Yup.string().required("پر کردن این فیلد الزامی است"),
        address: Yup.string().required("پر کردن این فیلد الزامی است"),
        telephone: Yup.string().required("پر کردن این فیلد الزامی است"),
        stateName: Yup.string().required("پر کردن این فیلد الزامی است"),
        cityName: Yup.string().required("پر کردن این فیلد الزامی است"),
      }),
      enableReinitialize: true,
      onSubmit: async (values) => {
        setSubmitLoading(true);
        const cityId = cityItems.filter(
          (item) => item.name === values.cityName
        )[0].value;
        if (data) {
          const payloadObj = {
            id: data.id,
            stateId: states?.filter(
              (item) => item.stateName === selectedState
            )[0].id!,
            cityId: Number(cityId),
            address: values.address,
            deanOfUniFullName: values.deanOfUniFullName,
            telephone: values.telephone,
          };
          if (!cityId) {
            toast.warning("لطفا نام شهرستان را نتخاب کنید");
            return;
          }
          const res = await updateSingleDeanOfUni(
            payloadObj!,
            Cookies.get("token")!
          );
          if (res?.status === 200) {
            setSubmitLoading(false);
            toast.success(res.message);
            push("/panel/medical-equipments-list/deans-of-universities");
            refresh();
          } else {
            toast.error(res?.message);
            setSubmitLoading(false);
          }
        } else {
          const payloadObj = {
            stateId: states?.filter(
              (item) => item.stateName === selectedState
            )[0].id!,
            cityId: Number(cityId),
            address: values.address,
            deanOfUniFullName: values.deanOfUniFullName,
            telephone: values.telephone,
          };
          const res = await postSingleDeanOfUni(
            payloadObj,
            Cookies.get("token")!
          );
          if (res?.status === 200) {
            setSubmitLoading(false);
            toast.success(res.message);
            push("/panel/medical-equipments-list/deans-of-universities");
            refresh();
          } else {
            toast.error(res?.message);
            setSubmitLoading(false);
          }
        }
      },
    });
  useEffect(() => {
    const getCities = async () => {
      if (selectedState !== "") {
        const cities = await getCitiesById(selectedState);
        setCityItems(citiesFormat(cities?.data!)!);
      }
    };
    getCities();
  }, [selectedState]);
  const deleteSingleDeanOfUni = async () => {
    console.log(data?.id);
    setDeleteLoading(true);
    const deleteLabRes = await deleteItems(
      [data?.id!],
      Cookies.get("token")!,
      "RemoveDeanOfUniversities",
      true
    );

    if (deleteLabRes?.status === 200) {
      setDeleteLoading(false);
      toast.success(deleteLabRes.message);
      push("/panel/medical-equipments-list/deans-of-universities/");
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
          name="deanOfUniFullName"
          label="نام ریاست دانشگاه"
          placeholder="نام ریاست دانشگاه را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          value={values.deanOfUniFullName}
          errors={errors}
          touched={touched}
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="telephone"
          label="شماره تماس ریاست دانشگاه"
          placeholder="شماره تماس ریاست دانشگاه را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          value={values.telephone}
          touched={touched}
        />
      </div>
      <div className="col-span-2">
        <AuthSelect
          selectOptions={stateItems}
          name="stateName"
          label="نام استان"
          placeholder="نام استان را وارد کنید"
          onChange={(e) => {
            handleChange(e);
            setSelectedState(e.target.value);
          }}
          //   handleBlur={handleBlur}
          error={errors.stateName}
          value={values.stateName}
          touched={touched.stateName}
        />
      </div>
      <div className="col-span-2">
        <AuthSelect
          selectOptions={cityItems}
          name="cityName"
          label="نام شهرستان"
          placeholder="نام شهرستان را وارد کنید"
          disabled={selectedState === ""}
          onChange={(e) => {
            handleChange(e);
          }}
          error={errors.cityName && cityId === undefined ? errors.cityName : ""}
          value={values.cityName}
          touched={touched.cityName}
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          name="address"
          label="آدرس دانشگاه"
          placeholder="آدرس دانشگاه را وارد کنید"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          value={values.address}
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
                onClick={deleteSingleDeanOfUni}
                loading={deleteLoading}
                text="حذف"
                isDanger
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

export default SingleDeansOfUniForm;
