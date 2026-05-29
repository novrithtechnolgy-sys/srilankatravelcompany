import type { Metadata } from "next";
import { Belleza, Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const belleza = Belleza({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-belleza",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.srilankatravelcompany.com"),

  title: {
    default:
      "Sri Lanka Travel Company | Luxury Tours & Experiences",
    template: "%s | Sri Lanka Travel Company",
  },

  description:
    "Explore Sri Lanka with luxury private tours, safaris, beaches, cultural experiences, hill country adventures, and premium stays across the island.",

  keywords: [
    "Sri Lanka tours",
    "Sri Lanka travel",
    "Sri Lanka safari tours",
    "Sigiriya tours",
    "Ella tours",
    "Kandy day tours",
    "Sri Lanka private driver",
    "Sri Lanka luxury travel",
    "Sri Lanka beach holidays",
    "Sri Lanka cultural tours",
    "Sri Lanka tourism",
    "Yala safari",
    "Mirissa whale watching",
  ],

  authors: [
    {
      name: "Sri Lanka Travel Company",
    },
  ],

  creator: "Sri Lanka Travel Company",

  publisher: "Sri Lanka Travel Company",

  openGraph: {
    type: "website",

    title:
      "Sri Lanka Travel Company | Discover Sri Lanka",

    description:
      "Luxury private tours, safaris, beaches, hill country escapes, and unforgettable experiences across Sri Lanka.",

    url: "https://www.srilankatravelcompany.com",

    siteName: "Sri Lanka Travel Company",

    images: [
      {
        url: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1778244094/Frame_344_sw1i3o.png",

        width: 1200,

        height: 630,

        alt: "Sri Lanka Travel Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sri Lanka Travel Company | Luxury Sri Lanka Tours",

    description:
      "Explore Sri Lanka with curated tours, safaris, beaches, culture, and unforgettable island experiences.",

    images: [
      "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1778244094/Frame_344_sw1i3o.png",
    ],
  },

  alternates: {
    canonical: "https://www.srilankatravelcompany.com",
  },

  category: "travel",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${belleza.variable} ${quicksand.variable}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      <WhatsAppButton />
      <Footer />
    </html>
  );
}
