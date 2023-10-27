import { isMobile, isNumeric, isUrl } from "@/utills/formatHelper";
import { PanelInitialValues, PanelValidationSchemaType } from "./types";
import * as Yup from "yup";

type Action =
  | "updateCounselor"
  | "updatePoster"
  | "updateDeviceNumber"
  | "UpdateNews"
  | "updatePhoneNumber"
  | "updateSingleDevice"
  | "UpdateConfrences";

type ReturnType = [
  initialValues: PanelInitialValues,
  validationSchema: PanelValidationSchemaType
];
const usePanelValidation = (action: Action): ReturnType | undefined => {
  let initialValues: PanelInitialValues;
  let validationSchema: PanelValidationSchemaType;

  const defaultErrorValidation = Yup.string().required(
    "پرکردن این فیلد الزامی است."
  );

  const Comment = defaultErrorValidation;
  const FullName = defaultErrorValidation;
  const PhoneNumber = defaultErrorValidation.test(
    "isMobile",
    "شماره موبایل وارد شده نا معتبر است",
    (value) => isMobile(value)
  );
  const Position = defaultErrorValidation;
  const Link = Yup.string().test(
    "isUrl",
    "آردس وارد شده نامعتبر است",
    (value) => {
      if (value && value.length !== 0) {
        return Boolean(isUrl(value));
      }
      return true;
    }
  );
  const Image = Yup.mixed().required("انتخاب تصویر الزامی است");

  const maxDeviceNumber = defaultErrorValidation.test(
    "isNumber",
    "لطفا عدد ظرفیت جدید را وارد کنید",
    (value) => {
      return isNumeric(value);
    }
  );

  const newsTitle = defaultErrorValidation.max(
    8,
    " تیتر خبر بیشتر از حد مجاز است"
  );
  const newsDesc = defaultErrorValidation.max(
    16,
    "زیر متن خبر بیشتر از حد مجاز است"
  );
  const newsLink = defaultErrorValidation.test(
    "isUrl",
    "آردس وارد شده نامعتبر است",

    (value) => {
      if (value && value.length !== 0) {
        return Boolean(isUrl(value));
      }
    }
  );

  const newsImage = Yup.mixed().optional();
  switch (action) {
    case "updateCounselor":
      initialValues = {
        Comment: "",
        FullName: "",
        PhoneNumber: "",
        Position: "",
        Image: null,
      };
      // @ts-ignore
      validationSchema = Yup.object().shape({
        Comment,
        FullName,
        PhoneNumber,
        Position,
        Image: Yup.mixed().optional(),
      });
      return [initialValues, validationSchema];
    case "updatePoster":
      initialValues = {
        Link: "",
        Image: null,
      };
      // @ts-ignore
      validationSchema = Yup.object().shape({
        Link,
        Image,
      });
      return [initialValues, validationSchema];
    case "updateDeviceNumber":
      initialValues = {
        maxDeviceNumber: "",
      };
      validationSchema = Yup.object().shape({
        maxDeviceNumber,
      });
      return [initialValues, validationSchema];
    case "UpdateNews":
      initialValues = {
        newsTitle: "",
        newsDesc: "",
        newsLink: "",
        Image: null,
      };

      // @ts-ignore
      validationSchema = Yup.object().shape({
        newsTitle,
        newsDesc,
        newsLink,
        Image: newsImage,
      });
      return [initialValues, validationSchema];
    case "updatePhoneNumber":
      initialValues = {
        phoneNumber: "",
      };

      validationSchema = Yup.object().shape({
        phoneNumber: PhoneNumber,
      });

      return [initialValues, validationSchema];
    default:
      return undefined;
  }
};

export default usePanelValidation;
