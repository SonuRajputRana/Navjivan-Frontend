
import HeroCarousel from '../../components/ui/carousel/HeroCarousel';
import AboutNavjivanSection from '../../components/ui/navjivan/AboutNavjivanSection';
// import Hero from '../../layout/Hero';
import EmpowerSection from './HomeComponents/EmpowerSection';
import ImpactStatsSection from './HomeComponents/ImpactStatsSection';
import InvolvedSection from './HomeComponents/InvolvedSection';
import ProgramsSection from './HomeComponents/ProgramsSection';


export default function Home() {
  return (
    <>
      <div className="home">
         <div className="carousel">
             <HeroCarousel />
             {/* <Hero /> */}
         </div>
         <div className="navjivan-about-section">
             <AboutNavjivanSection />
         </div>
         <div className="impact-stats">
            <ImpactStatsSection />
         </div>
         <div className="program-section py-10">
            <ProgramsSection />
         </div>
         <div className="empower-section">
            <EmpowerSection />
         </div>
         <div className="involved-section">
            <InvolvedSection />
         </div>
      </div>
    </>
  );
}
