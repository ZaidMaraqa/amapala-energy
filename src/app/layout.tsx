import type { Metadata } from "next";
import { Providers } from "./providers";
import PHProvider from "@/lib/posthog";

export const metadata: Metadata = {
  title: "Faulmata Energy Group",
  description: "Faulmata Energy Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
        </PHProvider>
    </html>
  );
}
