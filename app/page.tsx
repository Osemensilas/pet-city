'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import BestSeller from "@/components/sections/BestSellers";
import Link from "next/link";
import Brands from "@/components/sections/Brands";
import Faqs from '@/components/sections/Faqs';
import { useRouter } from "next/navigation";
import Team from "@/components/sections/Team";
import NewLetter from "@/components/sections/NewsLetter";
import ShopByPet from "@/components/sections/ShopByPet";
import HomePageHero from "@/components/sections/HomePageHero";
import HealthMatters from "@/components/sections/HealthMatters";

const HomePage = () => {

  const router = useRouter();
  
  return ( 
    <>
    <HomePageHero />
    <BestSeller />
    <ShopByPet />
    <HealthMatters />
    <Brands />
    <Team />
    <NewLetter />
    <Faqs />
    </>
   );
}
 
export default HomePage;