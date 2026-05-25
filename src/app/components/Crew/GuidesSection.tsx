import Image from "next/image";
import Container from "../Container";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

export default async function GuidesSection() {

  // ✅ Fetch guides from Sanity
  const guides = await client.fetch(`
    *[_type == "guide"]{
      _id,
      name,
      role,
      bio,
      image
    }
  `);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">

      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg"
          alt="background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/80" />

        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent" />

        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">

          {/* HEADER */}
          <div className="text-center max-w-5xl mx-auto mb-20">

            <span className="inline-block text-[12px] tracking-[4px] bg-gray-200 text-gray-700 px-5 py-2 rounded-full mb-6 uppercase">
              Our Guides
            </span>

            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold mb-6">
              <span className="text-[#C86421]">
                The Local Storytellers
              </span>{" "}
              <span className="text-[#1D4063]">
                Who Guide Your Journey
              </span>
            </h2>

            <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto">
              Experience Sri Lanka with the island's most dedicated team.
              Our guides are not just experts; they are passionate storytellers
              who bring the rich tapestry of Sri Lankan culture, history,
              and nature to life.
            </p>
          </div>

          {/* GUIDES */}
          <div className="grid md:grid-cols-3 gap-12">
            {guides?.map((guide: any) => (
              <div key={guide._id}>

                {/* IMAGE */}
                <div className="relative h-[420px] rounded-[34px] overflow-hidden mb-8">
                  <Image
                    src={urlFor(guide.image).url()}
                    alt={guide.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-body-header text-[22px] md:text-[24px] font-semibold text-[#1D4063] mb-4">
                  {guide.name}
                </h3>

                {/* ROLE */}
                <p className="uppercase tracking-[2px] text-[#C86421] text-[12px] font-semibold mb-6">
                  {guide.role}
                </p>

                {/* BIO */}
                <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                  {guide.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}