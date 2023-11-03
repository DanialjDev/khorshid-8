import { deleteService, get, put } from "@/services/axios";
import {
  GetUserAcceptedSingleDevice,
  GetUsersAccounts,
  SingleUserAcceptedDevice,
  SingleUserDeviceObj,
  SingleUserDevices,
  UpdateUserDevice,
  User,
  UserDevice,
  UserInfo,
  UserMaxAndRemainDevice,
  UsersObj,
} from "./types";
import { isAxiosError } from "axios";
import { PanelInitialValues } from "@/utills/validation/panel/types";

type UserAccountsRturnType = {
  data?: UsersObj;
  message?: string;
  status?: number;
};

export const getUsersAccounts = async (
  token: string,
  searchValue?: string | null,
  pageNumber: number | null = 1
): Promise<UserAccountsRturnType | undefined> => {
  let reqUrl = `Panel_Accounting/GetUsers?PageContain=10&PageNumber=${
    pageNumber ? pageNumber : 1
  }`;

  if (searchValue) {
    reqUrl = `${reqUrl}&Search=${searchValue}`;
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
        data: data.object,
      };
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: error.response?.status,
      };
    }
  }
};

// get Single User Devices

type SingleUserDeviceReturnType = {
  data?: SingleUserDeviceObj;
  message?: string;
};
export const getSingleUserDevices = async (
  userId: string,
  token: string,
  pageNumber: number = 1
): Promise<SingleUserDeviceReturnType | undefined> => {
  try {
    const { data, status } = await get<SingleUserDevices>(
      `Panel_Accounting/GetUserAcceptedDevices/${userId}?PageContain=10&PageNumber=${pageNumber}`,
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
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: error.response?.status!,
      };
    }
  }
};

// update user accepted device
export const updateUserDevice = async (
  userData: FormData,
  token: string
): Promise<{ message: string; status?: number } | undefined> => {
  try {
    const { data, status } = await put<UpdateUserDevice>(
      "Panel_Accounting/UpdateUserAcceptedDevice",
      userData,
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
      };
    }
  }
};

// delete user device
export const deleteUserDeviceHandler = async (
  payload: {
    deviceID: number;
  },
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await deleteService<UpdateUserDevice>(
      "Panel_Accounting/RemoveUserAcceptedDevice",
      {
        data: payload,
        headers: {
          Authorization: `bearer ${token}`,
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
