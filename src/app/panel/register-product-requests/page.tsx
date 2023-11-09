import PageTitle from "@/components/main/pageTitle/PageTitle";
import AllProducts from "@/components/profile/admin/register-product-requests/AllProducts";
import { getAllRequestedProducts } from "@/services/profile/admin/register-product-requests";
import { cookies } from "next/headers";
import React from "react";

const RegisterProductPage = async () => {
  const requestedProducts = await getAllRequestedProducts(
    cookies().get("token")?.value!
  );
  return (
    <div className="w-full flex flex-col">
      <PageTitle
        title="درخواست های ثبت محصول"
        text="شما می توانید درخواست های ثبت محصول  را در اینجا مشاهده و در صورت نیاز تایید یا عدم تایید کنید."
      />
      <AllProducts
        productsData={
          requestedProducts?.dataObj ? requestedProducts.dataObj : null
        }
      />
    </div>
  );
};

export default RegisterProductPage;
