'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {

    const router = useRouter();
    const currentPath = usePathname();

    const [activeUser, setActiveUser] = useState(false);
    const [showNav, setShowNav] = useState(false);
    
    const hamClicked = () => {
        if (showNav){
            setShowNav(false);
        }else{
            setShowNav(true);
        }
    }

    return ( 
        <>
        <header className={`h-[100px] w-screen px-4 sm:px-10
            ${currentPath === "/login" ? "hidden" : ""}
            `}>
            <div className="h-full sm:h-[50%] w-full flex items-center justify-between">
                <div className="h-max w-max" onClick={() => router.push("/")}>
                    <h2 className="text-3xl font-bold text-header">Pet<span className="text-primary">City</span></h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-max relative hidden sm:block">
                    <input type="text" placeholder="Search for products, brands and more" className="h-10 w-[350px] border border-grey rounded outline-none px-10 text-sm bg-transparent" />
                    <button type="submit" className="h-max w-max absolute top-[10px] left-[15px]" title="search button">
                        <i className="fa fa-search text-grey"></i>
                    </button>
                </form>
                <div className="h-max w-max hidden sm:block">
                    <div className={`${activeUser ? "hidden" : "text-base text-primary py-1 px-4 border border-primary rounded cursor-pointer"}`}>
                        <Link href="/login">Login</Link>
                    </div>
                    <Link href="/profile" className={`${activeUser ? "" : "hidden"}`}>
                        <i className="fa fa-user"></i>
                        <span className="ml-2 text-header">Welcome</span>
                    </Link>
                </div>
                <div onClick={hamClicked} className={`hamburger sm:hidden block
                ${showNav ? "z-50" : ""}
                `}>
                    <div className={`ham-icon ${showNav ? "active" : ""}
                    `}></div>
                </div>
            </div>
            <div className={`h-[100vh] sm:h-[50%] w-full flex-col sm:flex-row items-start sm:items-center justify-between
            ${showNav ? "flex absolute top-0 left-0 z-20" : "hidden sm:flex"}
            `}>
                <ul className="h-full sm:h-max w-full sm:w-max flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-accent sm:bg-transparent px-5 py-10 sm:px-0 sm:py-0">
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                    ${currentPath === "/" ? "text-primary" : ""}
                        `}>
                        <Link href="/" className="">Home</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/shop-by-pet" ? "text-primary" : ""}
                        `}>
                        <Link href="/shop-by-pet" className="">Shop by Pet</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/shop-by-pet" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/shop-by-brand" ? "text-primary" : ""}
                        `}>
                        <Link href="/shop-by-brand" className="">Shop by Brand</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/shop-by-brand" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/pharmarcy" ? "text-primary" : ""}
                        `}>
                        <Link href="/pharmacy" className="">Pharmarcy</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/pharmacy" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/contact-us" ? "text-primary" : ""}
                        `}>
                        <Link href="/contact-us" className="">Contact Us</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/contact-us" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                </ul>
                <Link href="/cart" className="">
                    <i className="fa fa-shopping-cart text-xl"></i>
                    <span className="ml-2 bg-primary text-background px-2 py-1 rounded">4 items</span>
                </Link>
            </div>
        </header>
        </>
     );
}
 
export default Header;