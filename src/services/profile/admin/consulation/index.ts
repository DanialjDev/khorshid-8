import { get, put } from "@/services/axios";
import { cookies } from "next/headers";
import {
  ConsulationData,
  Consulations,
  CounsulationObj,
  UpdateCounselorProps,
} from "./types";
import { isAxiosError } from "axios";
import { PanelInitialValues } from "@/utills/validation/panel/types";
import Cookies from "js-cookie";

// Get Consulations

type ConsulationReturnType = {
  consulationData?: CounsulationObj;
  message?: any;
};
export const getConsulations = async (
  token: string,
  pageNumber: number = 1
): Promise<ConsulationReturnType | undefined> => {
  try {
    const { data, status } = await get<Consulations>(
      `Panel_Counsulation/GetCounsulations?PageContain=10&PageNumber=${pageNumber}`,
      {
        headers: {
          Authorization: ` bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return {
        consulationData: data.object,
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
