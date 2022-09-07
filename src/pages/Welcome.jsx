import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Welcome() {
  return (
    <>
      <motion.div
        transition={{
          duration: 2,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-black text-5xl container mx-auto mt-20 text-center">
        Portal interactivo sobre la{' '}
        <span className="text-lime-500">programación</span>
      </motion.div>
      <motion.div
        transition={{
          duration: 2,
        }}
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
        className="mx-auto text-center mt-40">
        <Link
          className="transform mt-5 w-full border-2 border-[#2d70ac] bg-white rounded-md p-4 uppercase font-bold text-lg cursor-pointer transition duration-200 hover:bg-[#2d70ac]"
          to="/home">
          Let's play
        </Link>
      </motion.div>
    </>
  )
}

export default Welcome
