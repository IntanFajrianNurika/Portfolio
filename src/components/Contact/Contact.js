import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import contact1 from '../pics/contact1.png'
import{ init } from '@emailjs/browser';
init("user_Tq1hPHPIhLUZCnJdfX1Vj");
const Contact = () => {
    //use emailJS here to send notif to the email
    const formSubmit =(event) =>{
        event.preventDefault();
        emailjs.sendForm('service_0tm5pyy','template_rtfs7tb',event.target,'user_Tq1hPHPIhLUZCnJdfX1Vj')
        .then((result) => {
            console.log(result.text);

        }, (error) => {
            console.log(error.text);
        });
        event.target.reset()
    }
  return (
   <>
   <section className='Contact' id ="Contact">
       <div className='container top'>
            <div className='heading text-center'>
                <h4>Contact</h4>
                <h1>Contact  me :</h1>
            </div>

            <div className='content d_flex'>
                <div className='left'>
                    <div className='box box_shadow'>
                        <div className='img'>
                            <img src={contact1} alt='' />
                        </div>
                        <div className='details'>
                            <h1>Intan Fajrian Nurika</h1>
                            <p>I am available for Freelancing, Home room teaching and online teaching.Please contact me via : </p>
                            <p><b>Phone</b>:+62 82254202941</p>
                            <p><b>Email</b>:intanfajriannurika1990@gmail.com</p><br />
                            <span>Find me:</span>
                            <div className='button'>
                                <button className='btn_shadow'>
                                   <a href="https://www.instagram.com/miss.intan90/?hl=en" target={'_blank'} rel="noreferrer"><i className='fab fa-instagram'></i></a> 
                                </button>
                                <button className='btn_shadow'>
                                  <a href="https://www.linkedin.com/in/intan-fajrian-nurika-0a980610a/" target={'_blank'} rel='noreferrer'> <i className='fab fa-linkedin-in'></i></a>
                                </button>
                                <button className='btn_shadow'>
                                    <a href='https://wa.me/+6282254202941' target='_blank' rel="noreferrer"><i className='fab fa-whatsapp'></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right box_shadow'>
                    <form onSubmit={formSubmit}>
                        <div className='f_flex'>
                            <div className='input row'>
                                <span>Your Name</span>
                                <input type='text' name='fullname' placeholder='Your Name'  />
                            </div>
                            <div className='input row'>
                                <span>Phone</span>
                                <input type='phone' name='phone' placeholder='Your Number'  />
                            </div>
                            </div>
                            <div className='input '>
                                <span>Email</span>
                                <input type='email' name='email' placeholder='E-Mail ID'  />
                            </div>
                            <div className='input'>
                                <span>Subject</span>
                                <input type='text' name='subject' placeholder='Your Doubt'  />
                            </div>
                            <div className='input'>
                                <span>Your Query</span>
                                <textarea cols='30' rows='10' placeholder='Explain your Query' name='query'  ></textarea>
                            </div>
                            <button className='btn_shadow'>
                                Send Message <i className='fa fa-long-arrow-down'></i>
                            </button>
                    </form>
                </div>
            </div>
        </div>
   </section>
   </>
  )
}

export default Contact