"use client";

import AuthInput from "@/components/main/input/AuthInput";
import Textarea from "@/components/main/input/Textarea";
import { contactUsPost } from "@/services/contact-us";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [initialValues, validationSchema] = useValidation("contact-us")!;

  const { handleSubmit, handleChange, handleBlur, errors, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const response = await contactUsPost(values);
        console.log(response);

        if (response?.status === 200 && response.message) {
          toast.success(response.message, {
            autoClose: 2500,
            style: {
              width: "max-content",
            },
          });
        } else {
          toast.error(response?.message, {
            autoClose: 2500,
            style: {
              width: "max-content",
            },
          });
        }
      },
    }
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-5 w-full h-full"
    >
      <div className="sm:col-span-1 col-span-2">
        <AuthInput
          errors={errors}
          handleBlur={handleBlur}
          onChange={handleChange}
          touched={touched}
          label="نام"
          name="firstName"
        />
      </div>
      <div className="sm:col-span-1 col-span-2">
        <AuthInput
          label="نام خانوادگی"
          name="lastName"
          errors={errors}
          handleBlur={handleBlur}
          onChange={handleChange}
          touched={touched}
        />
      </div>
      <div className="col-span-2">
        <AuthInput
          errors={errors}
          handleBlur={handleBlur}
          onChange={handleChange}
          touched={touched}
          label="شماره تماس"
          name="phoneNumber"
        />
      </div>
      <div className="col-span-2">
        <Textarea
          errors={errors}
          handleBlur={handleBlur}
          onChange={handleChange}
          touched={touched}
          label="متن پیام"
          name="comment"
        />
      </div>
      <div className="col-span-2 mt-8">
        <button
          type="submit"
          className="bg-secondary py-[10px] rounded-lg text-white !w-full"
        >
          ارسال فرم
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
