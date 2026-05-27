import ContactForm from "../components/Contact/ContactForm";
import ContactSection from "../components/Contact/ContactSection";
import Oursocials from "../components/Contact/Oursocials";
import Navbar from "../components/Navbar";
import Hero from "../components/ui/Hero";

export const metadata = {
  title:
    "Contact Sri Lanka Travel Company",

  description:
    "Contact our local Sri Lankan travel experts for private tours, airport pickups, custom itineraries, and luxury travel experiences.",

  keywords: [
    "Contact Sri Lanka travel company",
    "Sri Lanka tour booking",
    "Sri Lanka WhatsApp tours",
  ],

  alternates: {
    canonical:
      "https://www.srilankatravelcompany.com/contact",
  },
};

export default function Contact() {
    return (
        <>
          <Navbar/>
            <Hero
            backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777366221/526fe4d9c69f33e337a91fe94384589b84bdcb77_1_ydbtcq.webp"
            title="Your Best Day"
            highlight="Is A Message Away"
            subtitle="Whether you have a specific route in mind or need a recommendation, we are here to make your Sri Lankan adventure happen."
            buttonText="Chat On WhatsApp"
            buttonHref="https://wa.me/1234567890?text=Hello%20Sri%20Lanka%20Travel%20Company!%20I%20would%20like%20to%20inquire%20about%20your%20tours."
            />
            <ContactSection/>
            <ContactForm/>
            <Oursocials/>
         </>
    )
}