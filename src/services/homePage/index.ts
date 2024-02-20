import { get } from "../axios";
import type { HomeDevice, HomePageDate, HomePageDiveces } from "./types";

// Get Home Page Date
export const getHomePageDate = async () => {
  try {
    const { data, status } = await get<HomePageDate>(
      "HomePage/GetHomePageData/"
    );
    console.log(data);
    if (status === 200) {
      return data.object;
    }
  } catch (error) {
    console.log(error);
  }
};

// Get Home‌ Page Devices
type ReturnType = HomeDevice[];
export const getHomePageDevies = async (
  pageContain?: string
): Promise<ReturnType | undefined> => {
  let url = `HomePage/GetPagedDevices?PageContain=4&PageNumber=1`;

  if (pageContain) {
    url = `HomePage/GetPagedDevices?PageContain=${pageContain}&PageNumber=1`;
  }
  try {
    const { data, status } = await get<HomePageDiveces>(url);
    if (status === 200) {
      return data.object.data;
    }
  } catch (error) {}
};
