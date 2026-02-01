import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aboussaad Portfolio | nextjs 16",
  description: "Portfolio website of Khalil using Next.js 16 features ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`} style={{ backgroundColor: '#022204' }}>
      
        <ResponsiveNavbar />
        {children}
        <Footer />
        <ScrollToTop />

      </body>
    </html>
  );
}
