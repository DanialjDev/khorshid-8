import React from "react";
import FormButton from "@/components/main/button/FormButton";
import Input from "@/components/main/input/AuthInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { changePasswordHandler } from "@/services/auth";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { authToggler } from "@/redux/features/auth/authSlice";

const ChangePassword = () => {
  const { email } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [initialValues, validationSchema] = useValidation("changePassword")!;

  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const data = {
          ...values,
          email,
        };
        const response = await changePasswordHandler(data);
        if (response && response.message) {
          if (response.status === 200) {
            toast.success(response.message, { autoClose: 3000 });
            dispatch(authToggler("login"));
          } else {
            toast.error(response.message, { autoClose: 3000 });
          }
        }
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <Input
        // @ts-ignore
        value={values.verificationCode}
        name="verificationCode"
        placeholder="کد تایید را وارد کنید"
        label="کد تایید"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <Input
        // @ts-ignore
        value={values.password}
        name="password"
        placeholder="رمز عبور را وارد کنید"
        label="رمز عبور"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <Input
        // @ts-ignore
        value={values.confirmPassword}
        name="confirmPassword"
        placeholder="رمز عبور جدید را وارد کنید"
        label="رمز عبور جدید"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <div className="w-full flex justify-center items-center mt-28 mb-10">
        <FormButton text="ذخیره تغییرات" />
      </div>
    </form>
  );
};

export default ChangePassword;
