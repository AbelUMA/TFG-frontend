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
  const [whileCount, setWhileCount] = useState(1)
  const [forCount, setForCount] = useState(1)
  const [whileControl, setWhileControl] = useState(false)
  const [forControl, setForControl] = useState(false)

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

    if (currentExample === 3) {
      if (currentLane + 1 > 1) {
        upButton.classList.remove('opacity-50')
        upButton.classList.remove('pointer-events-none')
      }
      if (currentLane === countCodeElements) {
        downButton.classList.add('opacity-50')
        downButton.classList.add('pointer-events-none')
        const oldCodeLane = document.querySelector("[data-code='4']")
        oldCodeLane.setAttribute('style', '')
        const currentCodeLane = document.querySelector("[data-code='5']")
        currentCodeLane.style.background = '#2986cc'
        currentCodeLane.style.borderRadius = '0.5rem'
        var output = document.getElementById('output-3')
        output.innerHTML = whileCount
      }

      if (currentLane < 4) {
        const oldCodeLane = document.querySelector(
          '[data-code="' + currentLane + '"]'
        )
        oldCodeLane.setAttribute('style', '')
        setCurrentLane(currentLane + 1)
        const currentCodeLane = document.querySelector(
          '[data-code="' + (currentLane + 1) + '"]'
        )
        currentCodeLane.style.background = '#2986cc'
        currentCodeLane.style.borderRadius = '0.5rem'
      }

      switch (currentLane + 1) {
        case 2:
          var countWhile = document.getElementById('count-3')
          setWhileCount(1)
          countWhile.innerHTML = whileCount
          break
        case 3:
          if (whileCount < 5) {
            setWhileCount(whileCount + 1)
            setCurrentLane(2)
            setWhileControl(false)
          } else if (whileCount === 5) {
            setCurrentLane(3)
          }
          countWhile = document.getElementById('count-3')
          countWhile.innerHTML = whileCount
          break
        case 5:
          if (whileCount < 5) {
            setWhileCount(whileCount + 1)
            setCurrentLane(4)
            setWhileControl(false)
          } else {
            const oldCodeLane = document.querySelector("[data-code='3']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='4']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            setCurrentLane(5)
          }
          countWhile = document.getElementById('count-3')
          countWhile.innerHTML = whileCount
          break
        default:
          break
      }
    } else if (currentExample === 4) {
      if (currentLane + 1 > 1) {
        upButton.classList.remove('opacity-50')
        upButton.classList.remove('pointer-events-none')
      }
      if (currentLane === countCodeElements) {
        downButton.classList.add('opacity-50')
        downButton.classList.add('pointer-events-none')
        const oldCodeLane = document.querySelector("[data-code='4']")
        oldCodeLane.setAttribute('style', '')
        const currentCodeLane = document.querySelector("[data-code='5']")
        currentCodeLane.style.background = '#2986cc'
        currentCodeLane.style.borderRadius = '0.5rem'
        output = document.getElementById('output-4')
        output.innerHTML = forCount
      }

      if (currentLane < 4) {
        const oldCodeLane = document.querySelector(
          '[data-code="' + currentLane + '"]'
        )
        oldCodeLane.setAttribute('style', '')
        setCurrentLane(currentLane + 1)
        const currentCodeLane = document.querySelector(
          '[data-code="' + (currentLane + 1) + '"]'
        )
        currentCodeLane.style.background = '#2986cc'
        currentCodeLane.style.borderRadius = '0.5rem'
      }

      switch (currentLane + 1) {
        case 2:
          var countFor = document.getElementById('result-4')
          setForCount(1)
          countFor.innerHTML = forCount
          break
        case 3:
          if (forCount < 5) {
            setForCount(forCount + 1)
            setCurrentLane(2)
            setForControl(false)
          } else if (forCount === 5) {
            setCurrentLane(3)
          }
          countFor = document.getElementById('result-4')
          countFor.innerHTML = forCount
          var iFor = document.getElementById('i-4')
          iFor.innerHTML = forCount
          break
        case 5:
          if (forCount < 5) {
            setForCount(forCount + 1)
            setCurrentLane(4)
            setForControl(false)
          } else {
            const oldCodeLane = document.querySelector("[data-code='3']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='4']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            setCurrentLane(5)
          }
          countFor = document.getElementById('result-4')
          countFor.innerHTML = forCount
          break
        default:
          break
      }
    } else {
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
      default:
        break
    }
  }

  const upLane = () => {
    const codeClass = document.getElementsByClassName('code')
    const upButton = document.getElementById('up-button')
    const downButton = document.getElementById('down-button')

    if (currentExample === 3) {
      if (whileControl) {
        upButton.classList.add('opacity-50')
        upButton.classList.add('pointer-events-none')
        downButton.classList.remove('opacity-50')
        downButton.classList.remove('pointer-events-none')
        setCurrentLane(1)
      }

      downButton.classList.remove('opacity-50')
      downButton.classList.remove('pointer-events-none')

      if (currentLane > 2) {
        const oldCodeLane = document.querySelector(
          '[data-code="' + currentLane + '"]'
        )
        oldCodeLane.setAttribute('style', '')
        setCurrentLane(currentLane - 1)
        const currentCodeLane = document.querySelector(
          '[data-code="' + (currentLane - 1) + '"]'
        )
        currentCodeLane.style.background = '#2986cc'
        currentCodeLane.style.borderRadius = '0.5rem'
      }

      switch (currentLane) {
        case 2:
          var count = document.getElementById('count-3')
          count = document.getElementById('count-3')
          if (whileControl) {
            setCurrentLane(currentLane - 1)
            const oldCodeLane = document.querySelector("[data-code='2']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='1']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            count.innerHTML = ''
          } else if (whileCount > 1) {
            setWhileCount(whileCount - 1)
            count.innerHTML = whileCount - 1
            setCurrentLane(2)
          } else if (whileCount === 1) {
            const oldCodeLane = document.querySelector("[data-code='3']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='2']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            setWhileControl(true)
          }
          break
        case 3:
          if (whileCount > 1) {
            const oldCodeLane = document.querySelector("[data-code='2']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='3']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            setCurrentLane(4)
          } else if (whileCount === 1) {
            setCurrentLane(2)
          }
          break
        case 4:
          if (whileCount > 1) {
            setWhileCount(whileCount - 1)
            setCurrentLane(4)
          } else if (whileCount === 1) {
            setCurrentLane(3)
          }
          count = document.getElementById('count-3')
          count.innerHTML = whileCount
          break
        case 5:
          var outputWhile = document.getElementById('output-3')
          outputWhile.innerHTML = ''
          break
        default:
          break
      }
    } else if (currentExample === 4) {
      if (forControl) {
        upButton.classList.add('opacity-50')
        upButton.classList.add('pointer-events-none')
        downButton.classList.remove('opacity-50')
        downButton.classList.remove('pointer-events-none')
        setCurrentLane(1)
      }

      downButton.classList.remove('opacity-50')
      downButton.classList.remove('pointer-events-none')

      if (currentLane > 2) {
        const oldCodeLane = document.querySelector(
          '[data-code="' + currentLane + '"]'
        )
        oldCodeLane.setAttribute('style', '')
        setCurrentLane(currentLane - 1)
        const currentCodeLane = document.querySelector(
          '[data-code="' + (currentLane - 1) + '"]'
        )
        currentCodeLane.style.background = '#2986cc'
        currentCodeLane.style.borderRadius = '0.5rem'
      }

      switch (currentLane) {
        case 2:
          var result = document.getElementById('result-4')
          var iFor = document.getElementById('i-4')
          if (forControl) {
            setCurrentLane(currentLane - 1)
            const oldCodeLane = document.querySelector("[data-code='2']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='1']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            result.innerHTML = ''
            iFor.innerHTML = ''
          } else if (forCount > 1) {
            setForCount(forCount - 1)
            result.innerHTML = forCount - 1
            iFor.innerHTML = forCount - 1
            setCurrentLane(2)
          } else if (forCount === 1) {
            const oldCodeLane = document.querySelector("[data-code='3']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='2']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            setForControl(true)
          }
          break
        case 3:
          if (forCount > 1) {
            const oldCodeLane = document.querySelector("[data-code='2']")
            oldCodeLane.setAttribute('style', '')
            const currentCodeLane = document.querySelector("[data-code='3']")
            currentCodeLane.style.background = '#2986cc'
            currentCodeLane.style.borderRadius = '0.5rem'
            setCurrentLane(4)
          } else if (forCount === 1) {
            setCurrentLane(2)
          }
          result = document.getElementById('result-4')
          result.innerHTML = forCount
          iFor = document.getElementById('i-4')
          iFor.innerHTML = forCount
          break
        case 4:
          if (forCount > 1) {
            setForCount(forCount - 1)
            setCurrentLane(4)
          } else if (forCount === 1) {
            setCurrentLane(3)
          }
          result = document.getElementById('result-4')
          result.innerHTML = forCount
          iFor = document.getElementById('i-4')
          iFor.innerHTML = forCount
          break
        case 5:
          var outputFor = document.getElementById('output-4')
          outputFor.innerHTML = ''
          break
        default:
          break
      }
    } else {
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
    <div className="container mx-auto   overflow-hidden">
      <div className="mt-5 h-screen flex items-stretch  ">
        <div className="relative h-4/5  w-1/2 border-2 border-black rounded-md text-center w-full bg-gray-900 mx-2">
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
        <div className=" w-1/2 ">
          <div className="h-1/3 border-2 border-black rounded-md text-center justify-center items-center mx-2">
            <div className="py-6 px-9 text-2xl font-medium">PROGRAMA</div>
            <div
              dangerouslySetInnerHTML={{
                __html: examples[currentExample].debuggerContent,
              }}
              className="ml-5"></div>
          </div>
          <div
            className="h-2/5 text-justify justify-center items-center mx-2 mt-16 bg-gray-400 p-4 border-2 text-xl font-semibold border-black rounded-md"
            dangerouslySetInnerHTML={{
              __html: examples[currentExample].extraContent,
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default AlgorithmExamples
