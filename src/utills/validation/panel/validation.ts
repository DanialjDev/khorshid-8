import { isMobile, isUrl } from "@/utills/formatHelper";
import { PanelInitialValues, PanelValidationSchemaType } from "./types";
import * as Yup from "yup";

type Action = "updateCounselor" | "updatePoster";

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
  const Link = defaultErrorValidation.test(
    "isUrl",
    "آردس وارد شده نامعتبر است",
    (value) => Boolean(isUrl(value))
  );
  const HomeSideBannerId = defaultErrorValidation;

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
      initialValues = {
        Link: "",
        HomeSideBannerId: "",
      };
      validationSchema = Yup.object().shape({
        Link,
        HomeSideBannerId,
      });
      return [initialValues, validationSchema];
    default:
      return undefined;
  }
};

export default usePanelValidation;
