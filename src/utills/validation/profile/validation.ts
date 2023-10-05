import { getProfileCompanyData } from "@/services/profile/user";
import Cookies from "js-cookie";
// import { cookies } from "next/headers";
import { InitialValues } from "../auth/types";
import * as Yup from "yup";

type ProfileAction = "get-profile-info";

export const useProfileValidation = () => {
  const defaultErrorValidation = Yup.string();

  const companyName = defaultErrorValidation;
  const companyManagerFullName = defaultErrorValidation;
  const faxNumber = defaultErrorValidation;
  const website = defaultErrorValidation;
  const address = defaultErrorValidation;
  const email = defaultErrorValidation.email("ایمیل وارد شده معتبر نمی باشد.");
  const password = defaultErrorValidation.min(
    6,
    "رمز عبور نمیتواند کمتر از ۶ کارکتر باشد."
  );
  const confirmPassword = defaultErrorValidation.oneOf(
    // @ts-ignore
    [Yup.ref("password"), null],
    "رمز عبورها با هم برابر نیستند."
  );
  const mobileNumber = defaultErrorValidation;
  //   .matches(
  //     /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/g,
  //     {
  //       message: "شماره وارد شده نامعتبر است",
  //     }
  // );

  const validationSchema = Yup.object().shape({
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
  return validationSchema;
};
