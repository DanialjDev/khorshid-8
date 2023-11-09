import { deleteService, get, post, put } from "@/services/axios";
import {
  GetLabsTypes,
  SinglLabReturnType,
  SingleLab,
  UpdateSingleLab,
} from "./types";
import { isAxiosError } from "axios";

export const getSingleLab = async (
  id: string,
  token: string
): Promise<
  | {
      payload?: SingleLab;
    }
  | undefined
> => {
  try {
    const { data, status } = await get<SinglLabReturnType>(
      `Panel_MedicalEquipment/GetSingleLab/${id}/`,
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
  } catch (error) {}
};

// update singel lab
export const updateSingleLab = async (
  labData: SingleLab,
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await put<UpdateSingleLab>(
      "Panel_MedicalEquipment/UpdateLab",
      JSON.stringify(labData),
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

// post lab
export const postSingleLab = async (
  labData: {
    universityName: string;
    headOfLaboratory: string;
    address: string;
    telephone: string;
  }[],
  token: string
): Promise<{ status?: number; message: string } | undefined> => {
  try {
    const { data, status } = await post<UpdateSingleLab>(
      "Panel_MedicalEquipment/PostLabs",
      JSON.stringify(labData),
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

// delete Labs
// export const deleteLabs = async (
//   payload: number[],
//   token: string
// ): Promise<{ status?: number; message: string } | undefined> => {
//   try {
//     const { data, status } = await deleteService<UpdateSingleLab>(
//       "Panel_MedicalEquipment/RemoveLabs",
//       {
//         data: payload,
//         headers: {
//           Authorization: `bearer ${token}`,
//         },
//       }
//     );
//     if (status === 200) {
//       return {
//         status,
//         message: data.message,
//       };
//     }
//   } catch (error) {
//     if (isAxiosError(error)) {
//       return {
//         message: error.response?.data.message,
//       };
//     }
//   }
// };
