import React from 'react';
import './SkillInfoCard.css';

function SkillInfoCard({ heading, skills }) {
  return (
    <div className='skill-info-card'>
      <h6>{heading}</h6>
      <div className='skills-info-content'>


        {skills.map((item, index) => (
            <div>

          <div key={`skill_${index}`} className='skill-info'>
            <p>{item.skill}</p>
            <p className='percentage'>{item.percantage}</p>
          </div>



            <div className='skill-progress-bg'>
              <div className='skill-progress' style={{ width: item.percantage }}></div>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default SkillInfoCard;
