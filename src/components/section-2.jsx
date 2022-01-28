import React, { useEffect } from 'react';

export default function Sakura () {

  useEffect( () => {
    
  })

  return (
    <section className="section-2">
      <div className="glass start" data-start="glassUp"></div>
      <div className="information">
        <div className="vertical-img start" data-start="fadeInUp">
          <img src="/sakura-2.jpeg" alt=""/>
        </div>
        <div className="w-8/12 p-8 start" data-start="sakuraFadeIn">
          <h2 className="text-5xl">桜</h2>
          <h1 className="mb-8 text-7xl">Sakura</h1>
          <p className="font-semibold">The cherry blossom (桜, sakura) is Japan's unofficial national flower. It has been celebrated for many centuries and holds a very prominent position in Japanese culture. There are many dozens of different cherry tree varieties in Japan, most of which bloom for just a few days in spring. The seasonal spectacle is celebrated with hanami (cherry blossom viewing) parties under the trees.</p>
        </div>
        <div className="horizontal-img delay-2 start" data-start="fadeInRight">
          <img src="/sakura-1.jpeg" alt=""/>
        </div>
      </div>
    </section>
  )
}