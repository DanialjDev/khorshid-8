import { get } from "../axios";
import type { HomePageDate, HomePageDiveces } from "./types";

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
export const getHomePageDevies = async (
  pageContain: number = 4,
  pageNumber: number = 1
) => {
  try {
    const { data, status } = await get<HomePageDiveces>(
      `HomePage/GetPagedDevices?PageContain=${pageContain}&PageNumber${pageNumber}/`
    );
    if (status === 200) {
      return data.object;
    }
  } catch (error) {
    console.log(error);
  }
};
