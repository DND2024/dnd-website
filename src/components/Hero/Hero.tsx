import React from 'react'

function Hero() {
  return (
    <section className='hero'>
        <div className="bg-[#EFEEE0] flex flex-row w-auto h-screen border-t-2 border-black">
            <div className="hero-txt flex justify-center w-1/2 bg-amber-300">
                <p> 
                  <span className='font-mono mb-11'>An NITC Club </span><br />
                  <span className='font-bold'>DND</span><br />
                  <span>Where drama creates magic </span><br /> 
                  <span>dance burns the floor! </span>
                </p>
            </div>
            <div className="hero-img flex justify-center  mt-1 w-1/2">
                <img className='h-[85%]' src="/home-dance.webp" alt="dance" />
            </div>
        </div>
    </section>
  )
}

export default Hero