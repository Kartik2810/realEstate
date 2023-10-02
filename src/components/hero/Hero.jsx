import React from 'react';
import "./Hero.css";
import r1 from  "../../images/r1.png";
import CountUp from 'react-countup';

function Hero() {
  return (
    <div id="hero">
    <section className='hero-wrapper'>
        <div className='paddings  flexCenter hero-container'>
        <p className='orange-circul'></p>
            <div className='hero-left'> 
                <h2>Discover<br/> <span id='most'>Most</span> Suitable Property</h2>
                <p>find a variety of properties that suit you very easilty forget all difficulties in finding a residence for you</p>
                <input type="text" placeholder='Search Location ...' name="" id="" />
                <button className='button'>search</button>

                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={8800} end={9000} duration={5}/>
                            <span className='plus'>+</span>
                        </span>
                        <span>Premium Products</span>
                        
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={1930} end={2000} duration={5}/>
                            <span className='plus'>+</span>
                        </span>
                        <span>Happy Customers</span>
                        
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp  end={20} />
                            <span className='plus'>+</span>
                        </span>
                        <span>Award Winnings</span>
                        
                    </div>
                </div>
                
            </div>
            <div className='hero-right'>
                <div className='image-container'>
                    <img src={r1}  alt="" srcset="" width={400} height={450}/>
                </div>
                
            </div>

        </div>
    </section>
    
    </div>
  )
}

export default Hero