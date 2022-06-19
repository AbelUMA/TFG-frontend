import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

function Layout() {
  return (
    <>
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <div className="md:w-5/6 p-10 md:h-screen overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
