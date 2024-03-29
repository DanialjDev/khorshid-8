import { Conference } from "@/services/homePage/types";

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

// most visited pages
export interface MostVisitedPages {
  id: number;
  path: string;
  title: string;
}

export interface MostVisitedPagesProps {
  exMessage: null | string;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
  list: MostVisitedPages[];
}

// delete news
export interface DeleteNewsProps {
  exMessage: null | string;
  message: string;
  object: null;
  operationDate: string;
  operationName: string;
  status: number;
  success: boolean;
  list: null;
}

export interface PanelConfrences {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  list: Conference[];
}

export interface SingleConfrenceTypes {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: Conference;
  list: null;
}

export interface SingleNewsType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: News;
  list: null;
}

export interface UpdateSingleNewsType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: null;
}

// device logs

export interface SingleDeviceLog {
  id: number;
  year: number;
  month: number;
  monthTitle: string;
  acceptedCount: number;
  pendingCount: number;
  declinedCount: number;
}

export interface DeviceLogsType {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: null;
  list: SingleDeviceLog[];
}
