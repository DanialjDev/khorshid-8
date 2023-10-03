import { HomeDevice } from "../homePage/types";

// Medical Equipmet => ********** Device Banner **********
export interface DeviceBannerObject {
  imageUrl: string;
  title: null | string;
  description: null | string;
  buttonTitle: null | string;
  link: string;
}

export interface DeviceBannerProps {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: DeviceBannerObject;
  list: null;
}

// Medical Equipment => ********** Get Devices **********

export interface MedicalDevice {
  deviceId: number;
  name: string;
  brand: string;
  country: string;
  companyName: string;
  orderedByMobileNumber: string;
  website: string;
  imageUrl: string;
}

export interface MedicalDevices {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: MedicalDevice[];
  };
  list: null;
}

// Medical Equipment => ********** Get Companies **********

export interface Company {
  companyId: number;
  name: string;
  managerFullName: string;
  faxNumber: string;
  address: string;
  phones: string[];
}

export interface CompaniesData {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: Company[];
  };
  list: null;
}

// Medical Equipment => ********** Get Deans Of Universities **********
export interface DeansOfUniversities {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: DeansOfUniversitiesData[];
  };
  list: null;
}

export interface DeansOfUniversitiesData {
  id: number;
  deanOfUniFullName: string;
  address: string;
  telephone: string;
  cityName: string;
}

// Medical Equipment => ********** Get Events **********
export interface Events {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: DeansOfUniversitiesData[];
  };
  list: null;
}

export interface EventsData {
  id: number;
  eventName: string;
  eventDate: string;
}

// Medical Equipment => ********** Get Hospitals **********
export interface Hospitals {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: HospitalsData[];
  };
  list: null;
}

export interface HospitalsData {
  id: number;
  hospitalName: string;
  category: string;
  coveredName: string;
  numberOfBeds: number;
  universityName: string;
  address: string;
  telephone: string;
  cityName: string;
}

// Medical Equipment => ********** Get Labs **********
interface Labs {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: HospitalsData[];
  };
  list: null;
}

interface LabsData {
  id: number;
  universityName: string;
  headOfLaboratory: string;
  address: string;
  telephone: string;
}

// Medical Equipment => ********** Get Vice Presidents Of Treatment **********
interface VicePresidentsOfTreatment {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: LabsData[];
  };
  list: null;
}

interface LabsData {
  id: number;
  universityName: string;
  vicePresident: string;
  telephone: string;
}

// Medical Equipment => ********** Get Universities **********
interface Universities {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: UniversitiesData[];
  };
  list: null;
}

interface UniversitiesData {
  id: number;
  universityName: string;
  website: string;
}

export type MedicalDeviceTypes = MedicalDevices & CompaniesData;

export type OperationNames =
  | "GetMedicalEquipmentDevices"
  | "GetMedicalEquipmentCompanies"
  | "GetDeansOfUniversities"
  | "GetEvents"
  | "GetHospotals"
  | "GetLabs"
  | "GetVicePresidentsOfTreatment"
  | "GetUniversities"
  | "HomePageDevices";
export type TableData = (Company &
  MedicalDevice &
  DeansOfUniversitiesData &
  EventsData &
  HospitalsData &
  LabsData &
  LabsData &
  HomeDevice)[];
