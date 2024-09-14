import { Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "SecurePass",
  description: "SecurePass",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={rubik.className}>
      <Toaster position="top-center" reverseOrder={false} />
        <main>{children}</main>
        </body>
    </html>
  );
}
