/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsChevronUp } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
import { BsList } from 'react-icons/bs'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { sidebarMenu } from '../data/menu'
import { useEffect } from 'react'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

function SidebarPresentation() {
  const cookieSubmenu = 'isSubmenuOpen'

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

  const location = useLocation()

  const currentURL = '/' + location.pathname.split('/')[1]

  const [isOpen, setIsOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(
    read_cookie(cookieSubmenu) ? read_cookie(cookieSubmenu) : false
  )

  const handleSubmenu = (submenu) => {
    setSubmenuOpen(submenu)
    bake_cookie(cookieSubmenu, submenu)
  }

  return isOpen ? (
    <>
      <div className="flex flex-col w-72 bg-[#3F0E40] px-2 py-4 overflow-y-auto">
        <h2 className="text-3xl font-semibold text-white p-6 mt-40">Menu</h2>

        <div className="flex flex-col justify-between mt-16">
          <aside>
            <ul>
              {sidebarMenu.map((menu) => {
                if (menu.submenu.length === 0) {
                  return (
                    <li key={menu.id}>
                      <Link
                        className={`${
                          currentURL === menu.url ? 'bg-[#1264A3]' : ''
                        } flex items-center px-4 w-full py-2 mt-5 text-white rounded-md `}
                        to={menu.url}>
                        <div className="text-2xl">{menu.icon}</div>
                        <span className="mx-4 font-medium">{menu.title}</span>
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <>
                      <li key={menu.id}>
                        <Link
                          className={`${
                            currentURL === menu.url ? 'bg-[#1264A3]' : ''
                          } flex items-center w-full px-4 py-2 mt-5 text-white rounded-md `}
                          to={menu.url}
                          onClick={() => handleSubmenu(!submenuOpen)}>
                          <div className="text-2xl">{menu.icon}</div>
                          <span className="mx-4 font-medium">{menu.title}</span>
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
                          {menu.submenu.map((submenu) => (
                            <li key={menu.id} className="ml-16 mt-5 text-white">
                              <Link
                                to={submenu.url}
                                className={`${
                                  currentURL === submenu.url
                                    ? 'bg-[#1264A3]'
                                    : ''
                                } rounded-md px-1 py-1`}>
                                <span
                                  className={
                                    'rounded-md py-1 font-medium text-sm'
                                  }>
                                  {submenu.title}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </>
                  )
                }
              })}
            </ul>
          </aside>
        </div>
      </div>
    </>
  ) : (
    <div className="text-2xl before:absolute p-4 bg-[#3F0E40] text-white">
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <BsList />
      </button>
    </div>
  )
}

export default SidebarPresentation
