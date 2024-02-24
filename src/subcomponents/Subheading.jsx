import { motion } from 'framer-motion'
import React from 'react'

function Subheading({ name }) {
  return (
    <div>
      <motion.div
        className='w-screen h-full bg-purple-900 md:w-64 mr-10 justify-center whitespace-nowrap items-center md:flex text-white text-xl'
        key={name} // This line was moved from the destructuring to the motion.div
      >
        <h1 className='p-4 md:p-0 text-4xl md:text-6xl font-bold md:rotate-90 uppercase tracking-tight'>{name}</h1>
      </motion.div>
    </div>
  )
}

export default Subheading
