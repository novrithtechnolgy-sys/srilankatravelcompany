import Navbar from "@/app/components/Navbar";
import BookingForm from "@/app/components/Tours/BookingForm";
import JourneySection from "@/app/components/Tours/JourneySection";
import StayBeforeJourney from "@/app/components/Tours/StayBeforeJourney";
import Hero from "@/app/components/ui/Hero";
import HeroBanner from "@/app/components/ui/HeroBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type PageProps = {
  params: {
    slug: string;
  };
};



export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const data = await client.fetch(
    `*[_type=="experience" && slug.current==$slug][0]`,
    { slug }
  );

  if (!data) return <div>Not Found</div>;

  console.log(data);

  return (
    <>
         <Navbar/>
          <Hero
            backgroundImage={urlFor(data.heroImage).url()}
            title={data.herotitle1}
            highlight={data.herotitle2}
            subtitle={data.herodesc}
          />
          <JourneySection
            title1={data.section2title1}
            title2={data.section2title2}
            description={data.description}
            details={data.details}
            gallery={data.gallery}
        />
        <BookingForm slug={slug} />
        <StayBeforeJourney/>
        <HeroBanner
          title="Have Questions?"
          highlight="Still"
          subtitle="Chat with our team on WhatsApp for custom routes and instant bookings."
          buttonText="Chat with Us"
          backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777284316/8ca7857e9141534722168a7d0d09e0ba87143a2d_gcl7hh.webp"
        />
    </>
  );

}