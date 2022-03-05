import React from 'react'
import Header from './components/Header/Header'
import './App.css';
import Home from './components/Lead/Home';
import Services from './components/Services/Services';
import Qualify from './components/Qualifications/Qualify';
import Contact from './components/Contact/Contact';
import Activities from './components/Activites/Activities';
import Helmet from 'react-helmet';
const App
 = () => {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>My Portfolio</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="This is my Portfolio Website"></meta>
    </Helmet>
    <Header />
    <Home />
    <Qualify />
    <Services />
    <Activities />
    <Contact />
    </>
  )
}

export default App
