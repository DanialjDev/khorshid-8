export interface CompanyData {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: CompanyObject;
  list: null;
}

export interface CompanyObject {
  companyName: null | string;
  companyManagerFullName: null | string;
  faxNumber: null | string;
  website: null | string;
  mobileNumber: string;
  email: string;
  address: null | string;
}

export interface UpdateProfileData {
  exMessage: string | null;
  list: null;
  message: string;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
  object: {
    userId: number;
    email: string;
    mobileNumber: string;
    managerFullName: null | string;
    maxDeviceNumber: number;
    roleName: string;
    roleNameEn: string;
    roleId: number;
    authData: {
      name: string;
      token: string;
      tokenExpDate: string;
    };
  };
}

// PostProfileDevice
export interface PostProfileDevice {
  exMessage: null | string;
  list: null;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}
