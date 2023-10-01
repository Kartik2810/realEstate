import React from 'react';
import "./Compani.css"
import equinix from "../../images/equinix.png";
import prologis from "../../images/prologis.png";
import tower from "../../images/tower.png";
import realty from "../../images/realty.png";

function Compani() {
  return (
    <div id="companies">
    <section className='c-wrapper'>
      <div className='paddings innerWidth flexCenter c-container'>
        <img src={equinix} alt="" width={200}/>
        <img src={prologis} alt="" width={200}/>
        <img src={tower} alt="" width={200}/>
        <img src={realty} alt="" width={200}/>
      </div>
    </section>
    </div>
  )
}

export default Compani