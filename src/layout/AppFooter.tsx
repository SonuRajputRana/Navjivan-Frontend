// import Logo from '../../public/images/logo/new-logo.png';
import Logo from "../images/logo/new-logo.png"
// import LocationIcon from '../../public/images/icons/location.svg';
export default function AppFooter() {
  return (
    <footer className="bg-linear-to-r from-[#021c1f] to-[#032a2f] text-gray-300">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* ABOUT */}
        <div>
          <img
            src={Logo}
            alt="Sarthak Logo"
            className="w-40"
          />

          <p className="text-sm leading-relaxed">
            Navjivan Transforming Lives and Careers Trust is a national-level NGO committed to
            empowering Persons with Disabilities (PwDs) through skill
            development, education, employment, and advocacy.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            {["twitter", "facebook", "youtube", "linkedin"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition"
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </div>
            ))}
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">
            Our Address
          </h3>

          <ul className="space-y-4 text-sm">
            <li className=" gap-3 li">
                <span className='flex items-center'>
                   {/* <img className='pr-4' src={LocationIcon} width={30} alt="Location" /> */}
                   <i className="fa-solid fa-location-dot pr-4"></i>
                   Corporate Office – Navjivan Transforming Lives and Careers Trust
                </span>
                
                House No. 360, Near Shiv Mandir,
                Village Kasampur Majra Padli,
                Behat, Saharanpur,
                Uttar Pradesh – 247121
            </li>
            <li className="flex gap-3">
                <span>
                    <i className="fa-solid fa-phone pr-4"></i>
                    +91 124-4447700
                </span>
            </li>
            <li className="flex gap-3">
                <span>
                    <i className="fa-solid fa-envelope pr-4"></i>
                    info@navjivanindia.org
                </span>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            {[
              "Our Story",
              "Contact Us",
              "Skilling Program",
              "Upcoming Event",
              "Blog",
              "Career",
            ].map((link) => (
              <li
                key={link}
                className="flex items-center gap-2 hover:text-white cursor-pointer"
              >
                ➤ {link}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-5">
            Newsletter
          </h3>

          <p className="text-sm mb-4">
            Subscribe to get the latest updates
          </p>

          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent px-4 py-3 w-full outline-none text-sm"
            />
            <button className="bg-cyan-600 px-6 py-3 text-white font-semibold hover:border">
              SignUp
            </button>
          </div>

          <p className="text-xs mt-3">
            Want to unsubscribe?{" "}
            <span className="underline cursor-pointer">Click here</span>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-black/80 text-gray-400 text-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-3">
          <p>
            © 2008 – 2026 Navjivan Transforming Lives and Careers Trust. All Rights Reserved.
          </p>
          <p>
            Designed By <span className="text-white">Sagar Kr Dubey</span>
          </p>
        </div>
      </div>
    </footer>
  );
}