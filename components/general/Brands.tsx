import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Brands = () => {
    
    type brand = {
        id: number,
        name: string,
        image: string 
    }
    
    const [brands, setBrands] = useState<brand[]>([]);
    
    const ourBrands = [
        {
            id: 1,
            name: "Purina",
            image: "brand1.jpg"
        },
        {
            id: 2,
            name: "Purina",
            image: "brand1.jpg"
        },
        {
            id: 3,
            name: "Purina",
            image: "brand1.jpg"
        },
        {
             id: 4,
             name: "Purina",
             image: "brand1.jpg"
         },
        {
             id: 5,
             name: "Purina",
             image: "brand1.jpg"
         },
        {
             id: 6,
             name: "Purina",
             image: "brand1.jpg"
         },
        {
             id: 7,
             name: "Purina",
             image: "brand1.jpg"
         },
        {
             id: 8,
             name: "Purina",
             image: "brand1.jpg"
         },
    ];
    return ( 
        <>
        <section className="h-max w-screen px-10 py-10">
            <div className="h-max w-full flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold text-header mb-5">Shop by Brand</h2>
            </div>
            <div className="h-max w-full brands-container gap-3 justify-between">
                {
                    ourBrands.map((brand, index) => (
                <Link href="/shop-by-brand?brand=brand1" key={index} className="h-max w-max flex">
                    <div className="relative h-[150px] w-[180px]">
                        <Image src={"/pl1.jpg"} alt="best seller 1" fill />
                    </div>
                </Link>
                    ))
                }
            </div>
        </section>
        </>
     );
}
 
export default Brands;