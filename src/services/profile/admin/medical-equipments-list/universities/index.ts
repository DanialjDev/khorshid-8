import { get, post, put } from "@/services/axios";
import {
  EditUniversityType,
  SingleUniversityData,
  SingleUniversityType,
} from "./types";
import { isAxiosError } from "axios";

// get single university
export const getSingleUniversity = async (
  id: string,
  token: string
): Promise<{ payload: SingleUniversityData | null } | undefined> => {
  try {
    const { data, status } = await get<SingleUniversityType>(
      `Panel_MedicalEquipment/GetSingleUniversity/${id}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      return {
        payload: data.object,
      };
    }
  } catch (error) {
    return {
      payload: null,
    };
  }
};

// update item
export const updateUniversity = async (
  payloadObj: SingleUniversityData,
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditUniversityType>(
      "Panel_MedicalEquipment/UpdateUniversity",
      JSON.stringify(payloadObj),
      {
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

// post university
export const psotUniversity = async (
  payloadObj: { universityName: string; website: string }[],
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      "Panel_MedicalEquipment/PostUniversities",
      JSON.stringify(payloadObj),
      {
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
