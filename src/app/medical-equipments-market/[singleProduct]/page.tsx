import SingleProductPage from "@/components/pages/medical-equipments-market/SingleProduct";
import { postPageView } from "@/services/common";
import { headers } from "next/headers";
import React from "react";

const SingleProduct = async () => {
  await postPageView(headers().get("x-invoke-path")!);
  return (
    <div>
      <SingleProductPage />
    </div>
  );
};

export default SingleProduct;

export const generateMetadata = async (ctx: any) => {
  return {
    title: ctx.searchParams.name,
  };
};
