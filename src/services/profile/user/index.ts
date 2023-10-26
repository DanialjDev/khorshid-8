import { deleteService, get, post, put } from "@/services/axios";
import { InitialValues } from "@/utills/validation/auth/types";
import Cookies from "js-cookie";
import {
  CompanyData,
  CompanyObject,
  PostProfileDevice,
  UpdateProfileData,
  UserProfileDevice,
  UserRegisteredDevices,
  UserRegisteredDevicesObj,
} from "./types";
import { isAxiosError } from "axios";
import { encrypt } from "@/utills/crypto";

type ReturnType = {
  status?: number;
  message?: string;
  userInfo?: CompanyObject;
  initialValues?: InitialValues;
};

// Get Profile Company Data
export const getProfileCompanyData = async (
  token: string,
  action?: string
): Promise<ReturnType | undefined> => {
  try {
    console.log("Cookie", token);
    const { data, status } = await get<CompanyData>(
      "Profile/GetProfileCompanyData",
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (status === 200) {
      if (action === "registerDevice") {
        return {
          initialValues: {
            companyName: data.object.companyName ? data.object.companyName : "",
            companyManagerFullName: data.object?.companyManagerFullName
              ? data.object.companyManagerFullName
              : "",
            faxNumber: data.object?.faxNumber ? data.object.faxNumber : "",
            website: data.object?.website ? data.object.website : "",
            mobileNumber: data.object?.mobileNumber
              ? data.object.mobileNumber
              : "",
            email: data.object?.email ? data.object.email : "",
            address: data.object?.address ? data.object.address : "",
          },
        };
      } else {
        return {
          status: data.status,
          message: data.message,
          initialValues: {
            companyName: data.object.companyName ? data.object.companyName : "",
            companyManagerFullName: data.object?.companyManagerFullName
              ? data.object.companyManagerFullName
              : "",
            faxNumber: data.object?.faxNumber ? data.object.faxNumber : "",
            website: data.object?.website ? data.object.website : "",
            mobileNumber: data.object?.mobileNumber
              ? data.object.mobileNumber
              : "",
            email: data.object?.email ? data.object.email : "",
            password: "",
            confirmPassword: "",
            address: data.object?.address ? data.object.address : "",
          },
        };
      }
    }
  } catch (error) {
    // console.log(error);
    if (isAxiosError(error)) {
      return {
        status: error.response?.status,
        message: error.response?.data.message,
      };
    }
  }
};

// Update Profile Compont Data

type UpdateProfile = {
  message: string | undefined;
  status?: number;
};
export const updateProfileCompanyData = async (
  userData: InitialValues
): Promise<UpdateProfile | undefined> => {
  try {
    const { data, status } = await put<UpdateProfileData>(
      "Profile/UpdateProfileCompanyData",
      JSON.stringify(userData),
      {
        headers: {
          Authorization: `bearer ${Cookies.get("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (status === 200) {
      Cookies.set("token", data.object.authData.token, { expires: 1 / 6 });
      const encryptedData = encrypt(
        JSON.stringify({
          name: data.object.managerFullName,
          maxDeviceNumber: data.object.maxDeviceNumber,
          roleName: data.object.roleName,
          roleNameEn: data.object.roleNameEn,
          mobileNumber: data.object.mobileNumber,
          email: data.object.email,
        })
      );
      Cookies.set("userInfo", encryptedData, { expires: 1 / 6 });
      console.log(data);
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

// Register Device

type PostProfileDeviceReturnType = {
  status?: number;
  message: string;
};
export const postProfileDevice = async (
  userData: any,
  token: string
): Promise<PostProfileDeviceReturnType | undefined> => {
  try {
    const { data, status } = await post<PostProfileDevice>(
      "Profile/PostProfileDevice",
      userData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      }
    );
    console.log(data);

    if (status === 200) {
      return {
        status,
        message: data.message,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error);
      if (error.response?.status === 409) {
        // console.log("sfsdf");
        // if (error.response?.status === 409) {
        console.log("sfsdf");
        return {
          message: error.response.data.message,
        };
        // }
      }
      if (error.response?.data.errors.CategoryIDs) {
        console.log("sdfsdf");
        return {
          message: "لطفا نوع دستگاه خود را انتخاب کنید",
        };
      }
    }
  }
};

// get user registered devices
type UserRegisteredDevicesReturnType = {
  data?: UserRegisteredDevicesObj;
  totalPageContain?: number | null;
  message?: string;
};

export const getUserRegisteredDevices = async (
  token: string,
  pageNumber: number = 1
): Promise<UserRegisteredDevicesReturnType | undefined> => {
  try {
    const { data, status } = await get<UserRegisteredDevices>(
      `Profile/GetProfileDevices?PageContain=10&PageNumber=${pageNumber}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      console.log(data);
      return {
        data: data.object,
        totalPageContain: data.object.totalPagesCount,
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

// remove user devices
export const removeUserDevice = async (
  deviceData: {
    deviceID: number;
  },
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await deleteService<PostProfileDevice>(
      "Profile/RemoveUserDevice",
      {
        data: deviceData,
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
