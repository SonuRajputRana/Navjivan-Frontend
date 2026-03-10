// import { Link } from "react-router-dom";

import { Link } from "react-router";

const PageHeader = ({ title="", breadcrumb="" }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#020024] via-[#090979] to-[#00d4ff] animate-gradient" />

      {/* Floating Glow Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float delay-2000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide animate-slideUp">
          {title}
        </h1>

        <div className="mt-4 flex justify-center items-center gap-2 text-sm md:text-base animate-fadeIn">
          <Link to="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <span className="opacity-60">/</span>
          <span className="text-cyan-200">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;