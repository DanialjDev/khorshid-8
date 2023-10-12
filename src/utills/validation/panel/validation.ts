import { isMobile } from "@/utills/formatHelper";
import { PanelInitialValues, PanelValidationSchemaType } from "./types";
import * as Yup from "yup";

type Action = "updateCounselor";

const usePanelValidation = (action: Action) => {
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
  const Image = Yup.string().required(
    "لطفا تصویر مشاوره دهنده را بارگذاری کنید."
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
  }
};

export default usePanelValidation;
