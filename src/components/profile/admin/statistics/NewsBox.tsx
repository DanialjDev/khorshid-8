"use client";

import { deleteNews } from "@/services/profile/admin/statistics";
import Link from "next/link";
import React from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const NewsBox = ({ newsNumber }: { newsNumber: string }) => {
  const { refresh } = useRouter();
  const deleteNewsHandler = async () => {
    if (Cookies.get("token")) {
      const deleteNewsRes = await deleteNews(
        { newsID: newsNumber },
        Cookies.get("token")!
      );

      if (deleteNewsRes?.status === 200) {
        toast.success(deleteNewsRes.message);
        refresh();
      } else {
        toast.error(deleteNewsRes?.message);
      }
    }
  };
  return (
    <div className="w-full flex justify-between flex-row-reverse 2xl:col-span-1 col-span-2 border border-profileBorderColor rounded-[5px] bg-newsBoxBg p-[6px]">
      <div className="flex flex-row-reverse">
        <div className="p-2 bg-newsIconBg rounded-[5px] flex justify-center items-center">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-90"
          >
            <path
              d="M10.5821 25.6687C8.05443 25.6687 5.7756 24.146 4.80813 21.8108C3.84066 19.4756 4.37504 16.7875 6.16213 14.9999L8.81463 12.3474L10.5821 14.1149L7.93088 16.7662C6.98346 17.7136 6.61344 19.0945 6.96023 20.3887C7.30701 21.6829 8.3179 22.6938 9.6121 23.0406C10.9063 23.3873 12.2872 23.0173 13.2346 22.0699L15.8859 19.4187L17.6534 21.1874L15.0021 23.8387C13.8322 25.0143 12.2407 25.6733 10.5821 25.6687ZM11.4659 20.3024L9.69838 18.5349L18.5371 9.69615L20.3046 11.4637L11.4671 20.3012L11.4659 20.3024ZM21.1896 17.6512L19.4209 15.8837L22.0721 13.2324C23.0325 12.2878 23.4124 10.9007 23.0674 9.59863C22.7225 8.29653 21.7057 7.27946 20.4036 6.93421C19.1016 6.58895 17.7144 6.96855 16.7696 7.92865L14.1171 10.5799L12.3496 8.8124L15.0021 6.1599C17.446 3.73736 21.3883 3.74599 23.8216 6.17922C26.2548 8.61244 26.2634 12.5548 23.8409 14.9987L21.1896 17.6499V17.6512Z"
              fill="#2C9CF0"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-between items-end ml-[9px]">
          <p className="text-posterTitleColor text-[15px] mb-1">
            کارت خبر {newsNumber}
          </p>
          <Link
            className="underline text-[13px] text-primaryDark5"
            href={`/panel/statistics/insert-news?newsId=${newsNumber}`}
          >
            مشاهده
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={deleteNewsHandler}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-90"
          >
            <path
              d="M3 6H21M5 6V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V6M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
              stroke="#060607"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 11V17"
              stroke="#060607"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 11V17"
              stroke="#060607"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Link
          href={`/panel/statistics/insert-news?newsId=${newsNumber}`}
          className="flex justify-center items-center mr-6"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-90"
          >
            <path
              d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
              stroke="#060607"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.0399 3.02025L8.15988 10.9003C7.85988 11.2003 7.55988 11.7903 7.49988 12.2203L7.06988 15.2303C6.90988 16.3203 7.67988 17.0803 8.76988 16.9303L11.7799 16.5003C12.1999 16.4403 12.7899 16.1403 13.0999 15.8403L20.9799 7.96025C22.3399 6.60025 22.9799 5.02025 20.9799 3.02025C18.9799 1.02025 17.3999 1.66025 16.0399 3.02025Z"
              stroke="#060607"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.9102 4.14941C15.5802 6.53941 17.4502 8.40941 19.8502 9.08941"
              stroke="#060607"
              stroke-width="1.2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsBox;
