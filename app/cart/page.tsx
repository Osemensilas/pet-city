'use client';

import axios from "axios";
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    
    const navigate = useRouter();

    const [shoppingCart, setShoppingCart] = useState([]);
    const [updateCart, setUpdateCart] = useState(false);
    const [itemId, setItemId] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [updateCartTotal, setUpdateCartTotal] = useState(false);
    const [gateway, setGateWay] = useState('flutterwave');

    async function totalData(){
        try{
            let url = "https://backend.iruhost.com/api/cart-total-price";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true,
            })

            console.log(response.data);

            if (response.data.status === "success"){

                setTotalAmount(response.data.main_total);
                setVat(response.data.vat);

                if (response.data.totalDomainPrice < 1){
                    setDisplayDomain(false);
                }else{
                    setDisplayDomain(true);
                    setTotalDomainAmount(response.data.totalDomainPrice)
                }

                if (response.data.hosting_present === false){
                    setDisplayHosting(false);
                }else{
                    setDisplayHosting(true);
                    setTotalHostingAmount(response.data.totalHostingPrice)
                }

                if (response.data.totalEmailPrice < 1){
                    setDisplayEmail(false);
                }else{
                    setDisplayEmail(true);
                    setTotalEmailAmount(response.data.totalEmailPrice)
                }

                if (response.data.totalSslPrice < 1){
                    setDisplaySSL(false);
                }else{
                    setDisplaySSL(true);
                    setTotalSslAmount(response.data.totalSslPrice)
                }

                if (response.data.totalWebAppPrice < 1){
                    setDisplayWebApp(false);
                }else{
                    setDisplayWebApp(true);
                    setTotalWebAppAmount(response.data.totalWebAppPrice)
                }
            }
        }catch(err){
            console.log("Error retrieving total price data: ", err);
        }
    }

    useEffect(() => {
        totalData();

        if (updateCartTotal){
            totalData();
        }
    }, [updateCartTotal])
    

    async function cartItems(){
        
        
    }

    useEffect(() => {
        cartItems();

        if (updateCart){
            cartItems();
        }
    },[updateCart]);

    const trashClicked = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const itemId = (e.currentTarget as HTMLButtonElement).value;
    }

    const continueShopping = () => {
        navigate.push('/');
    }

    const emptyCart = async () => {
        
        
    }

    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = "https://checkout.flutterwave.com/v3.js";
        script.async = true;

        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },[])

    const checkoutClicked = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

    }

    return ( 
        <>
        <section id="cart" className="min-h-[calc(100vh-100px)] w-screen py-20 px-3 sm:px-20 bg-accent">
            <h2 className="text-text mb-10 text-xl sm:text-4xl font-bold">Review & Checkout</h2>
            <form action="https://checkout.flutterwave.com/v3/hosted/pay" method="POST" className="w-full h-max flex flex-col sm:flex-row mb-[50px]">
                <input name="itemId" value={itemId} onChange={(e) => setItemId(e.target.value)} hidden/>
                <div className="sm:w-[70%] w-full h-max mb-10 sm:mb-0">
                    <div className="cart-card w-full sm:w-[95%] cards-shadow rounded p-2">
                        <table className="h-max w-full">
                            <thead className="border-b border-grey h-max w-full">
                                <tr className="">
                                    <th className="py-3 px-4 w-[60%] text-left text-grey">Products/Option</th>
                                    <th className="py-3 px-4 w-[25%] text-left text-grey">Price/Cycle</th>
                                    <th className="py-3 px-4 w-[25%] text-right"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        shoppingCart.length > 0 ? (
                                        shoppingCart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="py-2 px-4 border-b">
                                                    <ul>
                                                        <li className="text-sm font-bold">Pet Feed</li>
                                                        <li className="text-sm text-background">Hills</li>
                                                        <li className="text-sm text-background">Science Diet</li>
                                                    </ul>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <ul>
                                                        <li className="text-sm">
                                                            ₦{Number(50000).toLocaleString()}
                                                        </li>
                                                    </ul>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    <button type="button" value={1} title="trash" onClick={trashClicked}> <i className="fa fa-trash opacity-50 hover:opacity-100 transition-all duration-300"></i> </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="text-center text-grey py-4">
                                                Cart is empty
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="w-full h-max pt-5 flex items-center justify-between text-sm">
                            <button type="button" onClick={continueShopping} className="px-3 cursor-pointer sm:px-10 py-3 border bg-transparent border-grey rounded">Continue Shopping</button>
                            <button type="button" onClick={emptyCart} className="px-3 cursor-pointer sm:px-10 py-3 border bg-transparent border-grey rounded"><span><i className="fa fa-trash"></i></span> Empty Cart</button>
                        </div>
                    </div>
                </div>
                <div className="sm:w-[30%] w-full h-max">
                    <div className="h-max w-full bg-header rounded text-accent p-5">
                        <h2 className="pb-4 font-semibold text-xl sm:text-2xl border-b border-grey mb-4">CART SUMMARY</h2>
                        <div className={`h-max w-full mb-2 pb-1 border-b border-grey flex items-center justify-between
                            ${displayDomain ? '' : 'hidden'}
                            `}>
                            <p className="text-accent text-sm">Domain Total:</p>
                            <div className="text-accent text-sm">"₦"<span className="">{Number(3000).toLocaleString()}</span></div>
                        </div>
                        <div className="h-max w-full mb-4 border-b border-grey flex items-center justify-between">
                            <p className="text-accent font-semibold text-xl">Subtotal:</p>
                            <div className="text-accent font-semibold text-xl">₦<span className="">{Number(10000).toLocaleString()}</span></div>
                        </div>
                        <div className="w-full h-max">
                            <button onClick={checkoutClicked} type="submit" name="checkout" className="checkout-btn w-full py-3 font-semibold text-center text-accent bg-primary rounded text-base" value="checkout">Checkout</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        </>
     );
}
 
export default Page;