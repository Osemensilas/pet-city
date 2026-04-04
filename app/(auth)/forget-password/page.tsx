'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [passError, setPassError] = useState('');
    const [codeError, setCodeError] = useState('');
    const [btnClicked, setBtnClicked] = useState(false);
    const [codeSentToMail, setCodeSentToMail] = useState(false);
    const [codeCorrect, setCodeCorrect] = useState(false);
    const [codeForm, setCodeForm] = useState({
        no1: '',
        no2: '',
        no3: '',
        no4: '',
        no5: '',
        no6: ''
    });
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const emailSubmitted = async () => {

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (!/^\d?$/.test(value)) return;

        const newCodeForm = { ...codeForm, [name]: value };
        setCodeForm(newCodeForm);

        if (value && e.target.nextSibling && (e.target.nextSibling as HTMLInputElement).tagName === "INPUT") {
            (e.target.nextSibling as HTMLInputElement).focus();
        }

        const allFilled = Object.values(newCodeForm).every((digit) => digit !== '');
        if (allFilled) {
            codeFormSubmited(newCodeForm);
        }
    };


    const codeFormSubmited = async (form = codeForm) => {
        const code = Object.values(form).join('');
        
    }

    const passFormChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const passwordSubmitted = async () => {
        if (formData.password === '' || formData.confirmPassword === ''){
            setError('All field required');
            return;
        }
    }

    return ( 
        <>
        <section className="w-screen h-screen flex bg-background">
            <div className="hidden sm:block w-3/5 h-full">
                <img src="/forget-password.jpg" alt="" className="w-full h-full" />
            </div>
            <div className="w-full sm:w-2/5 h-full flex justify-center items-center">
                <form onSubmit={(e) => e.preventDefault()} className={`w-4/5 h-max bg-accent sm:px-10 px-4 py-10 rounded
                    ${codeSentToMail ? "hidden" : ""}
                    `}>
                    <header className="mb-5">
                        <h2 className="text-header text-xl sm:text-3xl">Forget Password</h2>
                    </header>
                    <div className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                        ${error ? "block" : "hidden"}
                        `}>
                        {error}
                    </div>
                    <div className="w-full h-max mb-2.5">
                        <div className="w-full h-max mb-4">
                            <label htmlFor="email" className="text-grey mb-4">Email Address:</label>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="h-10 w-full border text-accent outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                    </div>
                    <div className="h-max w-full py-2 5">
                        <button onClick={emailSubmitted} className="w-full h-10 flex items-center justify-center bg-btns text-background rounded bg-primary">{
                            btnClicked ? (
                                <img src="/loading.gif" alt="loading image" className="h-5 w-5" />
                            ) : (
                                <span>Sign In</span>
                            )
                    }</button>
                    </div>
                </form>
                <form onSubmit={(e) => e.preventDefault()} className={`w-4/5 h-max
                    ${codeSentToMail ? "" : "hidden"}
                    ${codeCorrect ? "hidden" : ""}
                    `}>
                    <div id="error" className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                        ${error ? "block" : "hidden"}
                        `}>
                        {codeError}
                    </div>
                    <header className="mb-5">
                        <h2 className="text-center text-accent text-xl sm:text-3xl">Osemen Silas</h2>
                    </header>
                    <div className="w-full h-max mb-2.5">
                        <label htmlFor="email" className="text-silver w-full mb-4 text-center text-accent">Enter 6-digit code sent to your email address</label>
                        <div className="w-full h-max mb-4 flex justify-center">
                            <input type="text" id="no1" name="no1" title="digit" value={codeForm.no1} onChange={handleChange} className="text-center text-accent h-10 w-10 mx-2 border text-silver outline-none border-silver rounded px-2 bg-transparent" autoFocus />
                            <input type="text" id="no2" name="no2" title="digit" value={codeForm.no2} onChange={handleChange} className="text-center text-accent h-10 w-10 mx-2 border text-silver outline-none border-silver rounded px-2 bg-transparent" />
                            <input type="text" id="no3" name="no3" title="digit" value={codeForm.no3} onChange={handleChange} className="text-center text-accent h-10 w-10 mx-2 border text-silver outline-none border-silver rounded px-2 bg-transparent" />
                            <input type="text" id="no4" name="no4" title="digit" value={codeForm.no4} onChange={handleChange} className="text-center text-accent h-10 w-10 mx-2 border text-silver outline-none border-silver rounded px-2 bg-transparent" />
                            <input type="text" id="no5" name="no5" title="digit" value={codeForm.no5} onChange={handleChange} className="text-center text-accent h-10 w-10 mx-2 border text-silver outline-none border-silver rounded px-2 bg-transparent" />
                            <input type="text" id="no6" name="no6" title="digit" value={codeForm.no6} onChange={handleChange} className="text-center text-accent h-10 w-10 mx-2 border text-silver outline-none border-silver rounded px-2 bg-transparent" />
                            <div className="text-danger">{error}</div>
                        </div>
                    </div>
                    <div className="w-full h-max flex justify-center gap-2 text-grey text-sm">
                        Didn't get code?<span><button className="underline text-primary">Send Again</button></span>
                    </div>
                    <button type="submit" hidden>Submit</button>
                </form>
                <form onSubmit={(e) => e.preventDefault()} className={`w-4/5 h-max
                    ${codeCorrect ? "" : "hidden"}
                    `}>
                    <header className="mb-5">
                        <h2 className="text-center text-accent text-xl sm:text-3xl">Set New Password</h2>
                    </header>
                    <div id="error" className={`bg-danger text-center text-accent py-2 px-4 rounded w-full h-max mb-2
                        ${error ? "block" : "hidden"}
                        `}>
                        {passError}
                    </div>
                    <div className="w-full h-max mb-2.5">
                        <div className="w-full h-max mb-4">
                            <label htmlFor="password" className="text-grey mb-4">Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={passFormChanged} id="password" className="h-10 w-full text-accent border text-silver outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                        <div className="w-full h-max mb-4">
                            <label htmlFor="confirm-password" className="text-grey mb-4">Confirm Password:</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={passFormChanged} id="confirm-password" className="h-10 w-full text-accent border text-silver outline-none border-silver mb-1 rounded px-2 bg-transparent" />
                            <div className="text-danger"></div>
                        </div>
                    </div>
                    <div className="h-max w-full py-2 5">
                        <button onClick={passwordSubmitted} className="w-full py-2 5 bg-primary text-text rounded">Submit</button>
                    </div>
                </form>
            </div>
        </section>
        </>
     );
}
 
export default ForgetPassword; 