import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Cấu hình font Be Vietnam Pro
const fontHeading = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const fontBody = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Portfolio - Thai Trung Kien | Data Analyst & Analytics Engineer",
  description: "Portfolio of Thai Trung Kien - Data Analyst & Analytics Engineer",
  openGraph: {
    title: "Thai Trung Kien | Data Analyst & Analytics Engineer",
    description: "A HYBRID DATA PROFESSIONAL with a rigorous systems-thinking approach derived from a pharmacy background.",
    url: "https://thaikien-portfolio.vercel.app",
    siteName: "Thai Trung Kien Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thai Trung Kien Portfolio Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-slate-50 font-body antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}