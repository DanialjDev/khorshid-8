import { InitialValues } from "@/utills/validation/auth/types";
import { post } from "../axios";
import { LoginData, SignupData } from "./types";
import { isAxiosError } from "axios";
import Cookies from "js-cookie";

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
        Cookies.set("user", data.object?.authData?.token);
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
    const { data, status } = await post<LoginData>(
      "Auth/Login/",
      JSON.stringify(userData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (status === 200) {
      Cookies.set("user", data.object.authData.token);
      return {
        message: data.message,
        status: data.status,
      };
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
      console.log("data **********************************88", data);
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
