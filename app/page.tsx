'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import BestSeller from "@/components/general/BestSellers";
import Link from "next/link";
import Brands from "@/components/general/Brands";

const HomePage = () => {

  const [activeImg, setActiveImg] = useState("/heroc1.jpg");
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {

    let countDown = 1;

    setInterval(() => {
      countDown++;

      if (countDown > 5){
        countDown = 1;
      }

      if (countDown === 1){
        setActiveImg("/heroc1.jpg");
        setActiveIndex(1);
      }
      if (countDown === 2){
        setActiveImg("/heroc2.jpg");
        setActiveIndex(2);
      }
      if (countDown === 3){
        setActiveImg("/heroc3.jpg");
        setActiveIndex(3);
      }
      if (countDown === 4){
        setActiveImg("/heroc4.jpg");
        setActiveIndex(4);
      }
      if (countDown === 5){
        setActiveImg("/heroc5.jpg");
        setActiveIndex(5); 
      }
    }, 5000)
  },[]);

  const iconClicked = (x: number) => {
    if (x === 1){
      setActiveImg("/heroc1.jpg");
      setActiveIndex(1);
    }
    if (x === 2){
      setActiveImg("/heroc2.jpg");
      setActiveIndex(2);
    }
    if (x === 3){
      setActiveImg("/heroc3.jpg");
      setActiveIndex(3);
    }
    if (x === 4){
      setActiveImg("/heroc4.jpg");
      setActiveIndex(4);
    }
    if (x === 5){
      setActiveImg("/heroc5.jpg");
      setActiveIndex(5); 
    }
  }
  return ( 
    <>
    <section className="h-screen w-screen px-20 relative flex items-center justify-start pl-20">
      <div className="w-[60%] h-max relative z-10">
        <h1 className="text-4xl font-bold text-accent mb-5">Satisfy Your Pets' Need</h1>
        <p className="text-accent text-lg mb-5">Your one-stop shop for all your pet needs. From food to toys, we have everything to keep your furry friend happy and healthy.</p>
        <button type="button" className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300">Shop Now</button>
      </div>
      <div className="w-full h-full absolute top-0 left-0 custom-dark">
        <div className="relative h-full w-full">
          <Image src={activeImg} className="" alt="hero image 1" fill />
        </div>
      </div>
      <div className="h-max w-max absolute top-[85%] left-[50%] translate-x-[-50%] translate-y-[-15%] z-20 flex items-center gap-5">
        <div onClick={() => iconClicked(1)} className={`h-[15px] w-[15px] rounded-full border border-primary cursor-pointer
          ${activeIndex === 1 ? "bg-primary" : ""}
          `}></div>
        <div onClick={() => iconClicked(2)} className={`h-[15px] w-[15px] rounded-full border border-primary cursor-pointer
          ${activeIndex === 2 ? "bg-primary" : ""}
          `}></div>
        <div onClick={() => iconClicked(3)} className={`h-[15px] w-[15px] rounded-full border border-primary cursor-pointer
          ${activeIndex === 3 ? "bg-primary" : ""}
          `}></div>
        <div onClick={() => iconClicked(4)} className={`h-[15px] w-[15px] rounded-full border border-primary cursor-pointer
          ${activeIndex === 4 ? "bg-primary" : ""}
          `}></div>
        <div onClick={() => iconClicked(5)} className={`h-[15px] w-[15px] rounded-full border border-primary cursor-pointer
          ${activeIndex === 5 ? "bg-primary" : ""}
          `} ></div>
      </div>
    </section>
    <BestSeller />
    <section className="w-full h-max px-10 py-10">
      <h2 className="text-2xl font-bold text-header mb-5">Shop by Pet</h2>
      <div className="h-[70vh] w-full flex items-center justify-evenly mt-10">
          <Link href="/shop-by-pet?pet=dogs" className="h-max w-max flex">
            <div className="relative h-[200px] w-[300px] rounded">
              <Image src="/backdog.jpg" alt="shop by dog" className="rounded" fill />
            </div>
          </Link>
          <Link href="/shop-by-pet?pet=cats" className="h-max w-max flex">
            <div className="relative h-[200px] w-[300px] rounded">
              <Image src="/backcat.jpg" alt="shop by cat" className="rounded" fill />
            </div>
          </Link>
      </div>
    </section>
    <section className="h-[70vh] w-full px-10 py-10">
      <div className="h-full w-full flex rounded bg-accent">
        <div className="relative w-1/2 h-full">
          <Image src={"/pet-doc.jpg"} fill alt="pharmacy image" className="rounded-tl rounded-bl" />
        </div>
        <div className="w-1/2 h-full flex justify-center flex-col gap-10 px-10">
            <h2 className="text-3xl font-semibold">Health Matters</h2>
            <p className="">Take care of your pet health with our medication and keep them healthy to ensure a long, happy, and active life.</p>
            <div className="">
              <button type="button" className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300" title="pharmacy button">Shop Now</button>
            </div>
        </div>
      </div>
    </section>
    <Brands />
    </>
   );
}
 
export default HomePage;