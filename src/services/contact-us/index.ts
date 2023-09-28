import { InitialValues } from "@/utills/validation/auth/types";
import { post } from "../axios";
import { isAxiosError } from "axios";

type ReturnType = {
  status: number;
  message: string | undefined;
};

export const contactUsPost = async (
  userData: InitialValues
): Promise<ReturnType | undefined> => {
  console.log(userData);
  try {
    const { status, data } = await post<ContactUsResponse>(
      "ContactUs/PostCosulation/",
      JSON.stringify(userData)
    );
    if (status === 200) {
      return {
        status,
        message: data.message,
      };
    }
  } catch (error: any) {
    if (isAxiosError(error)) {
      if (error.response?.data) {
        return {
          status: error.response.status,
          message: error.response.data.message,
        };
      }
    }
  }
  return undefined;
};
