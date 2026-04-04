'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePageHero = () => {

    const router = useRouter();

    const [activeImg, setActiveImg] = useState("/images/hero1.jpg");
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {

        let countDown = 1;

        setInterval(() => {
        countDown++;

        if (countDown > 5){
            countDown = 1;
        }

        if (countDown === 1){
            setActiveImg("/images/hero1.jpg");
            setActiveIndex(1);
        }
        if (countDown === 2){
            setActiveImg("/images/hero3.jpg");
            setActiveIndex(2);
        }
        if (countDown === 3){
            setActiveImg("/images/hero10.jpg");
            setActiveIndex(3);
        }
        if (countDown === 4){
            setActiveImg("/images/hero4.jpg");
            setActiveIndex(4);
        }
        if (countDown === 5){
            setActiveImg("/images/hero6.jpg");
            setActiveIndex(5); 
        }
        }, 5000)
    },[]);

    const iconClicked = (x: number) => {
        if (x === 1){
        setActiveImg("/images/hero1.jpg");
        setActiveIndex(1);
        }
        if (x === 2){
        setActiveImg("/images/hero3.jpg");
        setActiveIndex(2);
        }
        if (x === 3){
        setActiveImg("/images/hero10.jpg");
        setActiveIndex(3);
        }
        if (x === 4){
        setActiveImg("/images/hero4.jpg");
        setActiveIndex(4);
        }
        if (x === 5){
        setActiveImg("/images/hero6.jpg");
        setActiveIndex(5); 
        }
    }
    
    const gotoStore = () => {
        router.push("/store");
    }

    return ( 
        <>
        <section className="sm:h-screen h-[calc(100vh-100px)] w-screen sm:px-20 px-4 relative flex items-center justify-start pl-4 sm:pl-20">
            <div className="w-full sm:w-[60%] h-max relative z-10">
                <h1 className="text-4xl font-bold text-accent mb-5">Satisfy Your Pets' Need</h1>
                <p className="text-accent text-lg mb-10">Your one-stop shop for all your pet needs. From food to toys, we have everything to keep your furry friend happy and healthy.</p>
                <button onClick={gotoStore} type="button" className="bg-primary text-background px-5 py-2 rounded hover:bg-primary-dark transition-colors duration-300">Shop Now</button>
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
        </>
     );
}
 
export default HomePageHero;