import React from 'react'
import Card from './Card'
import Expdata from './QualifyApi'
import './Qualify.css'
const Qualify = () => {
  return (
    <>
    <section className='Qualify top ' id='Qualify'>
    <div className='container'>
        <div className='heading text-center'>
            <h4>12 + YEARS OF EXPERIENCE IN TEACHING</h4>
            <h1>My Qualifications and Work Experience</h1>
        </div>
        <div className='resume'>
        <h2>Download my Resume Here</h2>
        <button className='btn_shadow d_flex'>
             <a href="https://drive.google.com/uc?id=1FFgHGQr57peZ1ULf3m439FoY7Ycig5Sz&export=download" target='_blank' download rel="noreferrer" ><i className='fas fa-download'> Download</i></a>
            </button>
          </div>
        <div className='content-section mtop d_flex'>
          <div className='left'>
            <div className='heading'>
              <h4>2009-2022</h4>
              <h1>Work Experience</h1>
            </div>

            <div className='content'>
              {Expdata.map((val,id) => { 
                if(val.category === 'Work Experience')
                {
                  return (<Card key={id} title={val.title} year = {val.year} desc={val.desc} rate={val.rate} />)
                }
              })}
            </div>
          </div>
          <div className='left lef2'>
            <div className='heading'>
              <h4>2009-2022</h4>
              <h1>EDUCATION AND SKILLS</h1>
            </div>

            <div className='content'>
              {Expdata.map((val,id) =>  { 
                if(val.category === 'qualify')
                {
                  return (<Card key={id} title={val.title} year = {val.year} desc={val.desc} rate={val.rate} />)
                }
                })}
            </div>
          </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Qualify