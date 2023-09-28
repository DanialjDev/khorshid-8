import { isAxiosError } from "axios";
import { get } from "../axios";
import {
  DeviceBannerObject,
  DeviceBannerProps,
  OperationNames,
  TableData,
} from "./types";
import { generateHeaders } from "@/utills/generateTableHeaders";
type ReturnType = {
  banner: DeviceBannerObject;
};

export type Category =
  | "GetDevices"
  | "GetCompanies"
  | "GetDeansOfUniversities"
  | "GetEvents"
  | "GetHospotals"
  | "GetLabs"
  | "GetVicePresidentsOfTreatment"
  | "GetUniversities";

// Get Device Banner
export const getDeviceBanner = async (
  url: Category
): Promise<ReturnType | undefined> => {
  try {
    const { data, status } = await get<DeviceBannerProps>(
      `MedicalEquipment/${url}Banner/`
    );
    if (status === 200) {
      return {
        banner: data.object,
      };
    }
  } catch (error) {}
};

type MedicalEquipmentDevices = {
  data?: TableData;
  tableHeaders?: string[] | undefined;
  message?: string | undefined;
  operationName?: OperationNames;
};

// Medical Equipment => getDevices
export const getSectionsData = async (
  url: Category
): Promise<MedicalEquipmentDevices | undefined> => {
  try {
    const { data, status } = await get(`MedicalEquipment/${url}`);
    if (status === 200) {
      return {
        data: data.object.data,
        tableHeaders: generateHeaders(url),
        operationName: data.operationName,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
      };
    }
  }
};
