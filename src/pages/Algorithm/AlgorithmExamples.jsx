import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

function AlgorithmExamples() {
  return (
    <div className="container mx-auto select-none overflow-hidden">
      <div className="mt-5 h-screen flex items-stretch select-none">
        <div className="relative h-4/5 lg:w-1/2 border-2 border-black rounded-md text-center w-full bg-gray-900 mx-2">
          <h2 className="mt-10 text-3xl font-semibold text-white">EJEMPLO 1</h2>
          <div className="mt-14 py-6 px-9 text-xl font-medium text-left text-gray-300 h-2/3">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td>
                    <span className="text-[#ac38a3]">int</span>
                    <span className="text-[#bd3939]"> number</span> ={' '}
                    <span className="number-3">3</span>;
                    <br />
                    <br />
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-[#ac38a3]">if</span>
                    <span className="text-[#55a4e1]"> &#40;</span>
                    <span className="text-[#bd3939]">number</span>
                    <span className="text-[#55a4e1]"> &#60;</span>{' '}
                    <span className="number-6">6</span>
                    <span className="text-[#55a4e1]"> &#41;</span>
                    <span className="text-[#ac38a3]"> &#123;</span>
                  </td>
                </tr>
                <tr>
                  <td className="indent-8">
                    <span className="text-[#ac38a3]">return</span>{' '}
                    <span className="text-[#d9842b]">true</span>;
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-[#ac38a3]"> &#125; else &#123;</span>
                  </td>
                </tr>
                <tr>
                  <td className="indent-8">
                    <span className="text-[#ac38a3]">return</span>{' '}
                    <span className="text-[#d9842b]">false</span>;
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="text-[#ac38a3]"> &#125;</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full border-t-2">
            <div className="grid grid-cols-3 gap-1 place-items-center mt-7">
              <motion.div whileTap={{ scale: 0.9 }} className="text-5xl">
                <BsArrowDownCircle className="text-white rounded-full"></BsArrowDownCircle>
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="text-4xl text-white border-white border-2 rounded-full py-2 px-4 flex justify-center items-center">
                <p>Next</p>
              </motion.div>
              <motion.div whileTap={{ scale: 0.9 }} className="text-5xl">
                <BsArrowUpCircle className="text-white rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden h-1/3 lg:w-1/2 border-2 border-black rounded-md text-center justify-center items-center mx-2">
          <div className="py-6 px-9 text-2xl font-medium"></div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmExamples
