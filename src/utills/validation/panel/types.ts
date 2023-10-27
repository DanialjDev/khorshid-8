import * as Yup from "yup";

interface UpdateCounselorValues {
  FullName: string;
  Position: string;
  Comment: string;
  PhoneNumber: string;
  Image: File | null;
}

interface UpdateCounselorAnyObject {
  FullName: undefined;
  Position: undefined;
  Comment: undefined;
  PhoneNumber: undefined;
  Image: undefined;
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

// update Single Device (accounting)
interface SingleDeviceValues {
  deviceId: number;
  companyId: number;
  companyName: string;
  managerFullName: string;
  faxNumber: string;
  website: string;
  userMobileNumber: string;
  userEmail: string;
  address: string;
  deviceName: string;
  brand: string;
  country: string;
  orderedByName: string;
  orderedByLastName: string;
  orderedByMobileNumber: string;
  imageUrl: string;
}
interface SingleDeviceValuesAnyObject {
  deviceId: undefined;
  companyId: undefined;
  companyName: undefined;
  managerFullName: undefined;
  faxNumber: undefined;
  website: undefined;
  userMobileNumber: undefined;
  userEmail: undefined;
  address: undefined;
  deviceName: undefined;
  brand: undefined;
  country: undefined;
  orderedByName: undefined;
  orderedByLastName: undefined;
  orderedByMobileNumber: undefined;
  imageUrl: undefined;
}

// update confrences (panel)
interface UpdateConfrences {
  confrenceTitle: string;
  image: File | null;
  confrenceLink: string;
}
interface UpdateConfrencesAnyObject {
  confrenceTitle: undefined;
  image: undefined;
  confrenceLink: undefined;
}

export type PanelInitialValues =
  | UpdateCounselorValues
  | UpdatePoster
  | UpdateDeviceNumber
  | UpdatePanelNews
  | UpdatePhoneNumber
  | SingleDeviceValues
  | UpdateConfrences;
export type PanelValidationSchemaAnyObject =
  | UpdateCounselorAnyObject
  | UpdatePosterAnyObject
  | UpdateDeviceNumberAnyObject
  | UpdatePanelNewsAnyObject
  | UpdatePhoneNumberAnyObject
  | SingleDeviceValuesAnyObject
  | UpdateConfrencesAnyObject;

export type PanelValidationSchemaType = Yup.ObjectSchema<
  PanelInitialValues,
  Yup.AnyObject,
  PanelValidationSchemaAnyObject,
  ""
>;
