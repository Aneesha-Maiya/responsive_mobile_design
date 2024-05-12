import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from '../components/Header'
import Main from '../components/Main'
import Carousal from '../components/Carousal'
import AboutUs from '../components/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <Carousal/>
      <div className='About_Us' id='About-Us'>
          <AboutUs/>
      </div>
    </>
  )
}

export default App
