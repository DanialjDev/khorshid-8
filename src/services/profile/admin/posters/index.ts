import { get } from "@/services/axios";
import {
  Gallery,
  HomeSideBanners,
  MedicalEquipmentBanners,
  Posters,
} from "./types";
import { isAxiosError } from "axios";

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
