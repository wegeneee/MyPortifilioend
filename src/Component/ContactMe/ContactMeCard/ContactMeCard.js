import React from 'react'
import './ContactMeCard.css'

const  ContactMeCard=({iconUrl,text})=> {
  return (
    <div className='contact-card-detail'>
      <div className='icon'>
         <img src={iconUrl} alt={text}/>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactMeCard
