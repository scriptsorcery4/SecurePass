import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "SecurePass",
  description: "SecurePass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
