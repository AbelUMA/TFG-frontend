import React from 'react'
import { Outlet } from 'react-router-dom'

import SidebarPresentation from '../components/SidebarPresentation'

function LayoutPresentation() {
  return (
    <>
      <div className="md:flex md:min-h-screen">
        <SidebarPresentation />
        <div className="md:w-full p-10 md:h-screen overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutPresentation
