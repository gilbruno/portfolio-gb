import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center'>
                <h1 className='mb-4 text-4xl font-extrabold text-white'>Hello, I'm Gilles</h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl mb-6'>
                    paragraphe wdfhxfhxfdxdf  
                    wdrgxdfhxfghfghfghxfghcyhcghjvhjhk
                </p>    
                <div>
                    <button className='px-6 py-3 mr-4 text-black bg-white rounded-full hover:bg-slate-200'>
                        Hire Me
                    </button>
                    <button className='px-6 py-3 mt-3 text-white bg-transparent border border-white rounded-full hover:bg-slate-800'>
                        Download CV
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