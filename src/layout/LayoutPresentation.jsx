import React from 'react'
import { Outlet } from 'react-router-dom'

function LayoutPresentation() {
  return (
    <>
      <div className="flex">
        <div className="w-full p-10 h-screen overflow-y-auto ">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LayoutPresentation
