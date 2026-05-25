import Image from "next/image";
import Container from "../Container";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Vehicles() {

  const vehicles = await client.fetch(`
    *[_type=="vehicle"]{
      _id,
      title,
      tag,
      passengers,
      description,
      image
    }
  `);

  return (
    <section className="py-20 md:py-28">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-20">
            <span className="inline-block text-[12px] tracking-[4px] bg-gray-200 text-gray-700 px-5 py-2 rounded-full mb-6 uppercase">
              Vehicles
            </span>

            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold mb-6">
              <span className="text-orange-500">The</span>{" "}<span className="text-[#1D4063]">Vehicles</span>
            </h2>

            <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-md mx-auto">
              We have the best vehicles for your adventure.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {vehicles?.map((vehicle: any) => (
            <div key={vehicle._id}>

              {/* IMAGE */}
              <div className="relative h-[420px] rounded-[34px] overflow-hidden mb-8">

                <Image
                  src={urlFor(vehicle.image).url()}
                  alt={vehicle.title}
                  fill
                  className="object-cover"
                />

                {/* TOP TAG */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-[15px] font-medium text-black">
                  {vehicle.tag}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-body-header text-[20px] md:text-[24px] font-semibold text-[#1D4063] mb-4">
                {vehicle.title}
              </h3>

              {/* PASSENGERS */}
              <p className="uppercase tracking-[2px] text-[#C86421] text-[12px] font-semibold mb-6">
                {vehicle.passengers}
              </p>

              {/* DESCRIPTION */}
              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                {vehicle.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}