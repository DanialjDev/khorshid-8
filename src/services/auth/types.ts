export interface SignupData {
  exMessage: null | string;
  list: null;
  message: string;
  object: null | {
    email: string;
    fullName: null;
    maxDeviceNumber: number;
    mobileNumber: string;
    roleId: number;
    roleName: string;
    roleNameEn: string;
    userId: number;
    authData?: {
      name: string;
      token: string;
      tokenExpDate: string;
    };
  };
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}

export interface LoginData {
  exMessage: null | string;
  list: null;
  message: string;
  object: {
    userId: number;
    email: string;
    mobileNumber: string;
    fullName: null | string;
    roleId: number;
    authData: {
      name: string;
      token: string;
      tokenExpDate: string;
    };
  };
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}

export interface ForgetPasswordData {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: string;
  operationDate: string;
  status: number;
  object: null | Object;
  list: null;
}

export interface ChangePasswordData {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: string | null;
  operationDate: string;
  status: number;
  object: null;
  list: null;
}
