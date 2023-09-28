export interface Device {
  deviceId: number;
  deviceName: string;
  imageUrl: string;
  companyName: string;
  orderedByMobileNumber: string;
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
