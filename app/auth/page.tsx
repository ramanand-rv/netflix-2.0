"use client"
import { useCallback, useState } from "react";
import InputField from "@/components/Input";



const page = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [varient, setVarient] = useState('login');

    const toggleVarient = useCallback(() => {
        setVarient((currentVarient) => currentVarient === 'login' ? 'register' : 'login')

    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-no-repeat bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50 md: bg-opacity-40">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Netflix Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <div className="text-white text-4xl mb-8 font-semibold 
                    ">
                            {varient === 'login' ? "Sign in" : "Register"}
                        </div>

                        <div className="flex flex-col gap-4 ">
                            {varient === 'register' && (
                                <InputField
                                    label="Username"
                                    onChange={(event: any) => { setName(event.target.value) }}
                                    id="Name"
                                    type="name"
                                    value={name}
                                />

                            )}
                            <InputField
                                label="Email"
                                onChange={(event: any) => { setEmail(event.target.value) }}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <InputField
                                label="Password"
                                onChange={(event: any) => { setPassword(event.target.value) }}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-red-600 text-white rounded-md w-full mt-10 hover:bg-red-700 py-3">
                            {varient === 'login' ? "Sign in" : "Sign up"}
                        </button>

                        <p className="text-neutral-500 mt-12">
                            {varient ==='login' ? 'First time using Netflix?':  'Already have an account?'}
                            <span className="text-white ml-4 hover:underline cursor-pointer"
                                onClick={toggleVarient}>
                                    {varient==='login'?"Create an account" : "Login"}
                                
                            </span>
                        </p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default page
