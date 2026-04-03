'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../ui/ProductCard";
import { products } from "@/data/Products";

const BestSeller = () => {
    
    const router = useRouter();

    const bestSellers = [... products].sort((a, b) => (b.sold - a.sold)).slice(0, 8);

    const cardRef = useRef<HTMLDivElement | null>(null);

    const rightBtn = () => {
        
       if (cardRef.current){
            cardRef.current.scrollLeft += 250;
        }
    }

    const leftBtn = () => {

        if (cardRef.current){
            cardRef.current.scrollLeft -= 250;
        }
    }

    return ( 
        <>
        <section className="h-max w-screen px-4 sm:px-10 py-10">
            <div className="h-max w-full flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-header mb-5">Best Sellers</h2>
                <Link href="/all-best-sellers" className="text-primary text-base font-medium hover:underline">View All</Link>
            </div>
            <div className="h-max w-full relative">
                <div className="h-[1px] w-full items-center justify-between absolute top-1/2 left-0 sm:flex hidden">
                    <button title="next" onClick={leftBtn} type="button" className="cursor-pointer h-max w-max p-2">
                        <i className="fa-solid fa-chevron-left text-2xl"></i>
                    </button>
                    <button title="next" onClick={rightBtn} type="button" className="cursor-pointer h-max w-max p-2">
                        <i className="fa-solid fa-chevron-right text-2xl"></i>
                    </button>
                </div>
                <div className="h-max w-full overflow-x-scroll">
                    <div ref={cardRef} className="w-max h-max flex items-center gap-5">
                        {
                            bestSellers.map((product, index) => (
                        <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default BestSeller;