import { get } from "../axios";
import type { HomeDevice, HomePageDate, HomePageDiveces } from "./types";

// Get Home Page Date
export const getHomePageDate = async () => {
  try {
    const { data, status } = await get<HomePageDate>(
      "HomePage/GetHomePageData/"
    );
    if (status === 200) {
      return data.object;
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Home‌ Page Devices
type ReturnType = HomeDevice[];
export const getHomePageDevies = async (): Promise<ReturnType | undefined> => {
  try {
    const { data, status } = await get<HomePageDiveces>(
      `HomePage/GetPagedDevices?PageContain=8&PageNumber=1`
    );
    if (status === 200) {
      return data.object.data;
    }
  } catch (error) {
    console.log(error);
  }
};
