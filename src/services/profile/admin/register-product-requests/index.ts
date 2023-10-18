import { get, put } from "@/services/axios";
import {
  ConfirmDeviceTypes,
  RequestedProducts,
  RequestedProductsObj,
  SingleDeviceData,
  SingleDeviceObj,
} from "./types";
import { isAxiosError } from "axios";
import { cookies } from "next/headers";

// get All Products

export const getAllRequestedProducts = async (
  token: string
): Promise<
  | {
      dataObj?: RequestedProductsObj;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<RequestedProducts>(
      "Panel_RequestedDevice/GetRequestedDevices",
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      return {
        dataObj: data.object,
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

// cofirmDevice
type ConfirmDeviceRetunType = {
  message: string;
  status?: number;
};

export const confirmDeviceHandler = async (
  userData: {
    deviceID: number;
    removeImage: boolean;
  },
  token: string
): Promise<ConfirmDeviceRetunType | undefined> => {
  try {
    const { data, status } = await put<ConfirmDeviceTypes>(
      "Panel_RequestedDevice/AcceptDevice",
      JSON.stringify(userData),
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (status === 200) {
      return {
        status,
        message: data.message,
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

// single device data
type SingleDeviceDataReturnType = {
  initialValues?: SingleDeviceObj;
  message?: string;
};

export const getSingleDeviceData = async (
  deviceId: string,
  token: string
): Promise<SingleDeviceDataReturnType | undefined> => {
  try {
    const { data, status } = await get<SingleDeviceData>(
      `Panel_RequestedDevice/GetRequestedSingleDevice/${deviceId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return {
        initialValues: data.object,
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

// decline Device
export const declineDeviceHandler = async (
  userData: {
    deviceID: number;
    declinedStateMessage: string | null;
  },
  token: string
): Promise<ConfirmDeviceRetunType | undefined> => {
  try {
    const { data, status } = await put<ConfirmDeviceTypes>(
      "Panel_RequestedDevice/DeclineDevice",
      JSON.stringify(userData),
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (status === 200) {
      return {
        status,
        message: data.message,
      };
    }
    console.log(data);
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
      };
    }
  }
};
