'use client';

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/general/PageHero";
import FAQs from "@/components/general/Faqs";

const Page = () => {
    return ( 
        <>
        <PageHero />
        <section className="h-max py-10 sm:py-20 w-screen px-4 sm:px-10 ">
          <div className="h-full w-full flex justify-around items-center">
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
        <FAQs />
        </>
     );
}
 
export default Page;