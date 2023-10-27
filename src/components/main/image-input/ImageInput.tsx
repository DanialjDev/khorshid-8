import { imageValidation } from "@/utills/imageValidation";
import { InitialValues } from "@/utills/validation/auth/types";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent, useMemo, useRef } from "react";
import Button from "../button/Button";

const ImageInput = ({
  title,
  desc,
  handleBlur,
  touched,
  name,
  errors,
  disabled,
  bg,
  border,
  setFieldValue,
  value,
  setIsImgChanged,
}: {
  title: string;
  desc: string;
  errors?: string;
  touched?: boolean;
  handleBlur?: (e: React.FocusEvent<any, Element>) => void;
  name: string;
  disabled?: boolean;
  bg?: string;
  border?: string;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<PanelInitialValues>>;
  value?: File;
  setIsImgChanged?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={`w-full p-2  ${errors && touched ? "border-redColor" : ""} ${
          bg ? bg : "bg-menuBg"
        } ${
          border ? border : "border border-profileBorderColor"
        } grid grid-cols-8 gap-2 shadow-md justify-between items-stretch rounded-lg`}
      >
        <input
          onChange={(e) => {
            if (e.target.files !== null) {
              setFieldValue(name, e.target.files[0], true);
              console.log(value);
            }
            if (setIsImgChanged) {
              setIsImgChanged(true);
            }
          }}
          type="file"
          className="hidden"
          name={name}
          id={name}
          onBlur={handleBlur}
          disabled={disabled}
        />
        <div className="flex sm2:col-span-6 col-span-5 flex-col justify-between items-start">
          <div className="w-full flex justify-between items-start">
            <div className="w-fit flex items-start">
              <div className="flex justify-center items-center">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7369 0.761748H5.08489C3.00489 0.753748 1.30089 2.41075 1.25089 4.49075V15.2277C1.20589 17.3297 2.87389 19.0697 4.97489 19.1147C5.01189 19.1147 5.04889 19.1157 5.08489 19.1147H13.0729C15.1629 19.0407 16.8149 17.3187 16.8029 15.2277V6.03775L11.7369 0.761748Z"
                    stroke="#060607"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.4746 0.75V3.659C11.4746 5.079 12.6236 6.23 14.0436 6.234H16.7976"
                    stroke="#060607"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.64062 7.90869V13.9497"
                    stroke="#060607"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.9869 10.2642L8.64188 7.90918L6.29688 10.2642"
                    stroke="#060607"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p className="mr-2 sm:text-[14px] text-[13px]">{title}</p>
            </div>
            <div className="flex justify-center items-center">
              <Button
                onClick={() => {
                  setFieldValue(name, "", true);
                  if (setIsImgChanged) {
                    setIsImgChanged(true);
                  }
                }}
                bg="bg-redColorLight"
                padding="p-2"
                border="border border-redColor"
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
                      d="M24.5 6.97738C20.615 6.59238 16.7067 6.39404 12.81 6.39404C10.5 6.39404 8.19 6.51071 5.88 6.74404L3.5 6.97738"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.91699 5.7985L10.1737 4.27016C10.3603 3.16183 10.5003 2.3335 12.472 2.3335H15.5287C17.5003 2.3335 17.652 3.2085 17.827 4.28183L18.0837 5.7985"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0518 19.25H15.9368"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.083 14.5835H16.9163"
                      stroke="#E21414"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <p className="text-[12px]">{desc}</p>
          </div>
        </div>
        <label
          htmlFor={name}
          className=" flex sm2:col-span-2 col-span-3 justify-end items-stretch"
        >
          <div
            className={`w-[80px] h-full cursor-pointer p-2 flex justify-center items-center border rounded-[4px] border-dashed ${
              value ? "border-posterBoxActiveBorder" : "bg-primaryLight4"
            } `}
          >
            {!value ? (
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-90"
              >
                <path
                  d="M15 10.5V19.5M19.5 15H10.5M28.5 15C28.5 16.7728 28.1508 18.5283 27.4724 20.1662C26.7939 21.8041 25.7995 23.2923 24.5459 24.5459C23.2923 25.7995 21.8041 26.7939 20.1662 27.4724C18.5283 28.1508 16.7728 28.5 15 28.5C13.2272 28.5 11.4717 28.1508 9.83377 27.4724C8.19588 26.7939 6.70765 25.7995 5.45406 24.5459C4.20047 23.2923 3.20606 21.8041 2.52763 20.1662C1.84919 18.5283 1.5 16.7728 1.5 15C1.5 11.4196 2.92232 7.9858 5.45406 5.45406C7.9858 2.92232 11.4196 1.5 15 1.5C18.5804 1.5 22.0142 2.92232 24.5459 5.45406C27.0777 7.9858 28.5 11.4196 28.5 15Z"
                  stroke="#0044FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  fill="#1DC9A0"
                  fill-opacity="0.15"
                  stroke="#1DC9A0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                  stroke="#1DC9A0"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </div>
        </label>
      </div>
      {/* @ts-ignore */}
      {errors && touched && (
        // @ts-ignore
        <p className="text-redColor text-right">{errors}</p>
      )}
    </>
  );
};

export default ImageInput;
