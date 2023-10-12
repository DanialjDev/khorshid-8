import { isAxiosError } from "axios";
import { get } from "../axios";
import { Device, ShopDevices, SingleProduct, SingleProductData } from "./types";

type ReturnTyp = {
  status?: number;
  message?: string | undefined;
  data?: Device[];
};

export const getDevices = async (
  product?: string,
  categories?: string
): Promise<ReturnTyp | undefined> => {
  const baseUrl = "Shop/GetShopDevices";
  let reqUrl = "";
  let categoryBasedUrl = "";
  try {
    // if (product && !categories) {
    //   reqUrl = `${baseUrl}?Search=${product}`;
    // }
    // if (categories && !product) {
    //   console.log(categories);
    //   const lastIndex = categories.slice(-1);
    // if (lastIndex === "&") {
    //   categories = categories.substring(0, categories.length - 1);
    // }
    //   reqUrl = `${baseUrl}${categories}`;
    // }

    // if (categories && product) {
    //   const lastIndex = categories.slice(-1);
    //   if (lastIndex === "&") {
    //     categories = categories.substring(0, categories.length - 1);
    //   }
    //   categoryBasedUrl += "&" + categories;
    //   reqUrl = `${baseUrl}?Search=${product}${categories}`;
    //   console.log(reqUrl);
    //   console.log("categoryBasedUrl", categoryBasedUrl);
    // }

    const { data, status } = await get<ShopDevices>(baseUrl);
    console.log(data);

    if (status === 200) {
      return {
        data: data.object.data,
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
  categories?: string
): Promise<ReturnTyp | undefined> => {
  const baseUrl = "Shop/GetShopDevices";
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
    const { data, status } = await get<ShopDevices>(reqUrl);
    if (status === 200) {
      console.log(data);
      return {
        status,
        data: data.object.data,
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
