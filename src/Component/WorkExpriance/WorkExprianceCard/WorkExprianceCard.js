import React from 'react'
import './WorkExprianceCard.css'

const  WorkExprianceCard =({details}) =>{
  return (
    <div className='work-experience-card'>
    <h6> {details.title}</h6>

    <div className='work-duration'> {details.date} </div>

    <ul>
    {details.responsibility.map((item)=>(
        <li key={item}> {item} </li>
    ))}
    </ul>

    </div>
  )
}

export default WorkExprianceCard
