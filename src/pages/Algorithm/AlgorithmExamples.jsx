import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axiosAPI from '../../config/axiosAPI'
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs'
import Loading from '../../components/Loading'

function AlgorithmExamples() {
  const [loading, setLoading] = useState(false)
  const [currentLane, setCurrentLane] = useState(1)
  const [currentExample, setCurrentExample] = useState(0)
  const [examples, setExamples] = useState([{}])
  const [whileCont, setWhileCont] = useState(1)
  const [forCont, setForCont] = useState(1)

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
      case 2:
        switch (currentLane) {
          case 1:
            var text = document.getElementById('text-2')
            text.innerHTML = ' " " '
            break
          case 5:
            text = document.getElementById('text-2')
            text.innerHTML = 'hola'
            const output = document.getElementById('output-2')
            output.innerHTML = 'hola'
            break
          default:
            break
        }
        break
      case 3:
        switch (currentLane) {
          case 1:
            var count = document.getElementById('count-3')
            setWhileCont(1)
            count.innerHTML = whileCont
            break
          case 2:
            if (whileCont < 5) {
              setWhileCont(whileCont + 1)
              setCurrentLane(2)
            } else if (whileCont === 5) {
              setWhileCont(whileCont + 1)
              setCurrentLane(3)
            }
            count = document.getElementById('count-3')
            count.innerHTML = whileCont
            break
          case 4:
            const output = document.getElementById('output-3')
            output.innerHTML = '5'
            break
          default:
            break
        }
        break
      case 4:
        switch (currentLane) {
          case 1:
            var result = document.getElementById('result-4')
            setForCont(1)
            result.innerHTML = 0
            break
          case 2:
            var i = document.getElementById('i-4')
            i.innerHTML = 1
            if (forCont < 5) {
              setForCont(forCont + 1)
              setCurrentLane(2)
            } else if (forCont === 5) {
              setCurrentLane(3)
            }
            result = document.getElementById('result-4')
            result.innerHTML = forCont
            i = document.getElementById('i-4')
            i.innerHTML = forCont
            break
          case 4:
            const output = document.getElementById('output-4')
            output.innerHTML = forCont
            setForCont(forCont - 1)
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
      case 2:
        switch (currentLane) {
          case 2:
            var text = document.getElementById('text-2')
            text.innerHTML = ''
            break
          case 6:
            text = document.getElementById('text-2')
            text.innerHTML = ' " " '
            const output = document.getElementById('output-2')
            output.innerHTML = ''
            break
          default:
            break
        }
        break
      case 3:
        switch (currentLane) {
          case 1:
            setWhileCont(1)
            break
          case 2:
            var count = document.getElementById('count-3')
            count.innerHTML = ''
            break
          case 3:
            if (whileCont > 1) {
              setWhileCont(whileCont - 1)
              setCurrentLane(3)
            }
            break
          case 4:
            setWhileCont(whileCont - 1)
            count = document.getElementById('count-3')
            count.innerHTML = whileCont
            if (whileCont > 1) {
              setCurrentLane(4)
            }
            break
          case 5:
            const output = document.getElementById('output-3')
            output.innerHTML = ''
            setWhileCont(whileCont - 1)
            break

          default:
            break
        }
        break
      case 4:
        switch (currentLane) {
          case 1:
            setForCont(1)
            break
          case 2:
            var result = document.getElementById('result-4')
            result.innerHTML = ''
            var i = document.getElementById('i-4')
            i.innerHTML = ''
            setForCont(forCont + 1)

            break
          case 3:
            if (forCont > 1) {
              setForCont(forCont - 1)
              setCurrentLane(3)
            }
            break
          case 4:
            result = document.getElementById('result-4')
            result.innerHTML = forCont
            i = document.getElementById('i-4')
            i.innerHTML = forCont
            setForCont(forCont - 1)
            if (forCont > 1) {
              setCurrentLane(4)
            }
            break
          case 5:
            const output = document.getElementById('output-4')
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

    upButton.classList.add('opacity-50')
    upButton.classList.add('pointer-events-none')
    downButton.classList.remove('opacity-50')
    downButton.classList.remove('pointer-events-none')

    const customDebugger = document.getElementsByClassName('debugger')
    setCurrentExample(currentExample + 1)
    customDebugger.innerHTML = currentExample

    setTimeout(() => {
      const startElement = document.getElementsByClassName('start')

      startElement[0].style.background = '#2986cc'
      startElement[0].style.borderRadius = '0.5rem'
      addDataCode()
    }, 200)

    if (currentExample + 1 === 4) {
      const nextButton = document.getElementById('next-button')
      nextButton.classList.add('opacity-50')
      nextButton.classList.add('pointer-events-none')
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
    <Loading />
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
                id="next-button"
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
        <div className="lg:w-1/2 ">
          <div className="h-1/3 border-2 border-black rounded-md text-center justify-center items-center mx-2">
            <div className="py-6 px-9 text-2xl font-medium">PROGRAMA</div>
            <div
              dangerouslySetInnerHTML={{
                __html: examples[currentExample].debuggerContent,
              }}></div>
          </div>
          <div
            className="h-2/5 text-justify justify-center items-center mx-2 mt-16 bg-gray-400 p-4 border-2 border-black rounded-md"
            dangerouslySetInnerHTML={{
              __html: examples[currentExample].extraContent,
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmExamples
