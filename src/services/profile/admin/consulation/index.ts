import { get, put } from "@/services/axios";
import { cookies } from "next/headers";
import { ConsulationData, Consulations, UpdateCounselorProps } from "./types";
import { isAxiosError } from "axios";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import Cookies from "js-cookie";

// Get Consulations

type ConsulationReturnType = {
  consulationData?: ConsulationData[];
  message?: any;
};
export const getConsulations = async (
  token: string
): Promise<ConsulationReturnType | undefined> => {
  try {
    const { data, status } = await get<Consulations>(
      "Panel_Counsulation/GetCounsulations",
      {
        headers: {
          Authorization: ` bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return {
        consulationData: data.object.data,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        message: error.response,
      };
    }
  }
};

// Update Consulation
type UpdateCounselorReturnType = {
  status?: number;
  message: string;
};
export const updateCounselor = async (
  counselorInfo: any
): Promise<UpdateCounselorReturnType | undefined> => {
  try {
    const { data, status } = await put<UpdateCounselorProps>(
      "Panel_Counsulation/UpdateCounselor",
      counselorInfo,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${Cookies.get("token")}`,
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
