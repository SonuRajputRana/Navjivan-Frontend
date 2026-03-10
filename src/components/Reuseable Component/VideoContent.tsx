import React from "react";
import PillLabel from "../ui/buttons/PillLabel";
import NavjivanButton from "../ui/buttons/NavjivanButton";
import Reveal from "../animations/Reveal";

interface ProgramOverviewProps {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  points?: string[];
  videoUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const VideoAndContent: React.FC<ProgramOverviewProps> = ({
  badge,
  title,
  highlightText,
  description,
  points = [],
  videoUrl,
  ctaText,
  onCtaClick,
}) => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* VIDEO */}
        <Reveal direction="fade-up">
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <iframe
                className="w-full h-[300px] md:h-[380px]"
                src={videoUrl}
                title="Program Video"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Watch how our programs are transforming lives
            </p>
          </div>
        </Reveal>
        {/* CONTENT */}
        <Reveal direction="fade-up">
          <div className="lg:pt-2">

            {/* Badge */}
            {badge && <PillLabel text={badge} />}

            {/* Title */}
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              {title}{" "}
              <span className="text-orange-500">{highlightText}</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-[15.5px] text-gray-700 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Points */}
            <ul className="mt-8 space-y-4">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-start"
                >
                  <span className="mt-[3px] w-5 h-5 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-gray-800 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            {ctaText && (
              <div className="mt-10">
                <NavjivanButton
                  name={ctaText}
                  classname="navbtn de-bg"
                />
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default VideoAndContent;