import { isAxiosError } from "axios";
import { get, post } from "../axios";
import {
  CityType,
  CompaniesType,
  DeviceCategories,
  DeviceName,
  HeaderPhoneNumber,
  IranCities,
  IranStateTypes,
  SingleCompany,
  StateType,
} from "./types";

// Common => Get Device Categories
type ReturnType = {
  data?: DeviceName[];
  message?: string | undefined;
};
export const getDeviceCategories = async (): Promise<
  ReturnType | undefined
> => {
  try {
    const { data, status } = await get<DeviceCategories>(
      "Common/GetDeviceCategories"
    );

    if (status === 200) {
      return {
        data: data.list,
      };
    }
  } catch (error) {
    console.log('error', error)
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
      };
    }
  }
};

// get Header PhoneNumber
export const getHeaderPhoneNumber = async (): Promise<string | undefined> => {
  try {
    const { data, status } = await get<HeaderPhoneNumber>(
      "Common/GetHeaderPhoneNumber"
    );

    if (status === 200) {
      return data.object.phoneNumber;
    }
  } catch (error) {}
};

// get Iran States
export const getStates = async (): Promise<
  | {
      data: StateType[] | null;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<IranStateTypes>("Common/GetIranStates");

    if (status === 200) {
      return {
        data: data.list,
      };
    }
  } catch (error) {
    return {
      data: null,
    };
  }
};

// post page view
export const postPageView = async (path: string) => {
  try {
    const { data, status } = await post(
      "Common/PostPageView",
      JSON.stringify({
        path,
      })
    );
  } catch (error) {}
};

// get cities by ID
export const getCitiesById = async (
  stateName: string
): Promise<
  | {
      data: CityType[] | null;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<IranCities>(
      `Common/GetIranCitiesByStateName/${stateName}`
    );

    if (status === 200) {
      return {
        data: data.list,
      };
    }
  } catch (error) {
    return {
      data: null,
    };
  }
};

// get Companies
export const getCompanies = async (): Promise<
  { companyList: SingleCompany[] | null; message?: string } | undefined
> => {
  try {
    const { data, status } = await get<CompaniesType>(
      "Common/GetSimpleCompanies"
    );

    if (status === 200) {
      return {
        companyList: data.list,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        companyList: null,
      };
    }
  }
};
