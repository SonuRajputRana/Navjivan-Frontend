import { useState } from "react";
// import Logo from "/images/logo/navjivan-logo2.png";
import Logo from '../images/logo/logo.png'
import "./AppHeader.css";
import DropdownMenu from "../components/ui/dropdown/DropdownMenu";
import { Link, useLocation } from "react-router";
// import NavjivanButton from "../components/ui/button/NavjivanButton"


const AboutUsMenu = [
  { label: "Vission & Mission", link: "#" },
  { label: "Our Story", link: "#" },
  { label: "Leadership Team", link: "#" },
  { label: "Our Impact", link: "#" },
  { label: "Partners & Supporters", link: "#" },
];
const ProgramServicesMenu = [
  { label: "Skilling & Employment", link: "skilling-and-employeement" },
  { label: "Early Intervention", link: "#" },
  { label: "Digital Platforms", link: "#" },
  { label: "Abilympics", link: "#" },
  { label: "India Disability Empowerment Alliance (IDEA)", link: "#" },
];
const GetInvolvedMenu = [
  { label: "Donate", link: "#" },
  { label: "Fundraising", link: "#" },
  { label: "Volunteer", link: "#" },
  { label: "CSR / Institutional Partners", link: "#" },
];
const ResourcesMenu = [
  { label: "Gallary", link: "gallery" },
  { label: "Videos", link: "#" },
  { label: "Reports", link: "#" },
  { label: "Media Reports", link: "#" },
  { label: "Navjivan Awards", link: "#" },
  { label: "Blogs", link: "#" },
  { label: "Success Stories", link: "#" },
  { label: "E-Books", link: "#" },
];
const NavjivanInitiactivesMenu = [
  { label: "Navjivan Divyangjan Foundation", link: "#" },
  { label: "Human Library", link: "#" },
  { label: "Navjivan Mart", link: "#" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    // <nav className="bg-purple-800 text-white">
    <nav className={
      ` top-0 left-0 w-full z-50 
      ${isHomePage ? "absolute bg-transparent" : "relative bg-dark-cyan-600"}
    `}>
      <div className="max-w-7xl mx-auto px-4">
        {/* <div className="w-full px-8"> */}
        <div className="flex items-center justify-between h-19 text-white">

          {/* Logo */}
          {/* <div className="flex items-center"> */}
          <div className="flex items-center flex-shrink-0">
            <img
              src={Logo}
              alt="Navjivan Trust"
              className="h-14 w-auto mix-blend-screen"
            />
          </div>

          {/* Desktop Menu */}
          {/* <div className="hidden lg:flex items-center space-x-8 font-medium"> */}
          <div className="hidden lg:flex items-center space-x-8 font-medium flex-nowrap">
            
            
            <div className="relative group">
              {/* <a href="#" className="hover:text-gray-200 flex items-center gap-1"> */}
              <a href="#" className="hover:text-gray-200 flex items-center gap-1 whitespace-nowrap">
                About Us
                <span>▾</span>
              </a>

              {/* Hover Dropdown */}
              <div className="dropdown-wrapper ">
                <DropdownMenu items={AboutUsMenu}/>
              </div>
            </div>
            <div className="relative group">
              {/* <a href="#" className="hover:text-gray-200 flex items-center gap-1"> */}
              <a href="#" className="hover:text-gray-200 flex items-center gap-1 whitespace-nowrap">
                Programs & Services
                <span>▾</span>
              </a>

              {/* Hover Dropdown */}
              <div className="dropdown-wrapper ">
                <DropdownMenu items={ProgramServicesMenu}/>
              </div>
            </div>
            <div className="relative group">
              {/* <a href="#" className="hover:text-gray-200 flex items-center gap-1"> */}
              <a href="#" className="hover:text-gray-200 flex items-center gap-1 whitespace-nowrap">
                Get Involved
                <span>▾</span>
              </a>

              {/* Hover Dropdown */}
              <div className="dropdown-wrapper">
                <DropdownMenu items={GetInvolvedMenu}/>
              </div>
            </div>
            <div className="relative group">
              {/* <a href="#" className="hover:text-gray-200 flex items-center gap-1"> */}
              <a href="#" className="hover:text-gray-200 flex items-center gap-1 whitespace-nowrap">
                Resources
                <span>▾</span>
              </a>

              {/* Hover Dropdown */}
              <div className="dropdown-wrapper">
                <DropdownMenu items={ResourcesMenu}/>
              </div>
            </div>
            <div className="relative group">
              {/* <a href="#" className="hover:text-gray-200 flex items-center gap-1"> */}
              <a href="#" className="hover:text-gray-200 flex items-center gap-1 whitespace-nowrap">
                Navjivan Initiactives
                <span>▾</span>
              </a>

              {/* Hover Dropdown */}
              <div className="dropdown-wrapper">
                <DropdownMenu items={NavjivanInitiactivesMenu}/>
              </div>
            </div>
            {/* <Link to="/contact" className="hover:text-gray-200">Contact Us</Link> */}
            <Link to="/contact"  className="hover:text-gray-200 flex items-center gap-1 whitespace-nowrap">Contact Us</Link>



          </div>

          {/* Donate Button */}
          {/* <div className="hidden lg:block"> */}
          <div className="hidden lg:block shrink-0">
            <button className="donate-btn flex">
              Donate Now 
              <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  />
                </svg>
            </button>
            {/* <NavjivanButton name="Donate Now"/> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setOpen(!open)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-purple-700 px-4 py-4 space-y-3">
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Programs & Services</a>
          <a href="#" className="block">Get Involved</a>
          <a href="#" className="block">Resources</a>
          <a href="#" className="block">Contact Us</a>

          <button className="w-full mt-3 border border-white py-2 rounded-full">
            Donate Now →
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



