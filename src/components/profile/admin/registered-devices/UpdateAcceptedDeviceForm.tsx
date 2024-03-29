"use client";

import AuthInput from "@/components/main/input/AuthInput";
import CustomSelect from "@/components/main/input/CustomSelect";
import { DeviceName, SingleCompany } from "@/services/common/types";
import { getSingleCompany } from "@/services/profile/admin/medical-equipments-list/company";
import { SingleDeviceData } from "@/services/profile/admin/medical-equipments-list/types";
import { companyFormat } from "@/utills/filterHelper";
import { useFormik } from "formik";
import React, { useState } from "react";
import Cookies from "js-cookie";
import * as Yup from "yup";
import ImageInput from "@/components/main/image-input/ImageInput";
import Button from "@/components/main/button/Button";
import {
  postSingleDevice,
  updateSingleDevice,
} from "@/services/profile/admin/medical-equipments-list/devices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteItems } from "@/services/profile/admin/medical-equipments-list";

const UpdateAcceptedDeviceForm = ({
  singleDeviceData,
  companies,
  deviceCategories,
}: {
  companies: SingleCompany[] | null;
  singleDeviceData: SingleDeviceData | null;
  deviceCategories: DeviceName[] | null;
}) => {
  const { push, refresh } = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isImageChanged, setIsImageChanged] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [categoryItems, setCategoryItems] = useState(
    singleDeviceData?.categories ? singleDeviceData.categories : []
  );
  const [companyData, setCompanyData] = useState<{
    name: string;
    managerFullName: string;
    faxNumber: string;
    website: string;
    address: string;
  }>({
    name: singleDeviceData?.companyName ? singleDeviceData.companyName : "",
    managerFullName: singleDeviceData?.managerFullName
      ? singleDeviceData.managerFullName
      : "",
    faxNumber: singleDeviceData?.faxNumber ? singleDeviceData.faxNumber : "",
    address: singleDeviceData?.address ? singleDeviceData.address : "",
    website: singleDeviceData?.website ? singleDeviceData.address : "",
  });
  const [selected, setSelected] = useState(
    companyFormat(companies)![
      companies?.findIndex(
        (item) => item.companyId === singleDeviceData?.companyId
      )!
    ]
  );
  const [selectedCategories, setSelectedCategories] = useState(
    categoryItems?.map((item) => item.categoryName)
  );

  const changeCompanyInfo = async (companyId: number) => {
    const singleCompany = await getSingleCompany(
      companyId.toString(),
      Cookies.get("token")!
    );
    if (singleCompany?.payload) {
      setCompanyData(singleCompany.payload);
    }
  };
  const {
    handleSubmit,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: singleDeviceData?.deviceName ? singleDeviceData.deviceName : "",
      brand: singleDeviceData?.brand ? singleDeviceData.brand : "",
      country: singleDeviceData?.country ? singleDeviceData.country : "",
      orderedByName: singleDeviceData?.orderedByName
        ? singleDeviceData.orderedByName
        : "",
      orderedByLastName: singleDeviceData?.orderedByLastName
        ? singleDeviceData.orderedByLastName
        : "",
      orderedByMobileNumber: singleDeviceData?.orderedByMobileNumber
        ? singleDeviceData.orderedByMobileNumber
        : "",
      imageUrl: singleDeviceData?.imageUrl ? singleDeviceData.imageUrl : null,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("پر کردن این فیلد الزامی است"),
      brand: Yup.string().required("پر کردن این فیلد الزامی است"),
      country: Yup.string().required("پر کردن این فیلد الزامی است"),
      orderedByName: Yup.string().required("پر کردن این فیلد الزامی است"),
      orderedByLastName: Yup.string().required("پر کردن این فیلد الزامی است"),
      orderedByMobileNumber: Yup.string().required(
        "پر کردن این فیلد الزامی است"
      ),
      imageUrl: Yup.mixed().nullable(),
    }),
    onSubmit: async (values) => {
      setSubmitLoading(true);
      if (!categoryItems || categoryItems?.length === 0) {
        toast.error("لطفا گروه تخصصی کاربری دستگاه را انتخاب کنید");
        return;
      }
      const formData = new FormData();
      // @ts-ignore
      formData.append("CompanyId", Number(selected.value));
      formData.append("Name", values.name);
      formData.append("Brand", values.brand);
      formData.append("Country", values.country);
      formData.append("OrderedByName", values.orderedByName);
      formData.append("OrderedByLastName", values.orderedByLastName);
      formData.append("OrderedByMobileNumber", values.orderedByMobileNumber);
      // @ts-ignore
      categoryItems.map((item) => formData.append("Categories", item.id));
      if (singleDeviceData) {
        // @ts-ignore
        formData.append("DeviceId", singleDeviceData.deviceId);
        // @ts-ignore
        formData.append("IsImageChangedOrDeleted", isImageChanged);
      }
      // @ts-ignore
      formData.append("Image", values.imageUrl);

      if (singleDeviceData) {
        const res = await updateSingleDevice(
          formData,
          Cookies.get("token")!,
          "Panel_AcceptedDevice/UpdateAcceptedDevice"
        );

        if (res?.status === 200) {
          setSubmitLoading(false);
          toast.success(res.message);
          push("/panel/registered-devices");
          refresh();
        } else {
          setSubmitLoading(false);
          toast.error(res?.message);
        }
      } else {
        const res = await postSingleDevice(
          formData,
          Cookies.get("token")!,
          "Panel_AcceptedDevice/PostSingleDevice"
        );
        if (res?.status === 200) {
          setSubmitLoading(false);
          toast.success(res.message);
          push("/panel/registered-devices");
          refresh();
        } else {
          toast.error(res?.message);
        }
      }
    },
  });

  const deleteDeviceHandler = async () => {
    setDeleteLoading(true);
    const deleteDeviceRes = await deleteItems(
      [singleDeviceData?.deviceId!],
      Cookies.get("token")!,
      "Panel_AcceptedDevice/RemoveAcceptedDevices",
      false
    );

    if (deleteDeviceRes?.status === 200) {
      setDeleteLoading(false);
      toast.success(deleteDeviceRes.message);
      push("/panel/registered-devices");
      refresh();
    } else {
      setDeleteLoading(false);
      toast.error(deleteDeviceRes?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-menuBg p-5 rounded-[12px] border border-adminFormBorder2 shadow-adminFormBox"
    >
      <div className="w-full grid grid-cols-4 gap-5">
        <div className="col-span-2 flex items-end">
          <CustomSelect
            selected={selected}
            setSelected={setSelected}
            items={companyFormat(companies)!}
            onChange={changeCompanyInfo}
            label="نام کامل شرکت"
            height="h-[69px]"
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="نام و نام خانوادگی مدیرعامل را وارد کنید"
            name="managerFullName"
            value={companyData.managerFullName}
            label="نام و نام خانوادگی مدیر عامل"
            mt="mt-0"
            disabled
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="شماره تماس شرکت را وارد کنید"
            name="faxNumber"
            value={companyData.faxNumber}
            label="شماره تماس شرکت"
            disabled
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="آدرس وب سایت شرکت را وارد کنید"
            name="website"
            value={companyData.website}
            label="آدرس وب سایت"
            disabled
          />
        </div>
        <div className="col-span-4">
          <AuthInput
            placeholder="ادرس شرکت را وارد کنید"
            name="address"
            value={companyData.address}
            label="ادرس شرکت"
            disabled
          />
        </div>
        <div className="col-span-4 relative">
          <div className="text-inputLabelColor text-[14px] mr-[2px] mt-7">
            گروه تخصصی کاربردی
          </div>
          <div
            onClick={() => setShowCategories((prevState) => !prevState)}
            className="w-full cursor-pointer h-[47px] flex flex-col relative border text-dark text-[14px] transition-all focus:border-primary bg-white autofill:!bg-white border-inputBorder rounded-lg p-[12px] disabled:opacity-60 bg-transparent outline-none mt-1 hover:shadow-inputHover hover:border-inputHoverBorder"
          >
            <div
              className={`absolute transition-all duration-200 scale-90 left-5 ${
                showCategories ? "-rotate-180" : ""
              }`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-fit flex">
              {categoryItems?.map((item, index) => {
                const seperator = index === 0 ? "" : " / ";
                return (
                  <p className="text-[14px]" key={index}>
                    {seperator}
                    {item.categoryName}
                  </p>
                );
              })}
            </div>
          </div>
          {showCategories && (
            <div className="w-[400px] h-[300px] z-30 transition-all bg-white flex flex-col rounded-[10px] absolute top-[110px] overflow-scroll">
              {deviceCategories?.map((item, index) => (
                <label
                  htmlFor={item.id.toString()}
                  key={item.id}
                  className={`w-full cursor-pointer p-3 flex ${
                    selectedCategories?.includes(item.categoryName)
                      ? "bg-primaryLight"
                      : ""
                  }`}
                >
                  <input
                    // name={item.id.toString()}
                    id={item.id.toString()}
                    type="checkbox"
                    className="checkbox-accent border-[1px] checkbox cursor-pointer bg-none scale-[.80]"
                    checked={selectedCategories?.includes(item.categoryName)}
                    onChange={(e) => {
                      if (!categoryItems?.includes(item)) {
                        setSelectedCategories([
                          ...selectedCategories!,
                          item.categoryName,
                        ]);
                        setCategoryItems([...categoryItems!, item]);
                      } else {
                        setSelectedCategories((prevState) =>
                          prevState?.filter((x) => x !== item.categoryName)
                        );
                        setCategoryItems((prevState) =>
                          prevState?.filter(
                            (x) => x.categoryName !== item.categoryName
                          )
                        );
                      }
                    }}
                  />
                  <p className="w-full mr-2">{item.categoryName}</p>
                </label>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-4 border-b border-adminFormBorder my-8"></div>
        <div className="col-span-2">
          <AuthInput
            placeholder="نام دستگاه را وارد کنید"
            name="name"
            value={values.name}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            label="نام دستگاه"
            mt="mt-0"
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="مارک دستگاه را وارد کنید"
            name="brand"
            value={values.brand}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            label="مارک دستگاه"
            mt="mt-0"
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="کشور سازنده را وارد کنید"
            name="country"
            value={values.country}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            label="کشور سازنده"
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="نام سفارش دهنده را وارد کنید"
            name="orderedByName"
            value={values.orderedByName}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            label="نام سفارش دهنده"
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="نام خانوادگی سفارش دهنده سفارش دهنده را وارد کنید"
            name="orderedByLastName"
            value={values.orderedByLastName}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            label="نام خانوادگی سفارش دهنده"
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            placeholder="شماره تماس سفارش دهنده را وارد کنید"
            name="orderedByMobileNumber"
            value={values.orderedByMobileNumber}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
            label="شماره تماس سفارش دهنده"
          />
        </div>
        <div className="col-span-2 mt-10">
          <ImageInput
            name="imageUrl"
            title="تصویر دستگاه"
            desc="در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت ."
            setFieldValue={setFieldValue}
            errors={errors.imageUrl}
            touched={touched.imageUrl}
            handleBlur={handleBlur}
            // @ts-ignore
            value={values.imageUrl}
            setIsImgChanged={setIsImageChanged}
          />
        </div>
        <div className="col-span-2 mt-5 w-full flex sm:justify-end justify-between items-center">
          <div className="items-center flex flex-row-reverse">
            <Button
              loading={submitLoading}
              text="ذخیره اطلاعات"
              color="text-white"
              bg="bg-primaryDark6"
              padding="py-[13px] px-14"
              type="submit"
            />
            {singleDeviceData && (
              <div className="sm:ml-5 mr-0">
                <Button
                  loading={deleteLoading}
                  isDanger
                  onClick={deleteDeviceHandler}
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
      </div>
    </form>
  );
};

export default UpdateAcceptedDeviceForm;
