import { isAxiosError } from "axios";
import { get, post } from "../axios";
import {
  DeviceCategories,
  DeviceName,
  HeaderPhoneNumber,
  IranStateTypes,
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
      data: StateType[];
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
  } catch (error) {}
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
