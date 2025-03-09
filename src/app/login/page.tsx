"use client";
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Loader2,ChevronRight } from "lucide-react"
import Link from "next/link"
export default function signup(){
    return(
        <>
        <div className="flex flex-row h-screen width-screen min-w-screen">
            <div className="flex flex-col  justify-center items-center signup-text w-1/2 py-16 px-4">
                <h1 className="pb-4 text-6xl">Welcome</h1>
                <p className="py-4 ">If you already have an account </p>
                <Button ><Loader2 className="animate-spin hidden" /> <Link href="/sign-up">SignUp Now</Link></Button>
            </div>
            <div className="flex flex-col justify-center items-center signup-text w-1/2 py-16 px-4">
                <p className="pb-2 ">Login to your Account </p>
                <form className="w-full  px-4 ">
                    <Input id="username" type="text" placeholder="UserName" required />
                    <Input id="password" type="password" placeholder="Password" required />
                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" required />
                    <Button type="submit" variant={"outline"} className="">Login <ChevronRight /></Button>
                </form>
            </div>
        </div>
        </>

    )
}

