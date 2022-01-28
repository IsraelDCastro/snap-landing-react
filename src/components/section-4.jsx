import React from 'react';

export default function CTA () {
  return (
    <section className="section-4">
      <div className="fadeIn" data-start>
        <h4 className="mb-8">Receive new post every week with information, places, and receipts about Japan.</h4>
        <div className="field mb-6">
          <input type="text" className="input" placeholder="example@example.com" />
        </div>
        <a href="#!" className="btn px-10 bg-orange-500 hover:bg-orange-600">Subscribe!</a>
      </div>
    </section>
  )
}