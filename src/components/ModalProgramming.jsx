import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { VscChromeClose } from 'react-icons/vsc'
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi'

function ModalProgramming({ setIsOpenModal }) {
  const [pag, setPag] = useState(1)

  const handlePagRight = () => {
    if (pag + 1 <= 4) {
      setPag(pag + 1)
    }
  }

  const handlePagLeft = () => {
    if (pag - 1 >= 1) {
      setPag(pag - 1)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex">
      <div className="bg-white p-4 rounded w-full relative mx-80 my-40">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="left-0 top-0 text-2xl"
          onClick={() => setIsOpenModal(false)}>
          <VscChromeClose />
        </motion.button>
        <div className="text-center justify-center items-center">
          <h1 className="font-black text-3xl text-gray-700 pb-20">
            💻 Manual de Programación 📚
          </h1>
          <ul className="list-disc text-left pl-10 text-2xl">
            {
              {
                1: (
                  <>
                    <li className="mb-3">
                      Puedes crear variables y guardar datos dentro ➡{' '}
                      <span className="text-principiaPurple font-bold">
                        var
                      </span>{' '}
                      <span className="text-red-600 font-bold">edad = 22;</span>
                    </li>
                    <li className="mb-3">
                      Esas{' '}
                      <span className="text-principiaPurple font-bold">
                        variables
                      </span>{' '}
                      se pueden usar tanto en funciones, como en demas
                      estructuras.
                    </li>
                    <li className="mb-3">
                      Puedes ver su contenido escribiendo ➡{' '}
                      <span className="text-principiaBlue font-bold">
                        print(
                      </span>
                      <span className="text-red-600 font-bold">edad</span>
                      <span className="text-principiaBlue font-bold">)</span>
                      <span className="font-bold">;</span>
                    </li>
                    <li className="mb-3">
                      Haz uso de esas{' '}
                      <span className="text-principiaPurple font-bold">
                        variables
                      </span>{' '}
                      y realiza operaciones aritméticas ➡
                      <span className="text-principiaPurple font-bold">
                        var
                      </span>
                      <span className="text-red-600 font-bold"> edad = </span>(
                      <span className="text-red-600 font-bold">22</span>+ 1) *
                      3;
                    </li>
                  </>
                ),
                2: (
                  <>
                    <li className="mb-3">
                      Tienes la opción de crear estructuras de control como los{' '}
                      <span className="text-principiaPurple font-bold">
                        if-else
                      </span>
                      , tal que:
                    </li>
                    <div className="font-bold flex items-center justify-center pt-5">
                      <div>
                        <span className="text-principiaPurple ">if (</span>
                        <span className="text-red-600 ">edad</span>
                        {' < 3'}
                        <span className="text-principiaPurple ">)</span>
                        {' {'}
                        <br />
                        <div className="indent-8">
                          <span className="text-red-600 ">edad</span> =
                          <span className="text-red-600 "> edad</span> + 1;
                        </div>
                        <span className="text-principiaPurple ">else</span>{' '}
                        {'{'}
                        <div className="indent-8">
                          <span className="text-red-600 ">edad</span> = 3;
                        </div>
                        {'}'}
                        <br />
                        <div className="mt-2">
                          <span className="text-principiaBlue ">print(</span>
                          <span className="text-red-600 ">edad</span>
                          <span className="text-principiaBlue ">)</span>;
                        </div>
                      </div>
                    </div>
                  </>
                ),
                3: (
                  <>
                    <li className="mb-3">
                      Para crear{' '}
                      <span className="text-principiaBlue font-bold">
                        funciones
                      </span>{' '}
                      es tan sencillo como:
                    </li>
                    <div className="font-bold flex items-center justify-center pt-5">
                      <div>
                        <span className="text-principiaBlue ">function </span>{' '}
                        add{' '}
                        <span className="text-principiaBlue ">
                          (<span className="text-red-600 ">num1, num2</span>
                        </span>
                        <span className="text-principiaBlue ">)</span>
                        {' {'}
                        <br />
                        <div className="indent-8">
                          <span className="text-principiaPurple ">var</span>
                          <span className="text-red-600 "> result</span> = 0;
                        </div>
                        <div className="indent-8">
                          <span className="text-red-600 "> result</span> =
                          <span className="text-red-600"> num1 </span>+
                          <span className="text-red-600"> num2</span>;
                        </div>
                        <br />
                        <div className="indent-8">
                          <span className="text-principiaPurple "> return</span>{' '}
                          <span className="text-red-600"> result</span>;
                        </div>
                        {'{'}
                        <div className="mt-2">
                          <span className="text-principiaBlue ">add(</span>
                          <span className="text-red-600 ">1, 3</span>
                          <span className="text-principiaBlue ">)</span>;
                        </div>
                      </div>
                    </div>
                  </>
                ),
                4: (
                  <>
                    <li className="mb-3">
                      Incluso puedes probar construyendo{' '}
                      <span className="text-principiaBlue font-bold">
                        bucles
                      </span>
                      , de la siguiente forma:
                    </li>
                    <div className="font-bold flex items-center justify-center pt-5">
                      <div>
                        <span className="text-principiaPurple ">var</span>
                        <span className="text-red-600 "> edad</span> = 1;
                        <br />
                        <span className="text-principiaBlue ">while (</span>
                        <span className="text-red-600 ">edad</span>
                        {' < 5'}
                        <span className="text-principiaBlue ">)</span>
                        {' {'}
                        <br />
                        <div className="indent-8">
                          <span className="text-red-600 ">edad</span> =
                          <span className="text-red-600 "> edad</span> + 1;
                        </div>
                        {'{'}
                        <br />
                        <br />
                        <div className="mt-2">
                          <span className="text-principiaBlue ">print(</span>
                          <span className="text-red-600 ">edad</span>
                          <span className="text-principiaBlue ">)</span>;
                        </div>
                      </div>
                    </div>
                  </>
                ),
              }[pag]
            }
          </ul>
        </div>
        <footer
          className={`flex justify-between ${
            pag === 1
              ? 'mt-52'
              : pag === 2
              ? 'mt-[6.75rem]'
              : pag === 3
              ? 'mt-[4.75rem]'
              : 'mt-[6.75rem]'
          }`}>
          <button
            onClick={() => handlePagLeft()}
            className={`ml-14 ${
              pag === 1 ? 'opacity-50 pointer-events-none' : ''
            } text-4xl`}>
            <HiOutlineArrowNarrowLeft />
          </button>
          <span className="font-bold">{pag}</span>
          <button
            onClick={() => handlePagRight()}
            className={`mr-14 ${
              pag === 4 ? 'opacity-50 pointer-events-none' : ''
            } text-4xl`}>
            <HiOutlineArrowNarrowRight />
          </button>
        </footer>
      </div>
    </div>
  )
}

export default ModalProgramming
