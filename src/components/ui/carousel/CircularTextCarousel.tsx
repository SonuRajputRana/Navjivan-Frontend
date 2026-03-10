// import { useEffect, useRef } from "react";

// const items = [
//   "Register Now",
//   "Our Digital Platforms : Capsarathi, RozgarSarathi, GyanSarathi",
//   "Schedule GRC Visit : Book Now",
//   "Support to Empower Divyangjan : Donate Now",
// ];

// export default function CircularTextCarousel() {
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     let start = 0;

//     const animate = () => {
//       start -= 0.35;

//       if (Math.abs(start) >= track.scrollWidth / 2) {
//         start = 0;
//       }

//       track.style.transform = `translateX(${start}px)`;
//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, []);

//   return (
//     <div className="w-full overflow-x-hidden">
//       <div className="w-full bg-[#fff7e6] border-y-2 border-blue-700 py-2">
//         <div
//           ref={trackRef}
//           className="inline-flex gap-10 whitespace-nowrap will-change-transform"
//         >
//           {[...items, ...items].map((text, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-2 text-yellow-600 font-semibold text-sm md:text-base"
//             >
//               <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
//               <span className="hover:underline cursor-pointer">
//                 {text}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
