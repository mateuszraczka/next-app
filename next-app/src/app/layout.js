import localFont from "next/font/local";
import "./globals.css";
import SideBar from "../components/SideBar";
import Footer from "@/components/Footer";
import ContentWrapper from "@/components/ContentWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SideBar>
            <ContentWrapper>{children}</ContentWrapper>
            <Footer></Footer>
        </SideBar>
        
      </body>
    </html>
  );
}
