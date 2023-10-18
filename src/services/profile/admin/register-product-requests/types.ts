export interface RequestedProductsObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: {
    deviceId: number;
    name: string;
    brand: string;
    country: string;
    companyName: string;
    orderedByFullName: string;
  }[];
}

export interface RequestedProducts {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: RequestedProductsObj;
  list: null;
}

// confirmDevice
export interface ConfirmDeviceTypes {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: null;
}

// Single Device Types
export interface SingleDeviceObj {
  deviceId: number;
  name: string;
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
  companyName: string;
  managerFullName: string;
  faxNumber: string;
  website: string;
  userMobileNumber: string;
  userEmail: string;
  address: string;
}

export interface SingleDeviceData {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleDeviceObj;
  list: null;
}
