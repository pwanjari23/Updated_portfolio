import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex justify-center relative">
            <nav className='bg-gray-100 w-full max-w-[400px] h-[50px] rounded-3xl shadow-lg flex items-center justify-center m-4 fixed top-0'>
                <ul className='flex flex-row p-4 justify-center space-x-2 md:space-x-5 font-semibold text-md'>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
