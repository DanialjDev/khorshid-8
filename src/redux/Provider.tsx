"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "@/components/main/navbar/Navbar";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/main/breadcrumb/Breadcrumb";
import MainLayout from "@/components/layout/Layout";
import ImageModal from "@/components/pages/home-page/ImageModal";
import { ToastContainer } from "react-toastify";

const ReduxProvider = ({
  children,
  galleryItems,
  headerPhoneNumber,
  token,
}: {
  children: ReactNode;
  galleryItems: GalleryItem[] | null;
  headerPhoneNumber: string | undefined;
  token: string | undefined;
}) => {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <div className="w-full relative no-scrollbar">
        {!pathname.includes("panel") && (
          <Navbar headerPhoneNumber={headerPhoneNumber} token={token} />
        )}
        <div className="w-full h-full">
          <MainLayout galleryItems={galleryItems}>
            {pathname !== "/" && !pathname.includes("panel") && <Breadcrumb />}
            {children}
          </MainLayout>
          <ImageModal />
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick
        theme="colored"
        style={{
          width: "max-content",
        }}
      />
    </Provider>
  );
};

export default ReduxProvider;
