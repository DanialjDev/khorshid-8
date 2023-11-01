// Labs
export interface SinglLabReturnType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleLab;
  list: null;
}

export interface SingleLab {
  id: number;
  universityName: string;
  headOfLaboratory: string;
  address: string;
  telephone: string;
}

export interface GetLabsObj {
  totalItemsCount: number;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: SingleLab[];
}

export interface GetLabsTypes {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: GetLabsObj;
  list: null;
}

export interface UpdateSingleLab {
  exMessage: null | string;
  list: null;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}
