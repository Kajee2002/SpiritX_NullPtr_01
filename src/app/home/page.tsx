import React from 'react';
import {Button} from "@/components/ui/button"
import { Loader2,ChevronRight } from "lucide-react"
const HomePage: React.FC = () => {
    const username = "rakees";

    return (
        
        <div className="bg-gradient-to-b from-gray-50 to-blue-100">
            <div className="container h-screen mx-auto flex flex-col justify-center  items-center ">
                <h1 className='text-9xl font-extrabold font-sans text-gray-800 '>Welcome <span className='text-blue-900'>{username} </span> </h1>
                <p>This is the Landing Page</p>
                <Button className="text-2xl font-semibold my-5 p-6" variant={"default"}><Loader2 className="animate-spin hidden" /> Logout <ChevronRight className='h-auto w-full'/> </Button>
            <footer className='fixed bottom-0 w-full bg-gray-800 text-white p-2 px-4'>
                <p className="text-center">&copy; 2025 NullPtr. All rights reserved.</p>
            </footer>
            </div>
        </div>
    );
};

export default HomePage;