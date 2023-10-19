export interface News {
  newsId: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface NewsItemsProps {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: News[];
}

export interface UpdatePhoneNumber {
  exMessage: null | string;
  list: null;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
}
