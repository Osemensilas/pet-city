'use client';

import Image from 'next/image';
import PageHero from "@/components/general/PageHero";

const Page = () => {
  
  const bookAppointment = () => {
    
  }
  
  return(
    <>
    <PageHero />
    <section className="h-screen w-screen flex items-center justify-start px-4 sm:px-10 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image src="/hero.jpg" fill className="object-fit" alt="hero image" />
        </div>
      </div>
      <div className="h-max w-full sm:w-[65%] relative z-10">
        <h1 className="text-3xl font-bold mb-5">Your pet can’t tell you what’s wrong. We can help find out.</h1>
        <p className="text-base text-text">From routine checkups to urgent symptoms, our clinic and on-site pharmacy work together to diagnose, treat, and comfort your pet – all in one place.</p>
          <button onClick={bookAppointment} type="button" className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300">Book Appointment</button>
      </div>
    </section>
    </>
  );
}

export default Page;