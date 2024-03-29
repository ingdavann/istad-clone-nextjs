import { Inter } from "next/font/google";
import "./globals.css";
import NavbarCom from "@/components/NavbarCom";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "iSTAD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{fontFamily:"Kantumruy Pro, sans-serif"}}>
        <NavbarCom/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
