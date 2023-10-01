import React from 'react';
import "./Residencies.css"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import r1 from "../../images/r1.png";
import r2 from "../../images/r2.png";
import r3 from "../../images/r3.png"



function Residencies() {
  return (
    <div id="residencies">
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
            <span className='r-title'>Best Chocies</span>
            <span className='r-title2'>Popular Residencies</span>
        </div>
      <Swiper
        
        spaceBetween={1}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flexColStart all-card">
            <img src={r1} width={250}/>
              <div className="card">
                <p className='price'>$ 35,853</p>
                <h2>Citralan Puri Serang</h2>
                <p>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
          </div>
            
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={r2} width={250}/>
            <div className="card">
              <p className='price'>$ 47,043</p>
              <h2>Aliva Priva Jardin</h2>
              <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={r3} width={250}/>
            <div className="card">
              <p className='price'>$ 66,353</p>
              <h2>Asatti Garden City</h2>
              <p>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={r2} width={250}/>
            <div className="card">
              <p className='price'>$ 35,853</p>
              <h2>Citralan Puri Serang</h2>
              <p>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flexColStart all-card">
            <img src={r1} width={250}/>
              <div className="card">
                <p className='price'>$ 35,853</p>
                <h2>Citralan Puri Serang</h2>
                <p>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
              </div>
          </div>
            
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={r2} width={250}/>
            <div className="card">
              <p className='price'>$ 47,043</p>
              <h2>Aliva Priva Jardin</h2>
              <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta</p>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={r3} width={250}/>
            <div className="card">
              <p className='price'>$ 66,353</p>
              <h2>Asatti Garden City</h2>
              <p>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <img src={r2} width={250}/>
            <div className="card">
              <p className='price'>$ 35,853</p>
              <h2>Citralan Puri Serang</h2>
              <p>Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
            </div>
        </SwiperSlide>
        ...
    </Swiper>
      </div>

    </section>
    </div>
  )
}

export default Residencies