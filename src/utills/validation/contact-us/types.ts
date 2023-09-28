import * as Yup from "yup";

export interface ContactUsValues {
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

export type ValidationSchemaType = Yup.ObjectSchema<
  ContactUsValues,
  Yup.AnyObject,
  ContactUsSchemaAnyObject,
  ""
>;
