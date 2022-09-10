/* eslint-disable array-callback-return */
import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import UmaLogo from '../media/img/presentation/UMA-logo.jpg'
import PrincipiaLogo from '../media/img/presentation/principia-logo.png'
import { sidebarMenu } from '../data/menu'

function Footer() {
  const [footerMenu] = useState(sidebarMenu)

  return (
    <footer className="p-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="https://www.uma.es/" target="_blank" rel="UMA noreferrer">
            <img src={UmaLogo} className="mr-8 h-32" alt="UMA Logo" />
          </a>
          <a
            href="https://www.principia-malaga.com/"
            target="_blank"
            rel="Principia de Málaga noreferrer">
            <img src={PrincipiaLogo} className="mr-3 h-10" alt="UMA Logo" />
          </a>
        </div>
        {footerMenu && (
          <ul className="flex flex-wrap items-center mt-auto mb-auto text-lg text-gray-900">
            {footerMenu.map((menu) => {
              if (menu.submenu.length === 0 && menu.title !== 'Conóceme') {
                return (
                  <li key={menu.id}>
                    <Link to={menu.url}>
                      <div className="hover:underline hover:cursor-pointer mr-14">
                        {menu.title}
                      </div>
                    </Link>
                  </li>
                )
              } else if (menu.title !== 'Conóceme') {
                return menu.submenu.map((submenu) => (
                  <li key={submenu.id}>
                    <Link to={submenu.url}>
                      <div className="hover:underline hover:cursor-pointer mr-14">
                        {submenu.title}
                      </div>
                    </Link>
                  </li>
                ))
              }
            })}
          </ul>
        )}
      </div>
      <hr className="border-gray-200 text-gray-900 my-8" />
      <a
        href="https://www.uma.es/"
        target="_blank"
        className="flex text-center justify-center text-gray-900 hover:underline"
        rel="UMA noreferrer">
        © 2022 Universidad de Málaga™
      </a>
    </footer>
  )
}

export default Footer
