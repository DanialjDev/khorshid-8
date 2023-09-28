import React, { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const Card = ({ icon, title, desc }: CardProps) => {
  return (
    <div className="w-full bg-white items-center shadow-xs flex flex-col p-10 rounded-[12px]">
      <div className="rounded-full bg-primaryLight p-5">{icon}</div>
      <p className="text-dark text-lg my-5">{title}</p>
      <p className="text-[#6A6A6A] text-[14px] text-center">{desc}</p>
    </div>
  );
};

export default Card;
