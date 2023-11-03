export interface RegisteredDevice {
  deviceId: number;
  name: string;
  brand: string;
  country: string;
  companyName: string;
  orderedByFullName: string;
  orderedByMobileNumber: string;
}

export interface RegisteredDeviceObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: RegisteredDevice[];
}

export interface RegisteredDevicesType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: RegisteredDeviceObj;
  list: null;
}

export interface SingleAcceptedDevice {
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

// single accepted device
export interface SingleAcceptedDeviceType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleAcceptedDevice;
  list: null;
}
