import React, { useState } from "react";
import FormButton from "@/components/main/button/FormButton";
import Input from "@/components/main/input/AuthInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { changePasswordHandler } from "@/services/auth";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { authToggler } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const { email } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [initialValues, validationSchema] = useValidation("changePassword")!;

  const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        setLoading(true);
        const data = {
          ...values,
          email,
        };
        const response = await changePasswordHandler(data);
        if (response && response.message) {
          if (response.status === 200) {
            setLoading(false);
            toast.success(response.message);
            dispatch(authToggler("login"));
          } else {
            toast.error(response.message);
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
        <FormButton loading={loading} text="ذخیره تغییرات" />
      </div>
    </form>
  );
};

export default ChangePassword;
