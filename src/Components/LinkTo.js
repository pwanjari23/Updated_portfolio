import React from 'react'
import Profile from './Profile'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const LinkTo = () => {
  return (
    <div>
        <Profile/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default LinkTo;