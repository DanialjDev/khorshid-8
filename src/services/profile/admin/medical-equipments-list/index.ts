import { get } from "@/services/axios";
import {
  EndPoints,
  MedicalEquipmentDevicesObj,
  MedicalEquipmentDevicesTypes,
  SingleDeviceData,
  SingleDeviceType,
} from "./types";
import { isAxiosError } from "axios";

type GetMedicalEquipmentsReturnTypeFromServer = MedicalEquipmentDevicesTypes;

export const getMedicalEquipments = async (
  url: EndPoints,
  pageNumber: number = 1,
  token?: string
): Promise<
  | {
      payload?: MedicalEquipmentDevicesObj;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } =
      await get<GetMedicalEquipmentsReturnTypeFromServer>(
        `Panel_MedicalEquipment/${url}?PageContain=10&PageNumber=${pageNumber}`,
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

// get single medical equipment device
export const getSingleDevice = async (
  deviceId: string,
  token: string
): Promise<
  | {
      payload?: SingleDeviceData;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<SingleDeviceType>(
      `Panel_MedicalEquipment/GetSingleDevice/${deviceId}`,
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
