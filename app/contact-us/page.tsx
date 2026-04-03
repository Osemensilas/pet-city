const Page = () => {
  return(
    <>
    <section className="h-[40vh] w-full flex justify-center items-center">
      <h1>Contact Us</h1>
    </section>
    <section className="h-max w-max flex flex-col sm:flex-row py-10 px-4 sm:px-10">
      <div className="h-max w-full sm:w-1/2">
        <h2 className="text-3xl font-bold text-header">Contact Information</h2>
        <p className="text-base text-text">PetCity Limited</p>
        <p className="text-base text-text">shop 15, block 4, FO1 market, Kubwa, Abuja</p>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <i className="fa-solid fa-phone"></i>
          <p className="text-base">+234 905 4060 454</p>
        </div>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <i className="fa-solid fa-email"></i>
          <p className="text-base">osemensilas@gmail.com</p>
        </div>
        <div className="h-max w-full flex items-center gap-3 mt-5">
          <a href="#" target="_blank" className="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" target="_blank" className="">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" target="_blank" className="">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" target="_blank" className="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="h-max w-full sm:w-1/2">
        <form className="" onSubmit={(e) => e.preventDefauld}>
          <h2 className="">Get in Touch</h2>
          <p className="">We would love to hear from you. please, fill out the form and out team will get back to you as soon as possible.</p>
          <div className="">
            
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Page;