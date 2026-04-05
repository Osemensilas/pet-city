'use client';

import Image from "next/image";
import { useState } from 'react';

const Page = () => {
    
    type User = {
        fullname: string;
        email: string;
        password: string;
    }
    
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    
    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setFormData({...formData, [name]: value});
    }
    
    const btnClicked = () => {
        if (!formData.email || !formData.password){
            setError("All field required");
        }
    }
    
    return ( 
        <>
        <section className="login h-sreen w-screen flex">
            <div className="hidden sm:block w-1/2 h-full relative">
                <Image src="/login-image.jpg" fill className="" alt="login page image" />
            </div>
            <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
                <form className="w-full sm:w-[450px] bg-accent rounded px-10" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-text text-3xl font-bold text-center py-5">Client Login</h2>
                    <div className={`h-max w-full bg-danger px-2 py-2 ${error ? "" : "hidden"}
                    `}>{error}</div>
                    <div className="h-max w-full border-t border-grey pt-5">
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="email" className="text-grey mb-2 text-base">Email:</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChanged} id="email" className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="password" className="text-grey mb-2 text-base">Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChanged} id="password" className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                    </div>
                    <div className="h-max w-full mt-5">
                        Don't have an account? <a href="/register" className="text-primary hover:underline">Register</a>
                    </div>
                    <div className="h-max w-full py-5 mt-5 border-t border-grey">
                        <button className="w-full rounded bg-primary py-2 text-center text-background" type="submit" onClick={btnClicked} >Login</button>
                    </div>
                    <div className="h-max w-full my-3">
                        <a href="/forget-password" className="text-primary hover:underline">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Page;