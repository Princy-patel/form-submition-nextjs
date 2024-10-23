import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { DataProvider } from "@/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenTable",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 min-h-screen w-screen">
          <main className="max-w-screen-2xl m-auto bg-white">
            <Navbar />
            <Header />
            <DataProvider>
              <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                {children}
              </div>
            </DataProvider>
          </main>
        </main>
      </body>
    </html>
  );
}
