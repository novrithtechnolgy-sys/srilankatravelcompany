import GuidesSection from "../components/Crew/GuidesSection";
import PremiumComfort from "../components/Crew/PremiumComfort";
import Vehicles from "../components/Crew/Vehicles";
import Navbar from "../components/Navbar";
import Hero from "../components/ui/Hero";
import HeroBanner from "../components/ui/HeroBanner";

export const metadata = {
  title:
    "Meet Our Guides & Premium Fleet",

  description:
    "Meet the experienced chauffeur guides and premium vehicles behind Sri Lanka Travel Company. Travel safely and comfortably across the island.",

  keywords: [
    "Sri Lanka chauffeur guide",
    "Sri Lanka tour vehicles",
    "Toyota KDH Sri Lanka",
    "private driver Sri Lanka",
  ],

  alternates: {
    canonical:
      "https://www.srilankatravelcompany.com/crew",
  },
};

export default function Crew() {
    return (
        <>
            <Navbar/>
            <Hero
                backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1778395956/65474a873b42f22b98669d352126f453ef14ad4d_nnhpee.webp"
                title="Meet The Crew."
                subtitle="The local storytellers who guide your journey and the premium machines that get you there safely. Experience Sri Lanka with the island's most dedicated team."
            />
            <GuidesSection/>
            <PremiumComfort/>
            <Vehicles/> 
            <HeroBanner
                title="Ready for"
                highlight="Your Best Day Ever?"
                subtitle="Your next great story is just a sunrise away. Let’s make it legendary."
                buttonText="Book Your Adventure"
                backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1779688641/51d028302fe705a5306dfee6b4eea1e410bd7ce6_um4y5k.webp"
            />
        </>
    )
}