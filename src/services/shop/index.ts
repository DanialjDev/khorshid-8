import { isAxiosError } from "axios";
import { get } from "../axios";
import {
  Device,
  ShopDevices,
  SingleProduct,
  SingleProductData,
  TableData,
} from "./types";

type ReturnTyp = {
  status?: number;
  message?: string | undefined;
  data?: TableData;
  // pageInfo?: PageInfo;
};

export const getDevices = async (
  pageNumber?: string
): Promise<ReturnTyp | undefined> => {
  let baseUrl = `Shop/GetShopDevices?PageContain=9`;
  try {
    if (pageNumber) {
      baseUrl = `${baseUrl}&PageNumber=${pageNumber}`;
    }
    const { data, status } = await get<ShopDevices>(baseUrl);
    console.log(data);

    if (status === 200) {
      return {
        data: data.object,
        status,
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

// Filter Device
export const filterDevices = async (
  searchInput?: string,
  categories?: string,
  pageNumber?: string
): Promise<ReturnTyp | undefined> => {
  let baseUrl = `Shop/GetShopDevices?PageContain=9`;
  let reqUrl = "";
  try {
    if (searchInput && !categories) {
      reqUrl = `${baseUrl}?Search=${searchInput}`;
    } else if (!searchInput && categories) {
      const lastIndex = categories.slice(-1);
      if (lastIndex === "&") {
        categories = categories.substring(0, categories.length - 1);
      }
      reqUrl = `${baseUrl}?${categories}`;
    } else if (searchInput && categories) {
      const lastIndex = categories.slice(-1);
      if (lastIndex === "&") {
        categories = categories.substring(0, categories.length - 1);
      }
      reqUrl = `${baseUrl}?Search=${searchInput}&${categories}`;
    } else {
      reqUrl = baseUrl;
    }
    if (pageNumber) {
      reqUrl = `${reqUrl}&PageNumber=${pageNumber}`;
    }
    const { data, status } = await get<ShopDevices>(reqUrl);
    if (status === 200) {
      console.log(data);
      return {
        status,
        data: data.object,
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

type SingleProductReturnType = {
  data?: SingleProductData;
  message?: string | undefined;
};

// Get Single Device
export const getSingleDevice = async (
  deviceId: string
): Promise<SingleProductReturnType | undefined> => {
  try {
    const { data, status } = await get<SingleProduct>(
      `Shop/GetShopSingleDevice/${deviceId}`
    );

    if (status === 200) {
      return {
        data: data.object,
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
