import { get, put } from "@/services/axios";
import Cookies from "js-cookie";
import { News, NewsItemsProps, UpdatePhoneNumber } from "./types";
import { isAxiosError } from "axios";

export const getNews = async (
  token: string
): Promise<
  | {
      newsData?: News[];
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<NewsItemsProps>(
      "Panel_Dashboard/GetNews",
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (status === 200) {
      return {
        newsData: data.list,
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

// update News
export const updateNews = async (
  updatedData: {
    NewsId: number;
    Title: string;
    Description: string;
    IsImageChangedOrDeleted: boolean;
    Image: File;
    Link: string;
  },
  token: string
) => {
  try {
    const { data, status } = await put(
      "Panel_Dashboard/UpdateNews",
      JSON.stringify(updatedData),
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Update PhoneNumber
export const updatePhoneNumber = async (
  userData: {
    phoneNumber: string;
  },
  token: string
): Promise<
  | {
      message: string;
      status?: number;
    }
  | undefined
> => {
  try {
    const { data, status } = await put<UpdatePhoneNumber>(
      "Panel_Dashboard/UpdateHeaderPhoneNumber",
      JSON.stringify(userData),
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
