import React, { useState } from "react";
import AuthInput from "../../main/input/AuthInput";
import FormButton from "../../main/button/FormButton";
import { authToggler, setIsLoggedIn } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import useValidation from "@/utills/validation/auth/validation";
import {
  InitialValues,
  ValidationSchemaType,
} from "@/utills/validation/auth/types";
import { useFormik } from "formik";
import { signupHandler } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Signup = ({
  setIsOpen,
  setAuthAction,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAuthAction: React.Dispatch<
    React.SetStateAction<
      | ""
      | "updatePoster"
      | "updateDeviceNumber"
      | "login"
      | "signup"
      | "forgotPassword"
      | "changePassword"
    >
  >;
}) => {
  const { refresh } = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const [initialValues, validationSchema] = useValidation("signup")! as [
    initialValues: InitialValues,
    validationSchema: ValidationSchemaType
  ];

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const response = await signupHandler(values);
        // if (response !== undefined && response.message) {
        //   if (response.status === 409) {
        //     toast.error(response.message);
        //   }
        // }
        if (response?.status === 200 && response.message) {
          setLoading(false);
          toast.success(response.message);
          dispatch(authToggler(""));
          dispatch(setIsLoggedIn(true));
          setIsOpen(false);
          refresh();
        } else {
          setLoading(false);
          toast.error(response?.message);
        }
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <AuthInput
        name="email"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        label="نام کاربری"
        onChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
      <AuthInput
        name="managerFullName"
        placeholder="نام مدیرعامل شرکت خود را وارد کنید"
        label="نام مدیرعامل شرکت"
        onChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
      <AuthInput
        name="mobileNumber"
        placeholder="شماره تلفن خود را وارد کنید"
        label="شماره تلفن"
        onChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
      <AuthInput
        name="password"
        placeholder="رمز عبور خود را وارد کنید"
        label="رمز عبور"
        onChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
      />
      <div className="w-full mt-10">
        <FormButton text="ثبت نام" loading={loading} />
      </div>
      <div className="w-full flex justify-center items-center my-10">
        <p className="text-[#A0AEC0]">
          قبلا ثبت نام کردید؟{" "}
          <span
            className="underline cursor-pointer text-primary"
            onClick={() => {
              setAuthAction("login");
            }}
          >
            ورود به حساب کاربری
          </span>
        </p>
      </div>{" "}
    </form>
  );
};

export default Signup;
