// export default function Hero() {
//   return (
//     <section className="relative bg-linear-to-r from-teal-50 to-white pt-32 pb-20 overflow-hidden">
      
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT CONTENT */}
//         <div>
//           <p className="text-sm text-gray-500 mb-2">
//             NATIONAL AWARD 2023
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//             Empowering Lives with <br />
//             <span className="text-teal-600">Compassion & Care</span>
//           </h1>

//           <p className="text-gray-600 mt-4 text-lg">
//             Building a brighter future for persons with disabilities across India.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-6">
//             <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition">
//               Get Involved
//             </button>

//             <button className="bg-teal-600 text-white px-6 py-3 rounded-full shadow hover:bg-teal-700 transition">
//               Donate Now
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1593113630400-ea4288922497"
//             alt="hero"
//             className="rounded-3xl shadow-lg"
//           />
//         </div>
//       </div>

//       {/* WAVE SHAPE */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//         <svg
//           className="w-full h-20"
//           viewBox="0 0 1440 320"
//         >
//           <path
//             fill="#ffffff"
//             fillOpacity="1"
//             d="M0,224L80,202.7C160,181,320,139,480,122.7C640,107,800,117,960,144C1120,171,1280,213,1360,234.7L1440,256V320H0Z"
//           ></path>
//         </svg>
//       </div>
//     </section>
//   );
// }










import backImg from '../images/background/back.png';

export default function Hero() {

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={backImg}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* LIGHT OVERLAY (IMPORTANT 🔥) */}
      <div className="absolute  bg-white/70 backdrop-blur-[2px]"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">

          <p className="text-sm text-gray-600 mb-3 tracking-wide">
            NATIONAL AWARD 2023
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Lives with <br />
            <span className="text-teal-600">
              Compassion & Care
            </span>
          </h1>

          <p className="text-gray-700 mt-4 text-lg">
            Building a brighter future for persons with disabilities across India.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition">
              Get Involved
            </button>

            <button className="bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 transition">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* CURVE SHAPE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[100px]"
        >
          <path
            fill="#ffffff"
            d="M0,160C240,200,480,0,720,40C960,80,1200,200,1440,160L1440,200L0,200Z"
          />
        </svg>
      </div>

    </section>
  );
}