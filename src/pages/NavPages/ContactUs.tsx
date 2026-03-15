
const ContactUs = () => {
  return (
    <>
      {/* FULL SCREEN BACKGROUND */}
      <section
        className="w-full min-h-screen bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT : ADDRESS (NO EXTRA BG IMAGE, ONLY LIGHT GLASS) */}
            <div className="text-white p-10">
              <h3 className="text-2xl font-semibold mb-10 text-teal-400">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/15 rounded-full text-2xl">
                    <i className="fa-solid fa-location-dot text-cyan-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-600">Address</p>
                    <p className="text-sm text-gray-200 leading-relaxed">
                      House No. 360, Near Shiv Mandir,<br />
                      Village Kasampur Majra Padli,<br />
                      Behat, Saharanpur,<br />
                      Uttar Pradesh – 247121
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/15 rounded-full text-2xl">
                    <i className="fa-solid fa-phone text-cyan-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-600">Phone</p>
                    <a href="tel:+917302614061">
                      <p className="text-sm text-gray-200">
                        +91 73026 14061
                      </p>
                    </a>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 flex items-center justify-center bg-white/15 rounded-full text-2xl">
                    <i className="fa-solid fa-envelope text-cyan-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-600">Email</p>
                    <a href="mailto:info@navjivanfoundation.com">
                      <p className="text-sm text-gray-200">
                        info@navjivanfoundation.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT : FORM (NO BG IMAGE, ONLY SOFT WHITE) */}
            <div className="bg-dark-cyan-100 rounded-3xl p-12 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-10">
                Send Message
              </h3>

              <form className="space-y-7">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="text-white w-full bg-transparent border-b border-gray-400 focus:border-teal-600 outline-none py-3"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="text-white w-full bg-transparent border-b border-gray-400 focus:border-teal-600 outline-none py-3"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="text-white w-full bg-transparent border-b border-gray-400 focus:border-teal-600 outline-none py-3"
                />

                <textarea
                  rows={4}
                  placeholder="Type your message..."
                  className="text-white w-full bg-transparent border-b border-gray-400 focus:border-teal-600 outline-none py-3 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-xl transition text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FULL WIDTH MAP */}
      <section className="w-full h-[420px]">
        <iframe
          title="Navjivan Trust Location"
          src="https://www.google.com/maps?q=House%20No.%20360,%20Village%20Kasampur%20Majra%20Padli,%20Behat,%20Saharanpur,%20Uttar%20Pradesh%20247121&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;