import Reveal from "../../components/animations/Reveal";
import VideoAndContent from "../../components/Reuseable Component/VideoContent"
import PillLabel from "../../components/ui/buttons/PillLabel";
// import { FaLaptopCode, FaUsers, FaDesktop } from "react-icons/fa";


const services = [
  {
    title: "Industry-Oriented Skill Training",
    desc: "3-month structured programs in IT, BPO, Retail, and Hospitality, combining theory and practical exposure developed with industry experts.",
    icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
            <path d="M3 22h18v-2H3v2Zm2-4h14V2H5v16Zm2-2V4h10v12H7Z" />
        </svg>
        ),
  },
  {
    title: "Soft & Life Skills",
    desc: "Training in spoken English, communication, grooming, time management, and goal setting for holistic workplace readiness.",
    icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
            <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.67 0-8 1.34-8 4v3h10v-3c0-1.03.39-1.97 1.02-2.78C10.16 13.48 8.92 13 8 13Zm8 0c-.34 0-.71.02-1.1.05 1.16.84 2.1 2.02 2.1 3.95v3h7v-3c0-2.66-5.33-4-8-4Z"/>
        </svg>
        ),
  },
  {
    title: "Digital Literacy",
    desc: "Computer skills, productivity tools, and internet navigation to boost digital confidence and adaptability.",
    icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
            <path d="M4 6h16v10H4zM2 18h20v2H2z"/>
        </svg>
        ),
  },
  {
    title: "Pre-Employment Preparation",
    desc: "Resume-building, mock interviews, and exposure to real hiring processes to improve workplace readiness.",
    icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
            <path d="M4 6h16v10H4zM2 18h20v2H2z"/>
        </svg>
        ),
  },
  {
    title: "Inclusive Placement Support",
    desc: "Partnerships with 5,000+ employers via placement drives, job fairs, and RozgarSarathi.",
    icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
            <path d="M4 6h16v10H4zM2 18h20v2H2z"/>
        </svg>
        ),
  },
];


const ImpactHighlights = [
    {
        title: "1,00,000+ Trained & Placed",
        desc: "Empowering individuals and creating ripple effects within families and communities.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                <path d="M3 22h18v-2H3v2Zm2-4h14V2H5v16Zm2-2V4h10v12H7Z" />
            </svg>
            ),
    },
    {
        title: "30 Centres Across India",
        desc: "Providing training, counseling, and placement services under one roof.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.67 0-8 1.34-8 4v3h10v-3c0-1.03.39-1.97 1.02-2.78C10.16 13.48 8.92 13 8 13Zm8 0c-.34 0-.71.02-1.1.05 1.16.84 2.1 2.02 2.1 3.95v3h7v-3c0-2.66-5.33-4-8-4Z"/>
            </svg>
            ),
    },
    {
        title: "Nationwide Online Access",
        desc: "Through GyanSarathi (LMS) & RozgarSarathi (Job Portal) supporting rural and semi-urban candidates.",
        icon: (
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                <path d="M4 6h16v10H4zM2 18h20v2H2z"/>
            </svg>
            ),
    },
]

const SkillingAndEmployeement = () => {
    return (
        <>
            <div className="videoandcontent">
                <VideoAndContent 
                   badge="Empowering Youth with Disabilities"
                   title="Overview"
                   highlightText=""
                   description="At the heart of our mission lies a simple belief: livelihood is dignity. Our skilling programs equip youth with industry-relevant skills, job preparedness, and inclusive employment opportunities."
                   points={[
                        "Accessible & inclusive training environment",
                        "Industry-aligned curriculum with expert trainers",
                        "Soft skills, digital skills & workplace readiness",
                        "Strong employer network for job placements",
                        "Focused support for long-term financial independence",
                   ]}
                   videoUrl="https://www.youtube.com/embed/rnqKTJAg8bg?rel=0"
                   ctaText="Enquire Now"
                   onCtaClick={() => alert("Enquiry Clicked")}
                />
            </div>

            {/* next Section */}
            <section className="pt-20 pb-10 bg-cyan-100">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <Reveal direction="fade-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <PillLabel text="Services Offered"></PillLabel>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 mt-12">
                        Tailored Training & Employment Support
                        </h2>
                        <p className="text-slate-600">
                        Programs adapted to the learning pace and unique needs of youth
                        with disabilities.
                        </p>
                    </div>
                    </Reveal>
                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <Reveal key={index}  direction="fade-up" delay={index * 0.15} >
                            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                
                                {/* Accent Bar */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b bg-cyan-600 to-orange-300" />

                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-300 text-cyan-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-orange-100/30 to-transparent" />
                            </div>
                        </Reveal>
                    ))}
                    </div>
                </div>
            </section>


            {/* Impact Highlights */}
            <section className="py-10 mt-10 bg-cyan-100">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Header */}
                    <Reveal direction="fade-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <PillLabel text="Impact Highlights"></PillLabel>
                        <h2 className="text-4xl font-bold text-slate-900 mb-4 mt-12">
                          Transforming Lives Nationwide
                        </h2>
                    </div>
                    </Reveal>
                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-8">
                    {ImpactHighlights.map((item, index) => (
                        <Reveal key={index}  direction="fade-up" delay={index * 0.15} >
                            <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                                
                                {/* Accent Bar */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b bg-cyan-600 to-orange-300" />

                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-300 text-cyan-600 text-2xl mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                {item.desc}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-orange-100/30 to-transparent" />
                            </div>
                        </Reveal>
                    ))}
                    </div>
                    <h3 className=" text-center py-10">
                        Through this initiative, Sarthak Educational Trust is redefining disability — not as a limitation,
                        but as a strength and a driver of diversity in India’s workforce. With every placement,
                        the narrative of inclusion grows stronger, proving that ability always finds a way.
                    </h3>
                </div>
                
            </section>
        </>
    )
}

export default SkillingAndEmployeement