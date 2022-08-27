import React from 'react'
import { Outlet } from 'react-router-dom'

import SidebarPresentation from '../components/SidebarPresentation'

function LayoutPresentation() {
  return (
    <>
      <div className="flex">
        <SidebarPresentation />

        <div className="w-full p-10 h-screen overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutPresentation
