import Image from "next/image";

const Page = () => {
  return(
    <>
      <section className="h-max w-screen px-4 sm:px-10 py-10">
        <div className="h-max w-full flex flex-col sm:flex-row items-start gap-3">
          <div className="h-max sm:w-[65%] w-full bg-accent rounded p-4 sm:p-10">
            <div className="h-max w-full flex justify-center items-center">
              <div className="relative h-[300px] sm:h-[600px] w-full sm:w-[450px]">
                <Image src="/" fill className="object-fit" alt="products image" />
              </div>
            </div>
            <div className="h-max w-full flex justify-center items-center gap-4 mt-10">
              <div className="h-[150px] w-[150px] relative">
                <Image src="/" fill className="object-fit" alt="product image" />
              </div>
              <div className="h-[150px] w-[150px] relative">
                <Image src="/" fill className="object-fit" alt="product image" />
              </div>
            </div>
          </div>
          <div className="h-max sm:w-[35%] w-full bg-accent rounded p-4 sm:p-10">
            
          </div>
        </div>
        <div className=""></div>
      </section>
    </>
  );
}

export default Page;