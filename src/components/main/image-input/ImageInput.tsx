import { imageValidation } from "@/utills/imageValidation";
import { InitialValues } from "@/utills/validation/auth/types";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent, useMemo, useRef } from "react";
import Button from "../button/Button";

const ImageInput = ({
  title,
  desc,
  img,
  setImg,
  handleBlur,
  touched,
  isRequired,
  name,
  errors,
  handleChange,
  inputRef,
  removeImg,
}: {
  title: string;
  desc: string;
  img: File | null;
  setImg: React.Dispatch<React.SetStateAction<File | null>>;
  errors?: FormikErrors<PanelInitialValues | InitialValues>;
  touched?: FormikTouched<PanelInitialValues | InitialValues>;
  handleChange?: (e: ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any, Element>) => void;
  handleReset?: (e: any) => void;
  isRequired?: boolean;
  name?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  removeImg?: () => void;
}) => {
  return (
    // <div className="2xl:col-span-1 xl:col-span-2 col-span-3 h-full">
    //   <div
    //     className={`grid grid-cols-9 justify-between gap-5 w-full ${validationStyle} shadow-xs rounded-lg p-4 sm2:h-[120px] h-full`}
    //   >
    //     <div className="flex flex-col lg:col-span-6 sm2:col-span-5 col-span-9 justify-between h-full">
    //       <div className="flex items-start justify-between w-full">
    //         <div className="flex ">
    //           <svg
    //             width="18"
    //             height="20"
    //             viewBox="0 0 18 20"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M11.7369 0.761748H5.08489C3.00489 0.753748 1.30089 2.41075 1.25089 4.49075V15.2277C1.20589 17.3297 2.87389 19.0697 4.97489 19.1147C5.01189 19.1147 5.04889 19.1157 5.08489 19.1147H13.0729C15.1629 19.0407 16.8149 17.3187 16.8029 15.2277V6.03775L11.7369 0.761748Z"
    //               stroke="#060607"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M11.4746 0.75V3.659C11.4746 5.079 12.6236 6.23 14.0436 6.234H16.7976"
    //               stroke="#060607"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M8.64062 7.90869V13.9497"
    //               stroke="#060607"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //             <path
    //               d="M10.9869 10.2642L8.64188 7.90918L6.29688 10.2642"
    //               stroke="#060607"
    //               strokeWidth="1.5"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //           <p className="mr-2 text-dark lg:text-[14px] text-[12px]">
    //             بارگذاری تصویر دستگاه
    //           </p>
    //         </div>
    //       </div>
    //       <div className="w-full text-[#979797] lg:text-[14px] text-[12px]">
    //         {!img ? (
    //           <p>در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت .</p>
    //         ) : (
    //           <p className="text-secondary">تصویر بارگذاری شد</p>
    //         )}
    //       </div>
    //     </div>
    //     <div className="lg:col-span-3 sm2:col-span-4 col-span-9 flex items-start flex-row-reverse gap-x-4 justify-self-end sm2:h-full h-[100px] cursor-pointer">
    //       <label
    //         htmlFor="inputFile"
    //         className={`w-[100px] rounded-md cursor-pointer flex justify-center items-center border-2 ${
    //           img
    //             ? "bg-[#F0F0F0] border-secondary"
    //             : "bg-[#eceff6] border-primary"
    //         }  border-dashed h-full `}
    //       >
    //         {/* @ts-ignore */}
    //         {!img ? (
    //           <svg
    //             width="36"
    //             height="36"
    //             viewBox="0 0 36 36"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M18 13.5V22.5M22.5 18H13.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
    //               stroke="#0044FF"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             width="32"
    //             height="32"
    //             viewBox="0 0 32 32"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               d="M15.9993 29.3332C23.3327 29.3332 29.3327 23.3332 29.3327 15.9998C29.3327 8.6665 23.3327 2.6665 15.9993 2.6665C8.66602 2.6665 2.66602 8.6665 2.66602 15.9998C2.66602 23.3332 8.66602 29.3332 15.9993 29.3332Z"
    //               fill="white"
    //               fill-opacity="0.15"
    //               stroke="#54E346"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <path
    //               d="M10.334 15.9999L14.1073 19.7732L21.6673 12.2266"
    //               stroke="#54E346"
    //               stroke-width="1.5"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </svg>
    //         )}
    //         <input
    //           accept=".png"
    //           type="file"
    //           onBlur={handleBlur}
    //           onChange={(e) => {
    //             // @ts-ignore
    //             setImg(e.target.files[0]);
    //           }}
    //           className="hidden"
    //           name={name}
    //           id="inputFile"
    //         />
    //       </label>
    //       <button
    //         type="button"
    //         name={name}
    //         id={name}
    //         onClick={() => {
    //           // @ts-ignore
    //           setImg(null);
    //           if (inputRef.current) {
    //             // @ts-ignore
    //             inputRef.current.value = "";
    //           }
    //           // @ts-ignore
    //           console.log(img);
    //         }}
    //         className="flex justify-center items-center md:p-2 p-1 border border-[#E21414] rounded-md bg-[#f6e1e1]"
    //       >
    //         <svg
    //           width="28"
    //           height="28"
    //           viewBox="0 0 28 28"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M24.5 6.97738C20.615 6.59238 16.7067 6.39404 12.81 6.39404C10.5 6.39404 8.19 6.51071 5.88 6.74404L3.5 6.97738"
    //             stroke="#E21414"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M9.91699 5.7985L10.1737 4.27016C10.3603 3.16183 10.5003 2.3335 12.472 2.3335H15.5287C17.5003 2.3335 17.652 3.2085 17.827 4.28183L18.0837 5.7985"
    //             stroke="#E21414"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
    //             stroke="#E21414"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M12.0518 19.25H15.9368"
    //             stroke="#E21414"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //           <path
    //             d="M11.083 14.5835H16.9163"
    //             stroke="#E21414"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   {/* @ts-ignore */}
    //   {!img ? (
    //     // @ts-ignore
    //     <p className="text-borderError mt-2">
    //       {/* @ts-ignore */}
    //       {errorMsg}
    //     </p>
    //   ) : null}
    // </div>
    <>
      <div
        className={`w-full p-2 ${
          // @ts-ignore
          errors["Image"] && touched["Image"] ? "border border-redColor" : ""
        } grid grid-cols-8 gap-2 shadow-md justify-between items-stretch rounded-lg`}
      >
        <input
          ref={inputRef}
          onChange={handleChange}
          type="file"
          className="hidden"
          name={name}
          id={name}
          onBlur={handleBlur}
        />
        <div className="flex col-span-6 flex-col justify-between items-start">
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
              <p className="mr-2 text-[14px]">{title}</p>
            </div>
            <div className="flex justify-center items-center">
              <Button
                onClick={removeImg}
                bg="bg-redColorLight"
                // width="w-[50px]"
                padding="p-2"
                border="border border-redColor"
                icon={
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
            <p className="text-[12px]">
              در ابعاد 270 × 200 پیکسل ، حجم کمتر از 1 مگابایت .
            </p>
          </div>
        </div>
        <label
          htmlFor={name}
          className=" flex col-span-2 justify-end items-stretch"
        >
          <div
            className={`w-[80px] h-full cursor-pointer p-2 flex justify-center items-center border rounded-[4px] border-dashed bg-primaryLight4`}
          >
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
          </div>
        </label>
      </div>
      {/* @ts-ignore */}
      {errors && touched && errors["Image"] && (
        // @ts-ignore
        <p className="text-redColor">{errors["Image"]}</p>
      )}
    </>
  );
};

export default ImageInput;
