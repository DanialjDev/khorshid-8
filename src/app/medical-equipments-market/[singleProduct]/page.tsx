import SingleProductPage from "@/components/pages/medical-equipments-market/SingleProduct";
import { postPageView } from "@/services/common";
import { getHomePageDevies } from "@/services/homePage";
import { getSingleDevice } from "@/services/shop";
import { headers } from "next/headers";
import React from "react";

const SingleProduct = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  await postPageView(headers().get("x-invoke-path")!);
  const response = await getSingleDevice(searchParams.id!);
  console.log(response?.data);

  const relatedProducts = await getHomePageDevies();
  return (
    <div>
      <SingleProductPage
        singleDevice={response?.data ? response.data : null}
        relatedProducts={relatedProducts!}
      />
    </div>
  );
};

export default SingleProduct;

export const generateMetadata = async (ctx: any) => {
  return {
    title: ctx.searchParams.name,
  };
};
