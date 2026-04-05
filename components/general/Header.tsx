'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
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
    
    const navClicked = () => {
        setShowNav(false);
    }
    
    useEffect(() => {
        function getUser() {
            const user = localStorage.getItem("users");
                
            if (user){
                setActiveUser(true);
            }else{
                setActiveUser(false);
            }
        }
        getUser();
    },[])

    return ( 
        <>
        <header className={`h-[100px] w-screen px-4 sm:px-10
            ${currentPath === "/login" ? "hidden" : ""}
            ${currentPath === "/register" ? "hidden" : ""}
            ${currentPath === "/forget-password" ? "hidden" : ""}
            `}>
            <div className="h-full sm:h-[50%] w-full flex items-center justify-between">
                <div className="h-max w-max cursor-pointer" onClick={() => router.push("/")}>
                    <h2 className="text-3xl font-bold text-header">Pet<span className="text-primary">City</span></h2>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="h-max w-max relative hidden sm:block">
                    <input type="text" placeholder="Search for products, brands and more" className="h-10 w-[350px] border border-grey rounded outline-none px-10 text-sm bg-transparent" />
                    <button type="submit" className="h-max w-max absolute top-[10px] left-[15px]" title="search button">
                        <i className="fa fa-search text-grey"></i>
                    </button>
                </form>
                <div className="h-max w-max sm:block hidden">
                    <div className={`${activeUser ? "hidden" : "block text-base text-primary py-1 px-4 border border-primary rounded cursor-pointer"}`}>
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
            ${showNav ? "flex flex-col items-between justify-start fixed top-0 left-0 z-20 py-10 px-4 sm:px-0 sm:py-0 bg-background" : "hidden sm:flex"}
            `}>
                <ul className="h-max sm:h-max w-full sm:w-max flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                    ${currentPath === "/" ? "text-primary" : ""}
                        `}>
                        <Link href="/" onClick={navClicked} className="">Home</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/shop-by-pet" ? "text-primary" : ""}
                        `}>
                        <Link href="/shop-by-pet" onClick={navClicked} className="">Shop by Pet</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/shop-by-pet" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/shop-by-brand" ? "text-primary" : ""}
                        `}>
                        <Link href="/shop-by-brand" onClick={navClicked} className="">Shop by Brand</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/shop-by-brand" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/pharmacy" ? "text-primary" : ""}
                        `}>
                        <Link href="/pharmacy" onClick={navClicked} className="">Pharmacy</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/pharmacy" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                    <li className={`text-header text-base font-medium hover:text-primary transition-colors duration-300 group
                        ${currentPath === "/contact-us" ? "text-primary" : ""}
                        `}>
                        <Link href="/contact-us" onClick={navClicked} className="">Contact Us</Link>
                        <div className={`h-[2px] w-full mt-[1px] group-hover:bg-primary transition-colors duration-300
                            ${currentPath === "/contact-us" ? "bg-primary" : ""}
                            `}></div>
                    </li>
                </ul>
                <Link href="/cart" onClick={navClicked} className="">
                    <i className="fa fa-shopping-cart text-xl"></i>
                    <span className="ml-2 bg-primary text-background px-2 py-1 rounded">4 items</span>
                </Link>
                <div className={`h-max w-full
                ${showNav ? "" : "hidden"}
                `}>
                    <button className={`h-max w-full py-2 px-2 text-center bg-primary text background rounded
                    ${activeUser ? "hidden" : ""}
                    `} onClick={() => router.push("/login")}>Login</button>
                    <div className={`w-full h-max
                    ${activeUser ? "" : "hidden"}
                    `}>
                        <button onClick={() => router.push("/profile")} className="h-max w-max" type="button">
                            <i className="fa fa-user"></i>
                            <span className="ml-3">Osemen Silas</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;