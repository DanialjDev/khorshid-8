import SingleProductPage from "@/components/pages/medical-equipments-market/SingleProduct";
import React from "react";

const SingleProduct = () => {
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
