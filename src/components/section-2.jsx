import React from 'react';

export default function Sakura () {
  return (
    <section className="section-2">
      <div className="glass glassUp"></div>
      <div className="information">
        <div className="vertical-img fadeInUp start delay-2">
          <img src="/sakura-2.jpeg" alt=""/>
        </div>
        <div className="w-8/12 p-8">
          <h2 className="text-5xl fadeIn start delay-3">桜</h2>
          <h1 className="text-7xl mb-8 fadeIn start delay-4">Sakura</h1>
          <p className="font-semibold fadeIn start delay-5">The cherry blossom (桜, sakura) is Japan's unofficial national flower. It has been celebrated for many centuries and holds a very prominent position in Japanese culture. There are many dozens of different cherry tree varieties in Japan, most of which bloom for just a few days in spring. The seasonal spectacle is celebrated with hanami (cherry blossom viewing) parties under the trees.</p>
        </div>
        <div className="horizontal-img fadeInRight start delay-2">
          <img src="/sakura-1.jpeg" alt=""/>
        </div>
      </div>
    </section>
  )
}