import { React, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { bake_cookie, read_cookie } from 'sfcookies'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { sidebarMenu } from '../data/menu'

function Sidebar() {
  const cookieMenu = 'isMenuOpen'
  const cookieSubmenu = 'isSubmenuOpen'

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  }

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

  const [menuOpen, setMenuOpen] = useState(
    read_cookie(cookieMenu) ? read_cookie(cookieMenu) : false
  )
  const [submenuOpen, setSubmenuOpen] = useState(
    read_cookie(cookieSubmenu) ? read_cookie(cookieSubmenu) : false
  )

  const handleMenu = (menu) => {
    setMenuOpen(menu)
    bake_cookie(cookieMenu, menu)
  }

  const handleSubmenu = (submenu) => {
    setSubmenuOpen(submenu)
    bake_cookie(cookieSubmenu, submenu)
  }

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            className="flex flex-col w-72 bg-[#3F0E40] mt-32 mb-32 m-auto px-2 py-4 overflow-y-auto  rounded-tr-full rounded-br-full z-0"
            initial={{ width: 0 }}
            animate={{
              width: 288,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}>
            <h2 className="text-3xl font-semibold text-white p-6 mt-8">Menu</h2>
            <motion.div
              className="flex flex-col justify-between mt-4"
              variants={sideVariants}
              initial="closed"
              animate="open"
              exit="closed">
              <aside>
                <ul>
                  {sidebarMenu.map((menu) => {
                    if (menu.submenu.length === 0) {
                      return (
                        <motion.li variants={itemVariants} key={menu.id}>
                          <Link
                            className={`${
                              currentURL === menu.url ? 'bg-[#1264A3]' : ''
                            } flex items-center px-4 w-full py-2 mt-5 text-white rounded-md `}
                            to={menu.url}>
                            <div className="text-2xl">{menu.icon}</div>
                            <span className="mx-4 font-medium">
                              {menu.title}
                            </span>
                          </Link>
                        </motion.li>
                      )
                    } else {
                      return (
                        <>
                          <motion.li variants={itemVariants} key={menu.id}>
                            <Link
                              className={`${
                                currentURL === menu.url ? 'bg-[#1264A3]' : ''
                              } flex items-center w-full px-4 py-2 mt-5 text-white rounded-md `}
                              to={menu.url}
                              onClick={() => handleSubmenu(!submenuOpen)}>
                              <div className="text-2xl">{menu.icon}</div>
                              <span className="mx-4 font-medium">
                                {menu.title}
                              </span>
                              {submenuOpen ? (
                                <BsChevronUp className="ml-16" />
                              ) : (
                                <BsChevronDown className="ml-16" />
                              )}
                            </Link>
                          </motion.li>
                          {submenuOpen && (
                            <motion.ul
                              className="list-disc"
                              variants={showSubMenu}
                              initial="exit"
                              animate={submenuOpen ? 'enter' : 'exit'}>
                              {menu.submenu.map((submenu) => (
                                <li
                                  className="ml-16 mt-5 text-white"
                                  key={submenu.id}>
                                  <Link
                                    key={submenu.id}
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
            </motion.div>
          </motion.div>
        </>
      )}
      <div className="relative">
        <div className="absolute z-10 top-0 right-0 bottom-0 mt-[26rem] -mr-8">
          <div
            className="font-bold text-white rounded-tr-full rounded-br-full bg-[#3F0E40] flex text-4xl items-center justify-end h-20 hover:cursor-pointer"
            onClick={() => handleMenu(!menuOpen)}>
            {menuOpen ? <AiOutlineLeft /> : <AiOutlineRight />}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )

  /*   return menuOpen ? (
    <>
      <AnimatePresence>
        <motion.div
          className="flex flex-col w-72 bg-[#3F0E40] mt-32 mb-32 px-2 py-4 overflow-y-auto m-auto rounded-tr-full rounded-br-full z-0"
          initial={{ width: 0 }}
          animate={{
            width: 288,
          }}
          exit={{
            width: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}>
          <h2 className="text-3xl font-semibold text-white p-6 mt-8">Menu</h2>
          <motion.div
            className="flex flex-col justify-between mt-16"
            variants={sideVariants}
            initial="closed"
            animate="open"
            exit="closed">
            <aside>
              <ul>
                {sidebarMenu.map((menu) => {
                  if (menu.submenu.length === 0) {
                    return (
                      <motion.li variants={itemVariants} key={menu.id}>
                        <Link
                          className={`${
                            currentURL === menu.url ? 'bg-[#1264A3]' : ''
                          } flex items-center px-4 w-full py-2 mt-5 text-white rounded-md `}
                          to={menu.url}>
                          <div className="text-2xl">{menu.icon}</div>
                          <span className="mx-4 font-medium">{menu.title}</span>
                        </Link>
                      </motion.li>
                    )
                  } else {
                    return (
                      <>
                        <motion.li variants={itemVariants} key={menu.id}>
                          <Link
                            className={`${
                              currentURL === menu.url ? 'bg-[#1264A3]' : ''
                            } flex items-center w-full px-4 py-2 mt-5 text-white rounded-md `}
                            to={menu.url}
                            onClick={() => handleSubmenu(!submenuOpen)}>
                            <div className="text-2xl">{menu.icon}</div>
                            <span className="mx-4 font-medium">
                              {menu.title}
                            </span>
                            {submenuOpen ? (
                              <BsChevronUp className="ml-16" />
                            ) : (
                              <BsChevronDown className="ml-16" />
                            )}
                          </Link>
                        </motion.li>
                        {submenuOpen && (
                          <motion.ul
                            className="list-disc"
                            variants={showSubMenu}
                            initial="exit"
                            animate={submenuOpen ? 'enter' : 'exit'}>
                            {menu.submenu.map((submenu) => (
                              <li
                                key={menu.id}
                                className="ml-16 mt-5 text-white">
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
          </motion.div>
        </motion.div>
        <div className="relative">
          <div className="absolute z-10 top-0 right-0 bottom-0 mt-96 -mr-8">
            <div
              className="font-bold text-white rounded-tr-full rounded-br-full bg-[#3F0E40] flex text-4xl items-center justify-end h-20 hover:cursor-pointer"
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
              <AiOutlineLeft />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  ) : (
    <AnimatePresence>
      <motion.div className="relative">
        <div className="absolute z-10 top-0 right-0 bottom-0 mt-96 -mr-8">
          <div
            className="font-bold text-white rounded-tr-full rounded-br-full bg-[#3F0E40] flex text-4xl items-center justify-end h-20 hover:cursor-pointer"
            onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
            <AiOutlineRight />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) */
}

export default Sidebar
