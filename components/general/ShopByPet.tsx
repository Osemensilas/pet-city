'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ShopByPet = () => {

    const pathName = usePathname();

    return ( 
        <>
        <section className="w-full h-max px-4 sm:px-10 py-10">
            <h2 className={`text-2xl font-bold text-header mb-5
                ${pathName === "/" ? "" : "hidden"}
                `}>Shop by Pet</h2>
            <div className="h-max py-10 w-full flex flex-col sm:flex-row items-center justify-evenly mt-10 gap-4 sm:gap-0">
                <Link href="/store?pet=dogs" className="h-max w-max flex">
                    <div className="relative h-[200px] w-[300px] rounded">
                        <Image src="/backdog.jpg" alt="shop by dog" className="rounded" fill />
                    </div>
                </Link>
                <Link href="/store?pet=cats" className="h-max w-max flex">
                    <div className="relative h-[200px] w-[300px] rounded">
                        <Image src="/backcat.jpg" alt="shop by cat" className="rounded" fill />
                    </div>
                </Link>
            </div>
        </section>
        </>
     );
}
 
export default ShopByPet;