'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const BestSeller = () => {

    type Product = {
        id: number;
        name: string;
        price: number;
        stock: string;
        image: string;
    };

    const [products, setProducts] = useState<Product[]>([]);

    const bestSellers = [
        {
            id: 1,
            name: "Hills Science Diet",
            price: 5000,
            stock: "In stock",
            image: "/best1.jpg"
        },
        {
            id: 2,
            name: "Hills Science Diet",
            price: 7500,
            stock: "In stock",
            image: "/best2.jpg"
        },
        {
            id: 3,
            name: "Hills Science Diet",
            price: 5000,
            stock: "In stock",
            image: "/best1.jpg"
        },
        {
            id: 4,
            name: "Hills Science Diet",
            price: 7500,
            stock: "In stock",
            image: "/best2.jpg"
        },
        {
            id: 5,
            name: "Hills Science Diet",
            price: 5000,
            stock: "In stock",
            image: "/best1.jpg"
        },
        {
            id: 6,
            name: "Hills Science Diet",
            price: 7500,
            stock: "In stock",
            image: "/best2.jpg"
        },
        {
            id: 7,
            name: "Hills Science Diet",
            price: 5000,
            stock: "In stock",
            image: "/best1.jpg"
        },
        {
            id: 8,
            name: "Hills Science Diet",
            price: 7500,
            stock: "In stock",
            image: "/best2.jpg"
        }
    ];

    useEffect(() => {

        async function fetchProducts(){
            setProducts(bestSellers);
        }

        fetchProducts();
    },[]);

    const cardRef = useRef(null);

    const rightBtn = (e) => {

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
        <section className="h-max w-screen px-10 py-10">
            <div className="h-max w-full flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-header mb-5">Best Sellers</h2>
                <Link href="/all-best-sellers" className="text-primary text-base font-medium hover:underline">View All</Link>
            </div>
            <div className="h-max w-full relative">
                <div className="h-[1px] w-full flex items-center justify-between absolute top-1/2 left-0">
                    <button title="next" onClick={leftBtn} type="button" className="">
                        <i className="fa-solid fa-chevron-left text-2xl"></i>
                    </button>
                    <button title="next" onClick={rightBtn} type="button" className="">
                        <i className="fa-solid fa-chevron-right text-2xl"></i>
                    </button>
                </div>
                <div className="h-max w-full overflow-x-scroll">
                    <div ref={cardRef} className="w-max h-max flex items-center gap-5">
                        {
                            products.map((product, index) => (
                                <div className="h-max w-max bg-accent rounded p-3">
                                    <div className="relative h-[150px] w-[180px]">
                                        <Image src={"/best1.jpg"} alt="best seller 1" fill />
                                    </div>
                                    <div className="w-[180px] h-[100px] mt-2 pb-2">
                                        <div className="h-max w-full flex items-center justify-between">
                                            <h3 className="text-base font-semibold">Hills</h3>
                                            <p>In stock</p>
                                        </div>
                                        <h3 className="text-base font-semibold">Science Diet</h3>
                                        <div className="w-full h-max pt-2 flex items-center justify-between">
                                            <span className="text-text text-base font-bold">₦{(5000).toLocaleString()}</span>
                                            <button type="button" className="border-primary border text-primary px-3 py-1 rounded hover:bg-primary hover:text-background transition-colors duration-300 ml-5 text-sm"><i className="fa fa-arrow-right"></i> <span> Add</span></button>
                                        </div>
                                    </div>
                                </div>
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