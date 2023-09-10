import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carp Travel",
  description: "A place to start you Carpathian adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk-UA">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
