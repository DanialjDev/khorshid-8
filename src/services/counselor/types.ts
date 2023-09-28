export interface CounselorObject {
  fullName: string;
  position: string;
  comment: string;
  phoneNumber: string;
  imageUrl: string;
}

export interface CounselorData {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: CounselorObject;
  list: null;
}
