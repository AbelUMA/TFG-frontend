/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-new-func */
import { React, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { BsGearFill } from 'react-icons/bs'

function Programming() {
  const [input, setInput] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleInput = (event) => {
    setInput(event.target.value)
    if (event.target.value === 'print') {
    }
  }

  const handleClear = () => {
    const output = document.getElementById('output')
    output.innerHTML = ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let result =
      `
    (function () {
      var logger = document.getElementById('output');
      log = function () {
        for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] == 'object') {
              logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
          } else {
              logger.innerHTML += ` +
      '`${arguments[i]}\n`' +
      `
          }
        }
      }
  })();
  `
    const output = document.getElementById('output')

    if (
      input.match(/alert\(|document\.|innerHTML|window\.|eval\(|Function\(/)
    ) {
      output.innerHTML += 'ERROR \n'
    } else {
      result += input.replaceAll('print', 'log')

      try {
        const func = new Function(result)
        func()
      } catch (e) {
        output.innerHTML += 'ERROR \n'
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-3xl text-center w-2/3 mx-auto mb-10">
        Playground Para Programar
      </h1>
      <div className="container mx-auto overflow-hidden flex flex-row">
        <div className="mt-1 flex flex-col h-screen w-4/6">
          <div className="flex text-2xl w-[150px] font-bold py-2 rounded mb-2 mt-20 items-center text-center">
            Código 💻
          </div>

          <CodeEditor
            className="rounded-md resize-none text-gray- h-2/5 py-4 px-4 text-md bg-gray-200 font-medium border-2 border-black"
            required
            language="js"
            value={input}
            style={{
              fontSize: 15,
              backgroundColor: '#1f2937',
              fontFamily:
                'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
            onChange={(e) => handleInput(e)}></CodeEditor>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="flex bg-red-500 hover:opacity-90 text-white w-[100px] font-bold py-2 px-4 rounded mb-2 mt-4 items-center">
              <BsGearFill />
              <span className="ml-4">Run</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <motion.button
              onClick={() => setIsOpenModal(true)}
              whileTap={{ scale: 0.9 }}
              className="bg-principiaOrange hover:opacity-90 py-4 px-6 w-1/41 border-2 border-black flex items-center justify-center mt-20 font-bold text-3xl rounded-md">
              Manual 📚
            </motion.button>
          </div>
        </div>
        <div className="mt-20 flex flex-col h-screen w-1/4 ml-28">
          <div className="flex flex-row justify-between">
            <div className="w-2/3 text-2xl font-bold py-2 rounded mb-2 text-left">
              Salida 💯
            </div>
            <button
              onClick={() => handleClear()}
              className="bg-blue-500 hover:opacity-90 w-1/4 text-white font-bold py-2 px-4 rounded mb-2 text-center">
              Limpiar
            </button>
          </div>
          <textarea
            readOnly
            id="output"
            className="resize-none h-[69.7%] w-full border-2 border-black rounded-md bg-gray-200 px-4 py-2 caret-transparent font-semibold"></textarea>
        </div>
      </div>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} type="programming" />
      )}
    </>
  )
}

export default Programming
