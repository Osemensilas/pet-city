'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigations = () => {

    const pathName = usePathname();

    const dashboardClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard');
    }

    const productsClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard/products');
    }

    const ordersClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard/orders');
    }

    const buyersClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard/buyers');
    }

    const shipmentsClicked = () => {
        window.history.pushState({}, '', '/admin/dashboard/shipments');
    }

    return ( 
        <>
        <div className="h-max max-h-screen min-h-screen w-[20%] bg-header">
                <div className="h-20 w-full flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-header">Pet<span className="text-primary">City</span></h2>
                </div>
                <div className="h-max w-full flex flex-col items-between">
                    <div className="h-max w-full flex flex-col gap-3">
                        <button type="button" title="nav button" onClick={dashboardClicked} className={`w-full py-3 text-base px-4 border-t border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fa fa-home"></i>
                        Home</button>
                        <button type="button" title="nav button" onClick={productsClicked} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard/products" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fas fa-box-open"></i>
                        Products</button>
                        <button type="button" title="nav button" onClick={ordersClicked} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard/orders" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fa fa-clipboard"></i>
                        Orders</button>
                        <button type="button" title="nav button" onClick={buyersClicked} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard/buyers" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fa fa-shopping-bag"></i>
                        Buyers</button>
                        <button type="button" title="nav button" onClick={shipmentsClicked} className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard/shipments" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fas fa-truck-fast"></i>
                        Shipments</button>
                        <button type="button" title="nav button" className={`w-full py-3 text-base px-4 border-b border-grey flex items-center gap-3
                            ${pathName === "/admin/dashboard/customer-care" ? "text-primary" : "text-grey"}
                            `}>
                        <i className="fas fa-headset"></i>
                        Customer Care</button>
                    </div>
                    <div className="h-max w-full px-3 mt-40">
                        <button type="button" className="h-max w-full bg-primary text-background px-2 py-2 rounded text-base">Logout</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Navigations;