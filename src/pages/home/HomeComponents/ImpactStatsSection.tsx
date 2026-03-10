
import Reveal from "../../../components/animations/Reveal";
import PillLabel from "../../../components/ui/buttons/PillLabel";

const stats = [
  {
    value: "30+",
    label: "Centres",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M3 22h18v-2H3v2Zm2-4h14V2H5v16Zm2-2V4h10v12H7Z" />
      </svg>
    ),
  },
  {
    value: "100,000+",
    label: "PwDs Empowered",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.67 0-8 1.34-8 4v3h10v-3c0-1.03.39-1.97 1.02-2.78C10.16 13.48 8.92 13 8 13Zm8 0c-.34 0-.71.02-1.1.05 1.16.84 2.1 2.02 2.1 3.95v3h7v-3c0-2.66-5.33-4-8-4Z"/>
      </svg>
    ),
  },
  {
    value: "7,000+",
    label: "Early Interventions",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/>
      </svg>
    ),
  },
  {
    value: "3",
    label: "Digital Platforms",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M4 6h16v10H4zM2 18h20v2H2z"/>
      </svg>
    ),
  },
  {
    value: "1,000+",
    label: "NGO Partners",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v10l10 5 10-5V4l-10 5Z"/>
      </svg>
    ),
  },
  {
    value: "5,000+",
    label: "Corporate Partners",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M10 4h4v2h6v14H4V6h6V4Zm-4 6h12v8H6v-8Z"/>
      </svg>
    ),
  },
];

const ImpactStatsSection = () => {
  return (
    <section className="w-full bg-[#b0f7fa24] py-16 md:py-16 bg-box-shadow">
      <div className="max-w-7xl mx-auto px-4">

        {/* Label */}
        <Reveal>
          <div className="flex justify-center mb-4">
            <PillLabel text="Our Impact" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-head-900 mb-12">
            Our Journey of Impact
          </h2>
        </Reveal>
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {stats.map((item, index) => (
            <Reveal key={index}  direction="fade-up" delay={index * 0.15}>
              <div
                key={index}
                className="bg-white rounded-xl py-8 px-4 text-center shadow-md hover:shadow-lg transition">
                {/* ICON (same blue for all) */}
                <div className="flex justify-center mb-4 text-[#1ecbe1]">
                  {item.icon}
                </div>

                {/* VALUE */}
                <div className="text-2xl font-extrabold text-head-900 mb-1">
                  {item.value}
                </div>

                {/* LABEL */}
                <div className="text-gray-600 text-sm font-medium">
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactStatsSection;