
import Reveal from "../../../components/animations/Reveal";
import NavjivanButton from "../../../components/ui/buttons/NavjivanButton";
import PillLabel from "../../../components/ui/buttons/PillLabel";

const EmpowerSection = () => {
  return (
    <section className="relative bg-[#1ecbe138] py-24 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <PillLabel text ="Support Inclusion"/>
          <h2 className="text-4xl md:text-5xl font-extrabold text-head-900 leading-tight">
            Empowering Lives,<br />
            <span className=" text-cyan-600">Building Independence</span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl">
            Partner with <b>Navjivan Transforming Lives and Careers Trust</b> to enable persons with
            disabilities through education, skills, employment, and long-term
            rehabilitation across India.
          </p>
          <NavjivanButton name ="Donate Now" classname ="navbtn de-bg mt-10"/>
        </div>

        {/* RIGHT FEATURE BLOCKS */}
        <div className="space-y-6">

          {/* Block */}
          <Reveal direction="fade-right">
            <div className="bg-white rounded-2xl p-6 shadow-inner border border-orange-100">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-300 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-head-900">
                    Inclusive Education
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Early intervention & school readiness programs designed for
                    children with disabilities.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Block */}
          <Reveal direction="fade-right">
            <div className="bg-white rounded-2xl p-6 shadow-inner border border-orange-100">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-300 flex items-center justify-center text-2xl">
                  💻
                </div>
                <div>
                  <h3 className="text-xl font-bold text-head-900">
                    Skill Development
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Digital & employability skills that enable sustainable
                    livelihoods.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Block */}
          <Reveal direction="fade-right">
            <div className="bg-white rounded-2xl p-6 shadow-inner border border-orange-100">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-300 flex items-center justify-center text-2xl">
                  🤝
                </div>
                <div>
                  <h3 className="text-xl font-bold text-head-900">
                    Meaningful Employment
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    Connecting trained PwDs to jobs through <b>RozgarSarathi</b>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};

export default EmpowerSection;