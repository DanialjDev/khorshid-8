"use client";

import PageTitle from "@/components/main/pageTitle/PageTitle";
import {
  Gallery,
  HomeSideBanners,
  MedicalEquipmentBanners,
} from "@/services/profile/admin/posters/types";
import React from "react";
import PosterSection from "./PosterSection";
import PosterBox from "./PosterBox";

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
      >
        {homeSideBanners &&
          homeSideBanners.map((item, index) => {
            // @ts-ignore
            return (
              <div className="sm:col-span-3 col-span-6 md:col-span-2">
                <PosterBox
                  key={item.homeSideBannerId}
                  fontSize={"sm:text-[14px] text-[13px]"}
                  title={`بنز شماره ${String(item.homeSideBannerId)}`}
                  imageUrl={item.imageUrl!}
                  action="homeSideBanner"
                  id={item.homeSideBannerId}
                />
              </div>
            );
          })}
      </PosterSection>
      <PosterSection
        title="بنر های صفحه لیست تجهیزات پزشکی"
        // @ts-ignore
        data={medicalEquipmentBanners ? medicalEquipmentBanners : []}
      >
        {medicalEquipmentBanners &&
          medicalEquipmentBanners.map((item) => (
            <div className="sm:col-span-3 col-span-6 md:col-span-2">
              <PosterBox
                key={item.bannerId}
                fontSize={"sm:text-[14px] text-[13px]"}
                imageUrl={item.imageUrl!}
                title={item.name}
                action="medicalEquipment"
                id={item.bannerId}
              />
            </div>
          ))}
      </PosterSection>
      <PosterSection
        title="گالری تصاویر"
        // @ts-ignore
        data={gallery ? gallery : []}
      >
        {gallery &&
          gallery.map((item) => (
            <div className="sm:col-span-3 col-span-6 md:col-span-2">
              <PosterBox
                key={item.id}
                fontSize={"sm:text-[14px] text-[13px]"}
                title={`تصویر شماره ${String(item.id)}`}
                imageUrl={item.imageUrl}
                action="gallery"
                id={item.id}
              />
            </div>
          ))}
      </PosterSection>
    </>
  );
};

export default PostersContainer;
