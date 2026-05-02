import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Discover from "./components/Home/Discover";
import Adventure from "./components/Home/Adventure";
import WhyChoose from "./components/Home/WhyChoose";
import Stay from "./components/Home/Stay";
import Testimonials from "./components/Home/Testimonials";
import HeroBanner from "./components/ui/HeroBanner";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Discover/>
    <Adventure/>
    <WhyChoose/>
    <Stay/>
    <Testimonials/>
    <HeroBanner
      title="Your Dream Vacation Awaits"
      highlight="Your Best Day"
      subtitle="Discover the world with our expertly crafted travel experiences."
      buttonText="Book Your Day Trip"
      backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777284316/8ca7857e9141534722168a7d0d09e0ba87143a2d_gcl7hh.webp"
    />
    </>
  );
}
