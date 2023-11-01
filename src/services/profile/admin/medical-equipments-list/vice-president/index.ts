import { get, post, put } from "@/services/axios";
import {
  EditVicePresidentType,
  GetSingleVicePresidentsOfTreatmentType,
  SingleVicePresidentOfTreatmentsData,
} from "./types";
import { isAxiosError } from "axios";

// get single vice president of treatments
export const getSingleVicePresidentOfTreatments = async (
  id: string,
  token: string
): Promise<
  { payload: SingleVicePresidentOfTreatmentsData | null } | undefined
> => {
  try {
    const { data, status } = await get<GetSingleVicePresidentsOfTreatmentType>(
      `Panel_MedicalEquipment/GetSingleVicePresidentOfTreatment/${id}`,
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

// update single
export const updateSingleVicePresident = async (
  payloadObj: SingleVicePresidentOfTreatmentsData,
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditVicePresidentType>(
      "Panel_MedicalEquipment/UpdateVicePresidentsOfTreatments",
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

// post item
export const postVicePresidentOfTreatments = async (
  payloadObj: {
    universityName: string;
    vicePresident: string;
    telephone: string;
  }[],
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditVicePresidentType>(
      "Panel_MedicalEquipment/PostVicePresidentsOfTreatments",
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
