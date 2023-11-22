import React from "react";
import { BeatLoader } from "react-spinners";

const FormButton = ({
  text,
  bg = "bg-primary",
  textColor = "text-white",
  border,
  onClick,
  width = "w-full",
  padding = "py-3",
  rounded = "rounded-xl",
  loading,
}: {
  text: string;
  bg?: string;
  textColor?: string;
  border?: string;
  onClick?: () => void;
  width?: string;
  padding?: string;
  rounded?: string;
  loading?: boolean;
}) => {
  if (loading) {
    return (
      <div
        className={`${width} ${bg} ${textColor} ${padding} ${rounded} flex justify-center items-center text-[14px] ${
          border ? border : ""
        }`}
        onClick={onClick}
      >
        <BeatLoader color="#ffffff" size={7} />
      </div>
    );
  }
  return (
    <button
      type="submit"
      className={`${width} ${bg} ${textColor} ${padding} ${rounded} text-[14px] ${
        border ? border : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FormButton;
