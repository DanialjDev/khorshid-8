import { get, post, put } from "@/services/axios";
import { SingleDeansOfUniData, SingleDeansOfUniType } from "./types";
import { EditUniversityType } from "../universities/types";
import { isAxiosError } from "axios";

// get single dean of uni
export const getSingleDeansOfUni = async (
  id: string,
  token: string
): Promise<{ payload: SingleDeansOfUniData | null } | undefined> => {
  try {
    const { data, status } = await get<SingleDeansOfUniType>(
      `Panel_MedicalEquipment/GetSingleDeanOfUniversity/${id}`,
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

// update event
export const updateSingleDeanOfUni = async (
  payload: {
    id: number;
    deanOfUniFullName: string;
    address: string;
    telephone: string;
    cityId: number;
    stateId: number;
  },
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditUniversityType>(
      "Panel_MedicalEquipment/UpdateDeanOfUniversity/",
      JSON.stringify(payload),
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

// post event
export const postSingleDeanOfUni = async (
  payload: {
    deanOfUniFullName: string;
    address: string;
    telephone: string;
    cityId: number;
    stateId: number;
  },
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      "Panel_MedicalEquipment/PostSingleDeanOfUniversity/",
      JSON.stringify(payload),
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
