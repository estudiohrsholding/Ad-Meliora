import type { Metadata } from "next";
import { Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CLIENT_ID } from "./bai-system";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ad Meliora Real Estate | Costa Blanca Properties",
  description: "Long-term rentals, short-term rentals and sales on Costa Blanca. Reliable service—contact us! Find your perfect home in Villamartín, Orihuela Costa, Torrevieja and more.",
  keywords: ["Ad Meliora Real Estate", "Costa Blanca", "Orihuela Costa", "Villamartín", "Torrevieja", "Long-term rentals", "Short-term rentals", "Property sales", "Real estate Spain"],
  authors: [{ name: "Ad Meliora Real Estate" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Ad Meliora Real Estate | Costa Blanca Properties",
    description: "Long-term rentals, short-term rentals and sales on Costa Blanca. Reliable service—contact us!",
    siteName: "Ad Meliora Real Estate",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Meliora Real Estate | Costa Blanca Properties",
    description: "Long-term rentals, short-term rentals and sales on Costa Blanca. Reliable service—contact us!",
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
        className={`${playfairDisplay.variable} ${roboto.variable} font-body antialiased bg-white text-gray-950`}
      >
        {children}
        <Toaster />
        {/* B.A.I. Widget Integration */}
        <script
          src="/bai-widget.js"
          data-client-id={CLIENT_ID}
          async
          defer
        />
      </body>
    </html>
  );
}
