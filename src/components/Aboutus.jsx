import { Icon } from '@iconify/react'
import React from 'react'
import { myProfile } from '../data'

function Aboutus() {
  return (
    <div className="p-10 md:h-screen w-screen bg-purple-300 md:p-4 md:bg-white items-center justify-between flex-col md:flex-row md:inline-flex md:ml-10">
        <h1 className='md:text-9xl top-1/5 md:ml-10 text-5xl md:w-1/2'>
            <b>About Me</b>
            <p className={`md:ml-4 lf:text-base text-xs`}
            >
            I'm a versatile designer and developer with a passion for crafting engaging digital experiences.<br/>
            Whether you're seeking to elevate your brand presence, launch an online store, or simply revamp your digital identity, I'm here to lend my expertise.<br/>
            My toolkit includes proficiency in Figma for sleek designs, CSS for seamless styling, and React with JSX for dynamic web applications, Flutter for app development.<br/>
            What sets me apart is my commitment to full project management, guiding your project from conception to completion. Clear, regular communication is fundamental to my process, ensuring that your vision is realized effectively and efficiently.<br/>
            </p>
            <div className='flex space-x-5 m-4 text-xl leading-5 items-center'>
                <p>Connect on <br/> Social Media: </p>
                <a href="https://www.instagram.com/siddharthpalod/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ion:logo-instagram" style={{ fontSize: '1.5em' }} />
                </a>
                <a href="https://www.linkedin.com/in/siddharth-palod-70289b201/" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ion:logo-linkedin" style={{ fontSize: '1.5em' }} />
                </a>
            </div>
        </h1>
        <div className='mr-10 md:block hidden'>
            <img
                src={myProfile}
            />
        </div>

    </div>
  )
}

export default Aboutus