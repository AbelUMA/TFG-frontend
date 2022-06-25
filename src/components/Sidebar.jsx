import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { VscChromeClose } from 'react-icons/vsc'
import { BsList } from 'react-icons/bs'

function Sidebar() {
  const location = useLocation()

  const currentURL = location.pathname

  const [isOpen, setIsOpen] = useState(true)

  return isOpen ? (
    <>
      <nav className="md:w-1/6 bg-[#979797]">
        <div className="before:bg-[#979797] text-2xl before:absolute p-4">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <VscChromeClose />
          </button>
        </div>
        <h2 className="text-4xl font-black text-center text-white uppercase">
          Menu
        </h2>
        <div className="mt-10 text-center">
          <Link
            className={`${
              currentURL === '/drag-and-drop' ? 'text-gray-700' : 'text-white'
            } font-bold text-2xl block mt-2 hover:text-gray-700`}
            to="/drag-and-drop">
            Arrastrar y Soltar
          </Link>
          <Link
            className={`${
              currentURL === '/info' ? 'text-gray-700' : 'text-white'
            } font-bold text-2xl block mt-2 hover:text-gray-700`}
            to="/info">
            Información
          </Link>
        </div>
      </nav>
    </>
  ) : (
    <>
      <div>
        <div className="text-2xl before:absolute p-4">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <BsList />
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
