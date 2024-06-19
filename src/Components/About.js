import React from 'react';
import Home from './Home';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

const About = () => {
    const skills = [
        { skill: 'HTML', percentage: 90 },
        { skill: 'CSS', percentage: 85 },
        { skill: 'JavaScript', percentage: 70 },
        { skill: 'React', percentage: 80 },
        { skill: 'Git', percentage: 85 },
        { skill: 'GitHub', percentage: 90 },
        { skill: 'Material UI', percentage: 75 },
        { skill: 'Tailwind CSS', percentage: 90 },
    ];

    return (
        <div>
            <Home />
            <div className='w-full max-w-5xl h-auto mx-auto bg-white rounded-xl shadow-2xl flex flex-col md:flex-row mt-36 p-4 md:p-8'>
                <div className="flex flex-col justify-left p-4 md:p-8 w-full md:w-1/2 mt-4 md:mt-8">
                    <h1 className='font-semibold text-xl md:text-2xl'>ABOUT</h1>
                    <p className="text-gray-700 text-sm mt-3">
                        "A passionate frontend developer dedicated to creating beautiful and user-friendly web experiences. With a strong foundation in <strong>HTML, CSS, JavaScript and React. Js</strong> I specialize in transforming design concepts into seamless, responsive interfaces. My attention to detail and commitment to clean, efficient code ensures that every project not only looks great but performs flawlessly across all devices. I'm always eager to learn and adapt to new technologies, striving to deliver modern and impactful solutions.<strong>Let's work together to bring your vision to life!</strong>"
                    </p>
                    <Link to="https://drive.google.com/file/d/1FTYFh0TnveT2OvnWUyAnIf7YFXIVFRWK/view?usp=drivesdk" target='blank'>
                        <button type="button" className="px-3 py-2 mt-6 md:mt-12 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[140px]">Get My Resume</button>
                    </Link >
                </div>
                <div className="flex flex-col justify-left p-4 md:p-8 w-full md:w-1/2 mt-4 md:mt-8">
                    <h1 className='font-semibold text-xl md:text-2xl'>SKILLS</h1>
                    {skills.map((skill) => (
                        <ProgressBar
                            key={skill.skill}
                            skill={skill.skill}
                            percentage={skill.percentage}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
}

export default About;
