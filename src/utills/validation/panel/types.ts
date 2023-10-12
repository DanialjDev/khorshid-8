import * as Yup from "yup";

interface UpdateCounselorValues {
  FullName: string;
  Position: string;
  Comment: string;
  PhoneNumber: string;
  // Image: string;
}

interface UpdateCounselorAnyObject {
  FullName: undefined;
  Position: undefined;
  Comment: undefined;
  PhoneNumber: undefined;
  // Image: undefined;
}

export type PanelInitialValues = UpdateCounselorValues;
export type PanelValidationSchemaAnyObject = UpdateCounselorAnyObject;

export type PanelValidationSchemaType = Yup.ObjectSchema<
  PanelInitialValues,
  Yup.AnyObject,
  PanelValidationSchemaAnyObject,
  ""
>;
