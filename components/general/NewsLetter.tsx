import Image from "next/image";

const NewLetter = () => {
    return ( 
        <>
        <section className="h-max w-full px-4 sm:px-10 py-10">
            <div className="h-[400px] sm:h-[450px] w-full flex rounded bg-accent">
                <div className="w-full sm:w-1/2 h-full flex justify-center flex-col gap-10 sm:px-10 px-4">
                    <h2 className="text-3xl font-semibold">Newsletter</h2>
                    <p className="">Want to get discount, special offer to to make your pet happy? Join our newsletter!</p>
                    <form className="h-max w-full">
                        <input className="h-10 w-full sm:w-[75%] border border-grey px-5 outline-none" placeholder="Enter email address" type="text" name="email" id="email" />
                        <div className="h-max w-full mt-5">
                            <button type="button" className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300">Join</button>
                        </div>
                    </form>
                </div>
                <div className="relative w-1/2 h-full hidden sm:block">
                    <Image src={"/newsletter.jpg"} fill alt="newsletter image" className="rounded-tr rounded-br" />
                </div>
            </div>
            </section>
        </>
     );
}
 
export default NewLetter;