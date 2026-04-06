import { useState, useEffect } from 'react'
import { animateHero } from './gsap'

const hero = () => {
      const [displayedText, setDisplayedText] = useState('')
      const fullText = 'Uttam verma'
      
      useEffect(() => {
        animateHero()
      }, [])

      useEffect(() => {
        let index = 0
        const typingInterval = setInterval(() => {
          if (index < fullText.length) {
            setDisplayedText(fullText.slice(0, index + 1))
            index++
          } else {
            clearInterval(typingInterval)
          }
        }, 100)
        
        return () => clearInterval(typingInterval)
      }, [])

    return (
        <div id='home' className='flex flex-col items-center justify-around bg-[url("../../public/hero.png")] bg-center bg-cover h-150 relative text-center'>
            
            <div className='flex flex-col items-center justify-around text-white m-auto z-10 space-y-6'>
                <h1 className='text-6xl text-white uppercase font-bold font-serif tracking-wider'>
                  {displayedText}
                  <span className='animate-pulse'>|</span>
                </h1>
                <p className='uppercase text-xl text-white font-normal para1-style'>capturing the essence of the world, one frame at a time</p>
                <button className='bg-white text-black px-6 py-2 rounded font-bold uppercase active:scale-98 btn1-style'><a href="#gallery">Explore Gallery</a></button>
            </div>
            <div className='w-screen h-5 bg-gradient-to-r from-red-50 via-red-700 to-red-50 relative -bottom-4 blur-xs'></div>
        </div>
    )
}

export default hero
