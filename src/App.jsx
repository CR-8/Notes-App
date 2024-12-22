import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <div className="fixed top-0 left-0 w-full h-full z-[3]"></div>
      <Foreground />
    </div>

  )
}

export default App
