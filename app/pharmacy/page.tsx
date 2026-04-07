'use client';

import FAQs from '@/components/sections/Faqs';
import Image from 'next/image';

const Page = () => {
  
  const bookAppointment = () => {
    
  }
  
  return(
    <>
    <section className="h-screen w-screen flex items-center justify-start px-4 sm:px-10 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image src="/hero.jpg" fill className="object-fit" alt="hero image" />
        </div>
      </div>
      <div className="h-max w-full sm:w-[65%] relative z-10">
        <h1 className="text-3xl font-bold mb-5">Your pet can’t tell you what’s wrong. We can help find out.</h1>
        <p className="text-base text-text mb-10">From routine checkups to urgent symptoms, our clinic and on-site pharmacy work together to diagnose, treat, and comfort your pet – all in one place.</p>
        <button onClick={bookAppointment} type="button" className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300">Book Appointment</button>
      </div>
    </section>
    <section className="w-screen px-4 sm:px-10 py-16 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-header mb-3">
            Why Choose Us
          </h2>
          <p className="text-text max-w-2xl mx-auto">
            We combine expert care, modern facilities, and genuine love for animals to give your pet the best possible treatment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-primary text-3xl mb-3">🐾</div>
            <h3 className="font-semibold text-lg mb-2">Experienced Vets</h3>
            <p className="text-sm text-text">
              Our team has years of hands-on experience treating pets with care and precision.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-primary text-3xl mb-3">💊</div>
            <h3 className="font-semibold text-lg mb-2">On-Site Pharmacy</h3>
            <p className="text-sm text-text">
              Get prescribed medications immediately without needing to visit another location.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-primary text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-lg mb-2">Fast Diagnosis</h3>
            <p className="text-sm text-text">
              We quickly identify issues so your pet gets the right treatment without delay.
            </p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-primary text-3xl mb-3">❤️</div>
            <h3 className="font-semibold text-lg mb-2">Compassionate Care</h3>
            <p className="text-sm text-text">
              We treat every pet like family, ensuring comfort and attention at every step.
            </p>
          </div>

        </div>
      </div>
    </section>
    <FAQs />
    </>
  );
}

export default Page;