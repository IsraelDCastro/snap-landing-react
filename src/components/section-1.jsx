import React from 'react';
import Typist from 'react-text-typist';

export default function SectionOne () {
  return (
    <section className="section-1">
      <div className="glass">
        <div className="info text-center">
          <h3 className="mb-2 text-shadow fadeIn" data-start="true">
            <Typist sentences={['ようこそ', 'Welcome']} loop={false} showCursor={false} typingSpeed={150} startDelay={400} />
          </h3>
          <h5 className="mb-2 text-shadow fadeIn">
            <Typist sentences={['美しい国へ', 'To a beautiful country']} loop={false} showCursor={false} typingSpeed={160} startDelay={450} />
          </h5>
          <h1 className="text-7xl text-shadow fadeIn" data-start="false">Japan</h1>
        </div>
        <div className="more-info">
          <h4 className="text-center text-shadow mb-4 fadeIn">What to expect?</h4>
          <div className="flex justify-between">
            <div className="expect fadeInUp delay-2">
              <h6 className="font-semibold mb-2">Beautiful fauna</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique ipsam quas.</p>
            </div>
            <div className="expect mx-5 fadeInUp delay-3">
              <h6 className="font-semibold mb-2">Amazing places</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique ipsam quas.</p>
            </div>
            <div className="expect fadeInUp delay-4">
              <h6 className="font-semibold mb-2">An unique gastronomy</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique ipsam quas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}