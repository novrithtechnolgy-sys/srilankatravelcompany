
import PremiumVillas from "../components/Accommodation/PremiumVillas";
import RelaxAndResort from "../components/Accommodation/Relaxandresort";
import StayExpiriance from "../components/Accommodation/stayexpiriance";
import Navbar from "../components/Navbar";
import Hero from "../components/ui/Hero";
import HeroBanner from "../components/ui/HeroBanner";

export const metadata = {
  title:
    "Luxury Villas & Boutique Stays in Sri Lanka",

  description:
    "Stay in curated luxury villas, eco-lodges, boutique chalets, wellness retreats, and premium accommodations across Sri Lanka.",

  keywords: [
    "Sri Lanka villas",
    "Sri Lanka accommodation",
    "Sri Lanka luxury stays",
    "boutique hotels Sri Lanka",
    "Sri Lanka resorts",
  ],

  alternates: {
    canonical:
      "https://www.srilankatravelcompany.com/accommodation",
  },
};

export default function Accommodation() {
    return (
        <>
        <Navbar/>
            <Hero
                backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777735875/9c126cffd36c950dbd63793dfc2700b0f556157b_1_zjw5ab.webp"
                title="Your Home"
                highlight="Base For Adventure"
                subtitle="From luxury private villas to serene wellness retreats, we have curated the finest stays in Sri Lanka to perfectly complement your one-day tours."
                buttonText="Explore Stays"
            />
            <StayExpiriance/>
            <PremiumVillas/>
            <RelaxAndResort/>
            <HeroBanner
                title="Finding the Perfect Stay?"
                highlight="Need Help"
                subtitle="Our team can help you book the ideal accommodation based on your tour itinerary."
                buttonText="WhatsApp Us"
                backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777365466/6780323ab3538aa5b6753714d45ca4c05c5f61db_1_1_xpmcog.webp"
            />
        </>
    )
}