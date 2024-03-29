import { isMobile, isNumeric } from "@/utills/formatHelper";
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
  const managerFullName = defaultErrorValidation;
  const mobileNumber = defaultErrorValidation.test(
    "isMobile",
    "شماره موبایل وارد شده نادرست است",
    (value) => {
      if (value && value.length > 0) {
        return isMobile(value);
      }
    }
  );
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

  switch (action) {
    case "signup":
      initialValues = {
        email: "",
        mobileNumber: "",
        password: "",
        managerFullName: "",
      };
      validationSchema = Yup.object().shape({
        email,
        mobileNumber,
        password,
        managerFullName,
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
        phoneNumber: Yup.string()
          .required("پرکردن این فیلد الزامی است.")
          .test("isNumeric", "شماره موبایل وارد شده نامعتبر است", (value) => {
            if (value && value.length > 0) {
              return isNumeric(value);
            }
          }),
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
      // @ts-ignore
      validationSchema = Yup.object().shape({
        brand: defaultErrorValidation,
        Image: Yup.mixed(),
        // OrderedByLastName: defaultErrorValidation,
        // OrderedByName: defaultErrorValidation,
        // OrderedByMobileNumber: phoneNumber,
        country: defaultErrorValidation,
        name: defaultErrorValidation,
      });
      return [initialValues, validationSchema];
    case "consulation":
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
