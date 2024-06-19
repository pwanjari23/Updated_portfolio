import React from 'react'
import Home from './Home';
import image from './image.png'
import { LiaCalendarAlt } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

const Profile = () => {
    return (<>
        <div className="min-h-screen bg-gradient-to-r from-violet-800 to-violet-300">
            <Home />
            <div className='w-[1000px] h-[500px] mx-auto bg-white rounded-xl shadow-2xl flex mt-36'>
                <img src={image} alt="Planner" className="w-1/2 h-auto object-cover rounded-l-lg" />
                <div className="flex flex-col justify-center p-8 w-1/2 mt-16">
                    <h4 className='mb-1'>HELLO EVERYBODY, I AM</h4>
                    <h1 className="text-4xl font-semibold  text-gray-800 mb-2">
                        PRATIKSHA  <br />
                        <span>WANJARI</span> <br />
                    </h1>
                    <h5 className='font-semibold'>FRONTEND DEVELOPER</h5>
                    <p className="text-gray-700 text-sm mt-3">
                        "Skilled frontend developer focused on creating user-friendly websites. I prioritize intuitive design and smooth navigation to ensure an enjoyable experience for every visitor."
                    </p>
                    <div className="flex items-center gap-2 mt-4 text-gray-700">
                        <LiaCalendarAlt fontSize={24} />
                        <h3>23rd September 2002</h3>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-gray-700">
                        <IoCallOutline fontSize={20} />
                        <h3>+91 7620465291</h3>
                    </div>
                    <div className="flex items-center gap-3 mt-3 text-gray-700">
                        <TfiEmail fontSize={18} />
                        <h3>pratikshwanjari23@gmail.com</h3>
                    </div>
                    <div className="flex items-center gap-2 mt-3 text-gray-700">
                        <CiLocationOn fontSize={24} />
                        <h3>Pune, Maharashtra</h3>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Profile;
