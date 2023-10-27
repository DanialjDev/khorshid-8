import { postPageView } from "@/services/common";
import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await postPageView(headers().get("x-invoke-path")!);

  return (
    <html lang="en" dir="rtl">
      <body className="text-dark !bg-[#FCFCFC] h-full">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
