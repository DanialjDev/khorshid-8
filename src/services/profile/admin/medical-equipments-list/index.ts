import { deleteService, get } from "@/services/axios";
import {
  EndPoints,
  ReturnType,
  SingleReturnType,
  TableDateType,
} from "./types";
import { isAxiosError } from "axios";
import { UpdateSingleLab } from "./labs/types";
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
    console.log(reqUrl);
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
    console.log(error);
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
  url: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await deleteService<UpdateSingleLab>(
      `Panel_MedicalEquipment/${url}`,
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
