import { getHeaderPhoneNumber } from "@/services/common";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import { cookies } from "next/headers";
import { getGalleryPhotos } from "@/services/gallery";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const galleryItems = await getGalleryPhotos();
  const headerPhoneNumber = await getHeaderPhoneNumber();
  const token = cookies().get("token")?.value;

  return (
    <html lang="en" dir="rtl">
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
