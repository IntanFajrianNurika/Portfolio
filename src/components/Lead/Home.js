import React from 'react'
import './Home.css'
import ReactTooltip from "react-tooltip"
import { Typewriter,} from 'react-simple-typewriter'
import skill1 from "../pics/skill1.png"
import skill2 from "../pics/skill2.png"
import skill3 from "../pics/skill3.png"
import lead from "../pics/lead.jpg"
const Home = () => {
    return (
        <>
            <section className='lead' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>Assalamalaikum Warahmatullahi Wabarakatuh</h3>
                    <h1>Hi , I'm <span>Intan Fajrian Nurika</span></h1>
                    <h2> a
                        <span>
                            <Typewriter
                        words={[ ' Professional English Trainer',' Teacher',' Early Childhood Practitioner', 'n Al-Quran Teacher',]}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}/>
                        </span>
                        </h2>
                        <p>I am a Professional English Language trainer, an Early Childhood Practitioner and a Religion teacher, with 12+ years of experience in teaching . I have served in many reputed organisations and am known for my commitment, passion and hardworking nature. I am adaptable to your speed of learning. I am self motivated and reliable and a team player as well as an individual worker. I am confident that you would feel comfortable learning with me and will be successful in your endeavors.</p>
                    <div className='lead_btn d_flex'>
                        <div className='col_1'>
                            <h4>Find Me</h4>
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
                        <div className='col_1'>
                            <h4>My Skills:</h4>
                            <button data-tip data-for='skill1text' className='btn_shadow'>
                                <img src={skill1}alt=''/>
                            </button>
                            <ReactTooltip id="skill1text" place="bottom" effect='solid' textColor='#ff014f' backgroundColor='white'>
                                   English Trainer
                            </ReactTooltip>
                            <button data-tip data-for='skill2text'className='btn_shadow'>
                                <img src={skill2}alt=''/>
                            </button>
                            <ReactTooltip id="skill2text" place="bottom" effect='solid' textColor='#ff014f' backgroundColor='white'>
                                   Early Childhood Practitioner
                            </ReactTooltip>
                            <button data-tip data-for='skill3text' className='btn_shadow'>
                                <img src={skill3} alt=''/>
                            </button>
                            <ReactTooltip id="skill3text" place="bottom" effect='solid' textColor='#ff014f' backgroundColor='white'>
                                  Al-Quran Teacher
                            </ReactTooltip>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='right_img'>
                        <img src={lead} alt="" />
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Home