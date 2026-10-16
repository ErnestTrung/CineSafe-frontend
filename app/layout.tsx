import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";

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
        <header className="flex p-4 items-center shadow-lg justify-between">
          <Image
            src="/cinesafe-logo.svg"
            alt="CineSafe logo"
            width={200}
            height={200}
          />

          <nav className="bg-[#eff4ff] flex rounded-xl pl-6 pr-6 pt-2 pb-2 text-lg gap-9">
            <span>Chatbot</span> <span>Thư viện phim</span>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
