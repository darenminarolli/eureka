import { Inter } from "next/font/google";
import { Rubik } from 'next/font/google'


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Eureka",
  description: "Software Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
