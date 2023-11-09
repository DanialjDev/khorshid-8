import { postPageView } from "@/services/common";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import { headers } from "next/headers";
import { getGalleryPhotos } from "@/services/gallery";
import { date } from "yup";
import { getNews } from "@/services/profile/admin/statistics";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const galleryItems = await getGalleryPhotos();

  return (
    <html lang="en" dir="rtl">
      <body className="text-dark !bg-[#FCFCFC] h-full">
        <ReduxProvider
          galleryItems={galleryItems?.data ? galleryItems.data! : null}
        >
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
