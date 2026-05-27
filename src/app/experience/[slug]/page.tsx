import Navbar from "@/app/components/Navbar";
import BookingForm from "@/app/components/Tours/BookingForm";
import JourneySection from "@/app/components/Tours/JourneySection";
import StayBeforeJourney from "@/app/components/Tours/StayBeforeJourney";
import Hero from "@/app/components/ui/Hero";
import HeroBanner from "@/app/components/ui/HeroBanner";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next/types";

type PageProps = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { slug } = params;

//   const data = await client.fetch(
//     `*[_type=="experience" && slug.current==$slug][0]{
//       title,
//       description,
//       heroImage,
//       category
//     }`,
//     { slug }
//   );

//   return {
//     title: `${data.title} | Sri Lanka Private Tour`,

//     description: data.description,

//     keywords: [
//       data.title,
//       data.category,
//       "Sri Lanka private tour",
//       "Sri Lanka experience",
//       "Sri Lanka travel",
//     ],

//     openGraph: {
//       title: data.title,

//       description: data.description,

//       images: [
//         {
//           url: urlFor(data.heroImage)
//             .width(1200)
//             .quality(85)
//             .url(),
//         },
//       ],
//     },

//     alternates: {
//       canonical: `https://www.srilankatravelcompany.com/experience/${slug}`,
//     },
//   };
// }

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
        <StayBeforeJourney stays={data.stay}/>
        <HeroBanner
          title="Have Questions?"
          highlight="Still"
          subtitle="Chat with our team on WhatsApp for custom routes and instant bookings."
          buttonText="Chat with Us"
          buttonHref="https://wa.me/1234567890?text=Hello%20Sri%20Lanka%20Travel%20Company!%20I%20would%20like%20to%20inquire%20about%20your%20tours."
          backgroundImage="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777284316/8ca7857e9141534722168a7d0d09e0ba87143a2d_gcl7hh.webp"
        />
    </>
  );

}