import React, { useState } from "react";
import FormButton from "@/components/main/button/FormButton";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import { useAppSelector } from "@/redux/hooks/hooks";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import { updateHomePagePosters } from "@/services/profile/admin/posters";
import Cookies from "js-cookie";

const UpdatePosterModal = () => {
  const { isLinkRequired, updateAction } = useAppSelector(
    (state) => state.auth
  );
  const token = Cookies.get("token");
  const [img, setImg] = useState<File | null>(null);
  const [initialValues, validationSchema] = usePanelValidation(
    "updatePoster",
    isLinkRequired
  )!;
  const { handleBlur, errors, handleChange, handleSubmit, touched, values } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        const formData = new FormData();
        if (updateAction === "homeSideBanner") {
          // @ts-ignore
          formData.append("Image", img);
          if (isLinkRequired) {
            // @ts-ignore
            formData.append("Link", values.Link);
          }
          if (token) {
            const response = await updateHomePagePosters(formData, token);
          }
          console.log(formData.get("Image"));
        }
      },
    });
  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="w-full my-2">
        <ImageInput
          img={img}
          setImg={setImg}
          title="بارگذاری تصویر"
          desc="در ابعاد 270 × 200 پیکسل ، حجم کمتر از 1 مگابایت ."
          name="Image"
          touched={touched}
          isRequired
        />
      </div>
      {!isLinkRequired ? (
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
      ) : null}
      <div className="w-full my-5">
        <FormButton text="ثبت تصویر" bg="bg-primary" />
      </div>
    </form>
  );
};

export default UpdatePosterModal;
