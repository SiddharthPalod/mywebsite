import React from 'react'
import { Icon } from '@iconify/react'

function Contactus() {
  return (
    <div className="md:h-screen w-screen text-white bg-purple-900 items-center justify-center flex-col md:flex-row md:inline-flex md:ml-10 md:py-0 py-10">
        <h1 className='md:text-6xl text-3xl flex-col flex justify-center items-center'>
            <b>QUESTIONS? Mail Me</b>
            <a className='text-xl' href="mailto:palxgen@gmail.com?subject=Question&body=Hey Siddharth!" target="_blank" rel="noopener noreferrer">palxgen@gmail.com</a>
        </h1>
    </div>
  )
}

export default Contactus