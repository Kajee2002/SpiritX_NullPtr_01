"use client";
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Loader2,ChevronRight     } from "lucide-react"
import Link from "next/link"
export default function signup(){
    return(
        <>
        <div className="flex flex-col-reverse md:flex-row  h-screen w-screen min-w-screen overflow-scroll">
            <div className="sign-up flex flex-col justify-center items-center signup-text h-2/4 mt-2 md:mt-0 md:h-screen w-full md:w-1/2 py-8 md:py-16 px-4 bg-gradient-to-r from-pink-100 to-gray-50 ">
                <p className="pb-2 text-xl md:text-xl "> Create a new account </p>
                <form className="w-full md:w-3/4 px-4">
                    <Input id="email" type="Email" placeholder="Email" required className="mb-4" />
                    <Input id="username" type="text" placeholder="UserName" required className="mb-4" />
                    <Input id="password" type="password" placeholder="Password" required className="mb-4"/>
                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" required className="mb-4"/>
                    <Button type="submit" variant={"outline"} className="w-full">SignUp <ChevronRight /></Button>
                </form>
            </div>
            <div className="flex flex-col justify-center items-center signup-text h-2/4 md:h-screen w-full md:w-1/2 py-8 px-4 bg-gradient-to-l from-rose-500 via-pink-500 to-red-500 animate-gradient">
                <h1 className=" text-6xl md:text-8xl text-gray-50 font-black drop-shadow-lg">Welcome</h1>
                <p className="pb-3 pt-2 md:pt-16 text-xl md:text-2xl">If you already have an account </p>
                <Button className="text-xl md:text-2xl font-semibold my-5 p-4 md:p-6" ><Loader2 className="animate-spin hidden" /> <Link href="/login">Login Now</Link></Button>
            </div>
        </div>
        </>

    )
}

