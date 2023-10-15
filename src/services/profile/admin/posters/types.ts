export interface HomeSideBanners {
  homeSideBannerId: number;
  imageUrl: null | string;
  link: string;
}

export interface MedicalEquipmentBanners {
  bannerId: number;
  name: string;
  imageUrl: string | null;
  link: null | string;
}

export interface Gallery {
  id: number;
  imageUrl: string;
}

export interface Posters {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    homeSideBanners: HomeSideBanners[];
    medicalEquipmentBanners: MedicalEquipmentBanners[];
    gallery: Gallery[];
  };
  list: null;
}

// HomePage Posters
export interface HomePagePosters {
  exMessage: null | string;
  list: null;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}

interface HomePagePosterData {
  homeSideBannerID: number;
}
interface MedicalPosterData {
  bannerID: number;
}
interface GalleryPosterData {
  id: number;
}

export type PosterDataType =
  | HomePagePosterData
  | MedicalPosterData
  | GalleryPosterData;
