import Button from "@/components/main/button/Button";
import AuthInput from "@/components/main/input/AuthInput";
import { DeviceLogsChart } from "@/components/profile/admin/statistics/DeviceLogsChart";
import NewsBox from "@/components/profile/admin/statistics/NewsBox";
import StatisticsBox from "@/components/profile/admin/statistics/StatisticsBox";
import UpdatePhoneNumber from "@/components/profile/admin/statistics/UpdatePhoneNumber";
import { getHeaderPhoneNumber } from "@/services/common";
import {
  getDeviceLogs,
  getMostVisitedPages,
  getNews,
} from "@/services/profile/admin/statistics";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const Statistics = async () => {
  const newsRes = await getNews(cookies().get("token")?.value!);
  const mostVisitedPages = await getMostVisitedPages(
    cookies().get("token")?.value!
  );
  const deviceLogs = await getDeviceLogs(cookies().get("token")?.value!);
  const headerPhoneNumber = await getHeaderPhoneNumber();

  return (
    <div className="w-full grid grid-cols-6 gap-6 items-stretch">
      <div className="w-full md:col-span-3 col-span-6 h-[470px]">
        <StatisticsBox hasTitleIcon={false}>
          <DeviceLogsChart devicesLogsData={deviceLogs ? deviceLogs : null} />
        </StatisticsBox>
      </div>
      <div className="w-full md:col-span-3 col-span-6 h-full">
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
          <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8 mt-14">
            {newsRes &&
              newsRes.newsData &&
              newsRes.newsData.map((news) => (
                <NewsBox key={news.newsId} newsNumber={String(news.newsId)} />
              ))}
          </div>
        </StatisticsBox>
      </div>
      <div className="w-full xl:col-span-2 sm:col-span-3 col-span-6 h-full">
        <StatisticsBox
          title="همایش ها"
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
                d="M20.8999 9.85L21.4899 19.74C21.5099 20.01 21.3799 20.19 21.3099 20.27C21.2299 20.36 21.0599 20.5 20.7799 20.5H18.0499L20.2099 9.85H20.8999ZM21.9999 6L21.9899 6.02C22.0099 6.26 21.9899 6.51 21.9299 6.76L14.5599 20.29C14.3199 21.3 13.4199 22 12.3799 22H20.7799C22.0699 22 23.0899 20.91 22.9899 19.62L21.9999 6Z"
                fill="white"
              />
              <path
                d="M11.4502 2.24039C11.5502 1.84039 11.3002 1.43039 10.9002 1.33039C10.5002 1.24039 10.0902 1.48039 9.99023 1.88039L9.49023 3.95039H11.0302L11.4502 2.24039Z"
                fill="white"
              />
              <path
                d="M18.0499 2.20957C18.1399 1.79957 17.8799 1.40957 17.4699 1.31957C17.0699 1.22957 16.6699 1.48957 16.5799 1.89957L16.1299 3.96957H17.6699L18.0499 2.20957Z"
                fill="white"
              />
              <path
                d="M21.8202 5.33043C21.4902 4.53043 20.7102 3.96043 19.7502 3.96043H17.6702L17.1102 6.55043C17.0302 6.90043 16.7202 7.14043 16.3802 7.14043C16.3302 7.14043 16.2702 7.14043 16.2202 7.12043C15.8202 7.03043 15.5602 6.63043 15.6402 6.23043L16.1302 3.95043H11.0302L10.4002 6.55043C10.3202 6.89043 10.0102 7.12043 9.67024 7.12043C9.61024 7.12043 9.55024 7.11043 9.49024 7.10043C9.09024 7.00043 8.84024 6.60043 8.94024 6.19043L9.48024 3.94043H7.45024C6.47024 3.94043 5.60024 4.58043 5.31024 5.52043L1.10024 19.0704C0.660243 20.5204 1.73024 22.0004 3.24024 22.0004H16.3802C17.4202 22.0004 18.3202 21.3004 18.5602 20.2904L21.9302 6.76043C21.9902 6.51043 22.0102 6.26043 21.9902 6.02043C21.9702 5.78043 21.9202 5.54043 21.8202 5.33043ZM14.7002 16.7504H6.70024C6.29024 16.7504 5.95024 16.4104 5.95024 16.0004C5.95024 15.5904 6.29024 15.2504 6.70024 15.2504H14.7002C15.1102 15.2504 15.4502 15.5904 15.4502 16.0004C15.4502 16.4104 15.1102 16.7504 14.7002 16.7504ZM15.7002 12.7504H7.70024C7.29024 12.7504 6.95024 12.4104 6.95024 12.0004C6.95024 11.5904 7.29024 11.2504 7.70024 11.2504H15.7002C16.1102 11.2504 16.4502 11.5904 16.4502 12.0004C16.4502 12.4104 16.1102 12.7504 15.7002 12.7504Z"
                fill="white"
              />
            </svg>
          }
        >
          <div className="w-full flex flex-col items-start">
            <div className="w-full mt-2">
              <p className="text-[14px] text-gray">
                شما برای وارد کردن همایش ها و یا حذف آن ها باید از این قسمت
                اقدام کنید.
              </p>
            </div>
            <div className="w-full flex mt-7">
              <Button
                href="/panel/statistics/confrences"
                bg="bg-transparent"
                color="text-primary"
                fontSize="text-[14px]"
                fontWeight="font-[600]"
                dir="rtl"
                padding="p-0"
                text="مشاهده بیشتر"
                icon={
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.59167 7.14714L11.8125 7.14714"
                      stroke="#2C9CF0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5918 4.22949L1.96188 7.14674L6.5918 10.064L6.5918 4.22949Z"
                      stroke="#2C9CF0"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </StatisticsBox>
      </div>
      <div className="w-full xl:col-span-2 sm:col-span-3 col-span-6 h-full">
        <StatisticsBox
          hasTitleIcon
          title="صفحات پر بازدید"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4062 10.6055H19.5586C19.6021 10.6055 19.6438 10.6228 19.6746 10.6535C19.7054 10.6843 19.7227 10.726 19.7227 10.7695V19.0312C19.7227 19.7741 19.4276 20.4864 18.9023 21.0117C18.3771 21.5369 17.6647 21.832 16.9219 21.832H7.07812C6.33531 21.832 5.62292 21.5369 5.09767 21.0117C4.57243 20.4864 4.27734 19.7741 4.27734 19.0312V4.96875C4.27734 4.22594 4.57243 3.51355 5.09767 2.9883C5.62292 2.46305 6.33531 2.16797 7.07812 2.16797H11.1211C11.1646 2.16797 11.2063 2.18525 11.2371 2.21602C11.2679 2.24679 11.2852 2.28852 11.2852 2.33203V8.48437C11.2852 9.04692 11.5086 9.58643 11.9064 9.98421C12.3042 10.382 12.8437 10.6055 13.4062 10.6055ZM8.48437 17.6367H15.5156C15.7052 17.6367 15.887 17.5614 16.0211 17.4273C16.1552 17.2933 16.2305 17.1115 16.2305 16.9219C16.2305 16.7323 16.1552 16.5505 16.0211 16.4164C15.887 16.2823 15.7052 16.207 15.5156 16.207H8.48437C8.29479 16.207 8.11296 16.2823 7.9789 16.4164C7.84484 16.5505 7.76953 16.7323 7.76953 16.9219C7.76953 17.1115 7.84484 17.2933 7.9789 17.4273C8.11296 17.5614 8.29479 17.6367 8.48437 17.6367ZM8.48437 14.1211H15.5156C15.7052 14.1211 15.887 14.0458 16.0211 13.9117C16.1552 13.7777 16.2305 13.5958 16.2305 13.4062C16.2305 13.2167 16.1552 13.0348 16.0211 12.9008C15.887 12.7667 15.7052 12.6914 15.5156 12.6914H8.48437C8.29479 12.6914 8.11296 12.7667 7.9789 12.9008C7.84484 13.0348 7.76953 13.2167 7.76953 13.4062C7.76953 13.5958 7.84484 13.7777 7.9789 13.9117C8.11296 14.0458 8.29479 14.1211 8.48437 14.1211Z"
                fill="white"
                stroke="#4FD1C5"
                stroke-width="0.0234375"
              />
              <path
                d="M12.8447 2.72723L19.1644 9.04696L12.8447 2.72723ZM12.8447 2.72723C12.8447 2.72722 12.8447 2.72722 12.8447 2.72722M12.8447 2.72723L12.8447 2.72722M12.8447 2.72722C12.8341 2.71663 12.8205 2.70944 12.8058 2.70652C12.7911 2.70361 12.7758 2.70512 12.7619 2.71086C12.748 2.7166 12.7362 2.72631 12.7278 2.73878C12.7194 2.75124 12.7149 2.7659 12.7148 2.78091V8.48542C12.7148 8.6688 12.7877 8.84466 12.9174 8.97432C13.047 9.10398 13.2229 9.17683 13.4063 9.17683H19.1107C19.1258 9.17677 19.1404 9.17226 19.1529 9.16389C19.1654 9.15552 19.1751 9.14364 19.1808 9.12976C19.1866 9.11588 19.1881 9.10062 19.1851 9.08589C19.1822 9.07116 19.175 9.05763 19.1645 9.04698L12.8447 2.72722Z"
                fill="white"
                stroke="#4FD1C5"
                stroke-width="0.0234375"
              />
            </svg>
          }
        >
          <div className="w-full flex flex-col items-start">
            <div className="w-full mt-2">
              <p className="text-[14px] text-gray">
                لیست پر بازدید ترین صفحات سایت را در این قسمت مشاهده کنید.
              </p>
            </div>
            <div className="w-full flex flex-col items-start">
              {mostVisitedPages &&
                mostVisitedPages.visitedPages &&
                mostVisitedPages.visitedPages.map((page, index) => {
                  if (index > 3) {
                    return;
                  }
                  return (
                    <Link
                      href={page.path}
                      className="w-full my-3 flex items-center"
                      key={page.id}
                    >
                      <div className="text-primaryDark6">{index + 1}</div>
                      <p className="text-[14px] mr-2">{page.title}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </StatisticsBox>
      </div>
      <div className="w-full xl:col-span-2 col-span-6 h-full">
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
          <UpdatePhoneNumber phoneNumber={headerPhoneNumber} />
        </StatisticsBox>
      </div>
    </div>
  );
};

export default Statistics;

export const generateMetadata = async () => {
  return {
    title: "آمار سایت",
  };
};
