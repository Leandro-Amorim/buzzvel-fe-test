import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Soller",
  applicationName: "Soller",
  description: "Get the Sun to Power Your Home",
  creator: "Soller Team",
  keywords: ["sun", "power", "solar", "solar panel", "solar system"],
  authors: [{ name: "Soller Team", url: "https://soller.com" }],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  openGraph: {
    title: "Soller",
    description: "Get the Sun to Power Your Home",
    url: "https://soller.com",
    siteName: "Soller",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/hero.png`,
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary",
    creator: "@soller",
    title: "Soller",
    description: "Get the Sun to Power Your Home",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/hero.png`],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
};

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Organization",
  name: "Soller",
  description: "Get the Sun to Power Your Home",
  url: "https://soller.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
