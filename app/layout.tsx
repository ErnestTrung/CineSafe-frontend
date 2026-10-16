import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";

import { FaRegUser } from "react-icons/fa6";

import NavRedirect from "@/components/NavRedirect";

export const metadata: Metadata = {
  title: "CineSafe AI",
  description: "Film recommendation AI system.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="bg-[#f8f9ff] min-h-full flex flex-col">
        <header className="grid grid-cols-3 p-3 items-center shadow-lg mb-7">
          <Image
            src="/cinesafe-logo.svg"
            alt="CineSafe logo"
            width={200}
            height={200}
            className="justify-self-start"
          />

          <nav className="bg-[#eff4ff] flex rounded-xl pl-2 pr-2 pt-2 pb-2 text-lg gap-2 justify-self-center">
            <NavRedirect label="Chatbot" href="/chatbot" />
            <NavRedirect label="Thư viện phim" href="/library" />
          </nav>

          <FaRegUser className="text-white text-4xl rounded-xl bg-[#2a14b4] p-2.5 justify-self-end" />
        </header>

        <div className="grow">{children}</div>

        <footer className="bg-[#eff4ff] flex items-center justify-between p-9">
          <h3><span className="text-[#2a14b4] text-xl font-bold">CineSafe</span> - Trải nghiệm điện ảnh chắt lọc & bình an</h3>
          <h4 className="text-xs text-[#494856]">- "Super great to find movies to hate on!" (placeholder)</h4>
        </footer>
      </body>
    </html>
  );
}
