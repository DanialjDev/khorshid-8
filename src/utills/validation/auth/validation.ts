import { isMobile } from "@/utills/formatHelper";
import { InitialValues, ValidationSchemaType } from "./types";
import * as Yup from "yup";

export type Action =
  | "signup"
  | "login"
  | "forgotPassword"
  | "changePassword"
  | "contact-us"
  | "profile-company-data"
  | "register-medical-device"
  | "consulation"
  | "updatePoster"
  | "updateDeviceNumber"
  | "";

type ReturnType = [
  initialValues: InitialValues,
  validationSchema: ValidationSchemaType
];

const useValidation = (action: Action): ReturnType | undefined => {
  let initialValues: InitialValues;
  let validationSchema: ValidationSchemaType;

  const defaultErrorValidation = Yup.string().required(
    "پرکردن این فیلد الزامی است."
  );
  const email = defaultErrorValidation.email("ایمیل وارد شده معتبر نمی باشد.");
  const mobileNumber = defaultErrorValidation;
  //   .matches(
  //     /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g,
  //     {
  //       message: "شماره وارد شده نامعتبر است",
  //     }
  // );
  const password = defaultErrorValidation.min(
    6,
    "رمز عبور نمیتواند کمتر از ۶ کارکتر باشد."
  );
  const confirmPassword = defaultErrorValidation.oneOf(
    // @ts-ignore
    [Yup.ref("password"), null],
    "رمز عبورها با هم برابر نیستند."
  );
  const verificationCode = defaultErrorValidation;

  const firstName = defaultErrorValidation;
  const lastName = defaultErrorValidation;
  const phoneNumber = defaultErrorValidation.test(
    "isMobile",
    "شماره وارد شده معتبر نمی باشد",
    (value) => {
      if (value && value.length > 0) {
        return Boolean(isMobile(value));
      }
    }
  );
  const comment = defaultErrorValidation;

  const companyName = defaultErrorValidation;
  const companyManagerFullName = defaultErrorValidation;
  const faxNumber = defaultErrorValidation;
  const website = defaultErrorValidation;
  const address = defaultErrorValidation;
  const image = Yup.mixed().required("انتخاب عکس الزامی است");

  switch (action) {
    case "signup":
      initialValues = {
        email: "",
        mobileNumber: "",
        password: "",
      };
      validationSchema = Yup.object().shape({
        email,
        mobileNumber,
        password,
      });

      return [initialValues, validationSchema];

    case "login":
      initialValues = {
        email: "",
        password: "",
      };
      validationSchema = Yup.object().shape({
        email,
        password,
      });
      return [initialValues, validationSchema];

    case "forgotPassword":
      initialValues = {
        email: "",
      };
      validationSchema = Yup.object().shape({
        email,
      });
      return [initialValues, validationSchema];

    case "changePassword":
      initialValues = {
        email: "",
        verificationCode: "",
        password: "",
        confirmPassword: "",
      };
      validationSchema = Yup.object().shape({
        verificationCode,
        password,
        confirmPassword,
      });
      return [initialValues, validationSchema];

    case "contact-us":
      initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        comment: "",
      };

      validationSchema = Yup.object().shape({
        firstName,
        lastName,
        phoneNumber,
        comment,
      });

      return [initialValues, validationSchema];
    case "profile-company-data":
      initialValues = {
        companyName: "",
        companyManagerFullName: "",
        faxNumber: "",
        website: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
      };
      validationSchema = Yup.object().shape({
        companyName,
        companyManagerFullName,
        faxNumber,
        website,
        mobileNumber,
        email,
        password,
        confirmPassword,
        address,
      });
      return [initialValues, validationSchema];
    case "register-medical-device":
      initialValues = {
        brand: "",
        OrderedByName: "",
        OrderedByLastName: "",
        OrderedByMobileNumber: "",
        Image: "",
        country: "",
        name: "",
      };
      validationSchema = Yup.object().shape({
        brand: defaultErrorValidation,
        Image: Yup.mixed().required("لطفا تصویر دستگاه را بارگذاری کنید."),
        OrderedByLastName: defaultErrorValidation,
        OrderedByName: defaultErrorValidation,
        OrderedByMobileNumber: phoneNumber,
        country: defaultErrorValidation,
        name: defaultErrorValidation,
      });
      return [initialValues, validationSchema];
      // case "consulation":
      initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        comment: "",
      };
      validationSchema = Yup.object().shape({
        firstName,
        lastName,
        phoneNumber,
        comment,
      });
      return [initialValues, validationSchema];
    default:
      return undefined;
  }
};

export default useValidation;
