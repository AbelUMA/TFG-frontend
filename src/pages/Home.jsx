import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axiosAPI from '../config/axiosAPI'
import Loading from '../components/Loading'
import Tabs from '../components/Tabs'

function Home() {
  const [openTab, setOpenTab] = useState(0)
  const [captions, setCaptions] = useState([{}])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getCaptions = async () => {
      try {
        setLoading(true)
        const url = '/captions'
        const { data } = await axiosAPI(url)
        setCaptions(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getCaptions()
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <div className="flex mx-10 mt-20 text-center">
      <div className="shadow-lg w-1/2 py-10 px-6 mr-10 my-auto text-left">
        {captions[openTab] ? (
          <>
            <div className="text-center font-bold text-2xl text-principiaBlue">
              {captions[openTab].title}
            </div>
            <motion.div
              className="mt-10 text-xl"
              key={captions[openTab].id}
              dangerouslySetInnerHTML={{
                __html: captions[openTab].text,
              }}></motion.div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div className="mx-auto">
        <Tabs openTab={openTab} setOpenTab={setOpenTab} />
      </div>
    </div>
  )
}

export default Home
