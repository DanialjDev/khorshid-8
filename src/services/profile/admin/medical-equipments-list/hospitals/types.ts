export interface SingleHospitalData {
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

export interface SingleHospitalType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleHospitalData;
  list: null;
}
