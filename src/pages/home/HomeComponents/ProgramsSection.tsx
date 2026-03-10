
import Reveal from "../../../components/animations/Reveal";
import NavjivanButton from "../../../components/ui/buttons/NavjivanButton";
import PillLabel from "../../../components/ui/buttons/PillLabel";

const programs = [
  {
    tag: "Skilling & Employment",
    title: "Skilling & Employment",
    description:
      "Job-oriented training for youth with disabilities in IT, retail, hospitality, BPO, etc., followed by job placement support.",
    image: "/images/home/program-section1.jpg",
  },
  {
    tag: "Early Intervention",
    title: "Early Intervention",
    description:
      "Therapies and parental support for children aged 0–6 with developmental disabilities including special education and therapies.",
    image: "/images/home/program-section2.jpg",
  },
  {
    tag: "Digital Platforms",
    title: "Digital Platforms",
    description:
      "CapSarathi, RozgarSarathi & GyanSarathi – digital platforms enabling accessibility, jobs, and skill development.",
    image: "/images/home/program-section3.jpg",
  },
  
];

const ProgramsSection = () => {
  return (
    <section className="relative w-full py-10 bg-cyan-100 bg-box-shadow">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Label */}
        <Reveal>
          <div className="flex justify-center mb-6">
            <PillLabel text="Our Programs (Overview)" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-head-900 mb-16">
            Our Programs (Overview)
          </h2>
        </Reveal>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg
                         opacity-0 animate-[slideUp_0.9s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img src={item.image} alt={item.title}
                  className="
                    w-full h-full object-cover transition-all duration-700 ease-in-out
                    group-hover:scale-110 group-hover:blur-[2px] "/>

                {/* Dark Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/40
                    opacity-0
                    transition-opacity duration-700 ease-in-out
                    group-hover:opacity-100
                  "
                ></div>

                {/* Learn More Button */}
                <div
                  className="
                    absolute inset-0 flex items-center justify-center
                    opacity-0 translate-y-4
                    transition-all duration-700 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0
                  "
                >
                  <NavjivanButton name="Learn More" classname="navbtn bg-hover" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <PillLabel text={item.tag} />

                <h3 className="text-xl font-bold text-head-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ProgramsSection;