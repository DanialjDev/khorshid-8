import { isAxiosError } from "axios";
import { get } from "../axios";
import { CounselorData, CounselorObject } from "./types";

type ReturnType = {
  object?: CounselorObject;
  message?: string | undefined;
};

// Counselor => Get Counselor Data
export const getCounselorData = async (): Promise<ReturnType | undefined> => {
  try {
    const { data, status } = await get<CounselorData>("Counselor/GetCounselor");

    if (status === 200) {
      return {
        object: data.object,
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
