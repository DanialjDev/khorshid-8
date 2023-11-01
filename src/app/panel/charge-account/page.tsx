import PageTitle from "@/components/main/pageTitle/PageTitle";
import AllAccounts from "@/components/profile/admin/charge-accoun/AllAccounts";
import { getUsersAccounts } from "@/services/profile/admin/charge-account";
import { cookies } from "next/headers";
import React from "react";

const ChargeAccount = async () => {
  const token = cookies().get("token")?.value;
  const response = await getUsersAccounts(token!);
  console.log(response);
  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="شارژ حساب کاربری"
        text="شما می توانید در این بخش حساب کاربری ها را  برای ثبت محصول شارژ کنید."
      />
      <AllAccounts userAccounts={response?.data ? response.data : null} />
    </div>
  );
};

export default ChargeAccount;
