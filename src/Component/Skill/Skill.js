import React, { useState } from 'react'
import './Skill.css'
import Skillcard from './SkillCard/Skillcard'
import { SKILLS } from '../../utils/data'
import SkillInfoCard from './SkillInfoCard/SkillInfoCard'
import Navbar from '../Navbar/Navbar'

import AppRouter from '../../AppRouter'

function Skill() {
    const [SelectedSkill,setSelectedSkill]= useState(SKILLS[0]);

    const handleSelectedSkill =(data)=>{
        setSelectedSkill(data);
    }
  return (
    <> 
    {/* <Navbar/> */}
    <section className='skill-container'>
    <h5>Technical Proficiency</h5>
    <div className='skill-content'>
      <div className='skills'>
        {SKILLS.map((item) =>(
            <Skillcard 
                key={item.title}
                iconUrl={item.icon}
                title={item.title}

                isActive={SelectedSkill.title === item.title}
                onClick={()=>{
                    handleSelectedSkill(item);
                }}
            />
        ))}
      </div>
      <div className='skill-info'>

        <SkillInfoCard
            heading={SelectedSkill.title}
            skills={SelectedSkill.skills}
        />
      </div>
    </div>
    </section>
    </>
  )
}

export default Skill
