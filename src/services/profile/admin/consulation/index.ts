import { get } from "@/services/axios";
import { cookies } from "next/headers";
import { ConsulationData, Consulations } from "./types";
import { isAxiosError } from "axios";

// Get Consulations

type ConsulationReturnType = {
  consulationData?: ConsulationData[];
  message?: string | undefined;
};
export const getConsulations = async (): Promise<
  ConsulationReturnType | undefined
> => {
  try {
    const { data, status } = await get<Consulations>(
      "Panel_Counsulation/GetCounsulations",
      {
        headers: {
          Authorization: ` bearer ${cookies().get("token")?.value}`,
        },
      }
    );

    if (status === 200) {
      return {
        consulationData: data.object.data,
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
