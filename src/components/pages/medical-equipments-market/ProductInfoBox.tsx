import Link from "next/link";
import React, { ReactNode } from "react";

const ProductInfoBox = ({
  label,
  text,
  link,
}: {
  label: string;
  text: string | string[];
  link?: string;
}) => {
  console.log(text);
  return (
    <div
      className={`${
        typeof text === "string"
          ? "lg:col-span-2 col-span-4"
          : "lg:col-span-2 col-span-4"
      } flex justify-between items-center flex-wrap`}
    >
      <p className="text-gray2 text-[14px]">{label}</p>
      {typeof text === "string" && !link ? (
        <p className="text-dark text-[14px]">{text}</p>
      ) : (
        <div className="w-fit flex lg:justify-start justify-end flex-wrap">
          {link ? (
            <Link href={link} className="text-dark text-[14px] mr-3">
              {text}
            </Link>
          ) : (
            <>
              {text && typeof text === "object" ? (
                text.map((item, index) => (
                  <p key={index} className="text-dark text-[14px] mr-3">
                    {item} ,
                  </p>
                ))
              ) : (
                <p className="text-dark text-[14px] mr-3">{text} ,</p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductInfoBox;
