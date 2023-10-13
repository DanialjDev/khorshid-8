"use client";

import PageTitle from "@/components/main/pageTitle/PageTitle";
import {
  Gallery,
  HomeSideBanners,
  MedicalEquipmentBanners,
} from "@/services/profile/admin/posters/types";
import React from "react";
import PosterSection from "./PosterSection";

const PostersContainer = ({
  homeSideBanners,
  medicalEquipmentBanners,
  gallery,
}: {
  homeSideBanners: HomeSideBanners[] | undefined;
  medicalEquipmentBanners: MedicalEquipmentBanners[] | undefined;
  gallery: Gallery[] | undefined;
}) => {
  return (
    <>
      <PageTitle
        title="تصاویر و پوستر ها"
        text="شما می توانید تصاویر و پوستر ها  را در اینجا مشاهده و در صورت نیاز اقدام به ویرایش یا تعویض آن ها کنید."
      />
      <PosterSection
        title="بنر های صفحه اصلی"
        // @ts-ignore
        data={homeSideBanners ? homeSideBanners : []}
      />
      <PosterSection
        title="بنر های صفحه لیست تجهیزات پزشکی"
        // @ts-ignore
        data={medicalEquipmentBanners ? medicalEquipmentBanners : []}
      />
      <PosterSection
        title="گالری تصاویر"
        // @ts-ignore
        data={gallery ? gallery : []}
      />
    </>
  );
};

export default PostersContainer;
