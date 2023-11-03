import { get, post, put } from "@/services/axios";
import { SingleCompanyData, SingleCompanyType } from "./types";
import { EditUniversityType } from "../universities/types";
import { isAxiosError } from "axios";

export const getSingleCompany = async (
  id: string,
  token: string
): Promise<{ payload: SingleCompanyData | null } | undefined> => {
  try {
    const { data, status } = await get<SingleCompanyType>(
      `Panel_MedicalEquipment/GetSingleCompany/${id}`,
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

// update single company
export const updateSingleCompany = async (
  payload: SingleCompanyData,
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditUniversityType>(
      "Panel_MedicalEquipment/UpdateCompany",
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

// post single company
export const psotSingleCompany = async (
  payload: {
    name: string;
    managerFullName: string;
    faxNumber: string;
    website: string;
    address: string;
  }[],
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      "Panel_MedicalEquipment/PostCompanies",
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
