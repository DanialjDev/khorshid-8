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
      href={link ? link : "/"}
      className="w-full md:m-0 mt-5 md:col-span-1 col-span-3 flex flex-col"
    >
      <Image
        width={0}
        height={0}
        // objectFit="cover"
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        src={imageUrl ? imageUrl : ""}
        alt={name}
        unoptimized
        className="rounded-[10px]"
      />
      <p className="text-[14px] md:text-right text-center mr-3">
        {name.length > 20 ? `${name.slice(0, 35)}...` : name}
      </p>
    </Link>
  );
};

export default Conferences;
