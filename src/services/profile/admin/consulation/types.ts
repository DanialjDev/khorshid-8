export interface ConsulationData {
  consultationId: number;
  fullName: string;
  phoneNumber: string;
  comment: string;
  creationDate: string;
}

export interface CounsulationObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: ConsulationData[];
}

export interface Consulations {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: CounsulationObj;
  list: null;
}

// Update Counselor
export interface UpdateCounselorProps {
  exMessage: null | string;
  list: null;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}
