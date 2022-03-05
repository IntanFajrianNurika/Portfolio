import React, { useState } from 'react'
import './Header.css'
import logo from '../pics/logo.png'
const Header = () => {
    window.addEventListener('scroll',function(){
        const header=document.querySelector('.header')
        header.classList.toggle("active",window.scrollY>100)
    })

    const [Mobile, setMobile] = useState(false) 

  return (
      <>
    <header className="header">
        <div className='container d_flex'>
            <div className='logo'>
                <img src={logo} alt=''></img>
            </div>  
            <div className ='navlink' >
                <ul className={Mobile ? 'nav-links-mobile':"link f_flex uppercase"} onClick={() => setMobile(false)}>
                    <li>
                        <a href='#home'>home</a>
                    </li>
                    <li>
                        <a href='#Qualify'>Qualifications and Experience</a>
                    </li>
                    <li>
                         <a href='#Services'>Services</a>
                    </li>
                    <li>
                        <a href='#Activities'>Activities</a>
                    </li>
                    <li>
                        <a href='#Contact'>Contact</a>
                    </li>
                    <li ><a href='#Contact'><button className='home-btn'>Hire Me </button></a></li> 
                </ul>
                <button className='toggle' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <i className='fas fa-times close home-btn'></i>:<i className='fas fa-bars open'></i>}
                </button>
            </div>
            </div>
    </header>
    </>
  )
}

export default Header