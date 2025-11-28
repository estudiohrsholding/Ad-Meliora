import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        className={`${inter.variable} font-sans antialiased bg-gray-950 text-white`}
      >
        {children}
        <Toaster />
        {/* B.A.I. Widget Integration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // B.A.I. Chatbot Widget Placeholder
              (function() {
                // Widget initialization code will be inserted here
                console.log('B.A.I. Widget Placeholder Loaded');
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
