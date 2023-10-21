import PageTitle from "@/components/main/pageTitle/PageTitle";
import ConfrencesContainer from "@/components/profile/admin/statistics/ConfrencesContainer";
import { getConfrences } from "@/services/profile/admin/statistics";
import { cookies } from "next/headers";
import React from "react";

const Confrences = async () => {
  const response = await getConfrences(cookies().get("token")?.value!);
  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="همایش ها"
        text="شما می توانید اطلاعات همایش ها را در اینجا وارد یا حذف کنید."
      />
      <ConfrencesContainer
        confrences={response?.confrences ? response.confrences : []}
      />
    </div>
  );
};

export default Confrences;
