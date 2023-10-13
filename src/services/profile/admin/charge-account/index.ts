import { get, put } from "@/services/axios";
import {
  GetUserAcceptedSingleDevice,
  GetUsersAccounts,
  SingleUserAcceptedDevice,
  SingleUserDevices,
  UpdateUserDevice,
  User,
  UserDevice,
  UserInfo,
  UserMaxAndRemainDevice,
} from "./types";
import { isAxiosError } from "axios";
import { PanelInitialValues } from "@/utills/validation/panel/types";

type UserAccountsRturnType = {
  data?: User[];
  message?: string;
};

export const getUsersAccounts = async (
  token: string,
  searchValue?: string
): Promise<UserAccountsRturnType | undefined> => {
  let reqUrl = "Panel_Accounting/GetUsers";

  if (searchValue) {
    reqUrl = `${reqUrl}?Search=${searchValue}`;
  }
  try {
    const { data, status } = await get<GetUsersAccounts>(reqUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (status === 200) {
      console.log(data);
      return {
        data: data.object.data,
      };
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
      };
    }
  }
};

// get Single User Devices

type SingleUserDeviceReturnType = {
  data?: UserDevice[];
  message?: string;
};
export const getSingleUserDevices = async (
  userId: string,
  token: string
): Promise<SingleUserDeviceReturnType | undefined> => {
  try {
    const { data, status } = await get<SingleUserDevices>(
      `Panel_Accounting/GetUserAcceptedDevices/${userId}`,
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

// get Single User Info
type SingleUserInfoReturnType = {
  data?: UserInfo;
  message?: string;
};
export const getSingleUserInfo = async (
  userId: string,
  token: string
): Promise<SingleUserInfoReturnType | undefined> => {
  try {
    const { data, status } = await get<UserMaxAndRemainDevice>(
      `Panel_Accounting/GetUserMaxAndRemainDevice/${userId}`,
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

// get Single User Accepted Device => (for update form)
type UserAcceptedDeviceReturnType = {
  data?: SingleUserAcceptedDevice;
  message?: string;
};

export const getUserAcceptedSingleDevice = async (
  deviceId: string,
  token: string
): Promise<UserAcceptedDeviceReturnType | undefined> => {
  try {
    const { data, status } = await get<GetUserAcceptedSingleDevice>(
      `Panel_Accounting/GetUserAcceptedSingleDevice/${deviceId}`,
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

// Update User Device Number
type UpdatUserDeviceNumberReturnType = {
  status: number;
  message: string;
};
export const updateUserDeviceNumber = async (
  userData: { userID: number; maxDeviceNumber: number },
  token: string
): Promise<UpdatUserDeviceNumberReturnType | undefined> => {
  try {
    const { data, status } = await put<UpdateUserDevice>(
      "Panel_Accounting/UpdateDeviceNumberCreation",
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
        message: data.message,
        status,
      };
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: error.response?.status!,
      };
    }
  }
};
