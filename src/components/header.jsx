import { useState, useEffect } from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import { animateHeader } from './gsap'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useEffect(() => {
    animateHeader()
  }, [])
  
  return (
    <div className='bg-gray-600'>
      <header className='bg-gray-900 text-gray-50 py-4 px-4 sm:px-8 md:px-16 flex justify-between items-center box'>
        <div>
          <h1 className='text-lg sm:text-xl md:text-2xl font-bold uppercase text-white cursor-default head-style'>
            Uttam Verma <span className='text-xl sm:text-2xl md:text-3xl font-normal text-gray-300 pl-2'>|</span> <small className='text-xs sm:text-sm font-normal text-gray-400 tracking-widest'>photographer</small>
          </h1>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <button 
          className='md:hidden flex flex-col space-y-1 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='w-6 h-0.5 bg-gray-300'></div>
          <div className='w-6 h-0.5 bg-gray-300'></div>
          <div className='w-6 h-0.5 bg-gray-300'></div>
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center space-x-8'>
          <ul className='flex justify-center space-x-6 md:space-x-8'>
            <li><a href="#home" className='uppercase text-gray-300 text-xs sm:text-sm hover:text-gray-100 transition duration-300 nav-style'>home</a></li>
            <li><a href="#gallery" className='uppercase text-gray-300 text-xs sm:text-sm hover:text-gray-100 transition duration-300 nav-style'>gallery</a></li>
            <li><a href="https://www.linkedin.com/in/uttamverma87567/" target='_blank' rel="noopener noreferrer" className='nav-style'><img src={linkedin} alt="linkedin" className='h-5 w-5 sm:h-6 sm:w-6 brightness-0 invert-80 hover:invert-100' /></a></li>
            <li><a href="https://github.com/uttamchaudhary322-prog" target='_blank' rel="noopener noreferrer" className='nav-style'><img src={github} alt="github" className='h-5 w-5 sm:h-6 sm:w-6 brightness-0 invert-80 hover:invert-100' /></a></li>
            <li><a href="https://www.instagram.com/uttamchaudhary484/" target='_blank' rel="noopener noreferrer" className='nav-style'><img src={instagram} alt="instagram" className='h-5 w-5 sm:h-6 sm:w-6 brightness-0 invert-80 hover:invert-100' /></a></li>
          </ul>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-gray-800 px-4 py-4'>
          <ul className='flex flex-col space-y-4'>
            <li><a href="#home" className='uppercase text-gray-300 text-sm hover:text-gray-100 transition duration-300 block' onClick={() => setIsMenuOpen(false)}>home</a></li>
            <li><a href="#gallery" className='uppercase text-gray-300 text-sm hover:text-gray-100 transition duration-300 block' onClick={() => setIsMenuOpen(false)}>gallery</a></li>
            <div className='flex space-x-6 pt-2'>
              <a href="https://www.linkedin.com/in/uttamverma87567/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className='h-5 w-5 brightness-0 invert-80 hover:invert-100' /></a>
              <a href="https://github.com/uttamchaudhary322-prog" target='_blank' rel="noopener noreferrer"><img src={github} alt="github" className='h-5 w-5 brightness-0 invert-80 hover:invert-100' /></a>
              <a href="https://www.instagram.com/uttamchaudhary484/" target='_blank' rel="noopener noreferrer"><img src={instagram} alt="instagram" className='h-5 w-5 brightness-0 invert-80 hover:invert-100' /></a>
            </div>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header