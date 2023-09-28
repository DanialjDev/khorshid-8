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
