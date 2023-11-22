export const revalidate = 5;

import { getGalleryPhotos } from "@/services/gallery";
import { getTitle } from "@/utills/getTitle";
import Image from "next/image";
import React from "react";
import { BounceLoader } from "react-spinners";

const Gallery = async () => {
  const galleryItems = await getGalleryPhotos();

  if (!galleryItems?.data) {
    return <BounceLoader size={20} color="red" />;
  }
  return (
    <div className="w-full grid items-stretch gap-5 grid-cols-6">
      {galleryItems?.data?.map(({ id, imageUrl }) => (
        <div
          className="lg:col-span-2 w-full h-[300px] overflow-hidden rounded-lg shadow-adminFormBox border border-adminFormBorder flex justify-center items-center md:col-span-3 col-span-6"
          key={id}
        >
          <Image
            width={600}
            height={400}
            objectFit="contain"
            alt=""
            src={imageUrl}
            className="overflow-hidden"
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

export const generateMetadata = async () => {
  return {
    title: getTitle("gallery"),
  };
};
