import AuthInput from "@/components/main/input/AuthInput";
import NewsBox from "@/components/profile/admin/statistics/NewsBox";
import StatisticsBox from "@/components/profile/admin/statistics/StatisticsBox";
import UpdatePhoneNumber from "@/components/profile/admin/statistics/UpdatePhoneNumber";
import { getNews } from "@/services/profile/admin/statistics";
import { cookies } from "next/headers";
import React from "react";

const Statistics = async () => {
  const newsRes = await getNews(cookies().get("token")?.value!);
  console.log(newsRes);
  return (
    <div className="w-full grid grid-cols-6 gap-6 h-[400px] items-stretch">
      <div className="w-full col-span-3 h-full">
        <StatisticsBox>1</StatisticsBox>
      </div>
      <div className="w-full col-span-3 h-full">
        <StatisticsBox
          title="اخبار سایت"
          hasTitleIcon
          icon={
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.19 6.5H6.79C6.53 6.5 6.28 6.51 6.04 6.54C3.35 6.77 2 8.36 2 11.29V15.29C2 19.29 3.6 20.08 6.79 20.08H7.19C7.41 20.08 7.7 20.23 7.83 20.4L9.03 22C9.56 22.71 10.42 22.71 10.95 22L12.15 20.4C12.3 20.2 12.54 20.08 12.79 20.08H13.19C16.12 20.08 17.71 18.74 17.94 16.04C17.97 15.8 17.98 15.55 17.98 15.29V11.29C17.98 8.1 16.38 6.5 13.19 6.5ZM6.5 14.5C5.94 14.5 5.5 14.05 5.5 13.5C5.5 12.95 5.95 12.5 6.5 12.5C7.05 12.5 7.5 12.95 7.5 13.5C7.5 14.05 7.05 14.5 6.5 14.5ZM9.99 14.5C9.43 14.5 8.99 14.05 8.99 13.5C8.99 12.95 9.44 12.5 9.99 12.5C10.54 12.5 10.99 12.95 10.99 13.5C10.99 14.05 10.55 14.5 9.99 14.5ZM13.49 14.5C12.93 14.5 12.49 14.05 12.49 13.5C12.49 12.95 12.94 12.5 13.49 12.5C14.04 12.5 14.49 12.95 14.49 13.5C14.49 14.05 14.04 14.5 13.49 14.5Z"
                fill="white"
              />
              <path
                d="M21.9798 7.29V11.29C21.9798 13.29 21.3598 14.65 20.1198 15.4C19.8198 15.58 19.4698 15.34 19.4698 14.99L19.4798 11.29C19.4798 7.29 17.1898 5 13.1898 5L7.09976 5.01C6.74976 5.01 6.50976 4.66 6.68976 4.36C7.43976 3.12 8.79976 2.5 10.7898 2.5H17.1898C20.3798 2.5 21.9798 4.1 21.9798 7.29Z"
                fill="white"
              />
            </svg>
          }
        >
          <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 mt-8">
            {newsRes &&
              newsRes.newsData &&
              newsRes.newsData.map((news) => (
                <NewsBox key={news.newsId} newsNumber={String(news.newsId)} />
              ))}
          </div>
        </StatisticsBox>
      </div>
      <div className="w-full col-span-2">
        <StatisticsBox>3</StatisticsBox>
      </div>
      <div className="w-full col-span-2">
        <StatisticsBox>4</StatisticsBox>
      </div>
      <div className="w-full col-span-2">
        <StatisticsBox
          title="شماره تماس داخل Header"
          hasTitleIcon
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M18.5 9C18.5 8.4 18.03 7.48 17.33 6.73C16.69 6.04 15.84 5.5 15 5.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 9C22 5.13 18.87 2 15 2"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          <UpdatePhoneNumber />
        </StatisticsBox>
      </div>
    </div>
  );
};

export default Statistics;
