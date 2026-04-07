'use client';

import Home from "@/components/admin/pages/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {

    const pathName = usePathname();

    const dashboardClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard');
    }

    const productsClicked = () => {
        window.history.pushState({}, '', '/admin/products');
    }

    const ordersClicked = () => {
        window.history.pushState({}, '', '/admin/orders');
    }

    return ( 
        <>
        <section className="h-max w-screen flex items-start">
            <div className="h-max max-h-screen min-h-screen w-[20%] bg-header">
                <div className="h-20 w-full flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-header">Pet<span className="text-primary">City</span></h2>
                </div>
                <div className="h-max w-full flex flex-col items-between">
                    <div className="h-max w-full flex flex-col gap-3">
                        <Link href={""} onClick={dashboardClicked} className={`w-full py-3 text-base px-4 border-t border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fa fa-home"></i>
                        Home</Link>
                        <Link href={""} onClick={productsClicked} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/products" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fa fa-home"></i>
                        Products</Link>
                        <Link href={""} onClick={ordersClicked} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
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
                        <Link href={""} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/customer-care" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fa fa-home"></i>
                        Customer Care</Link>
                    </div>
                    <div className="h-max w-full px-3 mt-40">
                        <button type="button" className="h-max w-full bg-primary text-background px-2 py-2 rounded text-base">Logout</button>
                    </div>
                </div>
            </div>
            <div className="h-max max-h-screen w-[80%]">
                <Home />
            </div>
        </section>
        </>
     );
}
 
export default Page;