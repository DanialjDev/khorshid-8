import React from "react";

import NotFoundContainer from "@/components/pages/not-found/NotFoundContainer";

const NotFound = () => {
  return (
    <div className="w-full fixed h-screen justify-center items-center z-50 inset-0 bg-white flex flex-col">
      <NotFoundContainer />
    </div>
  );
};

export default NotFound;

export const generateMetadata = async () => {
  return {
    title: "صفحه مورد نظر پیدا نشد!",
  };
};
