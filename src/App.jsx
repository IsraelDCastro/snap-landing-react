import React, { useEffect } from 'react';
import SectionOne from './components/section-1';
import Sakura from './components/section-2';
import Places from './components/section-3';
import CTA from './components/section-4';
import Gastronomy from './components/section-5';
import { Down, GoTop, Up } from './components/icons';


function App() {
  
  // let top = () => {
  //   wrapper.scrollTop -= section[1].scrollHeight;
  // }
  // let down = () => {
  //   wrapper.scrollTop += section[1].scrollHeight;
  // }

  // let goTop = () => {
  //   wrapper.scrollTop = 0;
  // }
  

  useEffect( () => {
    // let elsTrue = document.querySelectorAll('[data-start=true]');

    // console.log("Todos los true", elsTrue)
    // window.onload = () => {
    //   if (elsTrue) {
    //     for (let index = 0; index < elsTrue.length; index++) {
    //       const element = elsTrue[index];
    //       element.classList.add('start');
          
    //     }
    //   }
    // }
    let wrapper = document.querySelector('.wrapper');
    let section = document.querySelectorAll('section');
    document.querySelector('.top').addEventListener('click', () => {
      wrapper.scrollTop -= section[1].scrollHeight;
    })
    document.querySelector('.down').addEventListener('click', () => {
      wrapper.scrollTop += section[1].scrollHeight;
    })
    document.querySelector('.go-top').addEventListener('click', () => {
      wrapper.scrollTop = 0;
    })
    
    // const startAnimation = (entries, observer) => {
    //   entries.forEach(entry => {
    //     entry.target.classList.toggle("start", entry.isIntersecting);
    //   });
    // };
    
    
    const options = { root: null, rootMargin: '0px', threshold: 1 }; 
    const observer = new IntersectionObserver(startAnimation, options);
    
    const elements = document.querySelectorAll('[data-start]');
    elements.forEach(el => {
      // console.log(el.getAttribute("data-start"))
      observer.observe(el);
    });
    for (let index = 0; index < elements.length; index++) {
      var element = elements[index];
      console.log(element.getAttribute("data-start"), index,"hola")
    }
    function startAnimation (entries, observer) {
      entries.forEach((entry, index) => {
        entry.target.classList.toggle(elements[index].getAttribute("data-start"), entry.isIntersecting);
      });
    };
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
          <a href="#!" className="btn go-top">Got top <GoTop className="ml-4" /></a>
          <div className="flex flex-col">
            <a href="#!" className="mb-2 top"><Up/></a>
            <a href="#!" className="down"><Down/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
