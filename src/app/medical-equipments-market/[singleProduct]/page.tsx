import SingleProductPage from "@/components/pages/medical-equipments-market/SingleProduct";
import { postPageView } from "@/services/common";
import { getHomePageDevies } from "@/services/homePage";
import { getSingleDevice } from "@/services/shop";
import { headers } from "next/headers";
import React from "react";

const SingleProduct = async () => {
  await postPageView(headers().get("x-invoke-path")!);
  const relatedProducts = await getHomePageDevies();
  return (
    <div>
      <SingleProductPage relatedProducts={relatedProducts!} />
    </div>
  );
};

export default SingleProduct;

export const generateMetadata = async (ctx: any) => {
  return {
    title: ctx.searchParams.name,
  };
};
