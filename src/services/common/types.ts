export interface DeviceName {
  id: number;
  categoryName: string;
}

export interface DeviceCategories {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null;
  operationDate: string;
  status: number;
  object: null;
  list: DeviceName[];
}

export interface HeaderPhoneNumber {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: boolean;
  object: {
    phoneNumber: string;
  };
  list: null;
}

export interface StateType {
  id: number;
  stateName: string;
}

export interface IranStateTypes {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null;
  operationDate: string;
  status: number;
  object: null;
  list: StateType[];
}

// companies
export interface SingleCompany {
  companyId: number;
  name: string;
}

export interface CompaniesType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null;
  operationDate: string;
  status: number;
  object: null;
  list: SingleCompany[];
}
