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
