import FormButton from "@/components/main/button/FormButton";
import AuthInput from "@/components/main/input/AuthInput";
import { authToggler, setEmail } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { forgotPasswordHandler } from "@/services/auth";
import { InitialValues } from "@/utills/validation/auth/types";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const [initialValues, validationSchema] = useValidation("forgotPassword")!;

  const { errors, handleBlur, handleChange, handleSubmit, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: async (values: InitialValues) => {
        const response = await forgotPasswordHandler(values);

        if (response) {
          if (response.status === 500 && response.message) {
            toast.error(response.message);
          }
          if (response.status === 200 && response.message) {
            toast.success(response.message);
            dispatch(authToggler("changePassword"));
            // @ts-ignore
            dispatch(setEmail(values.email));
          }
        }
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <AuthInput
        name="email"
        placeholder="ایمیل خود را وارد کنید"
        label="نام کاربری"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <div className="w-full mt-10 mb-20">
        <FormButton text="ارسال کد تایید" />
      </div>
    </form>
  );
};

export default ForgotPassword;
