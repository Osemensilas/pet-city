'use client';

import Navigations from "@/components/admin/components/Navigations";
import Home from "@/components/admin/pages/Home";
import Products from "@/components/admin/pages/Products";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Header from "@/components/admin/components/Header";
import ViewProduct from "@/components/admin/pages/ViewProduct";
import Orders from "@/components/admin/pages/Orders";
import ViewOrders from "@/components/admin/pages/ViewOrders";
import Buyers from "@/components/admin/pages/Buyers";
import Shipment from "@/components/admin/pages/Shipment";

const Page = () => {

    const pathName = usePathname();

    return ( 
        <>
        <Suspense>
        <section className="h-max w-screen flex items-start">
            <Navigations />
            <div className="h-max w-[80%]">
                <div className="w-full h-screen overflow-x-hidden overflow-y-auto">
                    <Header />
                    <div className="h-max max-h-screen w-full">
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard" ? "" : "hidden"}
                            `}>
                            <Home />
                        </div>
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard/products" ? "" : "hidden"}
                            `}>
                            <Products />
                        </div>
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard/products/view-product" ? "" : "hidden"}
                            `}>
                            <ViewProduct />
                        </div>
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard/orders" ? "" : "hidden"}
                            `}>
                            <Orders />
                        </div>
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard/orders/view-orders" ? "" : "hidden"}
                            `}>
                            <ViewOrders />
                        </div>
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard/buyers" ? "" : "hidden"}
                            `}>
                            <Buyers />
                        </div>
                        <div className={`h-max w-full
                            ${pathName === "/admin/dashboard/shipments" ? "" : "hidden"}
                            `}>
                            <Shipment />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Suspense>
        </>
     );
}
 
export default Page;