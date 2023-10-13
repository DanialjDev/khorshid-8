import { isMobile, isNumeric, isUrl } from "@/utills/formatHelper";
import { PanelInitialValues, PanelValidationSchemaType } from "./types";
import * as Yup from "yup";

type Action = "updateCounselor" | "updatePoster" | "updateDeviceNumber";

type ReturnType = [
  initialValues: PanelInitialValues,
  validationSchema: PanelValidationSchemaType
];
const usePanelValidation = (
  action: Action,
  isLinkRequired?: boolean
): ReturnType | undefined => {
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
  // const Link = isLinkRequired
  //   ? defaultErrorValidation.test(
  //       "isUrl",
  //       "آردس وارد شده نامعتبر است",
  //       (value) => Boolean(isUrl(value))
  //     )
  //   : Yup.string()
  //       .optional()
  //       .test("isUrl", "آردس وارد شده نامعتبر است", (value) => {
  //         if (value && value?.length !== 0) {
  //           return Boolean(isUrl(value));
  //         } else {
  //           return true;
  //         }
  //       });
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
  const HomeSideBannerId = defaultErrorValidation;
  const Image = Yup.mixed().required("انتخاب تصویر الزامی است");

  const maxDeviceNumber = defaultErrorValidation.test(
    "isNumber",
    "لطفا عدد ظرفیت جدید را وارد کنید",
    (value) => {
      return isNumeric(value);
    }
  );

  switch (action) {
    case "updateCounselor":
      initialValues = {
        Comment: "",
        FullName: "",
        PhoneNumber: "",
        Position: "",
        // Image: "",
      };
      validationSchema = Yup.object().shape({
        Comment,
        FullName,
        PhoneNumber,
        Position,
        // Image,
      });
      return [initialValues, validationSchema];
    case "updatePoster":
      initialValues = isLinkRequired
        ? {
            Link: "",
            Image: "",
          }
        : {
            Image: "",
          };
      // @ts-ignore
      validationSchema = isLinkRequired
        ? Yup.object().shape({
            Link,
            Image,
          })
        : Yup.object().shape({
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
    default:
      return undefined;
  }
};

export default usePanelValidation;
