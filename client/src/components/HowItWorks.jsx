export default function HowItWorks() {
  return (
    <section id="how" className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">
          How SaferSpace Supports You
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* community part */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Join a Safe Community
            </h3>
            <p className="text-green-700">
              Share your story, find strength, and connect with others who truly
              understand. Together, healing is possible.
            </p>
          </div>

          {/* nearby health facilities */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Discover Free Health Services
            </h3>
            <p className="text-green-700">
              Find hospitals and clinics near you offering free medical care,
              counseling, and protection when you need it most.
            </p>
          </div>

          {/* health professional */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-green-100">
            <h3 className="text-xl font-semibold text-pink-500 mb-3">
              Talk to a Caring Professional
            </h3>
            <p className="text-green-700">
              Reach out to counselors and health experts on WhatsApp — get
              confidential support whenever you're ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
