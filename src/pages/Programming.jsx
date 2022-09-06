/* eslint-disable no-new-func */
import { React, useState } from 'react'
import { BsGearFill } from 'react-icons/bs'
import { AiOutlineEnter } from 'react-icons/ai'

function Programming() {
  const [lineNumber, setLineNumber] = useState(0)
  const [input, setInput] = useState('')
  const [output, setOutput] = useState({})
  const [userInput, setUserInput] = useState({})

  const handleInput = (event) => {
    if (event.target.value.includes('\n')) {
      setLineNumber(lineNumber + 1)
    }

    setInput(event.target.value)
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
      var old = console.log;
      var logger = document.getElementById('output');
      console.log = function () {
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
      result += lineNumber + '. ' + input.replaceAll('print', 'console.log')

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
          <div className="flex text-2xl w-[100px] font-bold py-2 rounded mb-2 mt-20 items-center text-center">
            Código
          </div>

          <textarea
            className="rounded-md resize-none h-2/5 py-2 px-4 text-md bg-gray-200 font-medium border-2 border-black"
            required
            name="solution"
            id="source"
            value={input}
            onChange={(e) => handleInput(e)}></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="flex bg-red-500 hover:opacity-90 text-white w-[100px] font-bold py-2 px-4 rounded mb-2 mt-4 items-center">
              <BsGearFill />
              <span className="ml-4">Run</span>
            </button>
          </div>
        </div>
        <div className="mt-20 flex flex-col h-screen w-1/4 ml-28">
          <div className="flex flex-row justify-between">
            <div className="w-1/4 text-2xl font-bold py-2 px-4 rounded mb-2 text-center">
              Salida
            </div>
            <button
              onClick={() => handleClear()}
              className="bg-blue-500 w-1/4 text-white font-bold py-2 px-4 rounded mb-2 text-center">
              Limpiar
            </button>
          </div>
          <textarea
            readOnly
            id="output"
            className="resize-none h-[69.7%] w-full border-2 border-black rounded-md bg-gray-200 px-4 py-2 caret-transparent"></textarea>
        </div>
      </div>
    </>
  )
}

export default Programming
