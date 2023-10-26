"use client";

import React, { useState } from "react";
import Button from "@/components/main/button/Button";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import { SingleDeviceObj } from "@/services/profile/admin/register-product-requests/types";
import Cookies from "js-cookie";
import {
  confirmDeviceHandler,
  declineDeviceHandler,
} from "@/services/profile/admin/register-product-requests";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SetDeviceStatusForm = ({
  deviceInitialValues,
}: {
  deviceInitialValues: SingleDeviceObj | null;
}) => {
  const { push, refresh } = useRouter();
  const [initialValues, setInitialValues] = useState<SingleDeviceObj | null>(
    deviceInitialValues
  );
  const [img, setImg] = useState<File | null | string>(
    initialValues?.imageUrl ? initialValues.imageUrl : null
  );
  const [openModal, setOpenModal] = useState(false);

  const confirmDevice = async (deviceID: number) => {
    if (Cookies.get("token")) {
      const confirmDeviceRes = await confirmDeviceHandler(
        {
          deviceID,
          removeImage: img ? false : true,
        },
        Cookies.get("token")!
      );

      if (confirmDeviceRes?.status === 200) {
        toast.success(confirmDeviceRes.message);
        push("/panel/register-product-requests/");
        refresh();
      } else {
        toast.error(confirmDeviceRes?.message);
      }
    }
  };
  console.log(deviceInitialValues);

  const [declinedStateMessage, setDeclinedStateMessage] = useState<
    string | null
  >("");
  const declineDevice = async (deviceID: number) => {
    if (Cookies.get("token")) {
      const declineDeviceRes = await declineDeviceHandler(
        {
          deviceID,
          declinedStateMessage,
        },
        Cookies.get("token")!
      );

      if (declineDeviceRes?.status === 200) {
        toast.success(declineDeviceRes.message);
        push("/panel/register-product-requests/");
        refresh();
      } else {
        toast.error(declineDeviceRes?.message);
      }
      setOpenModal(false);
    }
  };
  return (
    <>
      <div
        className={`w-full overflow-hidden ${
          openModal ? "flex" : "hidden"
        } justify-center items-center fixed right-[40%] translate-x-[40%] bg-[#d7d7d785] backdrop-blur-[2px] z-20 inset-0`}
      >
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            ease: "easeIn",
          }}
          className="sm2:w-[360px] w-[90%] p-2 bg-white shadow-declineBox border border-declineBoxBorder rounded-[4px]"
        >
          <div className="w-full flex justify-between items-center">
            <div
              className="flex justify-center items-center cursor-pointer p-2 hover:bg-[#d7d7d785] rounded-full"
              onClick={() => setOpenModal(false)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L4 12"
                  stroke="#2F384F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 4L12 12"
                  stroke="#2F384F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-declineBoxTitle font-bold">
              عدم تایید دستگاه؟
            </div>
          </div>
          <div className="w-full flex flex-col justify-start px-5 pt-3">
            <div className="text-declineBoxTitle font-normal text-[12px]">
              <span className="w-full block">
                آیا شما از عدم تایید دستگاه مطمئن هستید؟
              </span>
              <span className="">
                عدم تایید به منظوره این است دستگاه در سایت قرار نخواهد گرفت.
              </span>
            </div>
            <div className="w-full flex items-center mt-2">
              <div className="ml-2">
                <Button
                  text="عدم تایید"
                  color="text-white"
                  bg="bg-redColor"
                  fontWeight="font-bold"
                  rounded="rounded-[3px]"
                  padding="py-[5px] px-10"
                  onClick={() => declineDevice(deviceInitialValues?.deviceId!)}
                />
              </div>
              <div className="">
                <Button
                  text="برگشت"
                  color="text-redColor"
                  bg="bg-white"
                  fontWeight="font-bold"
                  rounded="rounded-[3px]"
                  padding="py-[5px] px-10"
                  border="border border-redColor"
                  onClick={() => setOpenModal(false)}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className={`w-full mb-6 ${
          openModal ? "overscroll-none" : ""
        } flex flex-col bg-menuBg shadow-adminFormBox p-4 rounded-[12px] border-adminFormBorder2 mt-6`}
      >
        <div className="w-full grid grid-cols-2 gap-7 pb-8 border-b border-adminFormBorder">
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="companyName"
              label="نام کامل شرکت"
              disabled
              value={
                initialValues?.companyName ? initialValues.companyName : ""
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="fullName"
              label="نام و نام خانوادگی مدیر عامل"
              disabled
              value={
                `${initialValues?.orderedByName} ${initialValues?.orderedByLastName}`
                  ? `${initialValues?.orderedByName} ${initialValues?.orderedByLastName}`
                  : ""
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="faxNumber"
              label="فکس"
              disabled
              value={initialValues?.faxNumber ? initialValues.faxNumber : ""}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="website"
              label="آدرس وب سایت"
              disabled
              value={initialValues?.website ? initialValues.website : ""}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="userMobileNumber"
              label="شماره تماس شرکت"
              disabled
              value={
                initialValues?.userMobileNumber
                  ? initialValues.userMobileNumber
                  : ""
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="userEmail"
              label="ایمیل"
              disabled
              value={initialValues?.userEmail ? initialValues.userEmail : ""}
            />
          </div>
          <div className="col-span-2">
            <AuthInput
              name="userEmail"
              label="ادرس شرکت"
              disabled
              value={initialValues?.address ? initialValues.address : ""}
            />
          </div>
          <div className="col-span-2">
            <AuthInput
              name="userEmail"
              label="گروه تخصصی کاربردی"
              disabled
              // @ts-ignore
              value={initialValues?.categories.map((item) =>
                item.categoryName.split(",")
              )}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-7">
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="name"
              label="نام دستگاه"
              disabled
              value={initialValues?.name ? initialValues.name : ""}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="brand"
              label="مارک دستگاه"
              disabled
              value={initialValues?.brand ? initialValues.brand : ""}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="country"
              label="کشور سازنده"
              disabled
              value={initialValues?.country ? initialValues.country : ""}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="orderedByName"
              label="نام سفارش دهنده"
              disabled
              value={
                initialValues?.orderedByName ? initialValues.orderedByName : ""
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="orderedByLastName"
              label="نام خانوادگی سفارش دهنده"
              disabled
              value={
                initialValues?.orderedByLastName
                  ? initialValues.orderedByLastName
                  : ""
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <AuthInput
              name="orderedByMobileNumber"
              label="شماره تماس سفارش دهنده"
              disabled
              value={
                initialValues?.orderedByMobileNumber
                  ? initialValues.orderedByMobileNumber
                  : ""
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <ImageInput
              title="تصویر دستگاه"
              desc="در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت ."
              disabled
              // @ts-ignore
              value={initialValues?.imageUrl}
            />
          </div>
          <div className="col-span-2 flex flex-col items-stretch md:col-span-1">
            <div className="whitespace-nowrap flex gap-x-4 text-[14px]">
              <Button
                onClick={() => confirmDevice(initialValues?.deviceId!)}
                rounded="rounded-[5px]"
                bg="bg-confirmBtnBg"
                border="border-posterBoxActiveBorder border"
                padding="px-6 py-1"
                text="تایید"
                icon={
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 18 6.5 22.5 12 22.5Z"
                      fill="#1DC9A0"
                      fill-opacity="0.15"
                      stroke="#1DC9A0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.75 12.4999L10.58 15.3299L16.25 9.66992"
                      stroke="#1DC9A0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
              <Button
                rounded="rounded-[5px]"
                bg="bg-denyBtnBg"
                border="border-redColor border"
                padding="pl-8 pr-7 py-1"
                text="رد"
                onClick={() => {
                  if (!declinedStateMessage) {
                    toast.warning("لطفا دلیل در دستگاه را وارد نمایید");
                    setDeclinedStateMessage(null);
                    return;
                  }
                  setOpenModal(true);
                }}
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7L11 11L15 7ZM11 11L7 15L11 11ZM11 11L7 7L11 11ZM11 11L15 15L11 11Z"
                      fill="#E21414"
                      fill-opacity="0.15"
                    />
                    <path
                      d="M15 7L11 11M11 11L7 15M11 11L7 7M11 11L15 15"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                      fill="#E21414"
                      fill-opacity="0.15"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                color="text-redColor"
              />
            </div>
            <div className="w-full">
              <AuthInput
                name="declinedStateMessage"
                // @ts-ignore
                value={declinedStateMessage}
                // @ts-ignore
                onChange={(e) => setDeclinedStateMessage(e.target.value)}
                mt="m-0"
                placeholder="دلیل در درخواست"
                helperText={
                  declinedStateMessage === null
                    ? " دلیل رد دستگاه را وارد کنید"
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetDeviceStatusForm;
