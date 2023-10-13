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

// Update Poster
interface UpdatePoster {
  Link?: string;
  Image: File | string;
}
interface UpdatePosterAnyObject {
  Link?: undefined;
  Image: undefined;
}

interface UpdateDeviceNumber {
  maxDeviceNumber: string;
}
interface UpdateDeviceNumberAnyObject {
  maxDeviceNumber: undefined;
}

export type PanelInitialValues =
  | UpdateCounselorValues
  | UpdatePoster
  | UpdateDeviceNumber;
export type PanelValidationSchemaAnyObject =
  | UpdateCounselorAnyObject
  | UpdatePosterAnyObject
  | UpdateDeviceNumberAnyObject;

export type PanelValidationSchemaType = Yup.ObjectSchema<
  PanelInitialValues,
  Yup.AnyObject,
  PanelValidationSchemaAnyObject,
  ""
>;
