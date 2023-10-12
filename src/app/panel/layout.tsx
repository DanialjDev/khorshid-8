import AdminLayout from "@/components/layout/AdnimLayout";
import React, { ReactNode } from "react";

const AdminRootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-white h-screen flex justify-between items-center">
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default AdminRootLayout;
