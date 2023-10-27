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
  | "GetUniversities"
  | "ProfileDevices"
  | "panel_consulation"
  | "charge_account"
  | "GetUserAcceptedDevices"
  | "GetRequestedDevices";

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
  tableHeaders?: { name: string; value: string }[] | undefined;
  message?: string | undefined;
  operationName?: OperationNames;
  totalPageCount?: number;
};

// Medical Equipment => getDevices
export const getSectionsData = async (
  url: Category,
  pageNumber: number = 1,
  filterName?: string,
  filterValue?: string
): Promise<MedicalEquipmentDevices | undefined> => {
  let filterUrl =
    filterName && filterValue ? `&${filterName}=${filterValue}` : "";
  console.log(filterUrl);
  try {
    const { data, status } = await get(
      `MedicalEquipment/${url}?PageContain=10&PageNumber=${
        pageNumber ? pageNumber : 1
      }${filterUrl}`
    );
    if (status === 200) {
      return {
        data: data.object.data,
        tableHeaders: generateHeaders(url),
        operationName: data.operationName,
        totalPageCount: data.object.totalPagesCount,
      };
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      if (error.response?.data.errors.EventDate[0]) {
        return {
          message: "تاریخ وارد شده نادرست می باشد",
        };
      }
      return {
        message: error.response?.data.message,
      };
    }
  }
};
