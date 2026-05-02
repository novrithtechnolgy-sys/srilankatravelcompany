import Container from "../Container"

// components/VisionMission.tsx
export default function VisionMission() {
  return (
    <section className="py-10 md:py-20 bg-white relative">
      <Container>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center text-center">

          {/* LEFT - VISION */}
          <div>
            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold mb-6">
              <span className="text-orange-500">Our</span>{" "}
              <span className="text-blue-900">Vision</span>
            </h2>

            <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-md mx-auto">
              To be the global heartbeat of Sri Lankan travel, where every visitor leaves with a story that lasts a lifetime.
            </p>
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-32 w-[1px] bg-gray-900 z-50" />

          {/* RIGHT - MISSION */}
          <div>
            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold mb-6">
              <span className="text-orange-500">Our</span>{" "}
              <span className="text-blue-900">Mission</span>
            </h2>

            <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-md mx-auto">
              To curate high-impact, ethically-driven one-day experiences that showcase the true soul of our island through local expertise and modern convenience.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}