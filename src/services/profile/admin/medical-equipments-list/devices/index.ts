import { post, put } from "@/services/axios";
import { EditUniversityType } from "../universities/types";
import { isAxiosError } from "axios";

// update single device
export const updateSingleDevice = async (
  payload: FormData,
  token: string,
  url: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditUniversityType>(`${url}`, payload, {
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

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

// post single device
export const postSingleDevice = async (
  payload: FormData,
  token: string,
  url?: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      url ? url : "Panel_MedicalEquipment/PostSingleDevice",
      payload,
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
