"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "@/components/main/navbar/Navbar";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/main/breadcrumb/Breadcrumb";
import AuthLayout from "@/components/auth/layout/AuthLayout";
import MainLayout from "@/components/layout/Layout";
import ImageModal from "@/components/pages/home-page/ImageModal";
import { Toaster } from "react-hot-toast";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <Provider store={store}>
      <div className="w-full relative no-scrollbar">
        <Navbar />
        <div className="w-full">
          <MainLayout>
            {pathname !== "/" && <Breadcrumb />}
            {children}
          </MainLayout>
          <ImageModal />
          <AuthLayout />
        </div>
      </div>
      <Toaster position="top-left" />
    </Provider>
  );
};

export default ReduxProvider;
