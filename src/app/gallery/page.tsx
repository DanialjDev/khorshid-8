import { getGalleryPhotos } from "@/services/gallery";
import Image from "next/image";
import React from "react";
import { BounceLoader } from "react-spinners";

const Gallery = async () => {
  const galleryItems = await getGalleryPhotos();

  if (!galleryItems?.data) {
    return <BounceLoader size={20} color="red" />;
  }
  return (
    <div className="w-full grid items-stretch grid-cols-6">
      {galleryItems?.data?.map(({ id, imageUrl }) => (
        <div className="lg:col-span-2 md:col-span-3 col-span-6">
          <Image
            width={0}
            height={0}
            objectFit="contain"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            alt=""
            src={imageUrl}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
