'use client';
import PageHero from "@/components/sections/PageHero";

const Page = () => {
  return(
    <>
    <PageHero />
    <section className="h-max w-screen flex flex-col sm:flex-row py-10 px-4 sm:px-10">
      <div className="h-max w-full sm:w-1/2 mb-10 sm:mb-0">
        <h2 className="text-3xl font-bold text-header">Contact Information</h2>
        <p className="text-base text-text">PetCity Limited</p>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <i className="fa-solid fa-location-dot"></i>
          <p className="text-base text-text">shop 15, block 4, FO1 market, Kubwa, Abuja</p>
        </div>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <i className="fa-solid fa-phone"></i>
          <p className="text-base text-text">+234 905 4060 454</p>
        </div>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <i className="fa-solid fa-envelope"></i>
          <p className="text-base text-text">osemensilas@gmail.com</p>
        </div>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <a href="#" target="_blank" title="social media" className="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" target="_blank" title="social media" className="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank" title="social media" className="">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" target="_blank" title="social media" className="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="h-max w-full sm:w-1/2">
        <form className="h-max w-full sm:w-[450px] bg-accent box-shadow rounded px-10 py-5 sm:py-10" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-3xl font-bold mb-10 text-center text-header">Get in Touch</h2>
          <p className="text-base mb-5 text-text">We would love to hear from you. please, fill out the form and out team will get back to you as soon as possible.</p>
          <div className="h-max w-full">
            <div className="h-max w-full mb-5">
              <input type="text" className="text-base px-5 h-10 w-full border rounded outline-none border-grey" name="fullname" placeholder="Fullname" />
            </div>
            <div className="h-max w-full mb-5">
              <input type="text" className="text-base px-5 h-10 w-full border rounded outline-none border-grey" name="email" placeholder="Email Address" />
            </div>
            <div className="h-max w-full">
              <textarea className="text-base px-5 max-h-[150px] min-h-[150px] max-w-full min-w-full border rounded outline-none border-grey" name="message"placeholder="Your Message" ></textarea>
            </div>
          </div>
          <div className="h-max w-full py-5 mt-5 border-t border-grey">
            <button className="w-full rounded bg-primary py-2 text-center text-background" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Page;