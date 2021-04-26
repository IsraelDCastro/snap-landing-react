import React, { useEffect } from 'react';
import SectionOne from './components/section-1';
import Sakura from './components/section-2';
import Places from './components/section-3';
import CTA from './components/section-4';
import Gastronomy from './components/section-5';
import { Down, GoTop, Up } from './components/icons';


function App() {
  const wrapper = document.querySelector('.wrapper');
  const section = document.querySelectorAll('section');
  for (let index = 0; index < section.length; index++) {
    var sections = section[index];
    console.log("sections", sections.scrollHeight)
  };

  let top = () => {
    wrapper.scrollTop -= sections.scrollHeight;
  }
  let down = () => {
    wrapper.scrollTop += sections.scrollHeight;
  }
  
  let goTop = () => {
    wrapper.scrollTop = 0;
  }
  useEffect( () => {
  })

  return (
    <>
      <div className="wrapper">
        <SectionOne />
        <Sakura />
        <Places />
        <CTA />
        <Gastronomy />
        <div className="nav">
          <a href="#!" className="btn go-top" onClick={goTop}>Got top <GoTop className="ml-4" /></a>
          <div className="flex flex-col">
            <a href="#!" className="top mb-2" onClick={top}><Up/></a>
            <a href="#!" className="down" onClick={down}><Down/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
