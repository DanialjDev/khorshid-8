interface GalleryItem {
  id: number;
  imageUrl: string;
}

interface GalleryTypes {
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
    data: GalleryItem[];
  };
  list: null;
}
