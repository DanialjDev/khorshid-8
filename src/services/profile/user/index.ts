import { get } from "@/services/axios";
import { InitialValues } from "@/utills/validation/auth/types";
import Cookies from "js-cookie";
import { CompanyData, CompanyObject } from "./types";
import { isAxiosError } from "axios";

type ReturnType = {
  status?: number;
  message?: string;
  userInfo?: CompanyObject;
};

export const getProfileCompanyData = async (): Promise<
  ReturnType | undefined
> => {
  try {
    const { data, status } = await get<CompanyData>(
      "Profile/GetProfileCompanyData/",
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("user")}`,
        },
      }
    );
    if (status === 200) {
      return {
        status: data.status,
        message: data.message,
        userInfo: data.object,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: error.response?.status,
        message: error.response?.data.message,
      };
    }
  }
};
