export type EndPoints = "GetDevices";

// export type MedicalEquipmentsDataType = MedicalEquipmentDevicesData;

// Devices
export interface MedicalEquipmentDevicesData {
  deviceId: number;
  name: string;
  brand: string;
  country: string;
  companyName: string;
  orderedByMobileNumber: string;
  website: string;
  imageUrl: string | null;
}

export interface SingleDeviceData {
  deviceId: number;
  companyId: number;
  companyName: string;
  managerFullName: string;
  faxNumber: string;
  website: string;
  userMobileNumber: string;
  userEmail: string;
  address: string;
  deviceName: string;
  brand: string;
  country: string;
  orderedByName: string;
  orderedByLastName: string;
  orderedByMobileNumber: string;
  imageUrl: string;
  categories: {
    id: number;
    categoryName: string;
  }[];
}

export interface SingleDeviceType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleDeviceData;
  list: null;
}

export interface MedicalEquipmentDevicesObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: MedicalEquipmentDevicesData[];
}

export interface MedicalEquipmentDevicesTypes {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: MedicalEquipmentDevicesObj;
  list: null;
}
