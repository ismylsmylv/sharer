"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Sidebar from "@/components/sidebar/page";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div className="navbar">
            <Navbar />
          </div>
          <div className="sided">
            <div className="sideBarContainer">
              <Sidebar sidebarOpen={false} setSidebarOpen={undefined} />
            </div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
