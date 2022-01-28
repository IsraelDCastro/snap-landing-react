import React from 'react';
import Typist from 'react-text-typist';

export default function SectionOne () {

  return (
    <section className="section-1">
      <div className="glass">
        <div className="text-center info">
          <h3 className="mb-2 text-shadow start" data-start="fadeIn">
            <Typist sentences={['ようこそ', 'Welcome']} loop={false} showCursor={false} typingSpeed={150} startDelay={400} />
          </h3>
          <h5 className="mb-2 text-shadow start" data-start="fadeIn">
            <Typist sentences={['美しい国へ', 'To a beautiful country']} loop={false} showCursor={false} typingSpeed={160} startDelay={450} />
          </h5>
          <h1 className="text-7xl text-shadow start" data-start="fadeIn">Japan</h1>
        </div>
        <div className="more-info">
          <h4 className="mb-4 text-center text-shadow start" data-start="fadeIn">What to expect?</h4>
          <div className="flex justify-between">
            <div className="expect start delay-2" data-start="fadeInUp">
              <h6 className="mb-2 font-semibold">Beautiful fauna</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique ipsam quas.</p>
            </div>
            <div className="mx-5 expect start delay-3" data-start="fadeInUp">
              <h6 className="mb-2 font-semibold">Amazing places</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique ipsam quas.</p>
            </div>
            <div className="expect start delay-4" data-start="fadeInUp">
              <h6 className="mb-2 font-semibold">An unique gastronomy</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta similique ipsam quas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}