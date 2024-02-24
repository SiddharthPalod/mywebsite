import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ReactHtmlParser from 'react-html-parser'; // Import react-html-parser
import { Icon } from '@iconify/react';

function Intro() {
    const [subvisible, setSubvisible] = useState(false);

    const [text] = useTypewriter({
        words: ['Hi,This is<br/>Siddharth<br/>Palod'],
        loop: 1,
        onLoopDone: () => setSubvisible(true),
        cursorStyle: '|',
        typeSpeed: 50,
        deleteSpeed: 50,
        delaySpeed: 1000,
    });

    return (
        <div className="h-screen w-screen bg-white items-center inline-flex">
            <h1 className='md:text-9xl top-1/5 ml-10 text-6xl'>
            <b>{ReactHtmlParser(text)}</b> 
                <Cursor cursorBlinking={false} />
                {subvisible && (
                <motion.div className={`text-xl inline ml-8`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                >
                      Designer | Developer
                </motion.div>
                )}
            </h1>
            {subvisible && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{duration: 3}}
                  className='right-0 absolute mr-10 items-center hidden md:flex'
              >
                  <span className="mr-2">Scroll for More</span>
                  <Icon icon="mdi:arrow-right"/>
              </motion.div>
                )}
        </div>
    );
}

export default Intro;
