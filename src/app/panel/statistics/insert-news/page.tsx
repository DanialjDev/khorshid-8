import PageTitle from "@/components/main/pageTitle/PageTitle";
import InsertBox from "@/components/profile/admin/statistics/InsertBox";
import NewsUpdateForm from "@/components/profile/admin/statistics/NewsUpdateForm";
import React from "react";

const InsertNews = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { newsId: string | undefined };
}) => {
  return (
    <div className="w-full flex-col">
      <PageTitle
        title="درج خبر"
        text="شما می توانید اطلاعات خبر ها را در اینجا وارد یا حذف کنید."
      />
      <div className="w-full mt-8">
        <InsertBox boxNumber={String(searchParams?.newsId)}>
          <NewsUpdateForm />
        </InsertBox>
      </div>
    </div>
  );
};

export default InsertNews;
