import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D/N Coffee - قهوه روز و شب",
  description: "تجربه قهوه ممتاز برای هر لحظه",
  icons: {
    icon: '/images/lll.JPG',
    shortcut: '/images/lll.JPG',
    apple: '/images/lll.JPG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased`}
        style={{ fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif' }}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
