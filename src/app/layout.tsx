import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CSPostHogProvider, Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amapala Energy Insights",
  description: "Amapala Energy Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
      </CSPostHogProvider>
    </html>
  );
}
