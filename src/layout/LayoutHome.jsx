import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

function Layout() {
  return (
    <>
      <div className="md:flex md:min-h-screen ">
        <Sidebar />
        <div className="md:w-full md:h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
