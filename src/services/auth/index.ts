import { InitialValues } from "@/utills/validation/auth/types";
import { post, put } from "../axios";
import { ChangePasswordData, LoginData, SignupData } from "./types";
import { isAxiosError } from "axios";
import Cookies from "js-cookie";
import { encrypt } from "@/utills/crypto";

type SignupReturnType = {
  message?: string | undefined;
  status?: number;
};

// Signin
export const signupHandler = async (
  userData: InitialValues
): Promise<SignupReturnType | undefined> => {
  try {
    const { data, status } = await post<SignupData>(
      "/Auth/SignUpAndLoginUser/",
      JSON.stringify(userData)
    );
    if (status === 200) {
      console.log(data);
      if (data.object?.authData?.token) {
        Cookies.set("token", data.object?.authData?.token, { expires: 1 / 6 });
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
        return {
          message: data.message,
          status: data.status,
        };
      }
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.message,
        };
      }
    }
  }
};

// Login
export const loginHandler = async (
  userData: InitialValues
): Promise<SignupReturnType | undefined> => {
  try {
    const { data, status } = await post<SignupData>(
      "Auth/Login/",
      JSON.stringify(userData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (status === 200) {
      console.log(data);
      if (data.object?.authData?.token) {
        Cookies.set("token", data.object?.authData?.token, { expires: 1 / 6 });
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
        // Cookies.set('userData', data.object);
        return {
          message: data.message,
          status: data.status,
        };
      }
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.message,
        };
      }
    }
  }
};

// Forgot Password
export const forgotPasswordHandler = async (
  userData: InitialValues
): Promise<SignupReturnType | undefined> => {
  try {
    const { data, status } = await post(
      "Auth/ForgetPassword/",
      JSON.stringify(userData)
    );
    if (status === 200) {
      return {
        message: data.message,
        status: data.status,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: error.response?.status,
      };
    }
  }
};

// Change Password
type ChangePasswordReturnType = {
  status: number;
  message: string | undefined;
};
export const changePasswordHandler = async (
  userData: InitialValues
): Promise<ChangePasswordReturnType | undefined> => {
  try {
    const { data, status } = await put<ChangePasswordData>(
      "Auth/ChangePassword",
      JSON.stringify(userData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (status === 200) {
      return {
        status: data.status,
        message: data.message,
      };
    }
  } catch (error) {
    if (isAxiosError(error) && error.response?.status) {
      return {
        status: error.response?.status,
        message: error.response.data.message,
      };
    }
  }
};
