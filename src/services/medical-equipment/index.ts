import { isAxiosError } from "axios";
import { get } from "../axios";
import {
  DeviceBannerObject,
  DeviceBannerProps,
  OperationNames,
  TableData,
} from "./types";
import { generateHeaders } from "@/utills/generateTableHeaders";
import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";
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
  filterValue?: string,
  categoryUrl?: string,
  filterCity?: string
): Promise<MedicalEquipmentDevices | undefined> => {
  let filterNameUrl =
    filterName && filterValue ? `&${filterName}=${filterValue}` : "";
  let filterCategoryUrl = categoryUrl ? `&${categoryUrl?.lastIndexOf('&') !== -1 ? categoryUrl.slice(0, -1) : categoryUrl}` : '';
  console.log(`${filterNameUrl}${filterCategoryUrl}${filterCity ? filterCity : ''}`)
  try {
    const { data, status } = await get(
      `MedicalEquipment/${url}?PageContain=10&PageNumber=${
        pageNumber ? pageNumber : 1
      }${filterNameUrl}${filterCategoryUrl}${filterCity ? filterCity : ''}`
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
    console.log(error)
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
