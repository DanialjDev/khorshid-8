import { isAxiosError } from "axios";
import { get } from "../axios";
import { Device, ShopDevices } from "./types";

type ReturnTyp = {
  status?: number;
  message?: string | undefined;
  data?: Device[];
};

export const getDevices = async (
  product?: string
): Promise<ReturnTyp | undefined> => {
  let reqUrl = `Shop/GetShopDevices`;
  try {
    if (product) {
      reqUrl = `${reqUrl}?Search=${product}`;
    }
    const { data, status } = await get<ShopDevices>(reqUrl);

    if (status === 200) {
      return {
        data: data.object.data,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        return {
          status: error.response.status,
          message: error.response.data.message,
        };
      }
    }
  }
};
