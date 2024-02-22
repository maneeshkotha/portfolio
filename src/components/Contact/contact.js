import React, { useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs 
      .sendForm('service_g4lu59l', 'template_85io25q', form.current,'nfoKPmcj6-vg-rYtG7BEv')
         
      
      .then((result)=>
         {
          console.log(result.text);
          e.target.reset();
          alert('Email sent !');
        
          
        },
        (error) => {
          console.log( error.text);
        })
      ;
  };
  return (
   
    <section id='contactmain'>
        <div className='maindiv'>
        <h1 className='contactPageTitle'> Contact me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunties.</span>
<form className='contactForm' ref={form} onSubmit={sendEmail}>

    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
    <input type='email' className='email' placeholder='Your Email' name='your_email'/>
    <textarea className='msg' name='message' rows="5" placeholder='Your message'></textarea>
    <button type='submit' value="send"className='submitBtn'>Submit</button>
    
    
</form>
        </div>
    </section>
  )
}

export default Contact;
