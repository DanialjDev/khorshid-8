import { get, put, deleteService, post } from "@/services/axios";
import {
  Gallery,
  HomePagePosters,
  HomeSideBanners,
  MedicalEquipmentBanners,
  PosterDataType,
  Posters,
} from "./types";
import axios, { isAxiosError } from "axios";

type PanelPostersReturnType = {
  homeSideBanners?: HomeSideBanners[];
  medicalEquipmentBanners?: MedicalEquipmentBanners[];
  gallery?: Gallery[];
  message?: string;
};

export const getPanelPosters = async (
  token: string
): Promise<PanelPostersReturnType | undefined> => {
  try {
    const { data, status } = await get<Posters>("Panel_Posters/GetPosters", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    console.log(data);
    if (status === 200) {
      return {
        homeSideBanners: data.object.homeSideBanners,
        medicalEquipmentBanners: data.object.medicalEquipmentBanners,
        gallery: data.object.gallery,
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

// Update HomePagePosters
type HomePagePostersUpdateReturnType = {
  status?: number;
  message: string;
};

export const updatePosters = async (
  userData: any,
  token: string,
  url: string
): Promise<HomePagePostersUpdateReturnType | undefined> => {
  try {
    const { data, status } = await put<HomePagePosters>(
      `Panel_Posters/${url}`,
      userData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
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

// delete posters
type DeletePostersReturnType = {
  status?: number;
  message: string;
};

export const deletePoster = async (
  posterData: PosterDataType,
  token: string,
  url: string
): Promise<DeletePostersReturnType | undefined> => {
  try {
    console.log(posterData);
    const { data, status } = await axios.delete<HomePagePosters>(
      `Panel_Posters/${url}`,
      {
        data: posterData,
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

// add gallery picture
export const postImageToGallery = async (
  imageData: FormData,
  token: string
) => {
  try {
    const { data, status } = await post<HomePagePosters>(
      "Panel_Posters/PostImageToGallery",
      imageData,
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
