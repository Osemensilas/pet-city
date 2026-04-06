'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const HealthMatters = () => {

    const router = useRouter();

    return ( 
        <>
        <section className="h-max w-full px-4 sm:px-10 py-10">
            <div className="h-[400px] sm:h-[450px] w-full flex rounded bg-accent">
                <div className="relative w-1/2 h-full hidden sm:block">
                    <Image src={"/pet-doc.jpg"} fill alt="pharmacy image" className="rounded-tl rounded-bl" />
                </div>
                <div className="w-full sm:w-1/2 h-full flex justify-center flex-col gap-10 sm:px-10 px-4">
                    <h2 className="text-3xl font-semibold">Health Matters</h2>
                    <p className="">Take care of your pet health with our medication and keep them healthy to ensure a long, happy, and active life.</p>
                    <div className="">
                        <button type="button" onClick={() => router.push("/store?category=health")} className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300" title="pharmacy button">Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default HealthMatters;