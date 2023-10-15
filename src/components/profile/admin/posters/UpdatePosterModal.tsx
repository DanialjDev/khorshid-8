import React, { useRef, useState } from "react";
import FormButton from "@/components/main/button/FormButton";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import { updatePosters } from "@/services/profile/admin/posters";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { authToggler } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";

const UpdatePosterModal = () => {
  const { refresh } = useRouter();
  const dispatch = useAppDispatch();
  const { isLinkRequired, updateAction } = useAppSelector(
    (state) => state.auth
  );
  const { id } = useAppSelector((state) => state.user);
  const token = Cookies.get("token");
  const [img, setImg] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [initialValues, validationSchema] = usePanelValidation(
    "updatePoster",
    isLinkRequired
  )!;
  const {
    handleBlur,
    errors,
    handleChange,
    handleSubmit,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      let url = "";
      // @ts-ignore
      formData.append("Image", values.Image);
      if (updateAction === "homeSideBanner") {
        url = "UpdateHomeSideBanner";
        if (isLinkRequired) {
          // @ts-ignore
          formData.append("Link", values.Link);
        }
        // @ts-ignore
        formData.append("HomeSideBannerId", id);
      } else if (updateAction === "medicalEquipment") {
        url = "UpdateMedicalEquipmentBanner";
        if (isLinkRequired) {
          // @ts-ignore
          formData.append("Link", values.Link);
        }
        // @ts-ignore
        formData.append("BannerId", id);
      } else {
        // @ts-ignore
        formData.append("Id", id);
        url = "UpdateImageOfGallery";
      }
      if (token) {
        const response = await updatePosters(formData, token, url);

        if (response?.status === 200) {
          toast.success(response.message);
          setTimeout(() => {
            dispatch(authToggler(""));
            refresh();
          }, 2000);
        } else {
          toast.error(response?.message);
        }
      }
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit} className="mb-10 grid grid-cols-1">
      <div className="w-full my-2 col-span-1 ">
        <ImageInput
          inputRef={inputRef}
          img={img}
          setImg={setImg}
          title="بارگذاری تصویر"
          desc="در ابعاد 270 × 200 پیکسل ، حجم کمتر از 1 مگابایت ."
          name="Image"
          touched={touched}
          isRequired
          handleChange={(e) => {
            setFieldValue("Image", e.target.files[0], true);
          }}
          removeImg={() => setFieldValue("Image", "")}
          handleBlur={handleBlur}
          errors={errors}
        />
      </div>
      {!isLinkRequired ? (
        <div className="w-full col-span-1">
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
