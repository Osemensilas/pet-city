'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import BestSeller from "@/components/general/BestSellers";
import Link from "next/link";
import Brands from "@/components/general/Brands";
import Faqs from '@/components/general/Faqs';
import { useRouter } from "next/navigation";
import Team from "@/components/general/Team";
import NewLetter from "@/components/general/NewsLetter";
import ShopByPet from "@/components/general/ShopByPet";
import HomePageHero from "@/components/general/HomePageHero";
import HealthMatters from "@/components/general/HealthMatters";

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