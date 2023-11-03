export interface SingleDeansOfUniData {
  id: number;
  deanOfUniFullName: string;
  address: string;
  telephone: string;
  cityName: string;
}

export interface SingleDeansOfUniType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleDeansOfUniData;
  list: null;
}
