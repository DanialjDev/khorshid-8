import { deleteService, get, post } from "@/services/axios";
import {
  EndPoints,
  ReturnType,
  SingleReturnType,
  TableDateType,
} from "./types";
import { isAxiosError } from "axios";
import { UpdateSingleLab } from "./labs/types";
import { EditUniversityType } from "./universities/types";
export const getMedicalEquipments = async (
  url: EndPoints,
  pageNumber: number | null = 1,
  token?: string,
  searchValue?: string
): Promise<
  | {
      payload?: TableDateType;
      message?: string;
    }
  | undefined
> => {
  let reqUrl = `Panel_MedicalEquipment/${url}?PageContain=10&PageNumber=${
    pageNumber ? pageNumber : 1
  }`;
  if (searchValue) {
    reqUrl += `${searchValue}`;
  }
  try {
    const { data, status } = await get<ReturnType>(reqUrl, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (status === 200) {
      return {
        payload: data.object,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.data.errors.EventDate[0]) {
        return {
          message: "تاریخ وارد شده نادرست می باشد",
        };
      }
      return {
        message: error.response?.data.message,
      };
    }
  }
};

// get single medical equipment device
export const getSingleDevice = async (
  id: string,
  token: string,
  url: string
): Promise<
  | {
      payload?: any;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<SingleReturnType>(
      `Panel_MedicalEquipment/${url}/${id}`,
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
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
      };
    }
  }
};

// delete items
export const deleteItems = async (
  payload: number[],
  token: string,
  url: string,
  isMedical?: boolean
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await deleteService<UpdateSingleLab>(
      isMedical ? `Panel_MedicalEquipment/${url}` : url,
      {
        data: payload,
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

// post list data
export const postListData = async (
  payloadObj: any,
  token: string,
  url: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      `Panel_MedicalEquipment/${url}`,
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

// get all medical equipments data
export const getAllMedicalEquipments = async (
  url: EndPoints,
  token?: string
): Promise<
  | {
      payload?: TableDateType;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<ReturnType>(
      `Panel_MedicalEquipment/${url}`,
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
    if (isAxiosError(error)) {
      if (error.response?.data.errors.EventDate[0]) {
        return {
          message: "تاریخ وارد شده نادرست می باشد",
        };
      }
      return {
        message: error.response?.data.message,
      };
    }
  }
};
