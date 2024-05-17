
import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/hero'
import Skill from  '../src/Component/Skill/Skill'
import WorkExpriance from './Component/WorkExpriance/WorkExpriance'
import ContactMe from './Component/ContactMe/ContactMe'
import Pract from './Component/Practice/Pract'
import Inputed from './Component/Practice/Inputed'

function AppRouter() {
  return (
   <>
    <div className='container'>
    <Hero/>
    </div>
    <Skill/>
    <WorkExpriance/>
    <ContactMe/>
    {/* <Inputed/> */}
   </>
  )
}

export default AppRouter
