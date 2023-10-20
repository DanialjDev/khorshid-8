"use client";

import Button from "@/components/main/button/Button";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import {
  deleteUserDeviceHandler,
  updateUserDevice,
} from "@/services/profile/admin/charge-account";
import { SingleUserAcceptedDevice } from "@/services/profile/admin/charge-account/types";
import { isMobile, isNumeric, isUrl } from "@/utills/formatHelper";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SingleUserDevice = ({
  deviceInitialValues,
}: {
  deviceInitialValues: SingleUserAcceptedDevice | undefined;
}) => {
  const { back, refresh } = useRouter();
  const defaultError = Yup.string().required("پرکردن این فیلد الزامی است.");
  const [isImgChanged, setIsImgChanged] = useState(false);
  const {
    values,
    setFieldValue,
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
  } = useFormik({
    // @ts-ignore
    initialValues: deviceInitialValues,
    validationSchema: Yup.object().shape({
      companyName: defaultError,
      managerFullName: defaultError,
      faxNumber: defaultError.test(
        "isNumber",
        "شماره فکس وارد شده نادرست است",
        (value) => {
          if (isNumeric(value)) {
            return true;
          }
        }
      ),
      website: defaultError.test(
        "isWebsite",
        "آردس وبسایت وارد شده نادرست است",
        (value) => {
          if (value && value.length > 0) {
            return Boolean(isUrl(value));
          }
        }
      ),
      userMobileNumber: defaultError.test(
        "isMobile",
        "شماره موبایل وارد شده نادرست است",
        (value) => {
          if (value && value.length > 0) {
            return Boolean(isMobile(value));
          }
        }
      ),
      userEmail: defaultError.email("ایمیل وارد شده نادرست است"),
      address: defaultError,
      deviceName: defaultError,
      brand: defaultError,
      country: defaultError,
      orderedByName: defaultError,
      orderedByLastName: defaultError,
      orderedByMobileNumber: defaultError,
      imageUrl: Yup.mixed().optional(),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();

      // @ts-ignore
      formData.append("DeviceId", deviceInitialValues?.deviceId);
      formData.append("CompanyName", values.companyName);
      formData.append("ManagerFullName", values.managerFullName);
      formData.append("FaxNumber", values.faxNumber);
      formData.append("Website", values.website);
      formData.append("Address", values.address);
      formData.append("DeviceName", values.deviceName);
      formData.append("Brand", values.brand);
      formData.append("Country", values.country);
      formData.append("OrderedByName", values.orderedByName);
      formData.append("OrderedByLastName", values.orderedByLastName);
      formData.append("OrderedByMobileNumber", values.orderedByMobileNumber);
      formData.append("Image", values.imageUrl);
      // @ts-ignore
      formData.append("IsImageChangedOrDeleted", isImgChanged);
      console.log(formData.get("IsImageChangedOrDeleted"));
      const updateUserDeviceRes = await updateUserDevice(
        formData,
        Cookies.get("token")!
      );

      if (updateUserDeviceRes?.status === 200) {
        toast.success(updateUserDeviceRes.message);
      } else {
        toast.error(updateUserDeviceRes?.message);
      }
    },
  });
  const deleteUserDevice = async () => {
    const deleteUserDeviceRes = await deleteUserDeviceHandler(
      { deviceID: deviceInitialValues?.deviceId! },
      Cookies.get("token")!
    );
    if (deleteUserDeviceRes?.status === 200) {
      toast.success(deleteUserDeviceRes.message);
      back();
      refresh();
    } else {
      toast.error(deleteUserDeviceRes?.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full mb-6 flex flex-col bg-menuBg shadow-adminFormBox p-4 rounded-[12px] border-adminFormBorder2 mt-6`}
    >
      <div className="w-full grid grid-cols-2 gap-7 pb-8 border-b border-adminFormBorder">
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="companyName"
            label="نام کامل شرکت"
            value={values?.companyName ? values.companyName : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="managerFullName"
            label="نام و نام خانوادگی مدیر عامل"
            value={values?.managerFullName}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="faxNumber"
            label="فکس"
            value={values?.faxNumber ? values.faxNumber : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="website"
            label="آدرس وب سایت"
            value={values?.website ? values.website : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="userMobileNumber"
            label="شماره تماس شرکت"
            value={values?.userMobileNumber ? values.userMobileNumber : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="userEmail"
            label="ایمیل"
            value={values?.userEmail ? values.userEmail : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2">
          <AuthInput
            name="address"
            label="ادرس شرکت"
            value={values?.address ? values.address : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-7">
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="deviceName"
            label="نام دستگاه"
            value={values?.deviceName ? values.deviceName : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="brand"
            label="مارک دستگاه"
            value={values?.brand ? values.brand : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="country"
            label="کشور سازنده"
            value={values?.country ? values.country : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="orderedByName"
            label="نام سفارش دهنده"
            value={values?.orderedByName ? values.orderedByName : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="orderedByLastName"
            label="نام خانوادگی سفارش دهنده"
            value={values?.orderedByLastName ? values.orderedByLastName : ""}
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AuthInput
            name="orderedByMobileNumber"
            label="شماره تماس سفارش دهنده"
            value={
              values?.orderedByMobileNumber ? values.orderedByMobileNumber : ""
            }
            onChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <ImageInput
            title="تصویر دستگاه"
            desc="در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت ."
            // @ts-ignore
            value={values?.imageUrl}
            setFieldValue={setFieldValue}
            name="imageUrl"
            setIsImgChanged={setIsImgChanged}
          />
        </div>
        <div className="col-span-2 md:col-span-1 justify-between flex items-center">
          <div className="flex">
            <Button
              text="حذف محصول"
              color="text-redColor"
              bg="bg-redColorLight"
              border="border border-redColor"
              rounded="rounded-[6px]"
              padding="px-4 py-2"
              onClick={deleteUserDevice}
              icon={
                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-95"
                >
                  <path
                    d="M25 6.97786C21.115 6.59286 17.2067 6.39453 13.31 6.39453C11 6.39453 8.69 6.5112 6.38 6.74453L4 6.97786"
                    stroke="#C92626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.416 5.79898L10.6727 4.27065C10.8593 3.16232 10.9993 2.33398 12.971 2.33398H16.0277C17.9994 2.33398 18.151 3.20898 18.326 4.28232L18.5827 5.79898"
                    stroke="#C92626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.4911 10.6621L21.7328 22.4104C21.6045 24.2421 21.4995 25.6654 18.2445 25.6654H10.7545C7.49948 25.6654 7.39448 24.2421 7.26615 22.4104L6.50781 10.6621"
                    stroke="#C92626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5508 19.25H16.4358"
                    stroke="#C92626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.584 14.584H17.4173"
                    stroke="#C92626"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            />
          </div>
          <div className="flex">
            <Button
              type="submit"
              text="ذخیره اطلاعات"
              color="text-white"
              bg="bg-primaryDark6"
              // border="border border-redColor"
              rounded="rounded-[6px]"
              padding="py-2 px-20"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SingleUserDevice;
