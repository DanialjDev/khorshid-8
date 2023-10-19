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
  Image: File | null;
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

// Update News (Panel)
interface UpdatePanelNews {
  newsTitle: string;
  newsDesc: string;
  Image: File | null;
  newsLink: string;
}

interface UpdatePanelNewsAnyObject {
  newsTitle: undefined;
  newsDesc: undefined;
  Image: undefined;
  newsLink: undefined;
}

// Update PhoneNumber (Panel)
interface UpdatePhoneNumber {
  phoneNumber: string;
}
interface UpdatePhoneNumberAnyObject {
  phoneNumber: undefined;
}

export type PanelInitialValues =
  | UpdateCounselorValues
  | UpdatePoster
  | UpdateDeviceNumber
  | UpdatePanelNews
  | UpdatePhoneNumber;
export type PanelValidationSchemaAnyObject =
  | UpdateCounselorAnyObject
  | UpdatePosterAnyObject
  | UpdateDeviceNumberAnyObject
  | UpdatePanelNewsAnyObject
  | UpdatePhoneNumberAnyObject;

export type PanelValidationSchemaType = Yup.ObjectSchema<
  PanelInitialValues,
  Yup.AnyObject,
  PanelValidationSchemaAnyObject,
  ""
>;
