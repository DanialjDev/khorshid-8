import * as Yup from "yup";

interface SignupInitialValues {
  email: string;
  managerFullName: string;
  mobileNumber: string;
  password: string;
}

interface SignupSchemaAnyObject {
  email: undefined;
  mobileNumber: undefined;
  password: undefined;
}

interface LoginInitialValues {
  email: string;
  password: string;
}

interface LoginSchemaAnyObject {
  email: undefined;
  password: undefined;
}

interface ForgotPasswordInitialValues {
  email: string;
}

interface ForgotPasswordSchemaAnyObject {
  email: undefined;
}

interface ChnagePasswordInitalValues {
  verificationCode: string;
  password: string;
  confirmPassword: string;
}

interface ChnagePasswordSchemaAnyObject {
  verificationCode: undefined;
  password: undefined;
  confirmPassword: undefined;
}

// Contact Us
interface ContactUsValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  comment: string;
}

interface ContactUsSchemaAnyObject {
  firstName: undefined;
  lastName: undefined;
  phoneNumber: undefined;
  comment: undefined;
}

// profile User Info
interface ProfileComponyData {
  companyName: string;
  companyManagerFullName: string;
  faxNumber: string;
  website: string;
  mobileNumber: string;
  email: string;
  password: string;
  address: string;
}

interface ProfileComponyDataSchemaAnyObject {
  companyName: undefined;
  companyManagerFullName: undefined;
  faxNumber: undefined;
  website: undefined;
  mobileNumber: undefined;
  email: undefined;
  password: undefined;
  address: undefined;
}

// Register Medical Device
export interface RegisterDeviceValues {
  companyName: string;
  managerFullName: string;
  faxNumber: string;
  website: string;
  contactInfo: string;
  email: string;
  address: string;
  deviceName: string;
  brand: string;
  country: string;
  customerName: string;
  customerLastName: string;
  customerPhone: string;
  file: any;
}

export interface RegisterDeviceAnyObject {
  companyName: undefined;
  managerFullName: undefined;
  faxNumber: undefined;
  website: undefined;
  contactInfo: undefined;
  email: undefined;
  address: undefined;
  deviceName: undefined;
  brand: undefined;
  country: undefined;
  customerName: undefined;
  customerLastName: undefined;
  customerPhone: undefined;
  file: undefined;
}

// Initial Values
export type InitialValues =
  | SignupInitialValues
  | LoginInitialValues
  | ForgotPasswordInitialValues
  | ChnagePasswordInitalValues
  | ContactUsValues
  | ProfileComponyData
  | RegisterDeviceValues;

// Validation Schema
export type ValidateSchemaAnyObject =
  | SignupSchemaAnyObject
  | LoginSchemaAnyObject
  | ForgotPasswordSchemaAnyObject
  | ChnagePasswordSchemaAnyObject
  | ContactUsSchemaAnyObject
  | ProfileComponyDataSchemaAnyObject
  | RegisterDeviceAnyObject;

export type ValidationSchemaType = Yup.ObjectSchema<
  InitialValues,
  Yup.AnyObject,
  ValidateSchemaAnyObject,
  ""
>;
