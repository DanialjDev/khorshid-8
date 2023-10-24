import PageTitle from "@/components/main/pageTitle/PageTitle";
import InsertBox from "@/components/profile/admin/statistics/InsertBox";
import NewsUpdateForm from "@/components/profile/admin/statistics/NewsUpdateForm";
import { getSingleNews } from "@/services/profile/admin/statistics";
import { cookies } from "next/headers";
import React from "react";

const InsertNews = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { newsId: string | undefined };
}) => {
  const singleNewsRes = await getSingleNews(
    searchParams?.newsId!,
    cookies().get("token")?.value!
  );
  return (
    <div className="w-full flex-col">
      <PageTitle
        title="درج خبر"
        text="شما می توانید اطلاعات خبر ها را در اینجا وارد یا حذف کنید."
      />
      <div className="w-full mt-8">
        <InsertBox boxNumber={String(searchParams?.newsId)}>
          <NewsUpdateForm
            singleNews={
              singleNewsRes?.singleNews
                ? singleNewsRes.singleNews
                : {
                    newsId: 0,
                    title: "",
                    description: "",
                    imageUrl: "",
                    link: "",
                  }
            }
          />
        </InsertBox>
      </div>
    </div>
  );
};

export default InsertNews;
