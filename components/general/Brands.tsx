import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Brands = () => {
    return ( 
        <>
        <section className="h-max w-screen px-10 py-10">
            <div className="h-max w-full flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-header mb-5">Shop by Brand</h2>
                <Link href="/all-best-sellers" className="text-primary text-base font-medium hover:underline">View All</Link>
            </div>
            <div className="h-max w-full flex flex-wrap items-center gap-3 justify-between">
                <Link href="/shop-by-brand?brand=brand1" className="h-max w-max flex">
                    <div className="relative h-[150px] w-[180px]">
                        <Image src={"/pl1.jpg"} alt="best seller 1" fill />
                    </div>
                </Link>
                <Link href="/shop-by-brand?brand=brand2" className="h-max w-max flex">
                    <div className="relative h-[150px] w-[180px]">
                        <Image src={"/pl2.jpg"} alt="best seller 2" fill />
                    </div>
                </Link>
            </div>
        </section>
        </>
     );
}
 
export default Brands;