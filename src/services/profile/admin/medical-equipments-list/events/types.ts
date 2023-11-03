export interface SingleEventData {
  id: number;
  eventName: string;
  eventDate: string;
}

export interface GetSingleEventsTypes {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: SingleEventData;
  list: null;
}
