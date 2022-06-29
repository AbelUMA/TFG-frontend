import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { BsList } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import { BsChevronUp } from 'react-icons/bs'
import { CgGames } from 'react-icons/cg'

function Sidebar() {
  const showSubMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: 'block',
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  const showMenu = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const location = useLocation()

  const currentURL = location.pathname

  const [isOpen, setIsOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false)

  return isOpen ? (
    <>
      <div className="flex flex-col w-72 h-screen bg-[#3F0E40] px-4 py-2 overflow-y-auto border-r">
        <div className="before:bg-[#979797] text-2xl -mx-4 -my-2 before:absolute p-4">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <VscChromeClose className="text-white" />
          </button>
        </div>
        <h2 className="text-3xl font-semibold text-center text-white">Menu</h2>

        <div className="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <Link
                  className={`${
                    currentURL === '/home' ? 'bg-[#1264A3]' : ''
                  } flex items-center px-4 py-2 text-white rounded-md `}
                  to="/home">
                  <AiOutlineHome className="text-2xl" />
                  <span className="mx-4 font-medium">Home</span>
                </Link>
              </li>

              <li>
                <Link
                  className={`${
                    currentURL === '/drag-and-drop' ? 'bg-[#1264A3]' : ''
                  } flex items-center px-4 py-2 mt-5 text-white rounded-md`}
                  to="#"
                  onClick={() => setSubmenuOpen(!submenuOpen)}>
                  <CgGames className="text-2xl" />
                  <span className="mx-4 font-medium">Juegos</span>
                  {submenuOpen ? (
                    <BsChevronUp className="ml-16" />
                  ) : (
                    <BsChevronDown className="ml-16" />
                  )}
                </Link>
              </li>
              {submenuOpen && (
                <motion.ul
                  className="list-disc"
                  variants={showSubMenu}
                  initial="exit"
                  animate={submenuOpen ? 'enter' : 'exit'}>
                  <li className="ml-16 mt-5 text-white">
                    <Link
                      to="/drag-and-drop"
                      className={`${
                        currentURL === '/drag-and-drop' ? 'bg-[#1264A3]' : ''
                      } rounded-md px-1 py-1`}>
                      <span
                        className={`${
                          currentURL === '/drag-and-drop' ? 'bg-[#1264A3]' : ''
                        } rounded-md py-1 font-medium text-sm`}>
                        Arrastrar y soltar
                      </span>
                    </Link>
                  </li>
                  <li className="ml-16 mt-5 text-white">
                    <Link
                      to="/drag-and-drop"
                      className={`${
                        currentURL === '/juego-2' ? 'bg-[#1264A3]' : ''
                      } rounded-md px-1 py-1`}>
                      <span
                        className={`${
                          currentURL === '/drag-and-drop' ? 'bg-[#1264A3]' : ''
                        } rounded-md py-1 font-medium text-sm`}>
                        Juego 2
                      </span>
                    </Link>
                  </li>
                  <li className="ml-16 mt-5 text-white">
                    <Link
                      to="/drag-and-drop"
                      className={`${
                        currentURL === '/juego-3' ? 'bg-[#1264A3]' : ''
                      } rounded-md px-1 py-1`}>
                      <span
                        className={`${
                          currentURL === '/drag-and-drop' ? 'bg-[#1264A3]' : ''
                        } rounded-md py-1 font-medium text-sm`}>
                        Juego 3
                      </span>
                    </Link>
                  </li>
                </motion.ul>
              )}
            </ul>
          </aside>
        </div>
      </div>
    </>
  ) : (
    <div className="text-2xl before:absolute p-4">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <BsList />
      </button>
    </div>
  )
}

export default Sidebar
