import React from 'react';
import Home from './Home';
import Services from './Services';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-800 to-violet-300">
      <Home />
      <div className='container mx-auto mt-36 px-4 sm:px-6 lg:px-8'>
        <Services /> 
      </div>
    </div>
  )
}

export default Projects;
