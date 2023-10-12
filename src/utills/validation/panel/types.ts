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
  HomeSideBannerId: string;
  Link: string;
}
interface UpdatePosterAnyObject {
  HomeSideBannerId: undefined;
  Link: undefined;
}

export type PanelInitialValues = UpdateCounselorValues | UpdatePoster;
export type PanelValidationSchemaAnyObject =
  | UpdateCounselorAnyObject
  | UpdatePosterAnyObject;

export type PanelValidationSchemaType = Yup.ObjectSchema<
  PanelInitialValues,
  Yup.AnyObject,
  PanelValidationSchemaAnyObject,
  ""
>;
