// import { useState, useEffect } from "react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white shadow-md py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        
//         {/* Logo */}
//         <h1 className="text-xl font-bold text-teal-700">
//           Navjivan
//         </h1>

//         {/* Menu */}
//         <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
//           <a href="#">About Us</a>
//           <a href="#">Programs</a>
//           <a href="#">Get Involved</a>
//           <a href="#">Resources</a>
//           <a href="#">Contact</a>
//         </nav>

//         {/* CTA */}
//         <button className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition">
//           Donate Now
//         </button>
//       </div>
//     </header>
//   );
// }


// export default function Hero() {
//   return (
//     <section className="relative pt-28 pb-20 bg-[#eef7f6] overflow-hidden">

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-sm text-gray-500 mb-3 tracking-wide">
//             NATIONAL AWARD 2023
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Empowering Lives with <br />
//             <span className="text-teal-600">
//               Compassion & Care
//             </span>
//           </h1>

//           <p className="text-gray-600 mt-4 text-lg max-w-md">
//             Building a brighter future for persons with disabilities across India.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-6">
//             <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition">
//               Get Involved
//             </button>

//             <button className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition">
//               Donate Now
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE WITH OVERLAY */}
//         <div className="relative">
          
//           <div className="rounded-[30px] overflow-hidden shadow-xl">
//             <img
//               src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
//               alt="hero"
//               className="w-full h-87.5 object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
//           </div>

//         </div>
//       </div>

//       {/* CURVE SHAPE (IMPORTANT 🔥) */}
//       <div className="absolute bottom-0 left-0 w-full">
//         <svg
//           viewBox="0 0 1440 200"
//           className="w-full h-[100px]"
//         >
//           <path
//             fill="#ffffff"
//             d="M0,160C240,200,480,0,720,40C960,80,1200,200,1440,160L1440,200L0,200Z"
//           />
//         </svg>
//       </div>

//     </section>
//   );
// }

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-white/70 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold text-teal-700 flex items-center gap-2">
          🌿 Navjivan
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#">About Us</a>
          <a href="#">Programs & Services</a>
          <a href="#">Impact</a>
          <a href="#">Contact Us</a>
        </nav>

        {/* CTA */}
        <button className="bg-yellow-500 text-white px-5 py-2 rounded-full shadow hover:bg-yellow-600 transition">
          Donate
        </button>
      </div>
    </header>
  );
}