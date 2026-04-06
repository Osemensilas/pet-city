'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {

    const router = useRouter();
    const currentPath = usePathname();

    return ( 
        <>
        <footer className={`h-max w-screen px-10 py-10
            ${currentPath === "/login" ? "hidden" : ""}
            ${currentPath === "/register" ? "hidden" : ""}
            ${currentPath === "/forget-password" ? "hidden" : ""}
            `}>
            <div className="h-max w-full flex sm:flex-row flex-col items-start justify-between border-b bordergrey pb-3 mb-3">
                <div className="h-max w-full sm:w-max flex flex-col items-center gap-3">
                    <h2 className="text-3xl font-bold text-header">Pet<span className="text-primary">City</span></h2>
                    <div className="h-max w-max">
                        <ul className="hmax w-max flex items-center gap-4">
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="facebook icon">
                                    <i className="fa-brands fa-facebook text-2xl"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="instagram icon">
                                    <i className="fa-brands fa-instagram text-2xl"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="twitter icon">
                                    <i className="fa-brands fa-twitter text-2xl"></i>
                                </a>
                            </li>
                            <li className="h-max w-max">
                                <a href="#" target="_blank" className="" title="linkedin icon">
                                    <i className="fa-brands fa-linkedin text-2xl"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="h-max w-full sm:w-max flex sm:flex-row flex-col gap-20">
                    <div className="h-max w-max">
                        <h3 className="text-xl font-bold text-header mb-3">Main Links</h3>
                        <ul className="h-max w-max flex flex-col items-start gap-2">
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/shop-by-pet"}>Shop By Pet</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/shop-by-brand"}>Shop By Brand</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/pharmacy"}>Pharmacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-max w-max">
                        <h3 className="text-xl font-bold text-header mb-3">Shipping & Delivery</h3>
                        <ul className="h-max w-max flex flex-col items-start gap-2">
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/shipping-and-delivery"}>Shipping & Delivery</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/return-policy"}>Return Policy</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/cancellation-policy"}>Cancellation Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-max w-max">
                        <h3 className="text-xl font-bold text-header mb-3">Cooperate</h3>
                        <ul className="h-max w-max flex flex-col items-start gap-2">
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/about-us"}>About Us</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/contact-us"}>Contact Us</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/faqs"}>FAQs</Link>
                            </li>
                            <li className="text-header text-base hover:text-primary transition-colors duration-300">
                                <Link href={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-max w-full">
                <p className="text-center text-header text-sm">
                    &copy; {new Date().getFullYear()} Pet City. All rights reserved.
                </p>
                <div className="w-full h-max flex items-center justify-center mt-5 text-sm text-header gap-3">
                    <Link href={"/terms-of-use"}>Terms of Use</Link>
                    <Link href={"/privacy-policy"}>Privacy Policy</Link>
                    <Link href={"/legal"}>Legal</Link>
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;