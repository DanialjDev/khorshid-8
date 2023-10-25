import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GallerySectionProps {
  name: string;
  imageUrl: string;
  link: string;
}

const Conferences = ({ name, imageUrl, link }: GallerySectionProps) => {
  return (
    <Link
      href={link}
      className="w-full h-[262px] md:col-span-1 col-span-3 flex flex-col"
    >
      <Image
        width={0}
        height={0}
        objectFit="contain"
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
        src={imageUrl ? imageUrl : ""}
        alt={name}
      />
      <p className="text-[14px] mr-3">{name}</p>
    </Link>
  );
};

export default Conferences;
