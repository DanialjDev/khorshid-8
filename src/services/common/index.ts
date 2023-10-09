import { isAxiosError } from "axios";
import { get } from "../axios";
import { DeviceCategories, DeviceName, HeaderPhoneNumber } from "./types";

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
