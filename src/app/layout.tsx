import { getHeaderPhoneNumber, postPageView } from "@/services/common";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import { cookies, headers } from "next/headers";
import { getGalleryPhotos } from "@/services/gallery";
import { date } from "yup";
import { getNews } from "@/services/profile/admin/statistics";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const galleryItems = await getGalleryPhotos();
  const headerPhoneNumber = await getHeaderPhoneNumber();
  const token = cookies().get("token")?.value;

  return (
    <html
      lang="en"
      dir="rtl"
      style={{
        overflow: "auto !important",
      }}
    >
      <body className="text-dark !bg-[#FCFCFC] h-full">
        <ReduxProvider
          galleryItems={galleryItems?.data ? galleryItems.data! : null}
          headerPhoneNumber={headerPhoneNumber}
          token={token}
        >
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
