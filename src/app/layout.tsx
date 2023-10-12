import "./globals.css";
import ReduxProvider from "@/redux/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className="text-dark !bg-[#FCFCFC] h-full">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
