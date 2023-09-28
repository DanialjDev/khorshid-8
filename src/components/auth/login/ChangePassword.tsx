import FormButton from "@/components/main/button/FormButton";
import Input from "@/components/main/input/AuthInput";
import { useAppDispatch } from "@/redux/hooks/hooks";
import useValidation from "@/utills/validation/auth/validation";
import { useFormik } from "formik";
import React from "react";

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const [initialValues, validationSchema] = useValidation("changePassword")!;

  const { errors, handleBlur, handleChange, handleSubmit, touched } = useFormik(
    {
      initialValues,
      validationSchema,
      onSubmit: (values) => console.log(values),
    }
  );
  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="otpCode"
        placeholder="کد تایید را وارد کنید"
        label="کد تایید"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <Input
        name="password"
        placeholder="رمز عبور را وارد کنید"
        label="رمز عبور"
        errors={errors}
        handleBlur={handleBlur}
        onChange={handleChange}
        touched={touched}
      />
      <Input
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
