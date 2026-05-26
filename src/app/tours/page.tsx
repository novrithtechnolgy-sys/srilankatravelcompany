
import Navbar from "@/app/components/Navbar";
import ExperienceGrid from "@/app/components/Tours/ExperienceGrid";
import TransfersSection from "@/app/components/Tours/TransfersSection";
import Hero from "@/app/components/ui/Hero";
import HeroBanner from "../components/ui/HeroBanner";

export const metadata = {
  title:
    "Sri Lanka Tours & One-Day Adventures",

  description:
    "Explore Sri Lanka’s best one-day experiences including safaris, Sigiriya tours, beach escapes, hill country adventures, whale watching, and cultural journeys.",

  keywords: [
    "Sri Lanka tours",
    "Sigiriya day trip",
    "Yala safari",
    "Ella tours",
    "Kandy tours",
    "Sri Lanka day trips",
  ],

  alternates: {
    canonical:
      "https://www.srilankatravelcompany.com/tours",
  },
};

export default function Experience() {
    return (
        <>
            <Navbar />
            <Hero
                backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/a_hflip/c26421a03d63c41044dd86147e5c22a223fb4c61_w7uknb.webp"
                title="One Day."
                highlight="Zero Regrets."
                subtitle=" We have mapped out the most efficient and soul-stirring routes across the island so you can experience the best of Sri Lanka in a single sunrise to sunset journey."
                buttonText="WhatsApp Us  →"
                buttonHref="https://wa.me/1234567890?text=Hello%20Sri%20Lanka%20Travel%20Company!%20I%20would%20like%20to%20inquire%20about%20your%20tours."
            />
            <ExperienceGrid />
            <TransfersSection />
            <HeroBanner
                title="Just See Sri Lanka. Live It."
                highlight="Do Not"
                subtitle="Your next great story is just a sunrise away. Let’s make it legendary."
                buttonText="WhatsApp"
                buttonHref="https://wa.me/1234567890?text=Hello%20Sri%20Lanka%20Travel%20Company!%20I%20would%20like%20to%20inquire%20about%20your%20tours."
                backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777735607/de5c741a9ae4efbdf1c702989446def35a7a0e87_1_i3vtuq.webp"
            />

        </>
    );
}