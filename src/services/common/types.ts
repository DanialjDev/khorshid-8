export interface DeviceName {
  id: number;
  categoryName: string;
}

export interface DeviceCategories {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null;
  operationDate: string;
  status: number;
  object: null;
  list: DeviceName[];
}
