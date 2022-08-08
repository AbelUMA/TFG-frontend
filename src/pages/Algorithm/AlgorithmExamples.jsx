import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axiosAPI from '../../config/axiosAPI'
import ScaleLoader from 'react-spinners/ScaleLoader'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'

function AlgorithmExamples() {
  const [loading, setLoading] = useState(false)
  const [currentLane, setCurrentLane] = useState(1)
  const [currentExample, setCurrentExample] = useState(0)
  const [examples, setExamples] = useState([{}])

  useEffect(() => {
    const getAlgorithmExample = async () => {
      try {
        setLoading(true)
        const url = '/algorithm-example'
        const { data } = await axiosAPI(url)
        setExamples(data)
        setLoading(false)
        addDataCode()
      } catch (error) {
        console.log(error)
      }
    }

    getAlgorithmExample()
  }, [])

  const addDataCode = () => {
    const codeElements = document.querySelectorAll('.code')

    codeElements.forEach((element, key) => {
      element.setAttribute('data-code', key + 1)
    })
  }

  const countCodeClass = () => {
    const codeClass = document.getElementsByClassName('code')

    return codeClass.length
  }

  const downLane = () => {
    const countCodeElements = countCodeClass()
    const codeClass = document.getElementsByClassName('code')
    const downButton = document.getElementById('down-button')
    const upButton = document.getElementById('up-button')

    if (currentLane === countCodeElements) {
      downButton.classList.add('opacity-50')
      downButton.classList.add('pointer-events-none')
    } else {
      const oldCodeLane = codeClass[currentLane - 1]
      oldCodeLane.setAttribute('style', '')

      setCurrentLane(currentLane + 1)

      const currentCodeLane = document.querySelector(
        '[data-code="' + (currentLane + 1) + '"]'
      )

      console.log(currentCodeLane)

      currentCodeLane.style.background = '#2986cc'
      currentCodeLane.style.borderRadius = '0.5rem'

      if (currentLane === countCodeElements - 1) {
        const downButton = document.getElementById('down-button')
        downButton.classList.add('opacity-50')
        downButton.classList.add('pointer-events-none')
      }

      if (currentLane + 1 > 1) {
        upButton.classList.remove('opacity-50')
        upButton.classList.remove('pointer-events-none')
      }
    }

    switch (currentExample) {
      case 0:
        switch (currentLane) {
          case 1:
            const number = document.getElementById('number-0')
            number.innerHTML = 1
            break
          case 2:
            const result = document.getElementById('result-0')

            result.innerHTML = 5
            const output = document.getElementById('output-0')

            downButton.classList.add('opacity-50')
            downButton.classList.add('pointer-events-none')
            output.innerHTML = 5
            break
          default:
            break
        }
        break
      case 1:
        switch (currentLane) {
          case 1:
            const number = document.getElementById('number-1')
            number.innerHTML = 3
            break
          case 2:
            const downButton = document.getElementById('down-button')
            downButton.classList.add('opacity-50')
            downButton.classList.add('pointer-events-none')
            const output = document.getElementById('output-1')
            output.innerHTML = true
            break
          default:
            break
        }
        break

      default:
        break
    }
  }

  const upLane = () => {
    const codeClass = document.getElementsByClassName('code')
    const upButton = document.getElementById('up-button')
    const downButton = document.getElementById('down-button')

    if (currentLane === 1) {
      upButton.classList.add('opacity-50')
      upButton.classList.add('pointer-events-none')
    } else {
      const oldCodeLane = codeClass[currentLane - 1]
      oldCodeLane.setAttribute('style', '')

      setCurrentLane(currentLane - 1)

      const currentCodeLane = document.querySelector(
        '[data-code="' + (currentLane - 1) + '"]'
      )
      currentCodeLane.style.background = '#2986cc'
      currentCodeLane.style.borderRadius = '0.5rem'

      if (currentLane - 1 === 1) {
        upButton.classList.add('opacity-50')
        upButton.classList.add('pointer-events-none')
      }

      if (currentLane - 1 > 1) {
        downButton.classList.remove('opacity-50')
        downButton.classList.remove('pointer-events-none')
      }
    }

    switch (currentExample) {
      case 0:
        switch (currentLane) {
          case 2:
            const number = document.getElementById('number-0')
            number.innerHTML = ''
            const result = document.getElementById('result-0')
            result.innerHTML = ''
            break
          case 3:
            const output = document.getElementById('output-0')
            output.innerHTML = ''
            break
          default:
            break
        }
        break
      case 1:
        switch (currentLane) {
          case 2:
            const number = document.getElementById('number-1')
            number.innerHTML = ''
            break
          case 3:
            const output = document.getElementById('output-1')
            output.innerHTML = ''
            break
          default:
            break
        }
        break

      default:
        break
    }
  }

  const nextExample = () => {
    setCurrentLane(1)
    const upButton = document.getElementById('up-button')
    const downButton = document.getElementById('down-button')

    upButton.classList.remove('opacity-50')
    upButton.classList.remove('pointer-events-none')
    downButton.classList.remove('opacity-50')
    downButton.classList.remove('pointer-events-none')
    if (currentExample + 1 <= 5) {
      const customDebugger = document.getElementsByClassName('debugger')
      customDebugger.innerHTML = setCurrentExample(currentExample + 1)
      setTimeout(() => {
        const startElement = document.getElementsByClassName('start')

        startElement[0].style.background = '#2986cc'
        startElement[0].style.borderRadius = '0.5rem'
        addDataCode()
      }, 200)
    }
  }

  setTimeout(() => {
    if (currentLane <= 1) {
      const startElement = document.getElementsByClassName('start')

      startElement[0].style.background = '#2986cc'
      startElement[0].style.borderRadius = '0.5rem'
    }
  }, 200)

  return loading ? (
    <ScaleLoader className="mt-5 flex justify-center text-center" />
  ) : (
    <div className="container mx-auto select-none overflow-hidden">
      <div className="mt-5 h-screen flex items-stretch select-none">
        <div className="relative h-4/5 lg:w-1/2 border-2 border-black rounded-md text-center w-full bg-gray-900 mx-2">
          <h2 className="mt-10 text-3xl font-semibold text-white">
            {examples[currentExample].title}
          </h2>
          <div
            className="mt-14 py-6 px-9 text-xl font-medium text-left text-gray-300 h-2/3"
            dangerouslySetInnerHTML={{
              __html: examples[currentExample].tableContent,
            }}></div>
          <div className="w-full border-t-2">
            <div className="grid grid-cols-3 gap-1 place-items-center mt-7">
              <motion.button
                id="down-button"
                whileTap={{ scale: 0.9 }}
                className="text-5xl">
                <BsArrowDownCircle
                  onClick={() => downLane()}
                  className="text-white rounded-full"></BsArrowDownCircle>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => nextExample()}
                className="text-4xl text-white border-white border-2 rounded-full py-2 px-4 flex justify-center items-center">
                <p>Next</p>
              </motion.button>
              <motion.button
                id="up-button"
                whileTap={{ scale: 0.9 }}
                className="text-5xl pointer-events-none opacity-50">
                <BsArrowUpCircle
                  onClick={() => upLane()}
                  className="text-white rounded-full"
                />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden h-1/3 lg:w-1/2 border-2 border-black rounded-md text-center justify-center items-center mx-2">
          <div className="py-6 px-9 text-2xl font-medium">PROGRAMA</div>
          <div
            dangerouslySetInnerHTML={{
              __html: examples[currentExample].debuggerContent,
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmExamples
