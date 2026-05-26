// app/transfers/[slug]/page.tsx

import Navbar from "@/app/components/Navbar";
import TransferFeatures from "@/app/components/Tours/TransferFeatures";
import Travelmadeeasy from "@/app/components/Tours/Travelmadeeasy";
import Hero from "@/app/components/ui/Hero";
import HeroBanner from "@/app/components/ui/HeroBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const metadata = {
  title:
    "Airport Transfers & Premium Pickups in Sri Lanka",

  description:
    "Professional airport pickups, hotel transfers, and private transport services across Sri Lanka with modern air-conditioned vehicles.",

  keywords: [
    "Sri Lanka airport transfer",
    "Colombo airport pickup",
    "Sri Lanka private transport",
    "Sri Lanka taxi service",
  ],

  alternates: {
    canonical:
      "https://www.srilankatravelcompany.com/transfers",
  },
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
    const { slug } = await params;

  const data = await client.fetch(
    `*[_type=="transfer" && slug.current==$slug][0]`,
    { slug }
  );

  if (!data) return <div>Not Found</div>;

  return (
    <>
      <Navbar />
      <Hero 
        backgroundImage={urlFor(data.heroImage).url()}
        title={data.heroTitle1}
        highlight={data.heroTitle2}
        subtitle={data.heroDesc}
         />
       <TransferFeatures
         description={data.introText}
        features={data.features}
        />
        <Travelmadeeasy />
        <HeroBanner
            title="Book Your Ride?"
            highlight="Ready To"
            subtitle="Secure your transfer today for a completely seamless travel experience."
            buttonText="Book My Pickup"
            backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777284316/8ca7857e9141534722168a7d0d09e0ba87143a2d_gcl7hh.webp"
         />
    </>
  );
}