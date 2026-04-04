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
            <h1 className="text-3xl text-header mt-4 font-bold">Purina Pro Plan</h1>
            <p className="text-text text-base mt-4">Science Diet</p>
            <p className="text-text text-base mt-4">Items Left: 26</p>
            <h2 className="text-2xl font-semibold text-text">₦{(5000).toLocaleString()}</h2>
            <div className="h-max w-full flex items-center gap-3 mt-4">
              <button type="button" className="h-10 w-10 rounded bg-primary flex items-center justify-center text-background text-base">
                <p>-</p>
              </button>
              <input className="h-10 w-20 border border grey rounded px-5" value="1" />
              <button type="button" className="h-10 w-10 rounded bg-primary flex items-center justify-center text-background text-base">
                <p>+</p>
              </button>
            </div>
            <div className="h-max w-full mt-4">
              <button className="h-max w-full py-2 text-center bg-primary text-background text-base rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="h-max w-full mt-10">
          <div className="bg-accent rounded h-max w-max p-4 sm:p-10">
            <div className="h-max w-full mb-4 sm:mb-10">
              <h3 className="text-2xl font-semibold">Description:</h3>
            </div>
            <div className="h-max w-full">
              <p className="text-base text-text">Purina is one of the most recognized names in the pet nutrition industry, known for producing a wide range of high-quality pet food products for dogs and cats. With decades of experience, the brand has built a reputation for combining scientific research with practical feeding solutions that support the health and well-being of pets at every stage of life.
                One of the key strengths of Purina pet feed is its focus on balanced nutrition. Each formula is carefully developed to provide essential nutrients such as protein, vitamins, and minerals that pets need to thrive. Whether it is dry kibble or wet food, the ingredients are selected to support healthy digestion, strong muscles, and a shiny coat. This makes Purina a popular choice among pet owners who want reliable and consistent quality.
                Another important aspect of Purina products is the variety they offer. Different pets have different needs depending on their age, size, and activity level. Purina addresses this by creating specialized formulas, including options for puppies, adult dogs, and senior pets. There are also products designed for pets with specific dietary needs, such as weight management or sensitive digestion.
                  In addition to nutrition, Purina places a strong emphasis on safety and quality control. Their production processes follow strict standards to ensure that every product meets regulatory requirements and maintains consistency. This commitment gives pet owners confidence in what they are feeding their animals.
                  Overall, Purina pet feed stands out as a trusted option for pet nutrition. By focusing on science-backed formulas, product variety, and quality assurance, the brand continues to support pet owners in providing the best possible care for their animals.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;