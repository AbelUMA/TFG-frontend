import React from 'react'
import { DropTarget } from 'react-drag-drop-container'

function Exercise1() {
  const handleDropHit = (e) => {}

  return (
    <>
      <div className="flex flex-row">
        <DropTarget dropData="VAR" onHit={handleDropHit}>
          <div className="text-lg font-bold justify-center items-center text-center inline-block box-content h-8 w-28 p-4 border-4 rounded-md border-dashed"></div>
        </DropTarget>
        <div className="indent-8 mt-4">
          <span className="text-[#bd3939]">count</span> = 1;
        </div>
      </div>
      <div className="flex flex-row mt-20">
        <DropTarget dropData="FUNCTION" onHit={handleDropHit}>
          <div className="text-lg font-bold  justify-center items-center text-center inline-block box-content h-8 w-28 p-4 border-4 rounded-md border-dashed"></div>
        </DropTarget>
        <div className="indent-8 mt-4">
          <span className="text-[#197eca]">addCount</span>(count) &#123;
        </div>
      </div>
      <div className="mt-10">
        <div className="indent-8 mt-4">count = count + 1;</div>
        <div className="mt-5">&#125;</div>
      </div>
      <div className="flex flex-row mt-20">
        <DropTarget dropData="RETURN" onHit={handleDropHit}>
          <div className="text-lg font-bold  justify-center items-center text-center  inline-block box-content h-8 w-28 p-4 border-4 rounded-md border-dashed"></div>
        </DropTarget>
        <div className="indent-8 mt-4">count;</div>
      </div>
    </>
  )
}

export default Exercise1
