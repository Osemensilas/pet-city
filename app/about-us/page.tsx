import PageHero from "@/components/sections/PageHero";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <PageHero />
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-header mb-4">
            Who We Are
          </h2>
          <p className="text-text mb-4">
            We are a dedicated pet care store focused on providing high-quality
            pet food, medications, and professional veterinary services. Our
            goal is to ensure that every cat and dog gets the best care,
            nutrition, and attention they deserve.
          </p>
          <p className="text-text">
            Whether you're looking for premium pet feed or expert medical care,
            we are here to support you and your furry companions every step of
            the way.
          </p>
        </div>

        <div className="bg-background h-64 rounded-2xl flex items-center justify-center">
          <span className="text-header relative font-medium">
            <Image src="/" fill alt="about image" className="" />
          </span>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-header mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pet Feed */}
            <div className="bg-accent p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-header mb-2">
                Premium Pet Feed
              </h3>
              <p className="text-text">
                High-quality nutrition for cats and dogs to keep them healthy,
                active, and happy.
              </p>
            </div>

            {/* Medications */}
            <div className="bg-accent p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-header mb-2">
                Pet Medications
              </h3>
              <p className="text-text">
                Trusted medications and supplements recommended by veterinary
                professionals.
              </p>
            </div>

            {/* Clinic */}
            <div className="bg-accent p-6 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-header mb-2">
                Veterinary Clinic
              </h3>
              <p className="text-text">
                Professional diagnosis, treatment, and preventive care for your
                pets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-header mb-4">
          Our Mission
        </h2>
        <p className="text-text text-lg">
          To provide reliable pet care solutions by combining quality products,
          expert veterinary services, and a genuine love for animals.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-header py-12 px-6 text-center text-accent">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Visit Us Today
        </h2>
        <p className="mb-6">
          Give your pets the care they deserve. Shop with us or book a clinic
          appointment today.
        </p>
        <button className="bg-accent text-header px-6 py-3 rounded-xl font-medium hover:bg-accent transition">
          Contact Us
        </button>
      </section>
      </>
  );
};

export default AboutPage;