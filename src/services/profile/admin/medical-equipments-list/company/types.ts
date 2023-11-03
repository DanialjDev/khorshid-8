export interface SingleCompanyData {
  companyId: number;
  name: string;
  managerFullName: string;
  faxNumber: string;
  website: string;
  address: string;
}

export interface SingleCompanyType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleCompanyData;
  list: null;
}
