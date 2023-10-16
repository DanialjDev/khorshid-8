export interface Device {
  deviceId: number;
  deviceName: string;
  imageUrl: string;
  companyName: string;
  orderedByMobileNumber: string;
}

export interface TableData {
  totalItemsCount: number | null;
  totalPagesCount: null | number;
  pageContain: null | number;
  currentPageNumber: null | number;
  data: Device[];
}

export interface ShopDevices {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: number | null;
    totalPagesCount: null | number;
    pageContain: null | number;
    currentPageNumber: null | number;
    data: Device[];
  };
  list: null;
}

export interface SingleProduct {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null;
  operationDate: string;
  status: number;
  object: SingleProductData;
  list: null;
}

export interface SingleProductData {
  deviceId: number;
  deviceName: string;
  brand: string;
  country: string;
  categoryNames: string[];
  faxNumber: string;
  email: string;
  companyName: string;
  orderedByMobileNumber: string;
  orderedByFullName: string;
  website: string;
  address: string;
  imageUrl: string;
}
