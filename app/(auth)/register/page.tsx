'use client';

import Image from "next/image";

const Page = () => {
    return ( 
        <>
        <section className="login h-sreen w-screen flex">
            <div className="hidden sm:block w-1/2 h-full relative">
                <Image src="/login-image.jpg" fill className="" alt="registration page image" />
            </div>
            <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
                <form className="w-full sm:w-[450px] bg-accent rounded px-10" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-text text-3xl font-bold text-center py-5">Register</h2>
                    <div className="h-max w-full border-t border-grey pt-5">
                    <div className="h-max w-full flex flex-col">
                        <label htmlFor="fullname" className="text-grey mb-2 text-base">Full Name:</label>
                        <input type="text" id="fullname" className="h-10 w-full rounded border border-grey outline-none px-5" />
                    </div>   
                    <div className="h-max w-full flex flex-col">
                        <label htmlFor="email" className="text-grey mb-2 text-base">Email:</label>
                            <input type="text" id="email" className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="password" className="text-grey mb-2 text-base">Password:</label>
                            <input type="password" id="password" className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                    </div>
                    <div className="h-max w-full mt-5">
                        Already have an account? <a href="/login" className="text-primary hover:underline">Login</a>
                    </div>
                    <div className="h-max w-full py-5 mt-5 border-t border-grey">
                        <button className="w-full rounded bg-primary py-2 text-center text-background" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Page;