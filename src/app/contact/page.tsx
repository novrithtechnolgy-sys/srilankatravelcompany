import ContactForm from "../components/Contact/ContactForm";
import ContactSection from "../components/Contact/ContactSection";
import Oursocials from "../components/Contact/Oursocials";
import Navbar from "../components/Navbar";
import Hero from "../components/ui/Hero";

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
            />
            <ContactSection/>
            <ContactForm/>
            <Oursocials/>
         </>
    )
}