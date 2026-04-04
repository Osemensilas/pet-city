'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PageHero = () => {
  
  const router = useRouter();
  const pathName = router.pathname;
  
  const [heroText, setHeroText] = useState<string>("");
  
  useEffect(() => {
    if (!pathName) return;
    
    if (pathName === "/contact-us"){
      setHeroText("Contact Us");
    }else if (pathName === "/pharmacy"){
      setHeroText("Pharmacy");
    }else if (pathName === "/shop-by-pet"){
      setHeroText("Shop by Pet");
    }else if (pathName === "/shop-by-brand"){
      setHeroText("Shop by Brand");
    }else if(pathName ==="about-us") {
      setHeroText("About Us");
    }else{
      setHeroText("");
    }
  },[])
  
  return(
    <>
    <section className="h-[150px] bg-header sm:h-[40vh] w-full flex justify-center items-center">
      <h1 className="text-3xl font-bold text-background">{heroText}</h1>
    </section>
    </>
  );
}

export default PageHero;