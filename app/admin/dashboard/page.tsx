'use client';

import Home from "@/components/admin/pages/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Dashboard = () => {

    const pathName = usePathname();

    return ( 
        <>
        <section className="h-max w-screen flex items-start">
            <div className="h-max max-h-screen min-h-screen w-[20%] bg-header">
                <div className="h-20 w-full flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-header">Pet<span className="text-primary">City</span></h2>
                </div>
                <div className="h-max w-full flex flex-col gap-3">
                    <Link href={""} className={`w-full py-3 text-base px-4 border-t border-b border-grey flex items-center gap-3
                        ${pathName === "/admin/dashboard" ? "text-primary" : "text-grey"}
                        `}>
                    <i className="fa fa-home"></i>
                    Home</Link>
                    <Link href={""} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                        ${pathName === "/admin/orders" ? "text-primary" : "text-grey"}
                        `}>
                    <i className="fa fa-home"></i>
                    Orders</Link>
                    <Link href={""} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                        ${pathName === "/admin/buyers" ? "text-primary" : "text-grey"}
                        `}>
                    <i className="fa fa-home"></i>
                    Buyers</Link>
                    <Link href={""} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                        ${pathName === "/admin/shipments" ? "text-primary" : "text-grey"}
                        `}>
                    <i className="fa fa-home"></i>
                    Shipments</Link>
                </div>
            </div>
            <div className="h-max max-h-screen w-[80%]">
                <Home />
            </div>
        </section>
        </>
     );
}
 
export default Dashboard;