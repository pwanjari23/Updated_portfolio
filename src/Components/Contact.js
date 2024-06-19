import React from 'react';
import Home from './Home';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
    return (
        <div>
            <Home />
            <div className='w-[1000px] h-[300px] mx-auto text-gray-700 rounded-xl shadow-2xl flex flex-col items-center mt-36 mb-26 p-8'>
                <h1 className='font-semibold text-2xl'>CONTACT</h1>
                <p className="text-gray-700 text-sm mt-3 text-center">
                    "Feel free to reach out to me for any inquiries, collaborations, or just to connect! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's work together to bring innovative and impactful solutions to life. Contact me via email or through my social media channels, and let's start a conversation!"
                </p>
                <div className="flex justify-center gap-6 mt-6">
                    <a href="https://github.com/pwanjari23" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                        <FaGithub fontSize={22} />
                    </a>
                    <a href="mailto:pratikshwanjari23@gmail.com" className="text-gray-700 hover:text-black">
                        <TfiEmail fontSize={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/pratiksha-wanjari-671186262/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                        <FaLinkedin fontSize={22} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
