import Image from "next/image";

const ViewProduct = () => {
    return ( 
        <>
        <section className="h-max w-full pb-10 px-12">
            <div className="bg-accent mb-10 rounded px-10 py-10">
                <h2 className="text-3xl font-semibold text-header mb-10">Product ID: djsboyrgg780</h2>
                <div className="h-max w-full flex items-start gap-3">
                    <div className="relative h-[250px] w-[250px] mb-5">
                        <Image src="/" alt="product Image" fill className="object-fill" />
                    </div>
                    <div className="h-max w-max flex flex-col gap-3">
                        <div className="">
                            <h3 className="text-xl text-header mb-2">Hills</h3>
                            <p className="text-base text-text">Science Diet</p>
                        </div>
                        <div className="">
                            <p>Quantity: {(500).toLocaleString()}</p>
                        </div>
                        <div className="">
                            <p>₦{(5000).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
                <div className="h-max w-full pt-10 mt-10 flex justify-end items-center gap-3 border-t border-grey">
                    <button type="button" className="text-background bg-primary px-5 py-2 rounded">Update Quantity</button>
                    <button type="button" className="text-primary">Delete</button>
                </div>
            </div>
            <div className="bg-accent mb-10 rounded px-10 py-10">
                <h2 className="text-3xl font-semibold text-header mb-10">Description</h2>
                <p className="text-base text-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eaque laudantium facilis cum, veritatis vel eos nam nobis iusto, ad quo natus voluptatem, nemo repellat architecto sint magnam. Mollitia, hic.</p>
            </div>
        </section>
        </>
     );
}
 
export default ViewProduct;