import React from 'react'
import './Services.css'
import data from "./ServicesApi"
import Card from "./Card"
const Services = () => {
  return (
    <>
        <section className='services top' id='Services'>
            <div className='container'>
                <div className='heading'>
                    <h4>Services</h4>
                    <h1>What I Do:</h1>
                </div>

                <div className='content grid'>
                    {data.map((val,index) => {
                        return (<Card key={index} image={val.image} title={val.title} desc={val.desc}/>)
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Services