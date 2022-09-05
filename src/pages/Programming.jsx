import React from 'react'
import { BsGearFill } from 'react-icons/bs'
import { AiOutlineEnter } from 'react-icons/ai'

function Programming() {
  return (
    <>
      <h1 className="font-black text-3xl text-center w-2/3 mx-auto mb-10">
        Playground Para Programar
      </h1>
      <div className="container mx-auto overflow-hidden flex flex-row">
        <div className="mt-10 flex flex-col h-screen w-4/6">
          <div className="bg-blue-500 w-1/6 text-white font-bold py-2 px-4 rounded mb-2 text-center">
            Código
          </div>
          <textarea className="h-2/5 py-6 px-9 text-md bg-gray-200 font-medium border-2 border-black"></textarea>
          <div className="flex flex-row">
            <div className="flex justify-between bg-blue-500 text-white text-center w-1/6 font-bold py-2 px-4 rounded mb-2 mt-20 items-center mr-10">
              <span>Entrada</span>
              <div className="text-2xl">
                <AiOutlineEnter />
              </div>
            </div>
            <button className="flex bg-red-500 hover:opacity-90 text-white w-[100px] font-bold py-2 px-4 rounded mb-2 mt-20 items-center">
              <BsGearFill />
              <span className="ml-4">Run</span>
            </button>
          </div>

          <input className="resize-y inline h-1/5 bg-gray-200 font-medium border-2 border-black px-4 pb-28"></input>
        </div>
        <div className="mt-20 flex flex-col h-screen w-1/4 ml-28 py-2">
          <div className="bg-blue-500 w-1/2 text-white font-bold py-2 px-4 rounded mb-2 text-center">
            Salida
          </div>
          <div className="h-[69.7%] w-full border-2 border-black rounded-md bg-gray-200 px-4 py-2"></div>
        </div>
      </div>
    </>
  )
}

export default Programming
