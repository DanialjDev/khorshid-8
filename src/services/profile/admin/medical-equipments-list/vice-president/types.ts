export interface SingleVicePresidentOfTreatmentsData {
  id: number;
  universityName: string;
  vicePresident: string;
  telephone: string;
}

export interface GetSingleVicePresidentsOfTreatmentType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleVicePresidentOfTreatmentsData;
  list: null;
}

export interface EditVicePresidentType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: null;
}
