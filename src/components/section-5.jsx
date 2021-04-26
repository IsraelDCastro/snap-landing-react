import React from 'react';
import Typist from 'react-text-typist';

export default function Gastronomy () {
  return (
    <section className="section-5">
      <h2>
        Explore the Japan Gastronomy 
        <small></small>
      </h2>
      <div className="gastro-gallery">
        <div className="dish">
          <img src="/yakisoba.webp" alt="Yakisoba" />
          <a href="#!" className="btn">Get receipt</a>
          <figcaption>Yakisoba</figcaption>
        </div>
        <div className="dish">
          <img src="/ramen.jpeg" alt="Ramen" />
          <a href="#!" className="btn">Get receipt</a>
          <figcaption>Ramen</figcaption>
        </div>
        <div className="dish">
          <img src="/sushi.jpeg" alt="Sushi" />
          <a href="#!" className="btn">Get receipt</a>
          <figcaption>Sushi</figcaption>
        </div>
        <div className="dish">
          <img src="/takoyaki.jpeg" alt="Takoyaki" />
          <a href="#!" className="btn">Get receipt</a>
          <figcaption>Takoyaki</figcaption>
        </div>
        <div className="dish">
          <img src="/udon-soba.jpeg" alt="Udon and Soba" />
          <a href="#!" className="btn">Get receipt</a>
          <figcaption>Udon and Soba</figcaption>
        </div>
        <div className="dish">
          <img src="/mochi.jpeg" alt="Mochi" />
          <a href="#!" className="btn">Get receipt</a>
          <figcaption>Mochi</figcaption>
        </div>
      </div>
    </section>
  )
}