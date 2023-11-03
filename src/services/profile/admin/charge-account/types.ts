export interface User {
  userId: number;
  email: string;
  fullName: string;
  companyName: string;
  managerFullName: string;
  maxDeviceNumber: number;
  remainDeviceNumber: number;
}

export interface UsersObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: User[];
}

export interface GetUsersAccounts {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: UsersObj;
  list: null;
}

export interface UserDevice {
  deviceId: number;
  name: string;
  brand: string;
  country: string;
  companyName: string;
  orderedByFullName: string;
  orderedByMobileNumber: string;
}

export interface SingleUserDeviceObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: UserDevice[];
}

export interface SingleUserDevices {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleUserDeviceObj;
  list: null;
}

export interface UserInfo {
  managerFullName: string;
  maxDeviceNumber: number;
  remainDeviceNumber: number;
}

export interface UserMaxAndRemainDevice {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: UserInfo;
  list: null;
}

export interface GetUserAcceptedDevices {
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
    data: UserDevice[];
  };
  list: null;
}

export interface SingleUserAcceptedDevice {
  deviceId: number;
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
}

export interface GetUserAcceptedSingleDevice {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleUserAcceptedDevice;
  list: null;
}

export interface UpdateUserDevice {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: null;
}
