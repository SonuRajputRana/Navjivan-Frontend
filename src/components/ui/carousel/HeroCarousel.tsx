
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    image: "/images/carousel/carousel-01.png",
    title: "HON’BLE PRESIDENT OF INDIA",
    subtitle: "SMT. DROUPADI MURMU",
    description:
      "Presented Navjivan Educational Trust – National Award 2023",
  },
  {
    id: 2,
    image: "/images/carousel/carousel-02.png",
    title: "NAVJIVAN EDUCATIONAL TRUST",
    subtitle: "Empowering Persons with Disabilities",
    description: "Recognized at National Level",
  },
  {
    id: 3,
    image: "/images/home/program-section3.jpg",
    title: "NATIONAL AWARD 2023",
    subtitle: "For Empowerment",
    description: "Persons with Disabilities",
  },

];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return resetTimeout;
  }, [current]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition:
            // "transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)",
            "transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)"
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-screen relative overflow-hidden" >
            <img
              src={slide.image}
              alt=""
              className={`
                absolute inset-0 w-full h-full object-fill
                transition-all duration-[1600ms] ease-in-out
                ${current === index 
                  ? "scale-100 opacity-100" 
                  : "scale-105 opacity-90 blur-[2px]"
                }
              `}
              style={{
                objectPosition: "center", 
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div
                className={`
                  px-4 sm:px-8 md:px-16 text-white max-w-3xl
                  transition-all duration-[1400ms]
                  ${
                    current === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <h2 className="text-sm sm:text-lg font-semibold">
                  {slide.title}
                </h2>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-cyan-600 mt-2">
                  {slide.subtitle}
                </h1>
                <p className="mt-2 text-sm sm:text-base">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-15 left-5/6 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2 rounded-full transition-all duration-500
              ${
                current === index
                  ? "bg-cyan-600 w-8"
                  : "bg-white/70 w-3"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
