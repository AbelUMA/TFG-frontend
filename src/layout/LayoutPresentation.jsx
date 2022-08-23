import React from 'react'
import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'

function LayoutPresentation() {
  return (
    <>
      <div className="md:flex md:min-h-screen ">
        <Sidebar />
        <div className="md:w-full p-10 md:h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutPresentation
