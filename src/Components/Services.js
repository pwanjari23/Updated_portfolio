import React, { useState } from 'react';

const Services = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const services = [
        {
            id: 1,
            title: 'UUID Generator',
            description: 'A UUID generator is a tool that creates unique identifiers for various purposes, ensuring that each identifier is unlikely to be duplicated.',
            link: "https://uuid-generator-self.vercel.app/"
        },
        {
            id: 2,
            title: 'Password Generator',
            description: 'This project demonstrates how to build a password generator using React, allowing users to generate secure passwords.',
            link: "https://password-generator-one-phi-14.vercel.app/"
        },
        {
            id: 3,
            title: 'Quote Generator',
            description: 'This project showcases how to build a simple quote generator using React, allowing users to receive random quotes from a predefined collection.',
            link: "https://quote-generator-gray-eight.vercel.app/"
        },
        {
            id: 4,
            title: 'Food App',
            description: 'Implemented intuitive features to discover top-rated restaurants and applied robust filtering options for personalized results.',
            link: "https://github.com/pwanjari23/food-app.git"
        },
        {
            id: 5,
            title: 'Weather App',
            description: 'Get real-time updates on temperature, humidity, and wind speed and Plan your day confidently with detailed hourly and daily forecasts.',
            link: "https://weather-app-tau-three-19.vercel.app/"
        },
        {
            id: 6,
            title: 'Todo App',
            description: 'This project focuses on building a simple yet robust todo app using web technologies, offering users a workflow for creating, updating, and tracking tasks.',
            link:"https://github.com/pwanjari23/todo-frontend/tree/main/Frontend/src"
        },
    ];

    const handlePreviewClick = (link) => {
        window.open(link, '_blank'); // Opens the link in a new tab
    };

    return (
        <div className="flex flex-wrap justify-center">
            {services.map(service => (
                <div
                    key={service.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-50 m-2 p-6 rounded-lg relative "
                    onMouseEnter={() => setHoveredId(service.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    {hoveredId === service.id && service.link && (
                        <button
                            className="absolute bottom-2 right-2  text-white px-2 py-1 rounded-lg shadow-md"
                            onClick={() => handlePreviewClick(service.link)}
                        >
                            Preview
                        </button>
                    )}
                    <h2 className="text-white text-lg font-bold mb-2">{service.title}</h2>
                    <p className="text-white">{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;
