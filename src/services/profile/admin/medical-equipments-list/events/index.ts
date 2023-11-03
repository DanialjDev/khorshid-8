import { get, post, put } from "@/services/axios";
import { GetSingleEventsTypes, SingleEventData } from "./types";
import { EditUniversityType } from "../universities/types";
import { isAxiosError } from "axios";

// get singel event
export const getSingleEvent = async (
  id: string,
  token: string
): Promise<{ payload: SingleEventData | null } | undefined> => {
  try {
    const { data, status } = await get<GetSingleEventsTypes>(
      `Panel_MedicalEquipment/GetSingleEvent/${id}`,
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
export const updateSingleEvent = async (
  event: SingleEventData,
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<EditUniversityType>(
      "Panel_MedicalEquipment/UpdateEvent",
      JSON.stringify(event),
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
export const postSingleEvent = async (
  event: {
    eventName: string;
    eventDate: string;
  }[],
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<EditUniversityType>(
      "Panel_MedicalEquipment/PostEvents",
      JSON.stringify(event),
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
