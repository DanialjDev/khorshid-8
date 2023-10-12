import React from "react";

const FormButton = ({
  text,
  bg = "bg-primary",
  textColor = "text-white",
  border,
  onClick,
  width = "w-full",
  padding = "py-3",
  rounded = "rounded-xl",
}: {
  text: string;
  bg?: string;
  textColor?: string;
  border?: string;
  onClick?: () => void;
  width?: string;
  padding?: string;
  rounded?: string;
}) => {
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
