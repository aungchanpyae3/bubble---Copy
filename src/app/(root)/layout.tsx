import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import NavBar from "@/ui/navtopBar/NavBar";

const inter = Inter({ subsets: ["latin"] });
import FooterBar from "@/ui/Footer/FooterBar";
import NavSideBar from "@/ui/navtopBar/NavSideBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `} style={{}}>
        <NavSideBar />
        <NavBar />
        <div className="scr">
          <main className="ml-[70px] pt-[50px] pb-[70px]">
            {children}
            <h1>this is footer bar all copyRight 2024</h1>
          </main>
        </div>

        <footer className="fixed z-30  bottom-0 w-full bg-yellow-400 flex  items-center  h-[70px]">
          <FooterBar />
        </footer>
      </body>
    </html>
  );
}