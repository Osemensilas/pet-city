'use client';

import { useState } from "react";
import Image from "next/image";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/navigation";

const Page = () => {

    type User = {
        fullname: string;
        email: string;
        password: string;
    };
    
    const router = useRouter();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
     });

    const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }

    const btnClicked = () => {

        setLoading(true);

        let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullname || !formData.email || !formData.password || !formData.confirmPassword){
            setError("All fields required");
            setLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword){
            setError("Passwords do not match!");
            setLoading(false);
            return;
        }

        if (!emailValid.test(formData.email)){
            setError("Invalid email address!");
            setLoading(false);
            return;
        }

        try {
            const newUser: User = {
                fullname: formData.fullname,
                email: formData.email,
                password: formData.password,
            };

            const existingUsers: User[] = JSON.parse(localStorage.getItem("users") || "[]");

            const userExists = existingUsers.some(user => user.email === newUser.email);
            if (userExists) {
                setError("User already exists");
                setLoading(false);
                javascript:alert(JSON.stringify(localStorage));
                return;
            }

            existingUsers.push(newUser);

            localStorage.setItem("users", JSON.stringify(existingUsers));

            setFormData({
                fullname: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

            setError("");
            setLoading(false);
            
            router.push("/");
        } catch (error) {
            console.log("Error registering user: ", error);
             setError("An error occurred while registering. Please try again.");
        }
    }

    return ( 
        <>
        <section className="login h-sreen w-screen flex">
            <div className="hidden sm:block w-1/2 h-full relative">
                <Image src="/register-image.jpg" fill className="" alt="registration page image" />
            </div>
            <div className="w-full sm:w-1/2 h-full flex justify-center items-center">
                <form className="w-full sm:w-[450px] bg-accent rounded px-10" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-text text-3xl font-bold text-center py-5">Register</h2>
                    <div className={`my-3 w-full h-max py-2 px-2 text-center text-background bg-danger rounded
                        ${error ? "" : "hidden"}
                        `}>{error}</div>
                    <div className="h-max w-full border-t border-grey pt-5">
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="fullname" className="text-grey mb-2 text-base">Full Name:</label>
                            <input type="text" id="fullname" name="fullname" value={formData.fullname} onChange={handleChanged} className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>   
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="email" className="text-grey mb-2 text-base">Email:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleChanged} className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="password" className="text-grey mb-2 text-base">Password:</label>
                            <input type="password" id="password" value={formData.password} name="password" onChange={handleChanged} className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                        <div className="h-max w-full flex flex-col">
                            <label htmlFor="confirm-password" className="text-grey mb-2 text-base">Confirm Password:</label>
                            <input type="password" value={formData.confirmPassword} id="confirm-password" name="confirmPassword"  onChange={handleChanged} className="h-10 w-full rounded border border-grey outline-none px-5" />
                        </div>
                    </div>
                    <div className="h-max w-full mt-5">
                        Already have an account? <a href="/login" className="text-primary hover:underline">Login</a>
                    </div>
                    <div className="h-max w-full py-5 mt-5 border-t border-grey">
                        <button onClick={btnClicked} className="w-full rounded bg-primary py-2 text-center text-background outline-none flex items-center justify-center" type="submit">{loading ? <Loading /> : "Register"}</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default Page;