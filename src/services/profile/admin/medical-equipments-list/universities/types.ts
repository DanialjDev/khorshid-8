export interface SingleUniversityData {
  id: number;
  universityName: string;
  website: string;
}

export interface SingleUniversityType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleUniversityData;
  list: null;
}

export interface EditUniversityType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: null;
}
