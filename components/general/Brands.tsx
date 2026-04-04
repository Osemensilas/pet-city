'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Brand, brands } from "@/data/Brands";

const Brands = () => {
    
    const allBrands: Brand[] = [...brands];
    
    const pathName = usePathname();

    const displayBrands = pathName === "/" ? allBrands.slice(0, 4) : allBrands;
    
    return ( 
        <>
        <section className="h-max w-screen px-4 sm:px-10 py-10">
            <div className="h-max w-full flex items-center justify-between mb-5">
                <h2 className={`text-2xl font-bold text-header mb-5
                ${pathName === "/" ? "" : "hidden"}
                `}>Shop by Brand</h2>
            </div>
            <div className="h-max w-full brands-container gap-y-10 gap-x-4 justify-between">
                {
                    displayBrands.map((brand, index) => (
                <Link href={`/store?brand=${brand.name.toLowerCase()}`} key={index} className="h-max w-max flex">
                    <div className="relative h-[100px] sm:h-[150px] w-[120px] sm:w-[180px]">
                        <Image src={`/images/${brand.image}`} alt={brand.name} fill />
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