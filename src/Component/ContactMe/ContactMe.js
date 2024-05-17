import React from 'react'
import './ContactMe.css'
import ContactMeCard from './ContactMeCard/ContactMeCard'

import email from '../../Asset/email.png'
import github from '../../Asset/github.png'
import ContactForm from './ContactForm/ContactForm'
import phone from '../../Asset/call.png'
import AppRouter from '../../AppRouter'
import Navbar from '../Navbar/Navbar'

function ContactMe() {
  return (
    <div>  
    {/* <Navbar/> */}
    <section className='contact-container'>
   <h5>Contact Me</h5>
      <div className='contact-content'>
      <div style={{flex:1}}> 
      <ContactMeCard iconUrl={email} text="wegeneargow@gmail.com"/>
       <div > 
      <ContactMeCard iconUrl={github} text="https://github.com/wegeneee " />
       {/* <p>https://github.com/wegegen</p> */}
      
      </div>
       <div > 
      <ContactMeCard iconUrl={phone} text="+251985849737 " />
      
      </div>


      </div>
      <div style={{flex:1}}>
       <ContactForm/>

      </div>
     
      

      </div>
    </section>
    </div>
  )
}

export default ContactMe
