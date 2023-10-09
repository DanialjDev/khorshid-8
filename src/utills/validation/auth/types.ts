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
  brand: string;
  name: string;
  OrderedByName: string;
  OrderedByLastName: string;
  OrderedByMobileNumber: string;
  Image: any;
  country: string;
}

export interface RegisterDeviceAnyObject {
  brand: undefined;
  name: undefined;
  OrderedByName: undefined;
  OrderedByLastName: undefined;
  OrderedByMobileNumber: undefined;
  Image: undefined;
  country: undefined;
}

// Consulation
export interface ConsulationInitialValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  comment: string;
}

export interface ConsulationAnyObject {
  firstName: undefined;
  lastName: undefined;
  phoneNumber: undefined;
  comment: undefined;
}

// Initial Values
export type InitialValues =
  | SignupInitialValues
  | LoginInitialValues
  | ForgotPasswordInitialValues
  | ChnagePasswordInitalValues
  | ContactUsValues
  | ProfileComponyData
  | RegisterDeviceValues
  | ConsulationInitialValues;

// Validation Schema
export type ValidateSchemaAnyObject =
  | SignupSchemaAnyObject
  | LoginSchemaAnyObject
  | ForgotPasswordSchemaAnyObject
  | ChnagePasswordSchemaAnyObject
  | ContactUsSchemaAnyObject
  | ProfileComponyDataSchemaAnyObject
  | RegisterDeviceAnyObject
  | ConsulationAnyObject;

export type ValidationSchemaType = Yup.ObjectSchema<
  InitialValues,
  Yup.AnyObject,
  ValidateSchemaAnyObject,
  ""
>;
