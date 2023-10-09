export interface ConsulationData {
  consultationId: number;
  fullName: string;
  phoneNumber: string;
  comment: string;
  creationDate: string;
}

export interface Consulations {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: ConsulationData[];
  };
  list: null;
}
