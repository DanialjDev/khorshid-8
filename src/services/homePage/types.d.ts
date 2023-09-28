interface Conference {
  conferenceId: number;
  name: string;
  imageUrl: string;
  link: string;
}

interface HomeDevice {
  deviceId?: number;
  categories?: [
    {
      id: number;
      categoryName: string;
    }
  ];
  name: string;
  brand?: string;
  country?: string;
  orderedByName?: string;
  orderedByLastName?: string;
  orderedByMobileNumber: string;
  imageUrl: string;
  companyName?: string;
  companyManagerFullName?: string;
  companyFaxNumber?: null | number;
  companyWebsite: string;
  companyAddress?: null | string;
}

interface HomeSideBanner {
  homeSideBannerId: number;
  imageUrl: string;
  link: string;
}

interface News {
  newsId?: number;
  title?: string;
  description?: string;
  creationDate: Date;
  imageUrl: string;
  link: string;
}

export interface HomePageDate {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    conferences: Conference[];
    homeSideBanners: HomeSideBanner[];
    news: News[];
  };
  list: null;
}

export interface HomePageDiveces {
  success: boolean;
  operationName: string;
  message: string;
  exMessage: null | string;
  operationDate: string;
  status: number;
  object: {
    totalItemsCount: 5;
    totalPagesCount: 2;
    pageContain: 4;
    currentPageNumber: 1;
    data: HomeDevice[];
  };
  list: null;
}
