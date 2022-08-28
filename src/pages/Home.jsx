import React from 'react'
import Tabs from '../components/Tabs'

function Home() {
  return (
    <div className="flex items-stretch mx-0 text-center">
      <div className="w-1/2 text-left">Hola</div>
      <div className="mx-auto">
        <Tabs />
      </div>
    </div>
  )
}

export default Home
