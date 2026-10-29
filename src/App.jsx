import React from 'react'
import { configDotenv } from 'dotenv'
import Header from './components/header.jsx'
import Hero from './components/hero.jsx'
import Gallery from './components/gallery.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
    </div>
  )
}

export default App
