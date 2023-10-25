import { get } from "@/services/axios";
import {
  RegisteredDevice,
  RegisteredDevicesType,
  SingleAcceptedDevice,
  SingleAcceptedDeviceType,
} from "./types";
import { isAxiosError } from "axios";

// get registered devices
export const getRegisteredDevices = async (
  token: string
): Promise<{ message?: string; data?: RegisteredDevice[] } | undefined> => {
  try {
    const { data, status } = await get<RegisteredDevicesType>(
      "Panel_AcceptedDevice/GetAcceptedDevices",
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return {
        data: data.object.data,
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

// get single device by ID
export const getSingleAcceptedDevice = async (
  deviceId: number,
  token: string
): Promise<
  | {
      data?: SingleAcceptedDevice;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<SingleAcceptedDeviceType>(
      `Panel_AcceptedDevice/GetSingleAcceptedDevice/${deviceId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return {
        data: data.object,
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
