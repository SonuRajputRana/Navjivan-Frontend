
// import React from "react";
import Reveal from '../../../components/animations/Reveal';
import NavjivanButton from '../../../components/ui/buttons/NavjivanButton';
import PillLabel from '../../../components/ui/buttons/PillLabel';
import DonateIcon from '../../../images/icons/donate-icon.svg'
import PartnerIcon from '../../../images/icons/partener-icon.svg'
import VolunteerIcon from '../../../images/icons/volunter-icon.svg'

const InvolvedSection = () => {
  return (
    <section className="relative py-20 bg-cyan-100 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 -left-40 w-105 h-105 bg-cyan-300 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-105 h-105 bg-cyan-400 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">

        {/* Badge */}
        <div  className="mb-7">
          <PillLabel text='Get Involved'></PillLabel>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-head-900">
          Together, We Can Make a Difference
        </h2>

        {/* Sub text */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Support inclusion and empowerment of persons with disabilities by
          joining hands with us in meaningful and impactful ways.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Donate */}
          <Reveal delay={1* 0.15}>
            <div className="relative bg-white rounded-3xl p-10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] hover-flow">
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-18 h-18 justify-center ">
                <img src={DonateIcon} alt="Donate" />
              </div>
              <h3 className="mt-10 text-2xl font-bold text-head-900">
                Donate
              </h3>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Sponsor education, therapies, or training of a person with
                disability.
              </p>
              <div className="mt-8 flex justify-center">
                  {/* <NavjivanButton name="Donate Now" classname="navbtn de-bg" /> */}
                  <NavjivanButton name="Donate Now" classname="navbtn de-bg" />
              </div>
            </div>
          </Reveal>

          {/* Volunteer */}
          <Reveal delay={2* 0.15}>
            <div className="relative bg-white rounded-3xl p-10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] hover-flow md:-mt-10">
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-18 h-18 justify-center ">
                <img src={VolunteerIcon} alt="Donate" />
              </div>
              <h3 className="mt-10 text-2xl font-bold text-head-900">
                Volunteer
              </h3>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Mentor a trainee, support events, or contribute your professional
                skills.
              </p>
              <div className="mt-8 flex justify-center">
                  <NavjivanButton name="Join Us" classname ="navbtn de-bg"/>
              </div>
              
            </div>
          </Reveal>

          {/* Partner */}
          <Reveal delay={3* 0.15}>
            <div className="relative bg-white rounded-3xl p-10 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] hover-flow">
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-18 h-18 justify-center ">
                <img src={PartnerIcon} alt="Donate" />
              </div>
              <h3 className="mt-10 text-2xl font-bold text-head-900">
                Partner
              </h3>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                Collaborate as a CSR partner, NGO ally, or accessibility
                innovator.
              </p>
              <div className="mt-8 flex justify-center">
                  <NavjivanButton name="Partner With Navjivan" classname ="navbtn de-bg"/>
              </div>
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default InvolvedSection;