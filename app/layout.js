import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./nav/page"
import Footer from "./footer/page"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Epoch of Genesis",
  description: "An mmorpg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
