import FormButton from "@/components/main/button/FormButton";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import React, { useState } from "react";

const UpdatePosterModal = () => {
  const [img, setImg] = useState<File | null>(null);
  const [initialValues, validationSchema] = usePanelValidation("updatePoster")!;
  const { handleBlur, errors, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => console.log(values),
    });
  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="w-full my-2">
        <ImageInput
          img={img}
          setImg={setImg}
          title="بارگذاری تصویر"
          desc="در ابعاد 270 × 200 پیکسل ، حجم کمتر از 1 مگابایت ."
        />
      </div>
      <div className="w-full">
        <AuthInput
          label="لینک مربوط به عکس"
          placeholder="URL"
          name="Link"
          onChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          touched={touched}
          // @ts-ignore
          value={values.Link}
        />
      </div>
      <div className="w-full my-5">
        <FormButton text="ثبت تصویر" bg="bg-primary" />
      </div>
    </form>
  );
};

export default UpdatePosterModal;
