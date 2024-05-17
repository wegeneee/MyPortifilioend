// import React, { useRef } from 'react'
// import './ContactForm.css'
// import emailjs, { send } from '@emailjs/browser';
// import { ToastContainer, toast } from 'react-toastify';


// function ContactForm() {
//   const form = useRef();

//    const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_gn0ov1h', 'template_ey9hd0p', form.current, '5ReFvgfWBWmuzrH6N') 
//       .then((result) => {
    
//          toast.success("The message is sent successfully" );
     

//           console.log(result.text);
//       }, (error) => {
        
//           toast.error("Failed to send the message");
//           console.log(error.text);
//       });
//   };

//   return (
//     <form  ref={form} onSubmit={sendEmail}  className='contact-form-content'>
//              <ToastContainer />    
//       <div className='name-container'>
//       <input type='text'   name="fname" placeholder=' First Name'/>
//       <input type='text' name="lname" placeholder=' Last Name'/>
//       </div>
//       <input type='email'  name="email" placeholder='Type your Email'/>
//       <textarea type='text' name='message'  placeholder='Message' rows={3}/>
//       <button type='submit' value="send">Send</button>
//     </form>
//   )
// }

// export default ContactForm


import React, { useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gn0ov1h', 'template_ey9hd0p', form.current, '5ReFvgfWBWmuzrH6N')
      .then((result) => {
        toast.success('The message is sent successfully');
        console.log(result.text);
      })
      .catch((error) => {
        toast.error('Failed to send the message  Please Check Your Internet Connection !');
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact-form-content'>
      <ToastContainer autoClose={4000}/>

      <div className='name-container'>
        <input type='text' name='fname' placeholder=' First Name' required />
        <input type='text' name='lname' placeholder=' Last Name' required />
      </div>
      <input type='email' name='email' placeholder='Type your Email' required  />
      <textarea type='text' name='message' placeholder='Message' rows={3} required  />
      <button type='submit' value='send'>
        Send
      </button>
    </form>
  );
}

export default ContactForm;
