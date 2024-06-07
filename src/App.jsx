/* eslint-disable no-unused-vars */
// import { useState } from 'react'
import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Features from './components/Features';
import Features2 from './components/Features2'
import Feedback from './components/Feedback';
import Signup from './components/Signup';
import Footer from './components/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <> 
    <NavBar />

       <Header />

        <Features />

        <Features2 />

          <Feedback />
  
          <Signup/>

           <Footer/> 
    </>
  );
}

export default App
