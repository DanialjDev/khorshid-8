import { imageValidation } from "@/utills/imageValidation";
import { InitialValues } from "@/utills/validation/auth/types";
import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEvent } from "react";

const ImageInput = ({
  title,
  desc,
  img,
  setImg,
  errors,
  handleBlur,
  onChange,
}: {
  title: string;
  desc: string;
  img: File | null;
  setImg: React.Dispatch<React.SetStateAction<File | null>>;
  errors?: FormikErrors<InitialValues>;
  touched?: FormikTouched<InitialValues>;
  onChange: (e: ChangeEvent<any>) => void;
  handleBlur?: (e: React.FocusEvent<any, Element>) => void;
}) => {
  return (
    <div className="2xl:col-span-1 xl:col-span-2 col-span-3 h-full">
      <div
        className={`grid grid-cols-9 gap-5 w-full ${
          // @ts-ignore
          errors["Image"] && touched["Image"] ? "border border-borderError" : ""
        } shadow-xs rounded-lg p-4 h-[120px]`}
      >
        <div className="flex flex-col md:col-span-7 col-span-6 justify-between h-full">
          <div className="flex items-start justify-between w-full">
            <div className="flex ">
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.4746 0.75V3.659C11.4746 5.079 12.6236 6.23 14.0436 6.234H16.7976"
                  stroke="#060607"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.64062 7.90869V13.9497"
                  stroke="#060607"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9869 10.2642L8.64188 7.90918L6.29688 10.2642"
                  stroke="#060607"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="mr-2 text-dark lg:text-[16px] md:text-[14px]">
                بارگذاری تصویر دستگاه
              </p>
            </div>
            <button
              type="button"
              onClick={() => setImg(null)}
              className="flex justify-center items-center md:p-2 p-1 border border-[#E21414] rounded-md bg-[#f6e1e1]"
            >
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.91699 5.7985L10.1737 4.27016C10.3603 3.16183 10.5003 2.3335 12.472 2.3335H15.5287C17.5003 2.3335 17.652 3.2085 17.827 4.28183L18.0837 5.7985"
                  stroke="#E21414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.9921 10.6631L21.2338 22.4114C21.1055 24.2431 21.0005 25.6664 17.7455 25.6664H10.2555C7.00046 25.6664 6.89546 24.2431 6.76712 22.4114L6.00879 10.6631"
                  stroke="#E21414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0518 19.25H15.9368"
                  stroke="#E21414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.083 14.5835H16.9163"
                  stroke="#E21414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-full text-[#979797] lg:text-base text-sm">
            {!img ? (
              <p>در ابعاد 214 × 214 پیکسل ، حجم کمتر از 1 مگابایت .</p>
            ) : (
              <p className="text-secondary">تصویر بارگذاری شد</p>
            )}
          </div>
        </div>
        <div className="md:col-span-2 col-span-3 h-full cursor-pointer">
          <label
            htmlFor="inputFile"
            className={`w-full rounded-md cursor-pointer flex justify-center items-center border-2 ${
              img
                ? "bg-[#F0F0F0] border-secondary"
                : "bg-[#eceff6] border-primary"
            }  border-dashed h-full `}
          >
            {/* @ts-ignore */}
            {!file ? (
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13.5V22.5M22.5 18H13.5M31.5 18C31.5 19.7728 31.1508 21.5283 30.4724 23.1662C29.7939 24.8041 28.7995 26.2923 27.5459 27.5459C26.2923 28.7995 24.8041 29.7939 23.1662 30.4724C21.5283 31.1508 19.7728 31.5 18 31.5C16.2272 31.5 14.4717 31.1508 12.8338 30.4724C11.1959 29.7939 9.70765 28.7995 8.45406 27.5459C7.20047 26.2923 6.20606 24.8041 5.52763 23.1662C4.84919 21.5283 4.5 19.7728 4.5 18C4.5 14.4196 5.92232 10.9858 8.45406 8.45406C10.9858 5.92232 14.4196 4.5 18 4.5C21.5804 4.5 25.0142 5.92232 27.5459 8.45406C30.0777 10.9858 31.5 14.4196 31.5 18Z"
                  stroke="#0044FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9993 29.3332C23.3327 29.3332 29.3327 23.3332 29.3327 15.9998C29.3327 8.6665 23.3327 2.6665 15.9993 2.6665C8.66602 2.6665 2.66602 8.6665 2.66602 15.9998C2.66602 23.3332 8.66602 29.3332 15.9993 29.3332Z"
                  fill="white"
                  fill-opacity="0.15"
                  stroke="#54E346"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.334 15.9999L14.1073 19.7732L21.6673 12.2266"
                  stroke="#54E346"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            <input
              accept=".png"
              type="file"
              onBlur={handleBlur}
              onChange={(e) => {
                if (e.target.files) {
                  setImg(e.target.files[0]);
                }
                console.log(e.target.value);
                onChange(e);
                imageValidation(e);
                // console.log(file);
              }}
              className="hidden"
              name="Image"
              id="inputFile"
            />
          </label>
        </div>
      </div>
      {/* @ts-ignore */}
      {!file ? (
        // @ts-ignore
        <p className="text-borderError mt-2">{errors["Image"]}</p>
      ) : null}
    </div>
  );
};

export default ImageInput;
