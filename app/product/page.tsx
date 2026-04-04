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
            <p className="px-4 py-2 bg-green rounded">In Stock</p>
            <h1 className="text-3xl text-header mt-4">Purina Pro Plan</h1>
            <p className="text-text text-base mt-4">Science Diet</p>
            <p className="text-text text-base mt-4">Items Left: 26</p>
            <div className="h-max w-full flex items-center gap-3">
              <button type="button" className="h-10 w-10 rounded bg-primary flex items-center justify-centet text-background text-base">
                <p>-</p>
              </button>
              <input className="h-10 w-20 border border grey rounded px-5" value="1" />
              <button type="button" className="h-10 w-10 rounded bg-primary flex items-center justify-centet text-background text-base">
                <p>+</p>
              </button>
            </div>
            <div className="h-max w-full mt-4">
              <button className="h-max w-full py-2 text-center bg-primary text-background text-base">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className=""></div>
      </section>
    </>
  );
}

export default Page;