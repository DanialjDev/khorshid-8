import React, { useEffect, useRef, useState } from "react";
import FormButton from "@/components/main/button/FormButton";
import ImageInput from "@/components/main/image-input/ImageInput";
import AuthInput from "@/components/main/input/AuthInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import usePanelValidation from "@/utills/validation/panel/validation";
import { useFormik } from "formik";
import {
  postImageToGallery,
  updatePosters,
} from "@/services/profile/admin/posters";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { setLinkRequired } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { isUrl } from "@/utills/formatHelper";

const UpdatePosterModal = ({
  setIsOpen,
  isLinkRequired,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLinkRequired?: boolean;
}) => {
  const { refresh } = useRouter();
  const dispatch = useAppDispatch();
  const { updateAction } = useAppSelector((state) => state.auth);
  const { id } = useAppSelector((state) => state.user);
  const token = Cookies.get("token");
  // const [initialValues, validationSchema] = usePanelValidation("updatePoster")!;
  const {
    handleBlur,
    errors,
    handleChange,
    handleSubmit,
    touched,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      Link: "",
      Image: null,
    },
    validationSchema: Yup.object().shape({
      Link: Yup.string().test("isUrl", "آردس وارد شده نامعتبر است", (value) => {
        if (value && value.length !== 0) {
          return Boolean(isUrl(value));
        }
        return true;
      }),
      Image: Yup.mixed().required("انتخاب تصویر الزامی است"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      let url = "";
      // @ts-ignore
      formData.append("Image", values.Image);
      if (updateAction === "homeSideBanner") {
        url = "UpdateHomeSideBanner";
        formData.append("Link", values.Link);
        // @ts-ignore
        formData.append("HomeSideBannerId", id);
      } else if (updateAction === "medicalEquipment") {
        url = "UpdateMedicalEquipmentBanner";
        formData.append("Link", values.Link);
        // @ts-ignore
        formData.append("BannerId", id);
      } else if (updateAction === "gallery") {
        // @ts-ignore
        formData.append("Id", id);
        url = "UpdateImageOfGallery";
      } else {
        url = "PostImageToGallery";
        // @ts-ignore
        formData.append("Image", values.Image);
      }
      if (token) {
        if (url === "PostImageToGallery") {
          const response = await postImageToGallery(formData, token);
          if (response?.status === 200) {
            toast.success(response.message);
            setTimeout(() => {
              setIsOpen(false);
              refresh();
            }, 2000);
          } else {
            toast.error(response?.message);
          }
        } else {
          const response = await updatePosters(formData, token, url);
          if (response?.status === 200) {
            toast.success(response.message);
            setTimeout(() => {
              setIsOpen(false);
              refresh();
            }, 2000);
          } else {
            toast.error(response?.message);
          }
        }
      }
    },
  });

  // useEffect(() => {
  //   return () => {
  //     if (isLinkRequired) {
  //       dispatch(setLinkRequired(false));
  //     }
  //   };
  // }, []);
  return (
    <form onSubmit={handleSubmit} className="mb-10 grid grid-cols-1">
      <div className="w-full my-2 col-span-1 ">
        <ImageInput
          title="بارگذاری تصویر"
          desc="در ابعاد 270 × 200 پیکسل ، حجم کمتر از 1 مگابایت ."
          name="Image"
          // @ts-ignore
          touched={touched["Image"]}
          handleBlur={handleBlur}
          // @ts-ignore
          errors={errors["Image"]}
          setFieldValue={setFieldValue}
          // @ts-ignore
          value={values.Image}
        />
      </div>
      {isLinkRequired ? (
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
