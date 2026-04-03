'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

const BestSeller = () => {

    type Product = {
        id: number;
        productId: string;
        name: string;
        price: number;
        stock: number;
        image: string;
        age: string;
    };
    
    const router = useRouter();

    const [products, setProducts] = useState<Product[]>([]);

    const bestSellers = [
        {
            id: 1,
            productId: "produwje",
            name: "Nulo",
            price: 5000,
            stock: 5,
            image: "/nulo1.png",
            age: "adult",
        },
        {
            id: 2,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 7500,
            stock: 10,
            image: "/best2.jpg",
            age: "adult",
        },
        {
            id: 3,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 5000,
            stock: 0,
            image: "/best1.jpg",
            age: "adult",
        },
        {
            id: 4,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 7500,
            stock: 23,
            image: "/best2.jpg",
            age: "adult",
        },
        {
            id: 5,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 5000,
            stock: 16,
            image: "/best1.jpg",
            age: "adult",
        },
        {
            id: 6,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 7500,
            stock: 4,
            image: "/best2.jpg",
            age: "adult",
        },
        {
            id: 7,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 5000,
            stock: 0,
            image: "/best1.jpg",
            age: "adult",
        },
        {
            id: 8,
            productId: "produwje",
            name: "Hills Science Diet",
            price: 7500,
            stock: 16,
            image: "/best2.jpg",
            age: "adult",
        }
    ];

    useEffect(() => {

        async function fetchProducts(){
            setProducts(bestSellers);
        }

        fetchProducts();
    },[]);

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
    
    const viewProduct = (x: string) => {
        router.push(`/product?id=${x}`);
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
                            products.map((product, index) => (
                                <div className="h-max w-max bg-accent rounded p-3">
                                    <div className="relative h-[150px] w-[180px]">
                                        <Image src={product.image} alt="best seller 1" fill />
                                    </div>
                                    <div className="w-[180px] h-[100px] mt-2 pb-2">
                                        <div className="h-max w-full flex items-center justify-between">
                                            <h3 className="text-base font-semibold">{product.name}</h3>
                                            <p>{product.stock > 0 ? "In Stock" : "Not available"}</p>
                                        </div>
                                        <h3 className="text-base font-semibold">Science Diet</h3>
                                        <div className="w-full h-max pt-2 flex items-center justify-between">
                                            <span className="text-text text-base font-bold">₦{(product.price).toLocaleString()}</span>
                                            <button onClick={() => viewProduct(product.productId)} type="button" className="border-primary border text-primary px-3 py-1 rounded hover:bg-primary hover:text-background transition-colors duration-300 ml-5 text-sm"><i className="fa fa-arrow-right"></i> <span> Add</span></button>
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