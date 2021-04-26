import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from './animation';
import React from 'react';

export default class Places extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedPlace: "Fujiyoshida",
    }
  }

  changePlace (e) {
    this.setState({
      selectedPlace: e,
    })
  }

  render () {

    let bgSelected = 
    this.state.selectedPlace === "Fujiyoshida" ? "bg-fujiyoshida" :
    this.state.selectedPlace === "Osaka" ? "bg-osaka" :
    this.state.selectedPlace === "Arashiyama" ? "bg-arashiyama-bamboo" : "";

    return (
      <>
        <section className={`section-3 ${bgSelected}`}>
            { 
              this.state.selectedPlace === "Fujiyoshida" ?
                <div className="place-information">
                  <h2 className="mb-8 text-shadow">
                    Fujiyoshida, Japan.
                    <small className="block text-base">富士吉田市</small>
                  </h2>
                  <p className="text-shadow mb-10">Fujiyoshida is a city close to Mt. Fuji. It is home to the Mt. Fuji 5th Station (the starting point for climbing the mountain) and Fuji-Q Highland. Yoshida udon noodles, which are extremely firm noodles, are a local specialty and ideal for lunch. Recently, fabric products made in this city have been popular among young women. Trail runs, hill climbs and other sports prosper here. Tournaments for these sports are also held in the area.</p>
                  <a href="#!" className="bg-orange-500 hover:bg-orange-600">Places to visit there</a>
                </div> :
              this.state.selectedPlace === "Osaka" ?
                <div className="place-information">
                  <h2 className="mb-8 text-shadow">
                    Osaka, Japan.
                    <small className="block text-base">大阪市</small>
                  </h2>
                  <p className="text-shadow mb-10">Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food. The 16th-century shogunate Osaka Castle, which has undergone several restorations, is its main historical landmark. It's surrounded by a moat and park with plum, peach and cherry-blossom trees. Sumiyoshi-taisha is among Japan’s oldest Shinto shrines.</p>
                  <a href="#!" className="bg-cyan-500 hover:bg-cyan-600">Places to visit there</a>
                </div> :
              this.state.selectedPlace === "Arashiyama" ?
                <div className="place-information">
                  <h2 className="mb-8 text-shadow">
                    Arashiyama Bamboo Grove, Japan.
                    <small className="block text-base">嵐山竹林</small>
                  </h2>
                  <p className="text-shadow mb-10">The walking paths that cut through the bamboo groves make for a nice walk or bicycle ride. The groves are particularly attractive when there is a light wind and the tall bamboo stalks sway gently back and forth. The bamboo has been used to manufacture various products, such as baskets, cups, boxes and mats at local workshops for centuries.</p>
                  <a href="#!" className="bg-green-500 hover:bg-green-600">Learn more</a>
                </div> 
              : [] 
            }
          
          <div className="places">
            <div className="place" onClick={ () => this.changePlace("Fujiyoshida")}>
              <div className={ this.state.selectedPlace === "Fujiyoshida" ? "place-img selected" : "place-img"}>
                <img src="/fujiyoshida-1.jpeg" alt=""/>
              </div>
              <div className="place-info">
                <h5>Fujiyoshida, Japan.</h5>
                <h6 className="block text-base">富士吉田市</h6>
              </div>
            </div>
            <div className="place" onClick={ () => this.changePlace("Osaka")}>
              <div className={ this.state.selectedPlace === "Osaka" ? "place-img selected" : "place-img"}>
                <img src="/osaka-1.jpeg" alt=""/>
              </div>
              <div className="place-info">
                <h5>Osaka</h5>
                <h6 className="block text-base">大阪市</h6>
              </div>
            </div>
            <div className="place" onClick={ () => this.changePlace("Arashiyama")}>
              <div className={ this.state.selectedPlace === "Arashiyama" ? "place-img selected" : "place-img"}>
                <img src="/arashiyama-bamboo-1.jpeg" alt=""/>
              </div>
              <div className="place-info">
                <h5>Arashiyama Bamboo Grove</h5>
                <h6 className="block text-base">嵐山竹林</h6>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
