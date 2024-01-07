import { isAxiosError } from "axios";
import { get } from "../axios";
import Cookies from "js-cookie";

type ReturnType = {
  data?: GalleryItem[];
  message?: string | undefined;
  status?: number;
};

export const getGalleryPhotos = async (): Promise<ReturnType | undefined> => {
  try {
    const { data, status } = await get<GalleryTypes>(
      "Gallery/GetPagedGallery/"
    );
    if (status === 200) {
      return {
        data: data.object.data,
        message: data.message,
      };
    }
  } catch (error) {
    console.log(error);
    if (isAxiosError(error)) {
      return {
        message: error.response?.data.message,
        status: error.response?.status,
      };
    }
  }
};
