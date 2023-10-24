import { deleteService, get, put } from "@/services/axios";
import Cookies from "js-cookie";
import {
  DeleteNewsProps,
  MostVisitedPages,
  MostVisitedPagesProps,
  News,
  NewsItemsProps,
  PanelConfrences,
  SingleConfrenceTypes,
  UpdatePhoneNumber,
} from "./types";
import { isAxiosError } from "axios";
import { Conference } from "@/services/homePage/types";

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

// get most visited pages
export const getMostVisitedPages = async (
  token: string
): Promise<
  | {
      visitedPages?: MostVisitedPages[];
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<MostVisitedPagesProps>(
      "Panel_Dashboard/GetMostVisitedPages",
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      return {
        visitedPages: data.list,
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

// delete News
export const deleteNews = async (
  newsData: {
    newsID: string;
  },
  token: string
): Promise<
  | {
      status?: number;
      message: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await deleteService<DeleteNewsProps>(
      "Panel_Dashboard/RemoveNews",
      {
        data: newsData,
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      return {
        message: data.message,
        status,
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

// get Confrences
export const getConfrences = async (
  token: string
): Promise<
  | {
      confrences?: Conference[];
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<PanelConfrences>(
      "Panel_Dashboard/GetConferences",
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      return {
        confrences: data.list,
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

// get single confrence
export const getSingleConfrenceHandler = async (
  confrenceId: number | null,
  token: string
): Promise<
  | {
      confrence?: Conference;
      message?: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<SingleConfrenceTypes>(
      `Panel_Dashboard/GetSingleConference/${confrenceId}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    );
    if (status === 200) {
      return {
        confrence: data.object,
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

// update single confrence
export const updateSingleConfrence = async (
  newsData: FormData,
  token: string
): Promise<
  | {
      status?: number;
      message: string;
    }
  | undefined
> => {
  try {
    const { data, status } = await put<DeleteNewsProps>(
      "Panel_Dashboard/UpdateConference",
      newsData,
      {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
