import { get, post, put } from "@/services/axios";
import { SingleHospitalData, SingleHospitalType } from "./types";
import { EditUniversityType } from "../universities/types";
import { isAxiosError } from "axios";

// get single hospital
export const getSingleHospital = async (
  id: string,
  token: string
): Promise<{ payload: SingleHospitalData | null } | undefined> => {
  try {
    const res = await get<SingleHospitalType>(
      `Panel_MedicalEquipment/GetSingleHospital/${id}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      return {
        payload: res.data.object,
      };
    }
  } catch (error) {
    return {
      payload: null,
    };
  }
};

// update hospital
export const updateSingleHospital = async (
  payload: {
    id: number;
    stateId: number;
    cityId: number;
    hospitalName: string;
    category: string;
    coveredName: string;
    numberOfBeds: number;
    universityName: string;
    address: string;
    telephone: string;
  },
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditUniversityType>(
      "Panel_MedicalEquipment/UpdateHospital",
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

// update hospital
export const postSingleHospital = async (
  payload: {
    stateId: number;
    cityId: number;
    hospitalName: string;
    category: string;
    coveredName: string;
    numberOfBeds: number;
    universityName: string;
    address: string;
    telephone: string;
  },
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      "Panel_MedicalEquipment/PostSingleHospital",
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
