import { SinglLabReturnType, SingleLab } from "./labs/types";

export type EndPoints =
  | "GetDevices"
  | "GetCompanies"
  | "GetLabs"
  | "GetDeansOfUniversities"
  | "GetHospitals"
  | "GetEvents"
  | "GetUniversities"
  | "GetVicePresidentsOfTreatment";

// export type MedicalEquipmentTableData = MedicalEquipmentDevicesObj &
//   CompaniesObjectType;

// export type MedicalEquipmentsReturnType = MedicalEquipmentDevicesTypes;

export type ReturnType = MedicalEquipmentDevicesTypes &
  MedicalEquipmentsCompanies;

export type TableDateType = MedicalEquipmentDevicesObj & CompaniesObjectType;

export type TableHeaderTypes = "GetDevices";

export type SingleRecordReturnType =
  | SingleDeviceData
  | SingleCompany
  | SingleLab;
export type SingleReturnType = SingleDeviceType &
  SingleCompany &
  SinglLabReturnType;

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

// Companies
export interface SingleCompany {
  companyId: number;
  name: string;
  managerFullName: string;
  faxNumber: string;
  address: string;
  phones: string[];
}

export interface CompaniesObjectType {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: SingleCompany[];
}

export interface MedicalEquipmentsCompanies {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: CompaniesObjectType;
  list: null;
}
