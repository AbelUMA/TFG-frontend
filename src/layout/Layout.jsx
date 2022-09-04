import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

function Layout({ presentation }) {
  return !presentation ? (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="w-full m-auto p-10 h-screen overflow-hidden">
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="flex">
      <div className="w-full p-10 h-screen overflow-y-auto ">
        <Outlet />
      </div>
    </div>
  )
}

Layout.defaultProps = {
  presentation: false,
}

export default Layout
