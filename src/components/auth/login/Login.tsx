import React from "react";
import AuthInput from "@/components/main/input/AuthInput";
import { useAppDispatch } from "@/redux/hooks/hooks";
import {
  authToggler,
  setIsLoggedIn,
  setShowForm,
} from "@/redux/features/auth/authSlice";
import FormButton from "../../main/button/FormButton";
import FormLayout from "../layout/FormLayout";
import { InitialValues } from "@/utills/validation/auth/types";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import { loginHandler } from "@/services/auth";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const Login = () => {
  const dispatch = useAppDispatch();
  const [initialValues, validationSchema] = useValidation("login")!;

  const { errors, handleBlur, handleChange, handleSubmit, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const response = await loginHandler(values);
        if (response) {
          if (response.status === 200 && response.message) {
            toast.success(response.message, { duration: 3000 });
            dispatch(setIsLoggedIn(true));
            setTimeout(() => {
              dispatch(authToggler(""));
            }, 1500);
          } else if (response?.status === 400) {
            if (response.message) {
              toast.error(response.message, {
                duration: 3000,
              });
            }
          }
        }
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <AuthInput
        label="نام کاربری"
        placeholder="ایمیل خود را وارد کنید"
        name="email"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <AuthInput
        label="رمز عبور"
        placeholder="رمز عبور خود را وارد کنید"
        name="password"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <div className="w-full mt-10">
        <FormButton text="ورود" />
      </div>
      <div className="w-full mt-3">
        <FormButton
          onClick={() => dispatch(authToggler("forgotPassword"))}
          text="فراموشی رمزعبور"
          bg="bg-primaryLight"
          textColor="text-primary"
          border="border-2 border-primary"
        />
      </div>
      <div className="mt-20 mb-4 flex justify-center items-center">
        <p className="text-[#A0AEC0]">
          آیا حساب کاربری ندارید؟{" "}
          <span
            className="underline cursor-pointer text-primary"
            onClick={() => dispatch(authToggler("signup"))}
          >
            ساخت حساب کاربری
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
