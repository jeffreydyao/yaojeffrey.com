import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yaojeffrey.com"),
  title: {
    default: "Jeffrey Yao",
    template: "%s | Lee Robinson",
  },
  description: "Software engineer based in Sydney.",
  openGraph: {
    title: "Jeffrey Yao",
    description: "Software engineer based in Sydney.",
    url: "https://yaojeffrey.com",
    siteName: "Jeffrey Yao",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Jeffrey Yao",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center px-4 py-8 sm:px-0">
        <main className="w-full max-w-2xl">{children}</main>
      </body>
    </html>
  );
}
