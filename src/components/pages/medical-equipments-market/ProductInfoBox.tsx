import React from "react";

const ProductInfoBox = ({
  label,
  text,
}: {
  label: string;
  text: string | string[];
}) => {
  return (
    <div
      className={`${
        typeof text === "string"
          ? "lg:col-span-2 col-span-4"
          : "lg:col-span-2 col-span-4"
      } flex justify-between items-center flex-wrap`}
    >
      <p className="text-gray2 text-[16px]">{label}</p>
      {typeof text === "string" ? (
        <p className="text-dark text-[16px]">{text}</p>
      ) : (
        <div className="w-fit flex lg:justify-start justify-end flex-wrap">
          {text.map((item, index) => (
            <p className="text-dark text-[16px] mr-3">{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductInfoBox;
