import ModernBackbone from "../components/About/ModernBackbone";
import RestSection from "../components/About/RestSection";
import AboutStory from "../components/About/story";
import VisionMission from "../components/About/VisionMission";
import WhyChoose from "../components/About/WhyChoose";
import Navbar from "../components/Navbar";
import Hero from "../components/ui/Hero";
import HeroBanner from "../components/ui/HeroBanner";

export const metadata = {
  title:
    "About Us | Authentic Sri Lankan Travel Experts",

  description:
    "Meet the local storytellers behind Sri Lanka Travel Company. We create unforgettable one-day adventures, safaris, cultural journeys, and private experiences across the island.",

  keywords: [
    "Sri Lanka local guides",
    "Sri Lanka travel experts",
    "Sri Lanka private tours",
    "Sri Lanka travel agency",
  ],

  alternates: {
    canonical:
      "https://www.srilankatravelcompany.com/about",
  },
};

export default function About() {
  return (
    <>
        <Navbar/>
        <Hero
        backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777353421/52163891d71174fe605a3a91d2a9e36a943922e3_3_ph2vhl.jpg"
        title="More Than Just a Trip."
        highlight="A Sri Lankan Soul-Search."
        buttonHref="/tours"
        subtitle="At Sri Lanka Travel Company, we are passionate about showcasing the beauty and rich culture of Sri Lanka. With over a decade of experience, we specialize in day tours that capture the true essence of the island. Our expert team creates personalized itineraries blending iconic landmarks, hidden gems, and authentic local experiences."
        />
        <AboutStory />
        <VisionMission />
        <WhyChoose />
        <RestSection />
        <ModernBackbone />
        <HeroBanner
          title="Ready for"
          highlight="Your Best Day Ever?"
          subtitle="Your next great story is just a sunrise away. Let’s make it legendary."
          buttonText="Book Your Adventure"
          buttonHref="/tours"
          backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777353305/141a7d2d935dc9fb8398d47d7523c786acd79366_1_krskdg.webp"
        />
        </>
  );
}