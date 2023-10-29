import React from "react";
import AuthInput from "@/components/main/input/AuthInput";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { authToggler, setIsLoggedIn } from "@/redux/features/auth/authSlice";
import FormButton from "../../main/button/FormButton";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import { loginHandler } from "@/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useAppDispatch();
  const { push, refresh } = useRouter();
  const [initialValues, validationSchema] = useValidation("login")!;

  const { errors, handleBlur, handleChange, handleSubmit, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const response = await loginHandler(values);
        if (response) {
          if (response.status === 200 && response.message) {
            toast.success(response.message);
            dispatch(setIsLoggedIn(true));
            setTimeout(() => {
              // dispatch(authToggler(""));
              setIsOpen(false);
              refresh();
            }, 1500);
            if (response.role === "admin") {
              push("panel/statistics");
            }
          } else if (response?.status === 400) {
            if (response.message) {
              toast.error(response.message);
            }
          }
        }
      },
    }
  );

  return (
    <>
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
        <div className="mt-20 mb-4 text-[14px] flex justify-center items-center">
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
    </>
  );
};

export default Login;
