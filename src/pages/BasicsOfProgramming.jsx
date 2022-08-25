import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axiosAPI from '../config/axiosAPI'
import { BsArrowRight } from 'react-icons/bs'
import Loading from '../components/Loading'

function BasicsOfProgramming() {
  const [loading, setLoading] = useState(false)
  const [basics, setBasics] = useState([{}])
  const [content, setContent] = useState({})
  const [isContentExtra, setIsContentExtra] = useState(false)
  const [isFirst, setIsFirst] = useState(true)

  const handleContent = (newContent, id) => {
    var basic = document.getElementById('content-' + id)
    basic.innerHTML = `<img id="img-${id}" class='rounded-lg border-4 border-black' src=${newContent}></img>`

    setIsContentExtra(!isContentExtra)
  }

  const handleCloseExample = (id) => {
    var basic = document.getElementById('content-' + id)
    basic.innerHTML = content.text
    setIsContentExtra(!isContentExtra)
  }

  const handleSetBasic = (elem) => {
    setContent(elem)
    setIsContentExtra(false)
    if (isFirst) setIsFirst(false)
  }

  useEffect(() => {
    const getBasicsOfProgramming = async () => {
      try {
        setLoading(true)
        const url = '/basics-of-programming'
        const { data } = await axiosAPI(url)
        setBasics(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getBasicsOfProgramming()
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div className="mt-5 flex items-stretch  ">
      <div className="md:w-1/2 lg:w-1/2 mx-5">
        <h2 className="font-black text-3xl text-center">
          Conceptos básicos sobre la programación
        </h2>
        <p className="text-lg mt-5 text-center mb-10">
          Pulsa sobre una{' '}
          <span className="text-principiaBlue font-bold">Pestaña</span> para
          elegir un {''}
          <span className="text-principiaBlue font-bold">Tema</span>
        </p>
        <div className="container mt-16 mx-auto flex-col justify-center items-center w-2/3">
          {basics.map((elem) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSetBasic(elem)}
              key={elem.id}
              className={`mb-10 flex flex-wrap break-all rounded-lg border-2 px-8 text-xl py-2 ${
                elem.title === content.title ? 'text-principiaBlue' : ''
              } font-semibold cursor-pointer`}>
              <span className="w-11/12">{elem.title}</span>
              <p className="w-1/12 flex items-center justify-end">
                <BsArrowRight />
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/2">
        <h2 className="font-black text-3xl text-center">
          Te contamos un poco sobre...
        </h2>
        <p className="text-lg mt-5 text-center mb-10 font-bold text-principiaBlue">
          {content.title}
        </p>
        <div
          id={'content-' + content.id}
          className="container mt-16 mx-auto font-semibold text-xl flex-col text-center justify-center items-center w-2/3 leading-10"
          dangerouslySetInnerHTML={{ __html: content.text }}></div>
        {isFirst ? (
          ''
        ) : content.extra && !isContentExtra ? (
          <div
            id="example"
            className="flex-col text-center justify-center items-center mt-8 text-3xl font-bold text-principiaBlue underline ">
            <motion.span
              className="cursor-pointer"
              whileTap={{ scale: 0.9 }}
              onClick={() => handleContent(content.extra, content.id)}>
              Ver ejemplo
            </motion.span>
          </div>
        ) : (
          <div
            id="example"
            className="flex-col text-center justify-center items-center mt-8 text-3xl font-bold text-principiaBlue underline ">
            <motion.span
              className="cursor-pointer"
              whileTap={{ scale: 0.9 }}
              onClick={() => handleCloseExample(content.id)}>
              Cerrar
            </motion.span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BasicsOfProgramming
