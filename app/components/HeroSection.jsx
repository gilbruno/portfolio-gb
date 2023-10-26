"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 text-center place-self-center sm:text-left'>
                <h1 className='mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl'> 
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-orange-700 to-yellow-200'>
                        Hello, I'm {" "}
                    </span>
                    <br/>
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Gilles',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Full stack dev',
                        2000,
                        'Web3 dev',
                        2000,
                        'trainer in IT',
                        2000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                    Full stack dev, trainer in many engineers schools
                </p>    
                <div>
                    <button className='w-full px-6 py-3 mb-3 mr-4 text-white bg-white rounded-full sm:w-fit hover:bg-slate-200 bg-gradient-to-br from-red-700 via-orange-700 to-yellow-200'>
                        Hire Me
                    </button>
                    <button className='w-full px-1 py-1 text-white bg-transparent rounded-full sm:w-fit py-w-full hover:bg-slate-800 bg-gradient-to-br from-red-700 via-orange-700 to-yellow-200'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                        Download CV
                        </span>
                        
                    </button>
                </div>
            </div>
            <div className='col-span-5 mt-4 place-self-center lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/palmera-it-no-bg.png"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={250}
                        height={250}
                    />    
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default HeroSection